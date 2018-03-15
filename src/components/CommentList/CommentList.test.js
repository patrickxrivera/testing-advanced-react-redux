import React from 'react';
import { mount } from 'enzyme';

import CommentList from './CommentList';

describe('CommentList', () => {
  let wrapper;

  beforeEach(() => {
    const props = { comments: ['First comment', 'Second comment'] };
    wrapper = mountCommentList(props);
  });

  test('shows an LI for each component', () => {
    const listEls = wrapper.find('li');
    expect(listEls).toHaveLength(2);
  });

  test('shows each comment that is provided', () => {
    const unorderedListEl = wrapper.find('ul');
    const firstComment = unorderedListEl.props().children[0].props.children;
    const secondComment = unorderedListEl.props().children[1].props.children;
    expect(firstComment).toEqual('First comment');
    expect(secondComment).toEqual('Second comment');
  });
});

const mountCommentList = (props = {}) => mount(<CommentList {...props} />);
