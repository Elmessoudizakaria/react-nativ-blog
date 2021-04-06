/*
 * File Created: Tuesday, 30th March 2021 3:57:11 pm
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Tuesday, 30th March 2021 3:57:11 pm
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */

import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogposts':
      return action.payload;
    case 'edit_blogpost':
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case 'add_blogpost':
      return [
        ...state,
        { id: state.length, title: action.payload.title + '#' + state.length },
      ];
    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get('/blogs');
    dispatch({
      type: 'get_blogposts',
      payload: response.data,
    });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post('/blogs', { title, content });

    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogs/${id}`);
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};
const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogs/${id}`, { title, content });

    dispatch({
      type: 'edit_blogpost',
      payload: { id, title, content },
    });
    if (callback) {
      callback();
    }
  };
};
export const { Context, Provider } = createDataContext(
  blogReducer,
  { getBlogPosts, addBlogPost, deleteBlogPost, editBlogPost },
  []
);
