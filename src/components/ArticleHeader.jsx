import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ageCalculator } from '../utils/ageCalculator';
import { BuildingLibraryIcon } from '@heroicons/react/24/solid';

export function ArticleHeader(props) {
  const { article } = props;
  return (
    <h4 className='card-info'>
      <BuildingLibraryIcon className='icons' />
      <NavLink to={`/topics/${article.topic}`}>{article.topic}</NavLink> -
      Posted by{' '}
      <NavLink to={`/user/${article.author}`}>{article.author}</NavLink>{' '}
      {ageCalculator(article.created_at)}
    </h4>
  );
}

ArticleHeader.propTypes = {
  article: PropTypes.object.isRequired,
};
