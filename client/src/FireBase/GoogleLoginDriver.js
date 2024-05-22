import React, { useState, useEffect } from "react";
import { auth, provider } from "./firebase.config";
import { signInWithPopup } from "firebase/auth";
import englishContent from "../Json/Driver Login/DLE.json";
import sinhalaContent from "../Json/Driver Login/DLS.json";
import tamilContent from "../Json/Driver Login/DLT.json";
import { useLanguage } from "../TraslateBtn/LanguageContext";

function GoogleLoginDriver() {
  const { selectedLanguage } = useLanguage();

  let content;
  switch (selectedLanguage) {
    case "english":
      content = englishContent;
      break;
    case "sinhala":
      content = sinhalaContent;
      break;
    case "tamil":
      content = tamilContent;
      break;
    default:
      content = englishContent;
  }
  const [value, setValue] = useState("");

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      // Redirect to Home component
      window.location.href = "/drivermaininterface";
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  return (
    <div>
      {/* {value ? ( */}
      {/* // <p>Welcome, {value}</p> */}
      {/* ) : ( */}
      <button onClick={handleClick} className="buttonofficerlog">
        {content.Google}
      </button>
      {/* )} */}
    </div>
  );
}
export default GoogleLoginDriver;