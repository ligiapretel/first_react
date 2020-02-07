// Em todo componente devo importar o react, para extender dele depois.
import React from 'react';
import TableProfissionais from './TableProfissionais';
import Form from './Form';

export default class App extends React.Component{
    constructor(props){
        super(props)
            this.state={
                profissionais: [
                    {
                    id: 1,
                    nome: "Wagner Venceslau",
                    github: "http://github.io/wagven"
                    },
                    {
                    id: 2,
                    nome: "Eduardo Rocha",
                    github: "http://github.io/eduroc"
                    }
                    ]
            }
            // Linha necessária para poder usar o "this" 
            // dentro de uma função que foi passada como callback
            this.handleClick = this.handleClick.bind(this);
    }

    handleClick(mensagem) {
        console.log(mensagem);
    }

    render(){
        // Para verificar se estamos recebendo o state, damos um console.log nele
        // console.log("STATE:",this.state);
        return( 
            <div>
                <h1>Hello world.</h1>
                {/* Passando os profissionais do estado para dentro do componente TableProfissionais. O nome do prop (propridade/atributo) eu posso criar do jeito que desejar, aqui criei como profissionais mesmo. No state, chamo o nome que criei acima. */}
                <TableProfissionais dados={this.state.profissionais} />
                <Form onMyButtonClick={this.handleClick}/>
            </div>
        )
    }

}

// Posso exportar o componentena mesma linha da class, conforme feito acima
// export default App;