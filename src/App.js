import logo from "./logo.svg";
import "./App.css";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";
import Register from "./Page/Register/Register";

function App() {
  const ProtectRoute = (props) => {
    if (localStorage.getItem("token")) {
      return props.children;
    }
    return <Navigate to="/login" />;
  };

  const ProtectRouteAuth = (props) => {
    if (localStorage.getItem("token")) {
      return <Navigate to="/" />;
    }
    return props.children;
  };

  return (
    <div className="App">
      {/* <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link> */}
      <Routes>
        <Route
          path="/"
          element={
            <ProtectRoute>
              <Home />
            </ProtectRoute>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectRouteAuth>
              <Login />
            </ProtectRouteAuth>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectRouteAuth>
              <Register />
            </ProtectRouteAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
