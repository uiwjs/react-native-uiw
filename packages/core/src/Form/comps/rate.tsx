import React from 'react';
import Rating, { RatingProps } from '../../Rating';

const Rate = ({ onChange, ...others }: RatingProps & { onChange?: (value: number) => void }) => {
  return (
    <Rating
      onPress={(value) => {
        onChange?.(value);
      }}
      {...others}
    />
  );
};

export default Rate;
