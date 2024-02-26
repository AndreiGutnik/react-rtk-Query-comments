import { CommentsList } from 'components/CommentsList/CommentsList';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <h1>Home page</h1>
      <Link to="/comments/create">Create comment</Link>
      <CommentsList />
    </>
  );
};

export default HomePage;
