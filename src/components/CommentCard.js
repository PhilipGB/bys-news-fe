import { NavLink } from "react-router-dom";

export function CommentCard(props) {
  const { comment } = props;

  return (
    <div className="CommentCard">
      <h4>
        Posted by{" "}
        <NavLink to={`/user/${comment.username}`}>{comment.username}</NavLink>
      </h4>
      <p>{comment.body}</p>
    </div>
  );
}
