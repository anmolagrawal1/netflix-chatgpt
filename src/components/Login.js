import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData, checkSighUpValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const fullname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //const message = checkValidData(fullname.current.value , email.current.value, password.current.value);

    let message;

    if (!isSignInForm) {
      checkSighUpValidData(fullname, email, password);
      message = checkSighUpValidData(
        fullname.current.value,
        email.current.value,
        password.current.value
      );
      setErrorMessage(message);
    } else {
      checkValidData(email, password);
      message = checkValidData(email.current.value, password.current.value);
      setErrorMessage(message);
    }

    if (message) return;
    //sign in /sign up form login
    if (!isSignInForm) {
      //sign up logic

      createUserWithEmailAndPassword(
        auth,
        //
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(auth.currentUser, {
            displayName: fullname.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/89531338?v=4",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(errorMessage);
            });

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            photoURL: "https://avatars.githubusercontent.com/u/89531338?v=4",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(errorMessage);
            });
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}
          alt="bgImage"

        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg"
      >
        <h1 className="text-bold py-4 text-3xl  w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullname}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full  bg-gray-700 bg-opacity-80"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full  bg-gray-700 bg-opacity-80"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full  bg-gray-700 bg-opacity-80"
        />
        <p className="text-red-600  font-bold">{errorMessage}</p>
        <button
          className=" my-4 bg-red-700 w-full rounded-lg h-10 "
          onClick={handleButtonClick}
        >
          {" "}
          {isSignInForm ? "Sign-In" : "Sign-Up"}
        </button>
        <p className="py-4 cursor-pointer underline" onClick={toggleSignUpForm}>
          {" "}
          {isSignInForm
            ? "New to Netflix? Sign-Up here"
            : "Already Registered? Sign-In To Enjoy"}
        </p>
        <p className="py-4 text-xs ">
          This page is protected by Google reCAPTCHA to ensure you're not a bot
        </p>
      </form>
    </div>
  );
};

export default Login;
