import { Articles } from "../components/Articles";

export function Profile(props) {
  const { user } = props;

  return (
    <div className="Profile">
      <h2>Profile</h2>
      <h3>{user.username}</h3>
      <h4>{user.name}</h4>
      <img src={user.avatar_url} alt={user.username} className="avatar" />
      <h2>Posts</h2>
      <Articles query={`?author=${user.username}`} />
      <h2>Comments</h2>
    </div>
  );
}
