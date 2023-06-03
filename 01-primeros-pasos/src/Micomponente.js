import React from 'react'

export const Micomponente = () => {
    let nombre = 'fabio';
    let web = 'fabio.com'

    let usuario ={
        nombre : 'fabio',
        apellido : 'migliaccio',
        web : 'fabio.com'
    }
  return (
    <>
    <h2> componente creado</h2>
    <h3> usuario</h3><ul>
    <li>nombre: <strong>{usuario.nombre}</strong></li>
    <li>web : <strong>{usuario.apellido}</strong></li>
    <li>web : <strong>{usuario.web}</strong></li>
    </ul>
    <p> primer componente </p>
    <ul>
        <li>React</li>
        <li>Angular</li>
        <li>Vue</li>
    </ul>

    </>
  )
}
