import React from 'react';

class TableProfissionais extends React.Component{
    render(){
        console.log("PROFISSIONAIS:",this.props);
        return(
            <div>
                <table>
                    <tr>
                        <td>{this.props.nome}</td>
                        <td>{this.props.github}</td>
                    </tr>
                </table>
            </div>    
            // <h2>Eu sou uma tabela.</h2>
        )
    }

}

export default TableProfissionais;