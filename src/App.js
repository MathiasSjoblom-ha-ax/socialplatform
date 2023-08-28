import Home from "./pages/Home";
import Login from "./pages/loginPage/Login";
import Profile from "./pages/profilePage/Profile";
import Register from "./pages/registerPage/Register";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  //<Route path="/profile/:username" element={<Profile />} />
  //<Route path="/profile" element={<Profile />} />
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/register" element={<Register />} />
      </Routes>
  </Router>
  );
}

export default App;
