import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Details from "./components/Details";

function App() {
  const [count, setCount] = useState(0);
  const { search, pathname } = useLocation();

  return (
    <div className="h-screen w-screen flex">
      {(pathname != "/" || search.length > 0) && (
        <Link
          to="/"
          className="text red 300 absolute left-[19.68%] top-2 border-2 border-zinc-400 text-zinc-400 p-1 rounded px-2 hover:text-blue-400 hover:font-semibold hover:border-blue-400"
        >
          Home
        </Link>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
