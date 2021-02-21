import logo from './logo.svg';
import './App.css';

import HomeComponent from "./components/HomeComponent";
import MainComponent from "./components/MainComponent";

import getAllUsers from "./auth";

function App() {
  return (
    <div className="App">
      <MainComponent />
      <button onClick={() => {getAllUsers();}}>JO</button>
    </div>
  );
}

export default App;
