import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Play from './components/Play';
import Profile from './components/Profile';
import Error from './components/Error';
import About from './components/About';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/play' element={<Play />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/error' element={<Error />} />
          <Route path='/about' element={<About />}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;