import * as React from 'react';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MuiListItem from './MuiListItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import AppsIcon from '@mui/icons-material/Apps';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import HomeIcon from '@mui/icons-material/Home';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LogoutIcon from '@mui/icons-material/Logout';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PersonPinRoundedIcon from '@mui/icons-material/PersonPinRounded';

import { useRouter } from 'next/router';
import Cookie from 'js-cookie'
// import { CheckRoute } from 'utils/router';
import { Backdrop, CircularProgress } from '@mui/material';
import LoadingScreen from './LoadingScreen';
const drawerWidth = 210;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  pageName?: string;
  auth: any
  Child: any
  window?: () => Window;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function getIns(firstName: any, lastName: any) {
  if (firstName && lastName) {
    let fIn = firstName.toString().charAt(0)
    let lIn = lastName.toString().charAt(0)
    return `${fIn}${lIn}`.toUpperCase()
  } else {
    return '..loading'
  }
}

export default function SideBar(props: Props) {
  let router = useRouter()
  let [data, setData] = React.useState(Object);
  React.useEffect(() => {
    if (props.auth == undefined) {
      router.push('/auth/login', undefined, { shallow: true })
    } else {
      setData(JSON.parse(props.auth))
      setLoading(false)
    }
  }, [props, router])

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(true)
  const [loading, setLoading] = React.useState(true)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleDrawer = () => {
    setOpen(!open)
  }
  // router.events.on('routeChangeStart', () => setLoading(true));
  // router.events.on('routeChangeComplete', () => setLoading(false));
  // router.events.on('routeChangeError', () => setLoading(false));
  const drawer = (
    <div>
      {/* <Toolbar /> */}
      <Box
        sx={{
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          px: 3,
          py: '11px',
          borderRadius: 1
        }}
      >
        <div>
          <Typography
            color="inherit"
            variant="subtitle1"
          >
            {data.email ? data.email : 'laoding...'}
          </Typography>
          <Typography
            color="neutral.400"
            variant="body2"
          >
            {data.firstName && data.lastName ? data.firstName + ' ' + data.lastName : 'loading...'}
          </Typography>
          <Typography
            color="neutral.400"
            variant="body2"
          >
          </Typography>
        </div>
      </Box>
      <List>
        <MuiListItem text="Home" tooltip='' action={() => router.push('/app')} icon={<HomeIcon />} />
        <MuiListItem text="Warehouses" tooltip='' action={() => router.push('/app/warehouse')} icon={<WarehouseIcon />} />
        <MuiListItem text="Products" tooltip='' action={() => router.push('/app/products')} icon={<ShoppingBagIcon />} />
        <MuiListItem text="Invoices" tooltip='' action={() => router.push('/app/invoices')} icon={<ReceiptIcon />} />
        <MuiListItem text="Customers" tooltip='' action={() => router.push('/app/customers')} icon={<PersonPinRoundedIcon />} />
        <MuiListItem text="Catogories" tooltip='' action={() => router.push('/app/catogory')} icon={<AppsIcon />} />
        <MuiListItem text="Invontory" tooltip='' action={() => router.push('/app/invontory')} icon={<Inventory2Icon />} />
        <MuiListItem text="Reports" tooltip='' action={() => router.push('/app/reports')} icon={<AssessmentIcon />} />
      </List>
      <Divider />
      {/*
        we need to do
        Home(for the dashboard)
        Warehouses
        Products
        Catogories
        Invontory
        Reports
        Billing
        Account
      */}
      <List>
        <MuiListItem text="Billing" tooltip='section for managing payments' action={() => router.push('/profile/billing')} icon={<CreditCardIcon />} />
        <MuiListItem text="Account" tooltip='sections for account settings' action={() => router.push('/profile/account')} icon={<AccountCircle />} />
        <MuiListItem text="Logout" tooltip='' action={() => { Cookie.remove('authKey'); router.push('/auth/login') }} icon={<LogoutIcon />} />
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Backdrop
          sx={{ color: '#fff', background: '#000000', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color='inherit' />
        </Backdrop>
      <AppBar
        position="fixed"
        open={open}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div">
            {props.pageName}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {props.Child}
      </Box>
    </Box>
  );
}
