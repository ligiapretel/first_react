import React from 'react';

class TableProfissionais extends React.Component{
    render(){
        console.log("PROFISSIONAIS:",this.props);
        return(
            <div>
                <table className="table col-4 mt-5">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Github</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* O nome que passo dentro do map eu que escolho */}
                        {this.props.dados.map((profissional)=>{
                            return(
                                <tr key={profissional.id}>
                                    <td>{profissional.nome}</td>
                                    <td>{profissional.github}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                    {/* Para acessar o somente um dado, eu preciso indicar a posição do array, conforme abaixo */}
                    {/* <tr>
                        <td>{this.props.dados[0].nome}</td>
                        <td>{this.props.dados[0].github}</td>
                    </tr> */}
                </table>
            </div>    
            // <h2>Eu sou uma tabela.</h2>
        )
    }

}

export default TableProfissionais;