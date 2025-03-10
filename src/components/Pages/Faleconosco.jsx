import React from 'react';
import '../../App.css';

function enviarFormulario(event) {
    event.preventDefault();
    // Adicione aqui a lógica para enviar o formulário
    console.log("Formulário enviado");
}

function Contact() {
    return (
        <div className="faleConosco">

            <h2>Fale Conosco</h2>
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