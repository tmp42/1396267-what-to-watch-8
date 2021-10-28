import {Comment} from '../../types/comments';

type CommentsFilmProps={
  comments: Comment
}
function CommentsFilm({comments}:CommentsFilmProps):JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comments.comment}</p>
        <footer className="review__details">
          <cite className="review__author">{comments.user.name}</cite>
          <time className="review__date" dateTime={comments.date}>{comments.date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{comments.rating}</div>
    </div>
  );
}

export default CommentsFilm;
