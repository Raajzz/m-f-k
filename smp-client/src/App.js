import react from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Play from "./components/Play";
import Profile from "./components/Profile";
import Error from "./components/Error";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;