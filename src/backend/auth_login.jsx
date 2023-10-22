import axios from 'axios';

function fazerLogin(username, password) {
  return axios.post('/api/login', { username, password })
    .then(response => {
      // Salva o token do usuário na localStorage ou em algum outro lugar de armazenamento
      localStorage.setItem('token', response.data.token);
      // Retorna os dados do usuário para que possam ser usados em outros lugares na aplicação
      return response.data.user;
    });
}

