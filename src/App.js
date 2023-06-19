import logo from "./logo.svg";
import "./App.css";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";
import Register from "./Page/Register/Register";
import EmailVerification from "./Page/EmailVerification/EmailVerification";
import Layout from "./Components/Layout/Layout";
import Profile from "./Page/Profile/Profile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserLogIn } from "./Features/User/userSlice";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);

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

  useEffect(() => {
    if (localStorage.getItem("token") && !userData) {
      dispatch(getUserLogIn(localStorage.getItem("token")));
    }
  }, []);

  // console.log(userData);

  return (
    <div className="App">
      <Toaster />
      {/* <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link> */}
      <Routes>
        <Route
          path="/"
          element={
            <ProtectRoute>
              <Layout>
                <Home />
              </Layout>
            </ProtectRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectRoute>
              <Layout>
                <Profile />
              </Layout>
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
        <Route
          path="/email-verification/:token"
          element={<EmailVerification />}
        />
      </Routes>
    </div>
  );
}

export default App;
