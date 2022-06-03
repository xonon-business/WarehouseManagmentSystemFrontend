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
import Backdrop from '@mui/material/Backdrop';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Cookie from 'js-cookie'
// import bcrypt from 'bcrypt'
import axios from 'axios'
import Alert from '@mui/material/Alert';
import { useRouter } from 'next/router';
import { CircularProgress } from '@mui/material';


const validateEmail = (email: any, set: Function) => {

  let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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

export default function SignIn() {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [error, setError] = React.useState("")
  const [open, setOpen] = React.useState(false);
  const router = useRouter()
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email == "" || null || undefined) {
      setError("[Error] Email field is blank")
      setOpen(false)
      return
    }
    if (!validateEmail(email, setError)) {
      setOpen(false)
      return
    }
    if (password == "" || null || undefined) {
      setOpen(false)
      setError("[Error] Passoword field is blank")
      return
    }
    setOpen(true)
    let res = await axios.get(`/api/auth/login?email=${email}&password=${password}`)
    let data = res.data
    if (data.error) {
      setOpen(false)
      setError(data.message)
      return
    }
    else {
      Cookie.set('authKey', JSON.stringify(data), {
        expires: 7
      })
      router.push('/app')
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CircularProgress color='inherit' />
        </Backdrop>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {error && <Alert onClose={() => setError("")} severity="error">{error}</Alert>}
          <Box component="form" onSubmit={async (e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)} noValidate sx={{ mt: 1 }}>
            <TextField
              onChange={e => setEmail(e.target.value)}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={e => setPassword(e.target.value)}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/auth/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
