import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UserContext } from '../contexts/User';
import { ArticleHeader } from './ArticleHeader';
import {
  HandThumbUpIcon,
  ChatBubbleBottomCenterTextIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';

export function ArticleCard(props) {
  const { article, deleteArticleByID, index } = props;
  const { user } = useContext(UserContext);

  return (
    <li className='ArticleCard'>
      {article.author === user.username ? (
        <button
          onClick={() => deleteArticleByID(article.article_id, index)}
          className='x-button'
        >
          <XMarkIcon className='icons' />
        </button>
      ) : null}
      <ArticleHeader article={article} />
      <h3>
        <NavLink to={`/articles/${article.article_id}`}>
          {article.title}
        </NavLink>
      </h3>
      <p>
        <HandThumbUpIcon className='icons' />
        {article.votes} · <ChatBubbleBottomCenterTextIcon className='icons' />
        {article.comment_count} Comments
      </p>
    </li>
  );
}

ArticleCard.propTypes = {
  article: PropTypes.object.isRequired,
  deleteArticleByID: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
