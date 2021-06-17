import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
function App() {
  const { isLoading } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <SetupForm />
      <Modal />
    </main>
  );
}

export default App;
