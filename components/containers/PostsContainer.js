import React from 'react';
import {View, Text} from 'react-native';
import Post from './../Post';
import Axios from 'axios';

export default class PostsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(r => {
        this.setState({
          posts: r.data,
        });
      })
      .catch(err => {
        alert(err);
      });
  }

  render() {
    const postViews = (this.state.posts && this.state.posts.length) ? this.state.posts.map(item => {
      return <Post key={String(item.id)} post={item} />;
    }) : <Text></Text>;
    return <View>{postViews}</View>;
  }
}
