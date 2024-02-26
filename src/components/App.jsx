import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/HomePage'));
const CreateComment = lazy(() => import('../pages/CreateComment'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/comments/create" element={<CreateComment />} />
    </Routes>
  );
};
