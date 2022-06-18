import React, { useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: 2,
    },
    title: {
        flexGrow: 1,
    },
}));

const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    let router = useRouter()
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    <Button onClick={() => {
                        router.push('/')
                    }} color="inherit">
                        Warehouse Management System
                    </Button>
                </Typography>
                <Button color="inherit" onClick={() => {
                    router.push('/about')
                }}>About</Button>
                <Button color="inherit" onClick={() => {
                    router.push('/auth/login')
                }}>Login</Button>
                <Button color="inherit" onClick={() => {
                    router.push('/auth/signup')
                }}>Signup</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;