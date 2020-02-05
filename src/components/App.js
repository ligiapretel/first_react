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
                    nome: "Wagner Venceslau",
                    github: "http://github.io/wagven"
                    },
                    {
                    nome: "Eduardo Rocha",
                    github: "http://github.io/eduroc"
                    }
                    ]
            }
    }
    render(){
        // console.log("STATE:",this.state);
        return( 
            <div>
                <h1>Hello world.</h1>
                {/* Passando os profissionais do estado para dentro do componente TableProfissionais. O nome do prop eu posso criar do jeito que desejar, aqui criei como profissionais mesmo. No state, chamo o nome que criei acima. */}
                <TableProfissionais profissionais={this.state.profissionais} />
                <Form />
            </div>
        )
    }

}

// Posso exportar o componentena mesma linha da class, conforme feito acima
// export default App;