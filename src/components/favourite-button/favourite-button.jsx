import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { IconButton, styled } from '@mui/material';

const FavoriteIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  margin: theme.spacing(0.5),
  top: 5,
  right: 5,
  color: '#fff',
  backdropFilter: 'blur(20px)',
}));

export const FavouriteButton = () => {
  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
  }

  return (
    <FavoriteIconButton onClick={toggleFavourite} size="medium">
      {isFavourite ? <StarIcon /> : <StarBorderIcon />}
    </FavoriteIconButton>
  );
};
