import React from 'react';

export default class Form extends React.Component{
    render(){
        return(
            <form className="form col-4 mt-5">
                <input type="text" className="form-control m-2" placeholder="Nome"/>
                <input type="url" className="form-control m-2" placeholder="Github"/>
                <div className="row justify-content-end">
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </form>
        )
    }

}