import { useEffect } from "react";
import "./App.scss";
import Card from "./component/Card/Card";
import useRobot from "./hooks/useRobot";

function App() {
  const { robots, getRobots } = useRobot();

  useEffect(() => {
    getRobots();
  }, [getRobots]);

  return (
    <>
      <div className={"container"}>
        <h1>MY ROBOT LIST</h1>
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
