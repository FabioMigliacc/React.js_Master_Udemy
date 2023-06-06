/* eslint-disable react/no-typos */
import React from 'react';
import PropTypes from 'prop-types';

export const Tercercomponente = ({nombre, apellido , ficha}) => {
  return (
    <div>
        <h1> tercer componente</h1>
        <ul>
            <li>{nombre}</li>
            <li>{apellido}</li>
            <li>{ficha.sangre}</li>
            <li>{ficha.salud}</li>
            <li>{ficha.altura}</li>
        </ul>
    </div>
  )
}

Tercercomponente.propTypes = {

    nombre : PropTypes.string.isRequired,
    apellido : PropTypes.string,
    ficha : PropTypes.object


}

Tercercomponente.defaultProps = {

    nombre : 'fabs',
    apellido: 'pin'
}