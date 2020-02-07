import React from 'react';

export default class Form extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            mensagem: [22]
        }
        // Linha necessária para poder usar o "this" 
        // dentro de uma função que foi passada como callback
        this.lidarComClick = this.lidarComClick.bind(this);
    }


    lidarComClick(e) {
        this.props.onMyButtonClick(this.state.mensagem);
    }
    render(){
        return(
            <form className="form col-4 mt-5">
                <input type="text" className="form-control m-2" placeholder="Nome"/>
                <input type="url" className="form-control m-2" placeholder="Github"/>
                <div className="row justify-content-end">
                    <button type="submit" className="btn btn-primary" onSubmit={this.lidarComClick}>Enviar</button>
                </div>
            </form>
        )
    }

}