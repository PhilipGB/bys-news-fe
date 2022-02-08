import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import { fetchSingleArticle } from "../utils/Api";
import { ageCalculator } from "../utils/ageCalculator";
import { Comments } from "../components/Comments";

export function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    fetchSingleArticle(article_id).then((res) => {
      setArticle(res);
    });
  }, [article_id]);

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
        ↑ {article.votes} · {article.comment_count} Comments
      </p>
      <Comments article_id={article_id} />
    </div>
  );
}
