import React from 'react'


function Cartas (props) {

    return(
        <div id='card'>
        <img src={props.Datos.image} alt="Foto del contacto"></img>
        <h2>{props.Datos.apellido}</h2>
        <h2>{props.Datos.nombre}</h2>
        <h2>{props.Datos.mail}</h2>
        <h2>{props.Datos.fechanacimiento}</h2>
    </div>
);
}
//genero los componentes que quiero y los exporto

export default Cartas;