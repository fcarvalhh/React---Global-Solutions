import React, { useState } from 'react';
import '../../App.css';

function Resources() {
    const [respostas, setRespostas] = useState({});

    const checkAnswer = (indexPergunta, indexOpcao, correta) => {
        setRespostas((prev) => ({
            ...prev,
            [`${indexPergunta}-${indexOpcao}`]: correta ? "certa" : "errada",
        }));
    };

    return (
        <main>
            <section className="hero">
                <h1>Recursos</h1>
                <p>Perguntas para ajudar na educação de jovens e crianças!</p>
            </section>
            <div className="container">
                <h2>Quiz de conscientização ambiental</h2>

                <div className="question">
                    <p>
                        <strong>1. Qual é a principal causa do aquecimento global?</strong>
                    </p>
                    <ul className="options">
                        <li onClick={() => checkAnswer(0, 0, true)} className={respostas["0-0"]}>
                            Queima de combustíveis fósseis
                        </li>
                        <li onClick={() => checkAnswer(0, 1, false)} className={respostas["0-1"]}>
                            Desmatamento
                        </li>
                        <li onClick={() => checkAnswer(0, 2, false)} className={respostas["0-2"]}>
                            Erupções vulcânicas
                        </li>
                    </ul>
                </div>

                <div className="question">
                    <p>
                        <strong>2. Quanto tempo leva para uma garrafa plástica se decompor na natureza?</strong>
                    </p>
                    <ul className="options">
                        <li onClick={() => checkAnswer(1, 0, false)} className={respostas["1-0"]}>
                            50 anos
                        </li>
                        <li onClick={() => checkAnswer(1, 1, false)} className={respostas["1-1"]}>
                            100 anos
                        </li>
                        <li onClick={() => checkAnswer(1, 2, true)} className={respostas["1-2"]}>
                            450 anos
                        </li>
                    </ul>
                </div>

                <div className="question">
                    <p>
                        <strong>3. O que é mais eficaz para reduzir o lixo?</strong>
                    </p>
                    <ul className="options">
                        <li onClick={() => checkAnswer(2, 0, false)} className={respostas["2-0"]}>
                            Reciclar tudo
                        </li>
                        <li onClick={() => checkAnswer(2, 1, true)} className={respostas["2-1"]}>
                            Reduzir o consumo
                        </li>
                        <li onClick={() => checkAnswer(2, 2, false)} className={respostas["2-2"]}>
                            Comprar produtos biodegradáveis
                        </li>
                    </ul>
                </div>

                <div className="question">
                    <p>
                        <strong>4. Qual é a principal fonte de energia renovável utilizada no Brasil?</strong>
                    </p>
                    <ul className="options">
                        <li onClick={() => checkAnswer(3, 0, true)} className={respostas["3-0"]}>
                            Energia solar
                        </li>
                        <li onClick={() => checkAnswer(3, 1, false)} className={respostas["3-1"]}>
                            Energia nuclear
                        </li>
                        <li onClick={() => checkAnswer(3, 2, false)} className={respostas["3-2"]}>
                            Energia eólica
                        </li>
                    </ul>
                </div>

                <div className="question">
                    <p>
                        <strong>5. O que é a pegada de carbono?</strong>
                    </p>
                    <ul className="options">
                        <li onClick={() => checkAnswer(4, 0, false)} className={respostas["4-0"]}>
                            O total de recursos naturais consumidos por uma pessoa
                        </li>
                        <li onClick={() => checkAnswer(4, 1, true)} className={respostas["4-1"]}>
                            A quantidade de gases do efeito estufa emitidos por uma pessoa ou atividade
                        </li>
                        <li onClick={() => checkAnswer(4, 2, false)} className={respostas["4-2"]}>
                            O impacto ambiental causado pelo uso de plástico
                        </li>
                    </ul>
                </div>

                <div className="question">
                    <p>
                        <strong>6. O que pode ser feito para reduzir a poluição do ar?</strong>
                    </p>
                    <ul className="options">
                        <li onClick={() => checkAnswer(5, 0, false)} className={respostas["5-0"]}>
                            Aumentar o uso de carros particulares
                        </li>
                        <li onClick={() => checkAnswer(5, 1, true)} className={respostas["5-1"]}>
                            Usar transporte público e reduzir o uso de veículos
                        </li>
                        <li onClick={() => checkAnswer(5, 2, false)} className={respostas["5-2"]}>
                            Queimar mais combustíveis fósseis
                        </li>
                    </ul>
                </div>

                <div className="question">
                    <p>
                        <strong>7. O que é o desmatamento ilegal?</strong>
                    </p>
                    <ul className="options">
                        <li onClick={() => checkAnswer(6, 0, true)} className={respostas["6-0"]}>
                            Corte de árvores sem autorização legal
                        </li>
                        <li onClick={() => checkAnswer(6, 1, false)} className={respostas["6-1"]}>
                            Corte de árvores para uso de madeira reciclada
                        </li>
                        <li onClick={() => checkAnswer(6, 2, false)} className={respostas["6-2"]}>
                            Corte de árvores para replantio em outra área
                        </li>
                    </ul>
                </div>

                <div className="question">
                    <p>
                        <strong>8. Qual a principal consequência do uso excessivo de plásticos?</strong>
                    </p>
                    <ul className="options">
                        <li onClick={() => checkAnswer(7, 0, true)} className={respostas["7-0"]}>
                            Contaminação dos oceanos e vida marinha
                        </li>
                        <li onClick={() => checkAnswer(7, 1, false)} className={respostas["7-1"]}>
                            Aquecimento global
                        </li>
                        <li onClick={() => checkAnswer(7, 2, false)} className={respostas["7-2"]}>
                            Perda da biodiversidade nas florestas tropicais
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}

export default Resources;
