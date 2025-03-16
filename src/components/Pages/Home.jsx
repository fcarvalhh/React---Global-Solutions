import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import sapLogo from '../../assets/imagens/sap-png.png';
import fiaLogo from '../../assets/imagens/fia.png';
import mahindraLogo from '../../assets/imagens/mahindra.png';
import ultragazLogo from '../../assets/imagens/ultragaz.jpg';
import ultracargoLogo from '../../assets/imagens/ultracargo.png';

function Home() {
    return (
        <main>
            <section className="hero">
                <h1>Bem-vindo à plataforma sustentável da EcoRacers</h1>
                <p>Educando, conscientizando e promovendo mudanças com gamificação.</p>
                <Link to="/about" className="cta-btn">Saiba mais sobre nós</Link>
            </section>

            <section className="features">
                <h2>Nossos Destaques</h2>
                <div className="card-container">
                    <div className="card">
                        <h3><a href="resources.html">Gamificação Educativa</a></h3>
                        <p>Transformando aprendizado em experiências interativas.</p>
                    </div>
                    <div className="card">
                        <h3><a href="resources.html">Soluções Sustentáveis</a></h3>
                        <p>Promovendo práticas que respeitam o meio ambiente.</p>
                    </div>
                    <div className="card">
                        <h3><a href="resources.html">Engajamento Social</a></h3>
                        <p>Motivando mudanças de comportamento em crianças e adultos.</p>
                    </div>
                </div>
            </section>

            <section className="partners">
                <h2>Empresas Parceiras</h2>
                <br />
                <div className="partner-logos">
                    <img src={sapLogo} alt="SAP" />
                    <img src={fiaLogo} alt="FiA" />
                    <img src={mahindraLogo} alt="Mahindra" />
                    <img src={ultragazLogo} alt="Ultragaz" />
                    <img src={ultracargoLogo} alt="Ultracargo" />
                </div>
            </section>

            <section className="call-to-action">
                <h2>Quer participar dessa mudança?</h2>
                <p>Junte-se a nós e faça parte do futuro sustentável!</p>
                <Link to="/contact" className="cta-btn">Fale Conosco</Link>
            </section>
        </main>
    );
}

export default Home;