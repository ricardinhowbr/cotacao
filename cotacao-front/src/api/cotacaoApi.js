import axios from 'axios';

export const fetchCotacoes = async () => {
  try {
    const response = await axios.get('https://api.exchangerate-api.com/v4/latest/BRL');
    return response.data.rates;
  } catch (error) {
    console.error('Erro ao buscar cotações:', error);
    throw error;
  }
};