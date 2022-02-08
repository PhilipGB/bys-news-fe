import { NavLink } from "react-router-dom";

import { ageCalculator } from "../utils/ageCalculator";

export function ArticleCard(props) {
  const { article } = props;
  const link = `/articles/${article.article_id}`;

  return (
    <div className="ArticleCard">
      <h4>
        Topic: {article.topic} - Posted by {article.author}{" "}
        {ageCalculator(article.created_at)}
      </h4>
      <h3>
        <NavLink to={link}>{article.title}</NavLink>
      </h3>
      <p>
        ↑ {article.votes} · {article.comment_count} Comments
      </p>
    </div>
  );
}
