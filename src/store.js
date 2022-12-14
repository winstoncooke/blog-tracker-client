import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from './reducers/notificationReducer';
import blogsReducer from './reducers/blogsReducer';
import userReducer from './reducers/userReducer';
import usersReducer from './reducers/usersReducer';
import commentsReducer from './reducers/commentsReducer';
import themeReducer from './reducers/themeReducer';
import filterReducer from './reducers/filterReducer';

const store = configureStore({
  reducer: {
    notification: notificationReducer,
    blogs: blogsReducer,
    user: userReducer,
    users: usersReducer,
    comments: commentsReducer,
    theme: themeReducer,
    filter: filterReducer,
  },
});

export default store;
