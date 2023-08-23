import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx';
import MorningPage from './Pages/MorningPage.jsx';
import './App.css';
import FeedbackForm from './components/FeedbackForm.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/MorningPage' element={<MorningPage />} />
          <Route exact path='/FeedbackForm' element={<FeedbackForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
