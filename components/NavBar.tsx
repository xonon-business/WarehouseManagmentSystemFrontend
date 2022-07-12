import React, { useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { useRouter } from 'next/router';
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";


const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: 2,
  },
  title: {
    flexGrow: 1,
  },
  alignRight: {
    "text-align": 'right',
    "float": 'right'
  }
}));

const Header = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const pages = ["Products", "Services", "About Us", "Contact Us"];
  return (
    <><Drawer
      anchor="left"
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
    >
      <List>
        {pages.map((page, index) => (
          <ListItemButton key={index}>
            <ListItemIcon>
              <ListItemText>{page}</ListItemText>
            </ListItemIcon>
          </ListItemButton>
        ))}
      </List>
    </Drawer><IconButton
      sx={{ color: "white", marginLeft: "auto" }}
      onClick={() => setOpenDrawer(!openDrawer)}
    >
        <MenuIcon color="inherit" />
      </IconButton></>
  );
}
  const Navbar = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    let router = useRouter()

    return (
      <React.Fragment>
        <AppBar sx={{ background: "#063970" }}>
          <Toolbar>
            <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} />
            {isMatch ? (
              <>
                <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                  Shoppee
                </Typography>
                <Header />
              </>
            ) : (
              <>
                <Tabs
                  sx={{ marginLeft: "auto" }}
                  indicatorColor="secondary"
                  textColor="inherit"
                  value={value}
                  onChange={(e, value) => setValue(value)}
                >
                  <Tab label="Pricing" />
                  <Tab label="Services" />
                  <Tab label="About Us" />
                  <Tab label="Contact" />
                </Tabs>
                <Button sx={{ marginLeft: "auto" }} variant="contained" onClick={() => {
                    router.push('/auth/login')
                }}>
                  Login
                </Button>
                <Button sx={{ marginLeft: "10px" }} variant="contained" onClick={() => {
                    router.push('/auth/signup')
                }}>
                  SignUp
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  };

  export default Navbar;