import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/explore/:id" element={<ExplorePage />} />
    </Routes>
  );
}

export default App;
