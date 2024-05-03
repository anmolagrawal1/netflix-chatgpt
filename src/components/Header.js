import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store => store.user))
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))

  }
 
  const handleGptSearchClick= () => {
    dispatch(toggleGptSearchView());
  }
  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/")
      })
      .catch((error) => {
        // An error happened.
        navigate("/error")
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between bg-transparent">
      <img
        className="w-44 mx-auto md:mx-0"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix-Logo"
      />
      
      {user && (<div className="flex">
        { showGptSearch && <select className="p-2 m-4 bg-gray-800 text-white"
        onChange={handleLanguageChange}>
          {
            SUPPORTED_LANGUAGES.map((lang) => (<option key={lang.identifier} value={lang.identifier}>{lang.name}</option>))
          }
        </select>}
        <button className="py-2 px-4 m-4 bg-amber-500 rounded-lg"
        onClick={handleGptSearchClick}>{showGptSearch ? "Homepage" : "AI Search 🔎"} </button>
        <img
          className="w-10 h-10 my-4 mx-2"
          src={user?.photoURL}
          alt="Usericon"
        />
        <button onClick={handleSignOut} className="font-bold text-white">
          (Sign-Out)
        </button>
      </div>)}
    </div>
  );
};

export default Header;
