import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'
import Alert from '@mui/material/Alert';
import Cookie from 'js-cookie'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from 'next/router';
// import { CheckRoute } from 'utils/router';
import LoadingScreen from 'components/LoadingScreen';

const validateEmail = (email: any, set: Function) => {
  
  let re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  let d = re.test(email.toString().toLocaleLowerCase())
  if (d) {
    set('')
    return d
  } else {
    console.log(d, ' ', email)
    set('[Error] Email is not valid')
    return false
  }
};


  const theme = createTheme();
  
  export default function SignUp() {
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [error, setError] = React.useState("")
    const [open, setOpen] = React.useState(false);
    let router = useRouter()
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (email == "" || null || undefined) {
        setError("[Error] Email field is blank")
        setOpen(false)
        return
      }
      if (!validateEmail(email, setError)) {
        return
      }
      if (password == "" || null || undefined) {
        setError("[Error] Password field is blank")
        setOpen(false)
        return
      }
      if (firstName == "" || null || undefined) {
        setError("[Error] First name field is blank")
        setOpen(false)
        return
      }
      if (email == "" || null || undefined) {
        setError("[Error] Last name field is blank")
        setOpen(false)
        return
      }
      setOpen(true)
      let res = await axios.get(`/api/auth/register?email=${email}&password=${password}&firstName=${firstName}&lastName=${lastName}`)
      let data = res.data
      if (data.error) {
        setOpen(false)
        setError(data.message)
        return
      } else {
        Cookie.set('authKey', JSON.stringify(data) , {
          expires: 7
        })
        router.push('/app')
      }
    };
    // router.events.on('routeChangeStart', () => setLoading(true));
    // router.events.on('routeChangeComplete', () => setLoading(false));
    // router.events.on('routeChangeError', () => setLoading(false));
  
    React.useEffect(() => {
      if (Cookie.get('authKey') != undefined) {
        router.push('/app')
      }
    }, [Cookie])

    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <LoadingScreen open={open} />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {error && <Alert onClose={() => setError("")} severity="error">{error}</Alert>}
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={e => setFirstName(e.target.value)}
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={e => setLastName(e.target.value)}
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={e => setEmail(e.target.value)}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={e => setPassword(e.target.value)}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/auth/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
}
