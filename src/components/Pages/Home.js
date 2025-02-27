import React from 'react';
import '../../App.css';  // Importa o CSS global

function Home() {
    return (
        <div>
            <h1>Bem-vindo ao Global Solutions 2024</h1>
            <img src={`${process.env.PUBLIC_URL}/assets/imagens/EcoRacers1.png`} alt="Eco Racers" />
            <p>Conteúdo da página inicial aqui...</p>
        </div>
    );
}

export default Home;
