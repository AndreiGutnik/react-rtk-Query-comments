import { CommentItem } from 'components/CommentItem/CommentItem';
import { Spiner } from 'components/Spiner';
import { useGetCommentsQuery } from 'redux/services/comments';

export const CommentsList = () => {
  const { data, isFetching } = useGetCommentsQuery();

  return (
    <ul>
      {data &&
        data.map(comment => <CommentItem key={comment.id} {...comment} />)}
      <Spiner loading={isFetching} size={20} />
    </ul>
  );
};
