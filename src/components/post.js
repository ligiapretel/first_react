import React from 'react';

class Post extends React.Component{
    // Sempre que tiver uma classe de React.Component, chamamos o render.
    render(){
        // Colocamos o código html dentro de ()
        return(
            <div>
            <h1>{this.props.titulo}</h1>
            {/* props - Passo todas as propriedade criadas no meu componente */}
            <p>{this.props.texto}</p>
            </div>
        )
    }
}

// Quando exportamos a classe Post, outros arquivos poderão importar essa classe. Se não colocarmos o default, temos que chamar de outra no import.
export default Post;