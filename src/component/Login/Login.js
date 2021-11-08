function Login() {
  return (
    <div className={"row"}>
      <form class="form-signin text-center col-5">
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputEmail" class="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          required=""
          autofocus=""
        ></input>
        <label for="inputPassword" class="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required=""
        ></input>
        <button
          class="login-button btn btn-lg btn-primary btn-block"
          type="submit"
        >
          Sign in
        </button>{" "}
      </form>
    </div>
  );
}

export default Login;
