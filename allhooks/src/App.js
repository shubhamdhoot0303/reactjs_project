import "./App.css";
import Apicall from "./components/Apicall";
import Useref from "./components/Useref";
import Usereducer from "./components/Usereducer";
import Usememo from "./components/Usememo";
import UseCallback from "./components/UseCallback";
function App() {
  return (
    <>
      <div className="App">
        <Apicall />
        <Useref />
        <Usereducer />
        <Usememo />
        <UseCallback />
      </div>
    </>
  );
}

export default App;
