import React from "react";
import "./Login.css";
import { useStateValue } from "../Datalayer/StateProvider";
import { actionType } from "../Datalayer/reducer";
import { auth, provider } from "../firebase";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionType.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <h3>Login with</h3>
        <div className="login__image">
          <button onClick={signIn}>
            <img
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
              alt=""
            />
          </button>
          <button>
            <img
              src="https://i.pinimg.com/originals/42/75/49/427549f6f22470ff93ca714479d180c2.png"
              alt=""
            />
          </button>
          <button>
            <img
              src="https://toppng.com/uploads/preview/logo-twitter-11549535419aik8i3pkro.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
