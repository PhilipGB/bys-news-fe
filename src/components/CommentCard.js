import { NavLink } from "react-router-dom";
import { splitParagraph } from "../utils/splitParagraphs";

export function CommentCard(props) {
  const { comment } = props;

  return (
    <div className="CommentCard">
      <h4>
        Posted by{" "}
        <NavLink to={`/user/${comment.username}`}>{comment.username}</NavLink>
      </h4>
      {splitParagraph(comment.body)}
    </div>
  );
}
