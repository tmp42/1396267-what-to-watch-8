import {Comment} from '../../types/comments';
import CommentFilm from '../comment-film/comment-film';

type CommentsFilmListProps = {
  comments: Comment[]
}

function CommentsFilmList({comments}: CommentsFilmListProps): JSX.Element {
  const firstColumn = comments.slice(0, Math.ceil(comments.length / 2));
  const secondColumn = comments.slice(-Math.ceil(comments.length / 2));

  return (
    <>
      <div className="film-card__reviews-col">
        {firstColumn.map((comment) => (
          <CommentFilm key={comment.id} comment={comment}/>
        ))}
      </div>
      {comments.length > 1 ?
        <div className="film-card__reviews-col">
          {secondColumn.map((comment) => (
            <CommentFilm key={comment.id} comment={comment}/>
          ))}
        </div>
        :
        <>
        </>}
    </>
  );
}

export default CommentsFilmList;
