import './App.css';
// import Nav from './components/Nav/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import LogOut from './components/LogOut/LogOut';
import Faqs from './components/FAQs/Faqs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UrlShortener from './components/UrlShortener/UrlShortener';

const App: React.FC = () => {
  return (

    <div className='container'>
      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="#faqContainer" element={<Faqs />} />
<Route path="/login" element={<Login />} />
<Route path='/signup' element={<Signup />} />
<Route path='/logout' element={<LogOut />} />
<Route path='/urlshortener' element={<UrlShortener />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
