import React from "react";
import MenuNavegacion from "./components/MenuNavegacion";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
      <MenuNavegacion />
      <ItemListContainer greeting="Bienvenido a nuestro sitio, pronto encontrara mas detalles de nuestros productos!!" />
    </>
  )
};

export default App;