import React, {memo} from 'react';
import RatingStars from '../rating-stars/rating-stars';
import {toast} from 'react-toastify';
import {useApi} from '../../store/api-actions';
import {Film} from '../../types/films';
import {APIRoute, AppRoute} from '../../const';
import {useDispatch} from 'react-redux';
import {redirectToRoute} from '../../store/action';
import {useParams} from 'react-router-dom';

function AddReview(): JSX.Element {
  const [comment, setComment] = React.useState('');
  const id = parseInt(useParams<{ id: string }>().id, 10);
  const dispatch = useDispatch();
  const [rating, setRating] = React.useState<number>(0);
  const api = useApi();
  const filmRedirect = APIRoute.Film.replace(':id', id.toString()) as AppRoute;

  function handleMessageChange(evt: React.ChangeEvent<HTMLTextAreaElement>) {
    setComment(evt.target.value);
  }

  const checkForm = () => {
    if (!rating) {
      return false;
    }

    return (!(comment.length > 400 || comment.length <= 50));
  };

  const onFormSubmitHandler = (evt: React.FormEvent) => {
    evt.preventDefault();

    if (!checkForm()) {
      return;
    }

    const commentData = {rating, comment};
    if (!api.post<Film[]>(APIRoute.Comments.replace(':id', id.toString()), commentData).then(() => dispatch(redirectToRoute(filmRedirect)))) {
      toast.error('Не удалось отправить комментарий!', {position: toast.POSITION.TOP_LEFT});
    }
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={onFormSubmitHandler}>
        <div className="rating">
        </div>
        <RatingStars amount={rating} onChange={setRating}/>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={handleMessageChange} value={comment}/>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={!checkForm()}>Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default memo(AddReview);
