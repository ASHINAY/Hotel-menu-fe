import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx';
import MorningPage from './Pages/MorningPage.jsx';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/MorningPage' element={<MorningPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
