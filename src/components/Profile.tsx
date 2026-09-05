import { useState } from "react";

import "./profile.css";

const Profile = () => {
  const [loggedIn] = useState<boolean>(false);

  // return statement
  return (
    <div>
      {/* if not login show login button */}
      {!loggedIn && (
        <button className="profileLoginButton" type="button">
          Log in
        </button>
      )}
      {/* if logged in show user profile */}
    </div>
  );
};

export default Profile;
