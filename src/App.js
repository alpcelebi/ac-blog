import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  const baslik = "AC-Blog";
  const blog = { ad: "ilk", aciklama: "ilk aciklama" };

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home blog={blog} />
      </div>
    </div>
  );
}

export default App;
