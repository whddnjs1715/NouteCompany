import Main from './pages/Main';
import DetailPage from './routes/DetailPage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="*" element={<div>없는페이지입니다</div>} />
      </Routes>
    </>
  );
};

export default App;
