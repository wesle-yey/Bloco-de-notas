import React from 'react';
import '../App.css';

function Caderneta() {
    return (
        <div className="caderneta">
            <div className="espiral">
                <div className="wire"></div> {/* Arame contínuo */}
                {/* Adicionando buracos dinamicamente */}
                {[...Array(15)].map((_, index) => (
                    <div key={index} className="buraco"></div>
                ))}
            </div>
            <div className="linhas">
                {[...Array(10)].map((_, index) => (
                    <div key={index}></div>
                ))}
            </div>
            <div className="conteudo">
                <textarea></textarea>
                <p>Este é um exemplo de conteúdo dentro da caderneta. Você pode adicionar texto, imagens ou qualquer outro elemento que desejar.</p>
            </div>
        </div>
    );
}

export default Caderneta;