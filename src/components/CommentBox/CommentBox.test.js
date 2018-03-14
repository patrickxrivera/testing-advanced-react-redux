import React from 'react';
import { mount } from 'enzyme';

import CommentBox from './CommentBox';

describe('CommentBox', () => {
  let wrapper;

  beforeEach(() => (wrapper = mountEditor(<CommentBox />)));

  test('has a text area', () => {
    const textArea = wrapper.find('textarea');
    expect(textArea).toHaveLength(1);
  });

  test('has a button', () => {
    const button = wrapper.find('button');
    expect(button).toHaveLength(1);
  });
});

const mountEditor = (props = {}) => {
  const propsToUse = {
    ...props
  };
  return mount(<CommentBox {...propsToUse} />);
};
