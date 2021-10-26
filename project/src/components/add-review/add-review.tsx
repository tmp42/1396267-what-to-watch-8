import React from 'react';
import RatingStar from '../rating-star/rating-star';

function AddReview(): JSX.Element {
  const [value, setValue] = React.useState('');

  function handleMessageChange(evt: React.ChangeEvent<HTMLTextAreaElement>) {
    setValue(evt.target.value);
  }

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
        </div>
        <RatingStar/>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={handleMessageChange} value={value}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReview;
