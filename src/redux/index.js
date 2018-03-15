import { combineReducers } from 'redux';

import comments from './comments/comments.js';

const rootReducer = combineReducers({
  comments
});

export default rootReducer;
