import React, {ChangeEvent} from 'react';

type Star = {
  star: number
}

function ReviewStar({star}: Star): JSX.Element {
  const [rating, setRating] = React.useState('');

  const handleChangeRating = (evt: ChangeEvent<HTMLInputElement>) => setRating(evt.target.value);

  return (
    <>
      <input className="rating__input" id={`star-${star}`} type="radio" name="rating" value={`${star}`} checked={rating === `${star}`} onChange={handleChangeRating}/>
      <label className="rating__label" htmlFor={`star-${star}`}>Rating {`${star}`}</label>
    </>
  );
}

export default ReviewStar;
