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
      <div className="profile-card">
        <div className="profile-box">
          <img
            src={profile.avatar_url}
            alt={profile.username}
            className="avatar"
          />
        </div>
        <div className="profile-box">
          <h2>{profile.username}</h2>
          <h3>{profile.name}</h3>
        </div>
      </div>
      <Articles query={`?author=${profile.username}`} />
      <hr />
      <br />
      <UserComments username={username} />
    </div>
  );
}
