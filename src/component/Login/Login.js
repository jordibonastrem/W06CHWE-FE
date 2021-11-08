import { useState } from "react";
import useUser from "../../hooks/useUser";

function Login() {
  const { userLogin } = useUser();
  const [loginFormState, setLoginFormState] = useState({
    username: "",
    password: "",
  });

  function onClickLogin(event) {
    event.preventDefault();
    userLogin({
      username: "Farruquito",
      password: "miau",
    });
  }

  function onChangeInput(event) {
    setLoginFormState({
      ...loginFormState,
      [event.target.id]: event.target.value,
    });
  }

  return (
    <div className={"row"}>
      <form className="form-signin text-center col-5" onSubmit={onClickLogin}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="username" className="sr-only">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="form-control"
          placeholder="username"
          value={loginFormState.username}
          onChange={onChangeInput}
          required=""
        ></input>
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="form-control"
          value={loginFormState.password}
          onChange={onChangeInput}
          placeholder="Password"
          required=""
        ></input>
        <button
          className="login-button btn btn-lg btn-primary btn-block"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Login;
