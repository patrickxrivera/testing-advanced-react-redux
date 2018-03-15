import { createAction, handleActions } from 'redux-actions';

export const SAVE_COMMENT = 'SAVE_COMMENT';

export const saveComment = createAction(SAVE_COMMENT);

const initialState = [];

export default handleActions(
  {
    SAVE_COMMENT: (state, action) => {
      const newComment = action.payload;
      return [...state, newComment];
    }
  },
  initialState
);
