import { useEffect, useState } from "react";

import { CommentCard } from "./CommentCard";

import { fetchComments } from "../utils/Api";
import { PostComment } from "./PostComment";

import loadingSVG from "../svg/loading.svg";
import { SpeakerphoneIcon } from "@heroicons/react/solid";

export function Comments(props) {
  const [comments, setComments] = useState([]);
  const { article_id, setCommentCount } = props;
  const [placeholder, setPlaceholder] = useState(
    <img src={loadingSVG} alt="loading" className="loadingSVG svg-small" />
  );

  useEffect(() => {
    fetchComments(article_id)
      .then((res) => {
        setComments(res);
      })
      .catch(() => {
        setPlaceholder(
          <div className="no-comments">
            <SpeakerphoneIcon className="svg-x-small" />
            <h3>No Comments Yet</h3>
            <p>Be the first to share what you think!</p>
          </div>
        );
      });
  }, [article_id]);

  if (comments.length === 0) return placeholder;

  return (
    <div className="Comments">
      <PostComment
        article_id={article_id}
        setComments={setComments}
        setCommentCount={setCommentCount}
      />
      <ul className="comment-list">
        {comments.map((comment, index) => {
          console.log(comment.comment_id);
          return <CommentCard key={index} comment={comment} />;
        })}
      </ul>
    </div>
  );
}
