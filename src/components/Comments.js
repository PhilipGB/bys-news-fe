import { useEffect, useState } from "react";

import { CommentCard } from "./CommentCard";

import { fetchComments } from "../utils/Api";
import { PostComment } from "./PostComment";

export function Comments(props) {
  const [comments, setComments] = useState([]);
  const { article_id, setCommentCount } = props;

  useEffect(() => {
    fetchComments(article_id).then((res) => {
      setComments(res);
    });
  }, [article_id]);

  return (
    <div className="Comments">
      <PostComment
        article_id={article_id}
        setComments={setComments}
        setCommentCount={setCommentCount}
      />
      <ul className="comment-list">
        {comments.map((comment, index) => {
          return <CommentCard key={index} comment={comment} />;
        })}
      </ul>
    </div>
  );
}
