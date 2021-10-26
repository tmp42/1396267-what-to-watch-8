import React from 'react';
import ReviewStar from '../review-star/review-star';

function RatingStar(): JSX.Element {
  const ratingStar: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];


  return (
    <div className="rating__stars">
      {ratingStar.map((star) => (
        <ReviewStar star={star} key={star}/>
      ))}
    </div>
  );
}

export default RatingStar;
