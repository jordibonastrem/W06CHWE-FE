import useUser from "../../hooks/useUser";

function Login() {
  const { userLogin, user } = useUser();

  function onClickLogin(event) {
    event.preventDefault();
    userLogin({
      username: "Farruquito",
      password: "miau",
    });
  }

  return (
    <div className={"row"}>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <form className="form-signin text-center col-5" onSubmit={onClickLogin}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required=""
          autoFocus=""
        ></input>
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
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
