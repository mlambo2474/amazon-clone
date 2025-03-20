import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import InfoIcon from "@mui/icons-material/Info";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();

  const SignUpButtonHandlers = () => setIsActive(false);
  const HandleLogInAccount = () => setIsActive(true);

  useEffect(() => {
    const user = localStorage.getItem("isLoggedIn");
    if (user) setIsLoggedIn(true);
  }, []);

  const submitButtonHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    console.log("email:", enteredEmail + " Password:", enteredPassword);
    localStorage.setItem("isLoggedIn", "7");
    setIsLoggedIn(true);
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };
  const HandleSignOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <div className="login">
      {isLoggedIn && (
        <p>
          you are logged in <button onClick={HandleSignOut}>SignOut</button>{" "}
        </p>
      )}

      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
        <span>.co.za</span>
      </Link>
      {isActive ? (
        <div className="create-account">
          <div className="login-page">
            <h6>Sign in</h6>
            <form>
              <label htmlFor="email">Email or mobile phone number</label>
              <input type="email" ref={emailRef} />

              <label htmlFor="password">Password</label>
              <input
                type="text"
                ref={passwordRef}
                placeholder="At least 6 characters"
              />

              <button className="submit" onClick={submitButtonHandler}>
                Continue
              </button>

              <span>
                By creating an account, you agree to this Amazon Clone's
                Conditions of use & Sale.Please see our Privacy Notice and our
                Internet-Based Ads Notice.
              </span>

              <p className="sign-in">
                {" "}
                <KeyboardArrowDownIcon
                  style={{ width: "20px", color: "#000000" }}
                />{" "}
                Need help?
              </p>
            </form>
          </div>
          <p className="new-to-amazon">New to Amazon</p>
          <button className="create-button" onClick={SignUpButtonHandlers}>
            Create your Amazon account
          </button>
        </div>
      ) : (
        <div className="signIn-container">
          <h6>Create account</h6>
          <form>
            <label htmlFor="input">Your name</label>
            <input type="text" placeholder="First and last Name" />

            <label htmlFor="email">Email</label>
            <input type="email" />

            <label htmlFor="password">Password</label>
            <input type="text" placeholder="At least 6 characters" />

            <p className="characters">
              <InfoIcon style={{ color: "#1196AB", width: "20px" }} /> Password
              must be at least 6 characters
            </p>

            <label htmlFor="password">Re-enter password</label>
            <input type="text" />

            <button className="submit">Create your Amazon account</button>
            <span>
              By creating an account, you agree to this Amazon Clone's
              Conditions of use & Sale.Please see our Privacy Notice and our
              Internet-Based Ads Notice.
            </span>

            <p className="sign-in">
              Aready have an account?
              <span className="sign-in-span" onClick={HandleLogInAccount}>
                Sign in{" "}
              </span>
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import ReactDom from "react-dom";
// import Modal from "./Modal";

// const Login = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const HandleButtonClick = () => {
//     setIsOpen(true);
//   };

//   return (
//     <>
//       <p>login</p>
//       <h1>Hello friends</h1>
//       <button onClick={HandleButtonClick}>Open Modal</button>
//       {isOpen &&
//         ReactDom.createPortal(
//           <Modal setIsOpen={setIsOpen} />,
//           document.getElementById("modal-root-div")
//         )}
//     </>
//   );
// };

// export default Login;
