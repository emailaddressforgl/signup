import "./App.css";
import About from "./About";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Dictionary from "./Dictionary";
import Signup from "./Signup";

const App = () => {
  const location = window.location.pathname;
  console.log(location);

  return (
    <BrowserRouter>
      <div className="App">
        {/* {location == "/about" ? (
        <About />
      ) : location == "/dictionary" ? (
        <Dictionary />
      ) : (
        <div>Hi</div>
      )} */}

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<div>Hello</div>} />
        </Routes>
        <Dictionary />
      </div>
    </BrowserRouter>
  );
};

export default App;
