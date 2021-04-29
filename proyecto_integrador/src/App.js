import React from "react";
import Header from "./components/Header";
import Container from "./components/Container"
import Footer from "./components/Footer";


//importo el componente que quiero de su archivo
function App (){
  return(
    <div>
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;