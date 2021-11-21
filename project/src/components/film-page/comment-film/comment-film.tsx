import {Comment} from '../../../types/comments';
import {formatDatetime, formatHumanizedDate} from '../../../utils/utils';

type CommentFilmProps = {
  comment: Comment
}

function CommentFilm({comment}: CommentFilmProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment.comment}</p>
        <footer className="review__details">
          <cite className="review__author">{comment.user.name}</cite>
          <time className="review__date" dateTime={formatDatetime(comment.date)}>{formatHumanizedDate(comment.date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{comment.rating}</div>
    </div>
  );
}

export default CommentFilm;
