import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import { fetchSingleArticle, patchArticle } from "../utils/Api";
import { ageCalculator } from "../utils/ageCalculator";
import { Comments } from "../components/Comments";

export function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [votes, setVotes] = useState();

  useEffect(() => {
    fetchSingleArticle(article_id).then((res) => {
      setArticle(res);
      setVotes(res.votes);
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
      <h4>
        Topic: {article.topic} - Posted by{" "}
        <NavLink to={`/user/${article.author}`}>{article.author}</NavLink>{" "}
        {ageCalculator(article.created_at)}
      </h4>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <p>
        <button onClick={increaseVotes} className="vote-button">
          ↑ {votes}
        </button>{" "}
        · {article.comment_count} Comments
      </p>
      <Comments article_id={article_id} />
    </div>
  );
}
