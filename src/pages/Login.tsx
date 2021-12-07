import React, { FormEvent } from "react";
import { useAuth } from "../context/AuthContext";
import { useHistory, Redirect } from "react-router-dom";

const Login: React.FC = () => {
  const { signInWithFacebook, user } = useAuth();
  const history = useHistory<History>();

  // Handle Sign In
  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await signInWithFacebook();
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return user ? (
    <Redirect to='/' />
  ) : (
    <div className='flex flex-col items-center h-screen' data-test='page-login'>
      <img
        className='object-contain my-8'
        src='https://links.papareact.com/t4i'
        alt='Facebook Logo'
        height={400}
        width={400}
      />
      <form onSubmit={handleSignIn}>
        <button
          className='p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer uppercase'
          type='submit'
        >
          Login with FaceBook
        </button>
      </form>
    </div>
  );
};

export default Login;
