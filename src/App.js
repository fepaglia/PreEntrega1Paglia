import React from "react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Bienvenido a nuestro sitio, pronto encontrara mas detalles de nuestros productos!!" />
    </>
  )
};

export default App;