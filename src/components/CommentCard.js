import { useContext } from "react";
import { UserContext } from "../contexts/User";

import { XIcon } from "@heroicons/react/solid";
import { NavLink } from "react-router-dom";
import { splitParagraph } from "../utils/splitParagraphs";
import { deleteComment } from "../utils/Api";

export function CommentCard(props) {
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
      <h4>
        Posted by{" "}
        <NavLink to={`/user/${comment.username}`}>{comment.username}</NavLink>
        {comment.username === user.username ? (
          <button
            onClick={() => deleteCommentByID(comment.comment_id, index)}
            className="x-button"
          >
            <XIcon className="icons" />
          </button>
        ) : null}
      </h4>
      {splitParagraph(comment.body)}
    </li>
  );
}
