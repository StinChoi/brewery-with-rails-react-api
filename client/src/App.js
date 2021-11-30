import logo from './logo.svg';
import './App.css';
import Beers from "./components/Beers";
import { Route, Routes } from "react-router-dom";
import About from "./components/About"

function App() {
  return (
    // <div className="App">
    //   <Beers />
    // </div>
    <div className="App">
      <Routes>
        <Route path="/" element={<Beers />} />
        <Route path="/beers/:id" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
