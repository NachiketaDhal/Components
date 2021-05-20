import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const Context = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openSideBar = () => {
    setShowSideBar(true);
  };

  const closeSideBar = () => {
    setShowSideBar(false);
  };

  return (
    <AppContext.Provider
      value={{
        openModal,
        closeModal,
        openSideBar,
        closeSideBar,
        showModal,
        showSideBar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default Context;
