import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

const initialState = {
  registerErrorMessage: "",
  registerLoad: false,
  loginErrorMessage: "",
  loginLoad: false,
  userData: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setRegisterErrorMessage: (initialState, action) => {
      initialState.registerErrorMessage = action.payload;
    },
    setRegisterLoad: (initialState, action) => {
      initialState.registerLoad = action.payload;
    },
    setLoginErrorMessage: (initialState, action) => {
      initialState.loginErrorMessage = action.payload;
    },
    setLoginLoad: (initialState, action) => {
      initialState.loginLoad = action.payload;
    },
    setUserData: (initialState, action) => {
      initialState.userData = action.payload;
    },
  },
});

export const registerFetch =
  (username, email, password, confirmPassword) => async (dispatch) => {
    try {
      const result = await axios.post(`http://localhost:5999/users/register`, {
        username,
        email,
        password,
        confirmPassword,
      });
      console.log(username, email, password, confirmPassword);
      if (result.status === 201) {
        console.log(result);
        dispatch(setRegisterLoad(false));
      }
      console.log(result);
    } catch (error) {
      dispatch(setRegisterLoad(false));
      console.log(error.response.data.message);
      dispatch(setRegisterErrorMessage(error.response.data.message));
    }
  };

export const loginFetch = (usernameOrEmail, password) => async (dispatch) => {
  try {
    const result = await axios.post(`http://localhost:5999/users/login`, {
      usernameOrEmail,
      password,
    });
    dispatch(setLoginLoad(false));
    localStorage.setItem("token", result.data.token);
    console.log(result);
    setTimeout(() => {
      dispatch(getUserLogIn(result.data.token));
    }, 1000);
  } catch (error) {
    console.log(error.response.data.message);
    dispatch(setLoginLoad(false));
    dispatch(setLoginErrorMessage(error.response.data.message));
  }
};

export const getUserLogIn = (token) => async (dispatch) => {
  try {
    const result = await axios.get("http://localhost:5999/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(setUserData(result.data.data));
  } catch (error) {
    toast.error(error);
  }
};

export const {
  setRegisterErrorMessage,
  setRegisterLoad,
  setLoginErrorMessage,
  setLoginLoad,
  setUserData,
} = userSlice.actions;

export default userSlice.reducer;
