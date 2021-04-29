import React, {Component} from 'react';

class Cartas extends Component {

    constructor(props){
        super(props);
            this.state ={
                color: this.props.color
        }
    }

    render(){
        return(
            <div class='card-inner'>
                <div class='frente-card'>
                    <h2>{ this.props.name }</h2>
                    <h2>{this.props.lastname}</h2>
                </div>
                <div class='detalle-card'>

                </div>
            </div>
        )
    };
}
export default Cartas;