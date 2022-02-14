import { useContext } from "react";
import { UserContext } from "../contexts/User";

import { XIcon } from "@heroicons/react/solid";
import { NavLink } from "react-router-dom";
import { splitParagraph } from "../utils/splitParagraphs";
import { deleteComment } from "../utils/Api";

export function ProfileCommentsCard(props) {
  const { comment, index, setComments, setCommentCount } = props;
  const { user } = useContext(UserContext);

  const deleteCommentByID = (comment_id, index) => {
    deleteComment(comment_id);
    setCommentCount((current) => {
      return current - 1;
    });
    setComments((current) => {
      const newArray = [...current];
      newArray.splice(index, 1);
      return newArray;
    });
  };

  return (
    <li className="CommentCard">
      <h5>
        {comment.username === user.username ? (
          <button
            onClick={() => deleteCommentByID(comment.comment_id, index)}
            className="x-button"
          >
            <XIcon className="icons" />
          </button>
        ) : null}
        <NavLink to={`/user/${comment.username}`}>{comment.username}</NavLink>{" "}
        commented on{" "}
        <NavLink to={`/articles/${comment.article_id}`}>
          {comment.title}
        </NavLink>{" "}
        ·{" "}
        <NavLink to={`/topics/${comment.topic}`}>topic/{comment.topic}</NavLink>
      </h5>
      {splitParagraph(comment.body)}
    </li>
  );
}
