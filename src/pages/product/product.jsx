import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { FavouriteButton } from '../../components/favourite-button';
import { fetchProduct } from '../../api/products.js';

export const Product = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProduct(id);
        setProduct(data);
      } catch (error) {
        console.error('Failed to fetch product', error);
      }
    }
    loadProduct();
  },[id])
  

  if (!product) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ my: 4 }}>
      <Box
        sx={{
          display: 'flex',
          gap: 4,
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Box
          sx={{
            flexShrink: 0,
            position: 'relative',
            maxWidth: { sm: '300px' },
            width: '100%',
          }}
        >
          <img
            src={`/products/${product.image}`}
            alt={product.name}
            style={{
              width: '100%',
              maxHeight: '500px',
              objectFit: 'cover',
              borderRadius: '4px',
            }}
          />
          <FavouriteButton />
        </Box>
        <Box>
          <Typography variant="h4" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>
          <Typography variant="h5" sx={{ mb: 2 }}>
            ${Number(product.price).toFixed(2)}
          </Typography>
          <Button variant="contained">Add to cart</Button>
        </Box>
      </Box>
    </Box>
  );
};
