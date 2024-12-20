import { useState, useEffect } from 'react';

const useCotacoes = () => {
  const [cotacoes, setCotacoes] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCotacoes = async () => {
      try {
        // Substitua pela URL correta
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL');
        if (!response.ok) throw new Error('Erro ao buscar cotações');
        const data = await response.json();
        setCotacoes(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchCotacoes();
  }, []);

  return { cotacoes, error };
};

export default useCotacoes;