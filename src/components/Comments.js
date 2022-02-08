import { useEffect, useState } from "react";

import { CommentCard } from "./CommentCard";

import { fetchComments } from "../utils/Api";

export function Comments(props) {
  const [comments, setComments] = useState([]);
  const { article_id } = props;

  useEffect(() => {
    fetchComments(article_id).then((res) => {
      setComments(res);
    });
  }, [article_id]);

  return (
    <div className="Comments">
      <h2>Comments</h2>
      <ul>
        {comments.map((comment, index) => {
          return <CommentCard key={index} comment={comment} />;
        })}
      </ul>
    </div>
  );
}
