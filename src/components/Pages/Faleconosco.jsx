import React, { useState } from 'react';
import '../../App.css';
import emailjs from '@emailjs/browser';

function Contact() {
    const [formEnviado, setFormEnviado] = useState(false);

   async function enviarFormulario(event) {
  event.preventDefault();

    const form = event.target;
    const title = form.assunto.value.trim();
    const name = form.nome.value.trim();
    const email = form.email.value.trim();
    const telefone = form.telefone.value.trim();

  const SERVICE_ID = "service_cqcfpfl";
  const TEMPLATE_ID = "template_m4wtvq9";
  const USER_ID = "gYwp8noz9cNoGjsup";

  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        title,
        name,
        email,
        message: `Obrigado pelo contato ${name}, daqui a pouco nós entraremos em contato para falar sobre "${title}",
        daqui a pouco entraremos em contato com o seu número que é ${telefone}`,
      },
      USER_ID
    );

    console.log(response);
    setFormEnviado(true);
    form.reset();

    setTimeout(() => {
      setFormEnviado(false);
    }, 5000);
  } catch (error) {
    console.error("Erro ao enviar email:", error);
  }
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
