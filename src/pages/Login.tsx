import React, { FormEvent } from "react";
import { RouteComponentProps } from "react-router";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const signInWithFaceBook = async (e: FormEvent) => {
    e.preventDefault();

    console.log("it works");
    try {
      const provider = new FacebookAuthProvider(),
        auth = getAuth();

      await signInWithPopup(auth, provider);

      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='grid place-items-center mt-5' data-test='page-login'>
      <img
        className='object-contain my-10'
        src='https://links.papareact.com/t4i'
        alt='Facebook Logo'
        height={400}
        width={400}
      />
      <form onSubmit={signInWithFaceBook}>
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
