import React, {Component} from 'react';


class Cartas extends Component {
    constructor(props){
        super(props);
        this.state ={

        }
    }

    //FUNCIONES DE CAMBIO DE ESTADOS



    render(){
        return(
            <div className='card-inner'>
                <div className='frente-card'>
                    <img src={props.Datos.image} alt="Foto del contacto"></img>
                    <h2>{props.Datos.apellido}</h2>
                    <h2>{props.Datos.nombre}</h2>
                    <h2>{props.Datos.mail}</h2>
                    <h2>{props.Datos.fechanacimiento}</h2>
                </div>
                <div className='detalle-card'>

                </div>
            </div>
        )
    };
}
//genero los componentes que quiero y los exporto

export default Cartas;