import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {

    return (
        <div>
            <DiretaFilho nome="Filho1" idade={20} nerd="true" />
            <DiretaFilho nome="Filho2" idade={15} nerd="false" />
        </div>
    )
}