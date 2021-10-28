import {Comment} from '../../types/comments';
import CommentFilm from '../comment-film/comment-film';

type CommentsFilmList = {
  comments: Comment[]
}

function CommentsFilmList({comments}: CommentsFilmList): JSX.Element {
  const firstColumn = comments.slice(0, Math.ceil(comments.length / 2));
  const secondolumn = comments.slice(-Math.ceil(comments.length / 2));

  return (
    <>
      <div className="film-card__reviews-col">
        {firstColumn.map((comment) => (
          <CommentFilm key={comment.id} comment={comment}/>
        ))}
      </div>
      <div className="film-card__reviews-col">
        {secondolumn.map((comment) => (
          <CommentFilm key={comment.id} comment={comment}/>
        ))}
      </div>
    </>
  );
}

export default CommentsFilmList;
