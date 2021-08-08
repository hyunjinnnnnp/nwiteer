import React, { useEffect } from "react";
import { authService, dbService } from "../fbase";
import { useHistory } from "react-router-dom";

const Profile = ({ userObj }) => {
  const history = useHistory(); //hooks redirect
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  useEffect(() => {
    const getMyNweets = async () => {
      const nweets = await dbService
        .collection("nweets")
        .where("creatorId", "==", userObj.uid)
        .orderBy("createdAt")
        .get();
      console.log(nweets.docs.map((doc) => doc.data()));
    };
    getMyNweets();
  }, [userObj.uid]);
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
export default Profile;
