import React, { useEffect, useState } from "react";
import { authService, dbService } from "../fbase";
import { useHistory } from "react-router-dom";
import Nweet from "components/Nweet";

const Profile = ({ userObj, refreshUser }) => {
  const [nweets, setNweets] = useState([]);
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

  const history = useHistory(); //hooks redirect
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };

  useEffect(() => {
    const getMyNweets = async () => {
      const nweetsDb = await dbService
        .collection("nweets")
        .where("creatorId", "==", userObj.uid)
        .orderBy("createdAt")
        .get();
      const nweetsArray = nweetsDb.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetsArray);
    };
    getMyNweets();
  }, [userObj.uid]);

  return (
    <div className="container">
      <form onSubmit={onSubmit} className="profileForm">
        <input
          onChange={onChange}
          type="text"
          autoFocus
          placeholder="Display name"
          value={newDisplayName}
          className="formInput"
        />
        <input
          type="submit"
          value="Update Profile"
          className="formBtn"
          style={{
            marginTop: 10,
          }}
        />
      </form>
      <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
        Log Out
      </span>
    </div>
  );
};
export default Profile;
