import { useEffect, useState } from "react";

import { CommentCard } from "./CommentCard";

import { fetchComments } from "../utils/Api";
import { PostComment } from "./PostComment";

import { SpeakerphoneIcon } from "@heroicons/react/solid";

export function Comments(props) {
  const [comments, setComments] = useState([]);
  const { article_id, setCommentCount } = props;
  const placeholder = (
    <div className="no-comments">
      <SpeakerphoneIcon className="svg-x-small" />
      <h3>No Comments Yet</h3>
      <p>Be the first to share what you think!</p>
    </div>
  );

  useEffect(() => {
    fetchComments(article_id)
      .then((res) => {
        setComments(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [article_id]);

  return (
    <div className="Comments">
      <PostComment
        article_id={article_id}
        setComments={setComments}
        setCommentCount={setCommentCount}
      />
      {comments.length ? (
        <ul className="comment-list">
          {comments.map((comment, index) => {
            return (
              <CommentCard
                key={comment.comment_id}
                index={index}
                comment={comment}
                setComments={setComments}
                setCommentCount={setCommentCount}
              />
            );
          })}
        </ul>
      ) : (
        placeholder
      )}
    </div>
  );
}
