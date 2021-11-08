import { useEffect } from "react";
import "./App.scss";
import Card from "./component/Card/Card";
import useRobot from "./hooks/useRobot";
import Form from "./component/Form/Form";
import Header from "./component/Header/Header";

function App() {
  const { robots, getRobots } = useRobot();

  useEffect(() => {
    getRobots();
  }, [getRobots]);

  return (
    <>
      <Header />
      <div className={"container"}>
        <h1>MY ROBOT LIST</h1>
        <Form />
        <ul className={"list-section list-unstyled container row"}>
          {robots.map((robot) => (
            <Card key={robot._id} robot={robot}></Card>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
