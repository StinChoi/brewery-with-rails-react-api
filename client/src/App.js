import logo from './logo.svg';
import './App.css';
import Beers from "./components/Beers";
import {Route,Routes} from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <Beers />
    // </div>
    <div className="App">
      <Routes>
        <Route path="/" element={<Beers />} />
      </Routes>
    </div>
  );
}

export default App;
