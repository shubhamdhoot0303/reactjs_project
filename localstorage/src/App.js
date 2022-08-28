import Localstorage from './component/Localstorage';
import './App.css';
import SessionStorage from './component/SessionStorage';
function App() {
  return (
    <>
    <div className="App">
     <Localstorage />
     <SessionStorage />
    </div>
    </>
  );
}

export default App;
