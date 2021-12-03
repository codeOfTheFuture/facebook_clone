import React, { useEffect } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import { useAuth } from "../context/AuthContext";
import { checkFirebaseUser } from "../helpers";

const Home: React.FC = () => {
  const { user, photoDataURL } = useAuth();

  useEffect(() => {
    checkFirebaseUser(user.uid, photoDataURL);
  }, [user.uid, photoDataURL]);

  return (
    <div className='h-screen bg-gray-100 overflow-hidden' data-test='page-home'>
      <Header />
      <Main />
    </div>
  );
};

export default Home;
