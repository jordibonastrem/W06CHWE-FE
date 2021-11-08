import { useEffect } from "react";
import "./App.scss";
import Card from "./component/Card/Card";
import useRobot from "./hooks/useRobot";
import Form from "./component/Form/Form";
import Header from "./component/Header/Header";
import Login from "./component/Login/Login";
import useUser from "./hooks/useUser";

function App() {
  const { robots, getRobots } = useRobot();

  const {
    user: { isAuthenticated },
  } = useUser();

  useEffect(() => {
    if (isAuthenticated) getRobots();
  }, [getRobots, isAuthenticated]);

  return (
    <>
      {isAuthenticated ? (
        <div className={"container"}>
          <Header />
          <h1>MY ROBOT LIST</h1>
          <Form />
          <ul className={"list-section list-unstyled container row"}>
            {robots.map((robot) => (
              <Card key={robot._id} robot={robot}></Card>
            ))}
          </ul>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
