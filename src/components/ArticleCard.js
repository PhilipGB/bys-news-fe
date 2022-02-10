import { NavLink } from "react-router-dom";

import { ageCalculator } from "../utils/ageCalculator";

import {
  LibraryIcon,
  ThumbUpIcon,
  SpeakerphoneIcon,
} from "@heroicons/react/solid";

export function ArticleCard(props) {
  const { article } = props;

  return (
    <li className="ArticleCard">
      <h4 className="card-info">
        <LibraryIcon className="icons" />
        <NavLink to={`/topics/${article.topic}`}>{article.topic}</NavLink> -
        Posted by{" "}
        <NavLink to={`/user/${article.author}`}>{article.author}</NavLink>{" "}
        {ageCalculator(article.created_at)}
      </h4>
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
