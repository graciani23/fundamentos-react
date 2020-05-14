import React from 'react'

import './App.css'


import Card from './components/layout/Card'

import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

export default () => (
    <div className="App">
        <h1>Fundamento React</h1>

        <div className="Cards">

            <Card titulo="Contador" color="#f64b3c">
                <Contador numInicial={10} />
            </Card>
            
            <Card titulo="Componente controlado" color="#c06c84">
                <Input></Input>
            </Card>
            
            <Card titulo="Comunicação Indireta" color="#df7861">
                <IndiretaPai></IndiretaPai>
            </Card>
            
            <Card titulo="Comunicação Direta" color="#9dc6a7">
                <DiretaPai></DiretaPai>
            </Card>
            
            <Card titulo="Repetição Produtos" color="#f3c623">
                <ParOuImpar numero={20}></ParOuImpar>
                {/* <UsuarioInfo usuario={{ nome: 'Fernando' }} /> */}
                <UsuarioInfo usuario={{ email: 'fernando@email.com' }} />
            </Card>
            
            <Card titulo="Repetição Produtos" color="#8566aa">
                <TabelaProdutos>
                    
                </TabelaProdutos>
            </Card>

            <Card titulo="Repetição Alunos" color="#00bdaa">
                <ListaAlunos sobrenome="Silva">
                    
                </ListaAlunos>
            </Card>

            <Card titulo="Componente com Filhos" color="#d7385e">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

            <Card titulo="Exemplo de Card" color="#2a1a5e">
                <Aleatorio min={2} max={20} />
            </Card>

            <Card titulo="Fragmento" color="#f45905">
                <Fragmento />
            </Card>

            <Card titulo="Com Parâmetro" color="#fb9224">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro" nota="9.3"
                />
            </Card>

            <Card titulo="Primeiro Componente" color="#fbe555">
                <Primeiro></Primeiro>
            </Card>
        </div>

    </div>
)