import {combineReducers} from 'redux';
import {RECEIVE_POSTS, REQUEST_POSTS} from '../actions';

export default combineReducers({});

function posts(
  state = {
    isFething: false,
    items: [],
  },
  action,
) {
  switch (action.type) {
    case REQUEST_POSTS:
      return {...state, ...{isFething: true}};
    case RECEIVE_POSTS:
      return {...state, ...{isFething: false, items: action.posts}};
    default:
      return state;
  }
}
