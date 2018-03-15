import React from 'react';
import { sel, mountComponent } from '../../utils/testUtils.js';

import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mountComponent(App);
  });

  test('renders CommentBox component', () => {
    const commentBox = wrapper.find(sel('comment-box'));
    expect(commentBox).toHaveLength(1);
  });

  test('renders CommentList component', () => {
    const commentList = wrapper.find(sel('comment-list'));
    expect(commentList).toHaveLength(1);
  });
});
