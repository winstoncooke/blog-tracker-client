import { createSlice } from '@reduxjs/toolkit';
import commentsService from '../services/comments';
import { setNotification } from './notificationReducer';

const commentsSlice = createSlice({
  name: 'comments',
  initialState: [],
  reducers: {
    setComments(_state, action) {
      return action.payload;
    },
    appendComment(state, action) {
      state.push(action.payload);
    },
  },
});

export const { setComments, appendComment } = commentsSlice.actions;

export const getComments = (blog) => {
  return async (dispatch) => {
    const comments = await commentsService.getAll(blog);
    dispatch(setComments(comments));
  };
};

export const createComment = (blog, text) => {
  return async (dispatch) => {
    try {
      const newComment = await commentsService.create(blog, text);
      dispatch(appendComment(newComment));
    } catch (error) {
      console.log('create comment error', error);
      setNotification('Unable to create comment', 'red');
    }
  };
};

export default commentsSlice.reducer;