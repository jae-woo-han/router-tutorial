import React from "react";

const data = {
  jw: {
    name: "한재우",
    description: "프론트구현에 관심있는 개발자",
  },
  velopert: {
    name: "김민준",
    description: "velog 개발자",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
