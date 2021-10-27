import React from 'react';
import ReviewStar from '../review-star/review-star';

type RatingStarProps={
  amount: number
  onChange: (value: number) => void
}

function RatingStars({amount, onChange}: RatingStarProps): JSX.Element {
  return (
    <div className="rating__stars">
      {Array(10).fill(null).map((_, i) => <ReviewStar amount={amount} onChange={onChange} star={10 - i} key={Math.random()}/>)}
    </div>
  );
}

export default RatingStars;
