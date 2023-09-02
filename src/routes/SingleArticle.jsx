import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { fetchSingleArticle, patchArticle } from '../utils/Api';
import { Comments } from '../components/Comments';
import {
  HandThumbUpIcon,
  HandThumbDownIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/solid';
import { ArticleHeader } from '../components/ArticleHeader';

export function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [votes, setVotes] = useState();
  const [commentCount, setCommentCount] = useState();
  const [voted, setVoted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSingleArticle(article_id)
      .then((res) => {
        setArticle(res);
        setVotes(res.votes);
        setCommentCount(res.comment_count);
      })
      .catch(() => navigate('/404'));
  }, [article_id, navigate]);

  const changeVotes = (votes) => {
    patchArticle(article_id, votes);
    setVotes((current) => {
      return current + votes;
    });
    setVoted((current) => {
      return current ? true : true;
    });
  };

  return (
    <div className='SingleArticle'>
      <article className='article-body'>
        <ArticleHeader article={article} />
        <h2>{article.title}</h2>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {article.body}
        </ReactMarkdown>
      </article>
      <p>
        <button
          disabled={voted}
          onClick={() => changeVotes(1)}
          className='vote-button'
        >
          <HandThumbUpIcon className='icons' />
          {votes}
        </button>
        <button
          disabled={voted}
          onClick={() => changeVotes(-1)}
          className='vote-button vote-down'
        >
          <HandThumbDownIcon className='icons' />
        </button>{' '}
        · <ChatBubbleBottomCenterTextIcon className='icons' />
        {commentCount || 0} Comments
      </p>
      <Comments article_id={article_id} setCommentCount={setCommentCount} />
    </div>
  );
}
