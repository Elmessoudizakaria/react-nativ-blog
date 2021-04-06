import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from './src/context/BlogContext';
import CreateBlogScreen from './src/screens/CreateBlogScreen';
import EditBlogScreen from './src/screens/EditBlogScreen';
import BlogDetailScreen from './src/screens/BlogDetailScreen';
import ListBlogScreen from './src/screens/ListBlogScreen';

const navigator = createStackNavigator(
  {
    Detail: BlogDetailScreen,
    Create: CreateBlogScreen,
    Edit: EditBlogScreen,
    List: ListBlogScreen,
  },
  {
    initialRouteName: 'List',
    defaultNavigationOptions: {
      title: 'Blog',
    },
  }
);
const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};