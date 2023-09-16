import { useContext } from "react";
import Home from "./pages/Home";
import Login from "./pages/loginPage/Login";
import Profile from "./pages/profilePage/Profile";
import Register from "./pages/registerPage/Register";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { redirect } from "react-router-dom";
import { Context } from "./context/Context";

function App() {
  //<Route path="/profile/:username" element={<Profile />} />
  //<Route path="/profile" element={<Profile />} />
  const {user} = useContext(Context);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home/> : <Register/>} />
        <Route path="/login" element={user ? redirect("/") : <Login />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/register" element={user ? redirect("/") : <Register />} />
      </Routes>
    </Router>
  );
}

export default App;
