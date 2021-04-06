/*
 * File Created: Tuesday, 30th March 2021 1:21:53 pm
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Tuesday, 30th March 2021 1:21:54 pm
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */

import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const BlogDetailScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam('id')
  );

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

BlogDetailScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }
      >
        <EvilIcons name="pencil" style={styles.navigationIcon} size={35} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  navigationIcon: {
    color: 'blue',
  },
});

export default BlogDetailScreen;
