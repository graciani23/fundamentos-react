import React, { Component } from 'react'

import './Contador.css'

class Contador extends Component {

    state = {
        numero: this.props.numInicial || 0,
        passo: this.props.passoInicial || 5,
    }

    // a arrow function faz com o inc aponte para o objeto atual (this)
    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (e) => {
        this.setState({
            passo: +e.target.value
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <div>
                    <label htmlFor="passoInput">Passos: </label>
                    <input type="number" id="passoInput" value={this.state.passo} onChange={this.setPasso}/>
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }
}

export default Contador