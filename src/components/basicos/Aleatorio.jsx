import React from 'react'

export default (props) => {
    const min = props.min;
    const max = props.max;

    // destructuring
    //const { min, max}  = props

    const aleatorio = parseInt(Math.random() * (max - min) + min);

    return (
        <div>
            <h2>Valor aleatorio</h2>
            <p>
                <strong>Valor mínimo: </strong> { min }
            </p>
            <p>
                <strong>Valor máximo: </strong> { max }
            </p>
            <p>
                <strong>Valor escolhido: </strong> { aleatorio }
            </p>
        </div>
    )
}