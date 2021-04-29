import React from "react";
import Header from "./components/Header";
import Cartas from "./components/Cartas";
import Footer from "./components/Footer";


//importo el componente que quiero de su archivo
export default class App extends Component {
  constructor(){
    super();
    this.state={
      users=[]

    }
  }

  //funciones agregar numero tarjetas y borrar
  borrarTarjeta(idTarjeta){
    let resultado=this.state.users.filter((user)=>{
      return user.id !== idTarjeta
    })
  }
  //numero tarjeta con alert mensaje input

  componentDidMount(){
    fetch("https://randomuser.me/api/?results=30")
        .then(r => r.json())
        .then((resultado)=>{
            this.setState.users.push(resultado.results)
        })
        .catch((e)=>console.log(e))
}

  render(){
    return (
            <div>           
              <div id= "Header"> 
                <Header/>
              </div>
                          
              <div className="Cartas">         
                {
                  this.state.users.map((user)=>{
                    return(
                      <div className='card' key={idx}>
                        <Cartas Datos={item} />
                        <button onClick={this.borrarTarjeta.bind(this)}>Delete</button>
                      </div>
                    )
                  }
                }
              </div>
                
              <div id= "Footer"> 
                <Footer/>
              </div>
                
            </div>
    )
  }

}