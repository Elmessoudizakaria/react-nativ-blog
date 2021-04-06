/*
 * File Created: Tuesday, 30th March 2021 3:52:01 pm
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Tuesday, 30th March 2021 3:52:01 pm
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
import React, { useContext } from 'react';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const CreateBlogScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  
  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate('List'));
      }}
    />
  );
};

export default CreateBlogScreen;
