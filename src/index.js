import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Post from './components/post';

ReactDOM.render(
    (
        // Quando temos tag html uma embaixo da outra, precisamos colocar div para renderizar.
        <div className="content">
            <div className="card">
                <div className="card-header">
                    <h1 className="card-title">Hello Word</h1>,
                    <Post texto="Olá," titulo="Título 1"/>
                    <Post texto="Tudo bem?" titulo="Título 2"/>
                    <Post texto="Sim, sim." titulo="Título 3"/>
                </div>
            </div>
        </div>
    ),
document.getElementById('root')
);