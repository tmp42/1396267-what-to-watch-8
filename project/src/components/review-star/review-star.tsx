import React from 'react';

type ReviewStarProps = {
  star: number
  amount: number
  onChange: (value: number) => void
}

function ReviewStar({star,amount,onChange}: ReviewStarProps): JSX.Element {

  const handleChangeRating = () => onChange(star);

  return (
    <>
      <input className="rating__input" id={`star-${star}`} type="radio" name="rating" value={star} checked={amount === star} onChange={handleChangeRating}/>
      <label className="rating__label" htmlFor={`star-${star}`}>Rating {star}</label>
    </>
  );
}

export default ReviewStar;
