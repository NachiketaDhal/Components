import React, { useState } from "react";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";

export const modalContext = React.createContext();

function App() {
  return (
    <main className="main">
      <Home />
      <Modal />
      <Sidebar />
    </main>
  );
}

export default App;
