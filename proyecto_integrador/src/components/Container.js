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
      fetch("https://randomuser.me/api/?results=1")
        .then(r => r.json())
        .then((resultado)=>{
          this.setState({users: resultado.results})
        })
}


  render(){
    return (            
              <div class="cartas">         
                {
                  this.state.users.map((user)=>{
                    return(
                        <Cartas 
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
                        
                        />
                    )
                  })
                }
              </div>
    );
  }
}

export default Container;