import useUser from "../../hooks/useUser";

function Header() {
  const { userLogout } = useUser();

  function logoutOnClick() {
    userLogout();
  }
  return (
    <header className="main-header">
      <button className={"btn btn-dark"} onClick={logoutOnClick}>
        Logout
      </button>
    </header>
  );
}

export default Header;
