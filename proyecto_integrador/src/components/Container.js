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
      fetch("https://randomuser.me/api/?results=30")
        .then(r => r.json())
        .then((resultado)=>{
          this.setState({users: resultado.results})
        })
}


  render(){
    return (            
              <div class="Cartas">         
                {
                  this.state.users.map((user)=>{
                    return(
                        <Cartas 
                          name={ user.name.first }
                          lastname= { user.name.last }
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