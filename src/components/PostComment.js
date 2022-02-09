import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../contexts/User";
import { postComment } from "../utils/Api";

export function PostComment(props) {
  const { user } = useContext(UserContext);
  const [input, setInput] = useState("");
  const { article_id, setComments, setCommentCount } = props;

  const handleSubmit = (event) => {
    const comment = { username: user.username, body: input };
    postComment(article_id, comment);
    setComments((current) => {
      return [comment, ...current];
    });
    setCommentCount((current) => {
      return current + 1;
    });
    setInput("");
  };

  if (user) {
    return (
      <div className="PostComment">
        <form className="CommentForm">
          <label>
            <div>
              Comment as{" "}
              <NavLink to={`/user/${user.username}`}>{user.username}</NavLink>
            </div>
            <textarea
              name="post comment"
              placeholder="What are your thoughts?"
              spellCheck={true}
              value={input}
              rows={5}
              maxLength={1000}
              onChange={(event) => setInput(event.target.value)}
              wrap="hard"
            />
          </label>
        </form>
        <button onClick={handleSubmit}>Post Comment</button>
      </div>
    );
  }
  return <></>;
}
