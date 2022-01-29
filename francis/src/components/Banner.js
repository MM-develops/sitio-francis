import React from 'react'

function Banner( props ) {
    return (
        <>
            <div className={ props.color + " banner" }>
                <p>Todas las imagenes, renders, acabados, representación y decoración interior son mostrados con fines ilustrativos, diseñados por Walden Desarrollos para Francis. La información presentada esta sujeta a errores y cambios sin previo aviso.</p>
            </div>
        </>
    )
}

export default Banner
