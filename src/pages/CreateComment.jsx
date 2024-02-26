import { Spiner } from 'components/Spiner';
import { Link, Navigate } from 'react-router-dom';
import { useCreateCommentMutation } from 'redux/services/comments';

const CreateComment = () => {
  const [createComment, { isLoading: isCreating, isSuccess }] =
    useCreateCommentMutation();

  const handleCreateComment = e => {
    e.preventDefault();
    createComment(e.currentTarget.elements.comment.value);
    e.currentTarget.reset();
  };

  return (
    <>
      {isSuccess && <Navigate to="/" />}
      <h1>Create comment</h1>
      <Link to="/">Back</Link>
      <form autoComplete="off" onSubmit={handleCreateComment}>
        <input type="text" name="comment" />
        <button type="Submit">
          {isCreating && <Spiner loading={isCreating} size={8} />}Create
        </button>
      </form>
    </>
  );
};

export default CreateComment;
