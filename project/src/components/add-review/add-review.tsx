import React from 'react';
import RatingStars from '../rating-stars/rating-stars';

function AddReview(): JSX.Element {
  const [comment, setComment] = React.useState('');
  const [starsAmount, setStarsAmount] = React.useState<number>(0);

  function handleMessageChange(evt: React.ChangeEvent<HTMLTextAreaElement>) {
    setComment(evt.target.value);
  }

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
        </div>
        <RatingStars amount={starsAmount} onChange={setStarsAmount}/>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={handleMessageChange} value={comment}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReview;
