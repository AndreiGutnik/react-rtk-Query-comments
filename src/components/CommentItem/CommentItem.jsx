import { Spiner } from 'components/Spiner';
import { useDeleteCommentMutation } from 'redux/services/comments';

export const CommentItem = ({ id, comment }) => {
  const [deleteComment, { isLoading: isDeleting }] = useDeleteCommentMutation();

  const handleClick = () => {
    deleteComment(id);
  };

  return (
    <li>
      {comment}{' '}
      <button type="button" onClick={handleClick} disabled={isDeleting}>
        {isDeleting && <Spiner loading={isDeleting} size={8} />}
        Delete
      </button>
    </li>
  );
};
