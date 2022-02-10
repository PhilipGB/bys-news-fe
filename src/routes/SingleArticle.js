import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import { fetchSingleArticle, patchArticle } from "../utils/Api";
import { ageCalculator } from "../utils/ageCalculator";
import { Comments } from "../components/Comments";

import {
  LibraryIcon,
  ThumbUpIcon,
  SpeakerphoneIcon,
} from "@heroicons/react/solid";

export function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [votes, setVotes] = useState();
  const [commentCount, setCommentCount] = useState();

  useEffect(() => {
    fetchSingleArticle(article_id).then((res) => {
      setArticle(res);
      setVotes(res.votes);
      setCommentCount(res.comment_count);
    });
  }, [article_id]);

  const increaseVotes = () => {
    patchArticle(article_id);
    setVotes((current) => {
      return current + 1;
    });
  };

  return (
    <div className="SingleArticle">
      <article className="article-body">
        <h4 className="card-info">
          <LibraryIcon className="icons" />
          <NavLink to={`/topics/${article.topic}`}>{article.topic}</NavLink> -
          Posted by{" "}
          <NavLink to={`/user/${article.author}`}>{article.author}</NavLink>{" "}
          {ageCalculator(article.created_at)}
        </h4>
        <h2>{article.title}</h2>
        <p>{article.body}</p>
      </article>
      <p>
        <button onClick={increaseVotes} className="vote-button">
          <ThumbUpIcon className="icons" />
          {votes}
        </button>{" "}
        · <SpeakerphoneIcon className="icons" />
        {commentCount || 0} Comments
      </p>
      <Comments article_id={article_id} setCommentCount={setCommentCount} />
    </div>
  );
}
