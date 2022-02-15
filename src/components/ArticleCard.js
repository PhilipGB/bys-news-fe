import { useContext } from "react";
import { UserContext } from "../contexts/User";

import { NavLink } from "react-router-dom";

import { ArticleHeader } from "./ArticleHeader";

import { ThumbUpIcon, SpeakerphoneIcon, XIcon } from "@heroicons/react/solid";

export function ArticleCard(props) {
  const { article, deleteArticleByID, index } = props;
  const { user } = useContext(UserContext);

  return (
    <li className="ArticleCard">
      {article.author === user.username ? (
        <button
          onClick={() => deleteArticleByID(article.article_id, index)}
          className="x-button"
        >
          <XIcon className="icons" />
        </button>
      ) : null}
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
