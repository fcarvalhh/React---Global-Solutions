import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <header>
        <div className="navbar">

          <ul className="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">Sobre</a></li>
            <li><a href="resources.html">Recursos</a></li>
            <li><a href="partners.html">Parcerias</a></li>
            <li><a href="fale-conosco.html">Fale conosco</a></li>
          </ul>
        </div>
      </header>

      <main>
        <section className="hero">
          <h1>Bem-vindo à plataforma sustentável da EcoRacers</h1>
          <p>Educando, conscientizando e promovendo mudanças com gamificação.</p>
          <a href="about.html" class="cta-btn">Saiba Mais</a>
        </section>

        <section class="features">
          <h2>Nossos Destaques</h2>

          <div class="card-container">
            <div class="card">
              <h3><a href="resources.html">Gamificação Educativa</a></h3>
              <p>Transformando aprendizado em experiências interativas.</p>
            </div>

            <div class="card">
              <h3><a href="resources.html">Soluções Sustentáveis</a></h3>
              <p>Promovendo práticas que respeitam o meio ambiente.</p>
            </div>

            <div class="card">
              <h3><a href="resources.html">Engajamento Social</a></h3>
              <p>Motivando mudanças de comportamento em crianças e adultos.</p>
            </div>

          </div>
        </section>

        <section class="features">
          <h2>Nossos Destaques</h2>

          <div class="card-container">
            <div class="card">
              <h3><a href="resources.html">Gamificação Educativa</a></h3>
              <p>Transformando aprendizado em experiências interativas.</p>
            </div>

            <div class="card">
              <h3><a href="resources.html">Soluções Sustentáveis</a></h3>
              <p>Promovendo práticas que respeitam o meio ambiente.</p>
            </div>

            <div class="card">
              <h3><a href="resources.html">Engajamento Social</a></h3>
              <p>Motivando mudanças de comportamento em crianças e adultos.</p>
            </div>

          </div>
        </section>

        <section class="features">
          <h2>Nossos Destaques</h2>
          <div class="card-container">
            <div class="card">
              <h3><a href="resources.html">Gamificação Educativa</a></h3>
              <p>Transformando aprendizado em experiências interativas.</p>
            </div>
            <div class="card">
              <h3><a href="resources.html">Soluções Sustentáveis</a></h3>
              <p>Promovendo práticas que respeitam o meio ambiente.</p>
            </div>
            <div class="card">
              <h3><a href="resources.html">Engajamento Social</a></h3>
              <p>Motivando mudanças de comportamento em crianças e adultos.</p>
            </div>
          </div>
        </section>

        <footer>
          <p>&copy; 2024 Plataforma Sustentável - EcoRacers. Todos os direitos reservados.</p>
        </footer>





      </main>

    </>
  );
}

export default App;
