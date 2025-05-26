import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Auth.css';

function Register() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


  const handleRegister = () => {
    if (!email || !senha) {
      toast.error('Preencha todos os campos!');
      return;
    }

    if (!isEmailValid(email)) {
      toast.error('Digite um email válido!');
      return;
    }

    if (senha.length < 8) {
      toast.error('A senha deve ter no mínimo 8 caracteres!');
      return;
    }

    // Busca usuários existentes ou inicia array vazio
    const users = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verifica duplicação
    const exists = users.find((user) => user.email === email);

    if (exists) {
      toast.error('Este email já está cadastrado!');
      return;
    }

    // Adiciona novo usuário
    const newUser = { email, senha };
    users.push(newUser);
    localStorage.setItem('usuarios', JSON.stringify(users));

    toast.success('Cadastro realizado com sucesso!');
    setTimeout(() => navigate('/login'), 1000);
  };

  return (
    <div className="auth-container">
      <h2>Cadastro</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha (mínimo 8 caracteres)"
        value={senha}
        onChange={e => setSenha(e.target.value)}
      />
      <button onClick={handleRegister}>Cadastrar</button>
      <p>Já tem conta? <a href="/login">Entrar</a></p>
    </div>
  );
}

export default Register;
