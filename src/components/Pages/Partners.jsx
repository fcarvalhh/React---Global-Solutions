import React from 'react';
import '../../App.css';
import sapLogo from '../../assets/imagens/sap-png.png';
import fiaLogo from '../../assets/imagens/fia.png';
import mahindraLogo from '../../assets/imagens/mahindra.png';
import ultragazLogo from '../../assets/imagens/ultragaz.jpg';
import ultracargoLogo from '../../assets/imagens/ultracargo.png';

function Partners() {
    return (
        <div>
            <main>
                <section className="hero">
                    <h1>Parcerias</h1>
                    <p>Ferramentas incríveis para ajudar na educação de <strong>Jovens</strong> e <strong>Crianças</strong></p>
                </section>
                <section className="features">
                    <div className="card-container-partners">
                        <div className="card-partners">
                            <h3>SAP</h3>
                            <img className="partner-logos" src={sapLogo} alt="SAP" />
                        </div>
                        <div className="card-partners">
                            <h3>FIA</h3>
                            <img className="partner-logos" src={fiaLogo} alt="FIA" />
                        </div>
                        <div className="card-partners">
                            <h3>Mahindra</h3>
                            <img className="partner-logos" src={mahindraLogo} alt="Mahindra" />
                        </div>
                        <div className="card-partners">
                            <h3>Ultracargo</h3>
                            <img className="partner-logos" src={ultracargoLogo} alt="Ultracargo" />
                        </div>
                        <div className="card-partners">
                            <h3>Ultragaz</h3>
                            <img className="partner-logos" src={ultragazLogo} alt="Ultragaz" />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Partners;