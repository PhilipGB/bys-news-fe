import { NavLink } from "react-router-dom";

import { ageCalculator } from "../utils/ageCalculator";

export function ArticleCard(props) {
  const { article } = props;

  return (
    <div className="ArticleCard">
      <h4>
        Topic: {article.topic} - Posted by{" "}
        <NavLink to={`/user/${article.author}`}>{article.author}</NavLink>{" "}
        {ageCalculator(article.created_at)}
      </h4>
      <h3>
        <NavLink to={`/articles/${article.article_id}`}>
          {article.title}
        </NavLink>
      </h3>
      <p>
        ↑ {article.votes} · {article.comment_count} Comments
      </p>
    </div>
  );
}
