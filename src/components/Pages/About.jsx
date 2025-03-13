import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import sapLogo from '../../assets/imagens/sap-png.png';
import fiaLogo from '../../assets/imagens/fia.png';
import mahindraLogo from '../../assets/imagens/mahindra.png';
import ultragazLogo from '../../assets/imagens/ultragaz.jpg';
import ultracargoLogo from '../../assets/imagens/ultracargo.png';

function About() {
    return (
        <div>
            <section className="hero">
                <h1>Sobre Nós</h1>
                <p>Conheça nossa história e nossa missão.</p>
            </section>

            <section className="features">
                <h2>Quem Somos</h2>
                <div className="card-container-aboutus">
                    <div className="card-aboutus">
                        <h3>Nosso Compromisso</h3>
                        <p>
                            Nosso compromisso é transformar o mundo em um lugar melhor, utilizando a educação de crianças e jovens como ferramenta central, aliada à tecnologia e à sustentabilidade. 
                            Acreditamos que não há grupo mais capacitado e inovador do que as novas gerações para impulsionar mudanças significativas e duradouras. 
                            Por meio de soluções educacionais baseadas em tecnologia, buscamos inspirar e capacitar os jovens a se tornarem agentes de transformação, 
                            promovendo práticas sustentáveis e desenvolvendo habilidades que contribuam para um futuro mais equilibrado e consciente.
                        </p>
                    </div>
                    <div className="card-aboutus">
                        <h3>Nosso Time</h3>
                        <p>
                            Somos uma equipe de dois desenvolvedores comprometidos com a criação de soluções inovadoras e sustentáveis, com o objetivo de contribuir para um futuro melhor para as próximas gerações. 
                            Nosso trabalho é guiado por valores de excelência, ética e responsabilidade social, buscando sempre o desenvolvimento de tecnologias que impactem positivamente a sociedade.
                        </p>
                    </div>
                    <div className="card-aboutus">
                        <h3>Visão e Missão</h3>
                        <p>
                            Nossa missão é criar um futuro melhor para as próximas gerações por meio do desenvolvimento de um jogo educacional inovador, que integra gamificação e conscientização energética 
                            em um ambiente de corrida automobilística sustentável. Buscamos, por meio dessa experiência, promover a educação ambiental e incentivar práticas sustentáveis, 
                            ao mesmo tempo em que proporcionamos uma vivência interativa e envolvente para os jogadores.
                        </p>
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
                    <img className="partner-logos-ultracargo" src={ultracargoLogo} alt="Ultracargo" />
                </div>
            </section>

            <section className="call-to-action">
                <h2>Entre em Contato Conosco</h2>
                <p>Se você deseja saber mais sobre nós, estamos à disposição para conversar.</p>
                <Link to="/contact" className="cta-btn">Fale Conosco</Link>
            </section>
        </div>
    );
}

export default About;
