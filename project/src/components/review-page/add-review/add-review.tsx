import React, {memo, useState} from 'react';
import RatingStars from '../rating-stars/rating-stars';
import {toast} from 'react-toastify';
import {useApi} from '../../../store/api-actions';
import {Film} from '../../../types/films';
import {APIRoute, AppRoute} from '../../../const';
import {useDispatch} from 'react-redux';
import {redirectToRoute} from '../../../store/action';
import {useParams} from 'react-router-dom';

function AddReview(): JSX.Element {
  const [comment, setComment] = useState('');
  const [isFormDisabled, setFormDisabled] = useState(false);
  const id = parseInt(useParams<{ id: string }>().id, 10);
  const dispatch = useDispatch();
  const [rating, setRating] = useState<number>(0);
  const api = useApi();
  const filmRedirect = APIRoute.Film.replace(':id', id.toString()) as AppRoute;

  const isFormValid = !!rating && !(comment.length > 400 || comment.length <= 50);

  function handleMessageChange(evt: React.ChangeEvent<HTMLTextAreaElement>) {
    setComment(evt.target.value);
  }

  const onFormSubmitHandler = (evt: React.FormEvent) => {
    evt.preventDefault();

    if (!isFormValid) {
      return;
    }
    setFormDisabled(true);
    api.post<Film[]>(APIRoute.Comments.replace(':id', id.toString()), {rating, comment})
      .then(() => dispatch(redirectToRoute(filmRedirect)))
      .catch(() => {
        toast.error('Не удалось отправить комментарий!', {position: toast.POSITION.TOP_LEFT});
        setFormDisabled(false);
      });
  };
  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={onFormSubmitHandler}>
        <div className="rating">
        </div>
        <RatingStars amount={rating} onChange={setRating}/>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={handleMessageChange} value={comment} disabled={isFormDisabled}/>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={!isFormValid}>Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default memo(AddReview);
