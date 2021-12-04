import React, { useEffect } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import { useAuth } from "../context/AuthContext";
import { useUserProfile } from '../context/UserProfileContext';
import { checkFirebaseUser } from "../helpers";

const Home: React.FC = () => {
  const { user, photoDataURL } = useAuth();
  const { getUser } = useUserProfile();

  useEffect(() => {
    checkFirebaseUser(user.uid, photoDataURL);
  }, [user.uid, photoDataURL]);

  useEffect(() => {
    getUser(user.uid)
  }, [user.uid, getUser])

  return (
    <div className='h-screen bg-gray-100 overflow-hidden' data-test='page-home'>
      <Header />
      <Main />
    </div>
  );
};

export default Home;
