import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { UserContext } from '../contexts/User.jsx';
import { splitParagraph } from '../utils/splitParagraphs.jsx';
import { deleteComment } from '../utils/Api.jsx';

export function CommentCard(props) {
  const { comment, index, setComments, setCommentCount } = props;
  const { user } = useContext(UserContext);

  const deleteCommentByID = (comment_id, index) => {
    deleteComment(comment_id);
    setCommentCount((current) => {
      return current - 1;
    });
    setComments((current) => {
      const newArray = [...current];
      newArray.splice(index, 1);
      return newArray;
    });
  };

  return (
    <li className='CommentCard'>
      <h4>
        Posted by{' '}
        <NavLink to={`/user/${comment.username}`}>{comment.username}</NavLink>
        {comment.username === user.username ? (
          <button
            onClick={() => deleteCommentByID(comment.comment_id, index)}
            className='x-button'
          >
            <XMarkIcon className='icons' />
          </button>
        ) : null}
      </h4>
      {splitParagraph(comment.body)}
    </li>
  );
}

CommentCard.propTypes = {
  comment: PropTypes.object,
  index: PropTypes.number,
  setComments: PropTypes.func,
  setCommentCount: PropTypes.func,
};
