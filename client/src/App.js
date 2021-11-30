import logo from './logo.svg';
import './App.css';
import Beers from "./components/Beers";
import { Route, Routes } from "react-router-dom";
import About from "./components/About"
import NavBar from './components/NavBar';
import DeleteBeer from './components/DeleteBeer';

function App() {
  return (
    // <div className="App">
    //   <Beers />
    // </div>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Beers />} />
        <Route path="/beers/:id" element={<About />} />
        <Route path="/beers/delete" element={<DeleteBeer />} />
      </Routes>
    </div>
  );
}

export default App;
