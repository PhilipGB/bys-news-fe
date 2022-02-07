import { NavLink } from "react-router-dom";

export function ArticleCard(props) {
  const { article } = props;
  const link = `/articles/${article.article_id}`;

  return (
    <div className="ArticleCard">
      <h4>
        Topic: {article.topic} - Posted by {article.author} {article.created_at}
      </h4>
      <h2>
        <NavLink to={link}>{article.title}</NavLink>
      </h2>
      <p>
        ↑ {article.votes} · {article.comment_count} Comments
      </p>
    </div>
  );
}
