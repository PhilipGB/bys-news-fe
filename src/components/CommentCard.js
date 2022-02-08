export function CommentCard(props) {
  const { comment } = props;

  return (
    <div className="CommentCard">
      <h4>Posted by {comment.username} </h4>
      <p>{comment.body}</p>
    </div>
  );
}
