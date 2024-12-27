import logo from "./logo.svg";
import "./App.css";
import LeftSide from "./Component/leftSide";
import MiddleSide from "./Component/MiddleSide";
import RightSide from "./Component/RightSide";

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <div className="leftSideHome" >
          <LeftSide />
        </div>
        <div className="middleSideHome">
          <MiddleSide />
        </div>
        <div className="rightSideHome">
          <RightSide/>
        </div>

      </div>
    </div>
  );
}

export default App;
