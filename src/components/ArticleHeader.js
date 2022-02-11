import { NavLink } from "react-router-dom";

import { ageCalculator } from "../utils/ageCalculator";

import { LibraryIcon } from "@heroicons/react/solid";

export function ArticleHeader(props) {
  const { article } = props;
  return (
    <h4 className="card-info">
      <LibraryIcon className="icons" />
      <NavLink to={`/topics/${article.topic}`}>{article.topic}</NavLink> -
      Posted by{" "}
      <NavLink to={`/user/${article.author}`}>{article.author}</NavLink>{" "}
      {ageCalculator(article.created_at)}
    </h4>
  );
}
