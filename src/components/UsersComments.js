import { useEffect, useState } from "react";

import { ProfileCommentsCard } from "./ProfileCommentsCard";

import { fetchUsersComments } from "../utils/Api";
import { SpeakerphoneIcon } from "@heroicons/react/solid";

export function UserComments(props) {
  const [comments, setComments] = useState([]);
  const { username } = props;
  const placeholder = (
    <div className="no-comments">
      <SpeakerphoneIcon className="svg-x-small" />
      <h3>No Comments Yet</h3>
    </div>
  );

  useEffect(() => {
    fetchUsersComments(username)
      .then((res) => {
        setComments(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [username]);

  return (
    <div className="Comments">
      <h2>{comments.length || 0} Comments</h2>

      {comments.length ? (
        <ul className="comment-list">
          {comments.map((comment, index) => {
            return (
              <ProfileCommentsCard
                key={comment.comment_id}
                index={index}
                comment={comment}
                setComments={setComments}
                setCommentCount={() => null}
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
