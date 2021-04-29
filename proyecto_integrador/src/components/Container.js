import React, {Component} from 'react';
import Cartas from "./Cartas"

class Container extends Component{
      
  constructor(props){
    super(props);
    this.state={
      users:[],

    }
  }


  componentDidMount(){
      fetch("https://randomuser.me/api/?results=10")
        .then(r => r.json())
        .then((resultado)=>{
          this.setState({users: resultado.results})
        })
        .catch((e)=>{console.log(e)})
    }

    cambiarNumeroTarjetas=(numero)=>{
        fetch("https://randomuser.me/api/?results="+ numero )
            .then(r => r.json())
            .then((resultados)=>{
                this.setState({users: resultados.results})
            })
            .catch((e)=>{console.log(e)})
    }   

    eliminarTarjeta=(key)=>{
        let tarjetasRestantes=this.state.users.filter((tarjeta)=>{
            return tarjeta.login.uuid !== key;
        })
        this.setState({users: tarjetasRestantes })
    }

  render(){
    return (
            <div className='card_container'>       
              <div class="cartas">      
                <input type='number' placeholder='Nuevo numero tarjetas' class='numeroTarjetas'></input>
                <input type='submit' value='Submit' onClick={()=>this.cambiarNumeroTarjetas(document.querySelector('.numeroTarjetas').value)}></input>   
                {
                  this.state.users.map((user)=>{
                    return(
                        <Cartas 
                          key={ user.login.uuid} 
                          id= {user.login.uuid}
                          name={ user.name.first }
                          lastname= { user.name.last }
                          picture={ user.picture.large }
                          email= {user.email}
                          fnac={ user.dob.date}
                          edad= {user.dob.age}
                          direccion= {user.location}
                          register={user.registered.date}
                          telefono= {user.phone}
                          color="white"
                          onDelete={this.eliminarTarjeta.bind(this)}
                        
                        />
                    )
                  })
                }
                
              </div>
            </div>
    );
  }
}

export default Container;