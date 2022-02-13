import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Articles } from "../components/Articles";
import { UserComments } from "../components/UsersComments";

import { fetchUserByName } from "../utils/Api";

export function Profile() {
  const { username } = useParams();
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetchUserByName(username).then((res) => {
      setProfile(res);
    });
  }, [username]);

  return (
    <div className="Profile">
      <h2>Profile</h2>
      <h3>{profile.username}</h3>
      <h4>{profile.name}</h4>
      <img src={profile.avatar_url} alt={profile.username} className="avatar" />
      <h2>Posts</h2>
      <Articles query={`?author=${profile.username}`} />
      <h2>Comments</h2>
      <UserComments username={username} />
    </div>
  );
}
