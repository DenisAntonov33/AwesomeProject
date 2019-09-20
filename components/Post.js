import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Post(props) {
  const styles = StyleSheet.create({
    post: {
      marginBottom: 10,
    },
    postTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
  });

  return (
    <View style={styles.post}>
      <Text style={styles.postTitle}>{props.post.title}</Text>
      <Text>{props.post.body}</Text>
    </View>
  );
}
