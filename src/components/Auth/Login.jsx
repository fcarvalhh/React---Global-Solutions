import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Auth.css';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('usuarios')) || [];

    const foundUser = users.find(
      user => user.email === email && user.senha === senha
    );

    if (foundUser) {
      localStorage.setItem('logado', 'true');
      toast.success('Login realizado com sucesso!');
      setTimeout(() => navigate('/'), 2000);
    } else {
      toast.error('Usuário ou senha inválidos');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={e => setSenha(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
      <p>Não tem conta? <a href="/register">Cadastre-se</a></p>
    </div>
  );
}

export default Login;
