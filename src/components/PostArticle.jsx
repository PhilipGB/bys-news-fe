import { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { PencilIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { fetchTopics, postArticle } from '../utils/Api';
import { UserContext } from '../contexts/User';

export function PostArticle(props) {
  const { setArticles } = props;
  const { user } = useContext(UserContext);
  const [modalClass, setModalClass] = useState('hidden-modal');
  const [topic, setTopic] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics().then((res) => {
      setTopics(res);
    });
  }, []);

  const showNewPostForm = (e) => {
    e.preventDefault();
    if (modalClass === 'modal') setModalClass('hidden-modal');
    else setModalClass('modal');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const article = {
      author: user.username,
      title: title,
      topic: topic,
      body: body,
    };

    postArticle(article).then((res) => {
      setArticles((current) => {
        return [res, ...current];
      });
    });

    setTopic('');
    setTitle('');
    setBody('');
    setModalClass('hidden-modal');
  };

  return (
    <div>
      <div className={modalClass + ' fade-in'}>
        <form className='create-post-form' name='create-post'>
          <h3 className='modal-header'>
            <PencilIcon className='icons' />
            Create a post{' '}
            <button onClick={showNewPostForm} className='x-button'>
              <XMarkIcon className='icons' />
            </button>
          </h3>
          <hr />
          <label></label>
          <select
            name='topicList'
            id='topicList'
            className='topic-dropdown'
            defaultValue='default'
            onChange={(e) => setTopic(e.target.value)}
          >
            <option value='default' disabled='disabled'>
              Choose a Topic
            </option>
            {topics.map((topic, index) => (
              <option key={index} value={topic.slug}>
                Topic: {topic.slug}
              </option>
            ))}
          </select>
          <input
            className='post-title-box'
            placeholder='Title'
            name='title'
            value={title}
            required
            onChange={(event) => setTitle(event.target.value)}
          />
          <textarea
            className='post-textarea'
            name='post article'
            placeholder='Article Text'
            spellCheck={true}
            value={body}
            rows={16}
            maxLength={1000}
            onChange={(event) => setBody(event.target.value)}
            wrap='hard'
          />
          <hr />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
      <div className='PostArticle'>
        <input
          className='newpost-box'
          placeholder='Create Post'
          onFocus={showNewPostForm}
        />
      </div>
    </div>
  );
}

PostArticle.propTypes = {
  setArticles: PropTypes.func.isRequired,
};
