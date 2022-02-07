import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchSingleArticle } from "../utils/Api";

export function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    fetchSingleArticle(article_id).then((res) => {
      setArticle(res);
    });
  }, []);

  console.log(article);

  return (
    <div className="SingleArticle">
      <h4>
        Topic: {article.topic} - Posted by {article.author} {article.created_at}
      </h4>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <p>
        ↑ {article.votes} · {article.comment_count} Comments
      </p>
    </div>
  );
}
