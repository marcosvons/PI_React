import React from "react";
import Header from "./components/Header";
import Cartas from "./components/Cartas";
import Footer from "./components/Footer";


//importo el componente que quiero de su archivo

  function App() {
    return (

      <React.Fragment>
     
      <div>
         
          <div id= "Header"> 
              <Header/>
          </div>
      
      

          <div className="Cartas">
          
      {
              Contacto.map(function(item, idx){
                return(
                    <div id='card' key={idx}>
                        <Cartas Datos={item} />
                    </div>
                   )
                })
      }
          </div>

          <div id= "Footer"> 
              <Footer/>
          </div>

      </div>

</React.Fragment>
    

  );
}

export default App; 
