import { connect } from 'react-redux';

import CommentBox from '../components/CommentBox/CommentBox';
import { saveComment } from '../redux/comments/comments.js';

export default connect(null, { saveComment })(CommentBox);
