import { SAVE_COMMENT, saveComment } from './comments.js';
import commentsReducer from './comments.js';

describe('Comments Actions', () => {
  describe('saveComment', () => {
    test('has the correct type', () => {
      const action = saveComment();
      expect(action.type).toEqual(SAVE_COMMENT);
    });

    test('has the correct payload', () => {
      const action = saveComment('new comment');
      expect(action.payload).toEqual('new comment');
    });
  });
});

describe('Comments Reducer', () => {
  // test('handles action with unknown type', () => {
  //
  // })
  // test('SAVE_COMMENT', () => {
  //
  // })
});
