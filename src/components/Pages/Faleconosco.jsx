import React, { useState } from 'react';
import '../../App.css';

function Contact() {
    const [formEnviado, setFormEnviado] = useState(false);

    function enviarFormulario(event) {
        event.preventDefault();
        setFormEnviado(true);

        // Oculta o alerta após 5 segundos
        setTimeout(() => {
            setFormEnviado(false);
        }, 5000);

        console.log("Formulário enviado");
    }

    return (
        <div className="faleConosco">
            <h2>Fale Conosco</h2>
            
            <div id="sucesso-alert" className={`sucesso-alert ${formEnviado ? 'mostrar' : ''}`}>
                <p>Formulário enviado, nossa equipe entrará em contato em breve!</p>
            </div>

            <form id="formulario" onSubmit={enviarFormulario}>
                <label htmlFor="assunto">Assunto:</label>
                <input type="text" id="assunto" name="assunto" required />

                <label htmlFor="nome">Nome completo:</label>
                <input type="text" id="nome" name="nome" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="cpf">CPF:</label>
                <input type="text" id="cpf" name="cpf" required placeholder="000.000.000-00" />

                <label htmlFor="telefone">Telefone:</label>
                <input type="text" id="telefone" name="telefone" required placeholder="(00) 00000-0000" />

                <label htmlFor="mensagem">Mensagem:</label>
                <textarea id="mensagem" name="mensagem" required></textarea>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Contact;
