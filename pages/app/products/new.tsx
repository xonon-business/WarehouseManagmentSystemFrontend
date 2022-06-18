import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button, Input, InputLabel } from '@mui/material';

const theme = createTheme();

export default function Checkout() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography variant="h6" gutterBottom>
        Create New Product
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Input
            required
            placeholder="Product Name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            required
            placeholder="SKU"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            required
            placeholder="Product Description"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            id="address2"
            name="address2"
            placeholder="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            required
            id="city"
            name="city"
            placeholder="Product Quantity"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel>
            <Input
              id="contained-button-file"
              type="file"
              fullWidth
              placeholder='Product Image'
            />
            Upload Product Image
          </InputLabel>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            required
            id="zip"
            name="zip"
            placeholder="Product Price"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            required
            id="country"
            name="country"
            placeholder="Country"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button variant="contained" color="primary">
            Create Product
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}