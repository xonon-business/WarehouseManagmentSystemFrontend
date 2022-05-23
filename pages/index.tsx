import React from 'react';
import { makeStyles, Theme, createStyles } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Switch from '@mui/material/Switch';
import Header from '../components/Header';


export default function Pricing(props: any) {
  const content = {
    'badge': 'Xonon WMS',
    'header-p1': 'Warehouse Management',
    'header-p2': 'on a whole new level',
    'description': 'Xonon WMS is a way to manage customers, warehouses, and prodicts.',
    // trial
    '00_title': 'Free trial',
    '00_price': 'Free',
    '00_suffix': ' / mo',
    '00_benefit1': '1 Warehouses',
    '00_benefit2': '1 organiztions',
    '00_benefit3': 'No Free domain',
    '00_benefit4': '50 unqiue products',
    '00_primary-action': 'Select plan',
    '00_secondary-action': 'Learn more', 
    // plan 1
    '01_title': 'Small Buisness',
    '01_price': '$9.99',
    '01_suffix': ' / mo',
    '01_benefit1': '3 Warehouses',
    '01_benefit2': '2 organiztions',
    '01_benefit3': 'No Free domain',
    '01_benefit4': '200 unqiue products',
    '01_primary-action': 'Select plan',
    '01_secondary-action': 'Learn more',
    // plan 2
    '02_title': 'Meduim Buisness',
    '02_price': '$29.99',
    '02_suffix': ' / mo',
    '02_benefit1': '6 Warehouses',
    '02_benefit2': '3 organiztions',
    '02_benefit3': 'Free domain',
    '02_benefit4': '2k unqiue products',
    '02_primary-action': 'Select plan',
    '02_secondary-action': 'Learn more',
    // plan 3
    '03_title': 'Enterprise',
    '03_price': '$69.99',
    '03_suffix': ' / mo',
    '03_benefit1': 'organiztions Warehouses',
    '03_benefit2': 'unlimited organiztions',
    '03_benefit3': 'Free domain',
    '03_benefit4': '5k unqiue products',
    '03_primary-action': 'Select plan',
    '03_secondary-action': 'Learn more',
    ...props.content
  };

  const [state, setState] = React.useState({
    checkbox: true,
  });

  const handleChange = (event: { target: { checked: any; }; }) => {
    setState({ ...state, checkbox: event.target.checked });
  };

  return (
    <>
    <section>
      <Container maxWidth="lg" sx={{
        section: {
          backgroundImage: 'url("nereus-assets/img/bg/pattern1.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }
      }}>
        <Box py={8} textAlign="center">
          <Box mb={3}>
            <Container maxWidth="sm">
              <Typography variant="overline" color="textSecondary">{content['badge']}</Typography>
              <Typography variant="h3" component="h2" gutterBottom={true}>
                <Typography variant="h3" component="span" color="primary">{content['header-p1']} </Typography>
                <Typography variant="h3" component="span">{content['header-p2']}</Typography>
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{content['description']}</Typography>

            </Container>
          </Box>
          <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardHeader title={content['02_title']} sx={{
                  cardHeader: {
                    paddingTop: 3,
                  }
                }}></CardHeader>
                <CardContent>
                  <Box px={1}>
                    <Typography variant="h3" component="h2" gutterBottom={true}>
                      {content['02_price']}
                      <Typography variant="h6" color="textSecondary" component="span">{content['02_suffix']}</Typography>
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['02_benefit1']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['02_benefit2']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['02_benefit3']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p" paragraph={true}>{content['02_benefit4']}</Typography>
                  </Box>
                  <Button variant="contained" color="primary">{content['02_primary-action']}</Button>
                  <Box mt={2}>
                    <Link href="#" color="primary">{content['03_secondary-action']}</Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardHeader title={content['00_title']} sx={{
                  cardHeader: {
                    paddingTop: 3,
                  }
                }}></CardHeader>
                <CardContent>
                  <Box px={1}>
                    <Typography variant="h3" component="h2" gutterBottom={true}>
                      {content['00_price']}
                      <Typography variant="h6" color="textSecondary" component="span">{content['00_suffix']}</Typography>
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['00_benefit1']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['00_benefit2']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['00_benefit3']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p" paragraph={true}>{content['00_benefit4']}</Typography>
                  </Box>
                  <Button variant="outlined" color="primary" >{content['00_primary-action']}</Button>
                  <Box mt={2}>
                    <Link href="#" color="primary">{content['03_secondary-action']}</Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardHeader title={content['01_title']} sx={{
                  cardHeader: {
                    paddingTop: 3,
                  }
                }}></CardHeader>
                <CardContent>
                  <Box px={1}>
                    <Typography variant="h3" component="h2" gutterBottom={true}>
                      {content['01_price']}
                      <Typography variant="h6" color="textSecondary" component="span">{content['01_suffix']}</Typography>
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['01_benefit1']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['01_benefit2']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['01_benefit3']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p" paragraph={true}>{content['01_benefit4']}</Typography>
                  </Box>
                  <Button variant="outlined" color="primary" >{content['01_primary-action']}</Button>
                  <Box mt={2}>
                    <Link href="#" color="primary">{content['03_secondary-action']}</Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardHeader title={content['03_title']} sx={{
                  cardHeader: {
                    paddingTop: 3,
                  }
                }}></CardHeader>
                <CardContent>
                  <Box px={1}>
                    <Typography variant="h3" component="h2" gutterBottom={true}>
                      {content['03_price']}
                      <Typography variant="h6" color="textSecondary" component="span">{content['03_suffix']}</Typography>
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['03_benefit1']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['03_benefit2']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p">{content['03_benefit3']}</Typography>
                    <Typography color="textSecondary" variant="subtitle1" component="p" paragraph={true}>{content['03_benefit4']}</Typography>
                  </Box>
                  <Button variant="outlined" color="primary">{content['03_primary-action']}</Button>
                  <Box mt={2}>
                    <Link href="#" color="primary">{content['03_secondary-action']}</Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
    </>
  );
}