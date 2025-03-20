import React, { useState, useEffect, useReducer, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
// import InfoIcon from "@mui/icons-material/Info";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import AuthContext from "../../context/authContext";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// import ShoppingContext from "../../context/shopping/shoppingContext";
import { auth } from "../../firebase";

// const reducer = (state, action) => {

//   if (action.type === "EMAIL_INPUT") {
//     return {
//       ...state,
//       emailValue: action.payload,
//     };
//   }
//   if (action.type === "PASSWORD_INPUT") {
//     return {
//       ...state,
//       passwordValue: action.payload,
//     };
//   }
//   return {
//     emailValue: "",
//     passwordValue: "",
//   };
// };

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  // const ctx = useContext(AuthContext)
  //using useEffect with dependencies
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [formIsValid, setFormIsValid] = useState(false);
  // const emailChangeHandler = (e) => {
  //   // setEmail(e.target.value);
  //   // setFormIsValid(e.target.value.includes("@") && password.trim().length > 6);
  //   dispatch({ type: "EMAIL_INPUT", payload: e.target.value });
  // };
  // const passwordChangeHandler = (e) => {
  //   // setPassword(e.target.value);
  //   // setFormIsValid(e.target.value.trim().length > 6  && email.includes("@"))
  //   dispatch({ type: "PASSWORD_INPUT", payload: e.target.value });
  // };

  // const [state, dispatch] = useReducer(reducer, {
  //   emailValue: "",
  //   passwordValue: "",
  // });
  // const { emailValue, passwordValue } = state;
  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log("checking for form validity");
  //     setFormIsValid(
  //       emailValue.includes("@") && passwordValue.trim().length > 6
  //     );
  //   }, 500);

  //   return () => {
  //     console.log("Clean up function before the next useEffect runs");
  //     clearTimeout(identifier);
  //   };
  // }, [emailValue, passwordValue]);

  // useEffect(() => {
  //    const identifier = setTimeout(() => {
  //     console.log("checking for form validity");
  //     setFormIsValid(email.includes("@") && password.trim().length > 6);
  //   }, 500);

  //   return () => {
  //     console.log("Clean up function before the next useEffect runs");
  //     clearTimeout(identifier);
  //   };
  // }, [email, password]);

  const submitButtonHandler = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));

    // console.log(formIsValid);
    // console.log("Entered Email", emailValue);
    // console.log("Entered password", passwordValue);
    // ctx.onLogIn(emailValue, passwordValue);
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
        <span>.co.za</span>
      </Link>

      <div className="create-account">
        <div className="login-page">
          <h6>Sign in</h6>
          <form>
            <label htmlFor="email">Email or mobile phone number</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
              type="text"
              placeholder="At least 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
             
              <KeyboardArrowDownIcon
                style={{ width: "20px", color: "#000000" }}
              />
              Need help?
            </p>
          </form>
        </div>
        <p className="new-to-amazon">New to Amazon</p>
        <button className="create-button" onClick={register}>
          Create your Amazon account
        </button>
      </div>

   
    </div>
  );
};

export default Login;


