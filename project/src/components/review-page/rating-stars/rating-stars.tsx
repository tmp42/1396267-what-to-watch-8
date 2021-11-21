import React from 'react';
import ReviewStar from '../review-star/review-star';
import {MAX_RATING} from '../../../const';

type RatingStarProps={
  amount: number
  onChange: (value: number) => void
}

function RatingStars({amount, onChange}: RatingStarProps): JSX.Element {
  return (
    <div className="rating__stars">
      {Array(MAX_RATING).fill(null).map((_, i) => <ReviewStar amount={amount} onChange={onChange} star={10 - i} key={Math.random()}/>)}
    </div>
  );
}

export default RatingStars;
