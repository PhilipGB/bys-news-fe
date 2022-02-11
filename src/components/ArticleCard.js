import { NavLink } from "react-router-dom";

import { ArticleHeader } from "./ArticleHeader";

import { ThumbUpIcon, SpeakerphoneIcon } from "@heroicons/react/solid";

export function ArticleCard(props) {
  const { article } = props;

  return (
    <li className="ArticleCard">
      <ArticleHeader article={article} />
      <h3>
        <NavLink to={`/articles/${article.article_id}`}>
          {article.title}
        </NavLink>
      </h3>
      <p>
        <ThumbUpIcon className="icons" />
        {article.votes} · <SpeakerphoneIcon className="icons" />
        {article.comment_count} Comments
      </p>
    </li>
  );
}
