import React, { useEffect, useState } from 'react';
import { Hero } from '../../components/hero';
import { ProductCard } from '../../components/product-card';
import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import { fetchCategories } from '../../api/products.js';

export const Home = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const object = {
      embedProducts: true,
      limitProducts: 4,
    }
    fetchCategories(object)
      .then((data) => {
        setCategories(data)
      })
      .catch((error) => {
        console.error(error);
      })
  }, [])


  return (
    <>
      <Hero />
      {!categories.length ? (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      ) : (
        categories.map((category) => (
          <Box key={category.id} sx={{ mt: 5 }}>
            <Typography variant="h5">{category.name}</Typography>
            <Grid container spacing={2} marginTop={1}>
              {category.products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} lg={3}>
                  <ProductCard {...product} />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))
      )}
    </>
  );
};