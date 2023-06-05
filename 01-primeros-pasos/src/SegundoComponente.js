import React from 'react'

export const SegundoComponente = () => {

    //const libros = ['harry popper','harry popper', 'merry poppins', 'pino la lavatrice'];
     const libros = [];

console.log(libros)

    return (
        <div className='segundo-componente'>
            <h1> segundo componente</h1>
            <h2>  Listado de libros</h2>

            {libros.length >= 1 ? 
            (<ul>
                    {
                        libros.map((libro, indice) => {
                            return <li key={indice}> {libro} </li>;
                        })
                    }

                </ul>)
                : (<p>  no books available</p>)
            }




        </div>
    )
}