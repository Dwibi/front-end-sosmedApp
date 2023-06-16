import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  registerErrorMessage: "",
  registerLoad: false,
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

export const { setRegisterErrorMessage, setRegisterLoad } = userSlice.actions;

export default userSlice.reducer;
