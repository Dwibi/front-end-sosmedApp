import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

const initialState = {
  post: [],
  lastId: 0,
  hasMore: false,
};

const postSlice = createSlice({
  name: "Post",
  initialState,
  reducers: {
    setDataPost: (initialState, action) => {
      initialState.post.push(action.payload);
    },
    setLastId: (initialState, action) => {
      initialState.lastId = action.payload;
    },
    setHasMore: (initialState, action) => {
      initialState.hasMore = action.payload;
    },
  },
});

export const createPost = (image_post, caption) => async (dispatch) => {
  try {
    let result = await axios.post(
      "http://localhost:5999/Posts/",
      {
        image_post: image_post,
        caption: caption,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    toast.success(result.data.message);
    console.log(result);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const getData = (lastId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:5999/posts?lastId=${lastId}&limit=${3}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response);
    setDataPost(response.data.data);
    setHasMore(response.data.hasMore);
    setLastId(response.data.lastId);
  } catch (error) {
    console.log(error);
  }
};

export const { setDataPost, setHasMore, setLastId } = postSlice.actions;

export default postSlice.reducer;
