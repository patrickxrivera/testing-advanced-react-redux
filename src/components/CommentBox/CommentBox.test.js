import {
  changeInputValue,
  submit,
  mountComponent
} from '../../utils/testUtils.js';
import CommentBox from './CommentBox';
import { saveComment } from '../../redux/comments/comments.js';

describe('CommentBox', () => {
  let wrapper;

  beforeEach(() => {
    const props = { saveComment };
    wrapper = mountComponent(CommentBox, props);
  });

  test('has a text area', () => {
    const textArea = wrapper.find('textarea');
    expect(textArea).toHaveLength(1);
  });

  test('has a button', () => {
    const button = wrapper.find('button');
    expect(button).toHaveLength(1);
  });

  describe('entering some text', () => {
    beforeEach(() => {
      const textAreaEl = wrapper.find('textarea');
      const newValue = 'hello';
      changeInputValue(textAreaEl, newValue);
    });

    test('shows that text in the textarea', () => {
      const textAreaEl = wrapper.find('textarea');
      const textAreaValue = textAreaEl.props().value;
      expect(textAreaValue).toBe('hello');
    });

    test('when submitted, clears the input', () => {
      submit(wrapper); // don't need to find "formEl" b/c it's our top-level component
      const textAreaEl = wrapper.find('textarea');
      const textAreaValue = textAreaEl.props().value;
      expect(textAreaValue).toBe('');
    });
  });
});
