// material
import { Box, Grid, Container, Typography, Breadcrumbs, Link } from '@material-ui/core';
// components
import { useState } from 'react';
import Page from '../components/Page';
import { ProductForm } from '../components/ProductForm';
// ----------------------------------------------------------------------

export default function CreateProduct() {
  const [selected, setSelected] = useState([]);

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }} style={{ padding: '50 !important' }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              color="inherit"
              href="/dashboard/Products"
              onClick={handleClick}
              style={{ textDecoration: 'none', color: '#00AB55' }}
            >
              Products
            </Link>
            <Link
              color="inherit"
              href="#"
              onClick={handleClick}
              style={{ textDecoration: 'none', color: '#00AB55' }}
            >
              CreateProduct
            </Link>
          </Breadcrumbs>

          <ProductForm />
        </Box>
      </Container>
    </Page>
  );
}
