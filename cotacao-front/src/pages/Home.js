import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CotacaoCard from '../components/CotacaoCard';
import './Home.css';

const Home = () => {
  const [cotacoes, setCotacoes] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCotacoes = async () => {
      try {
        const response = await axios.get(
          'https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL'
        );
        setCotacoes(response.data);
      } catch (err) {
        setError('Erro ao buscar cotações');
      }
    };
    fetchCotacoes();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!cotacoes) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="home">
      {console.log("cotacoes: ", cotacoes)}
      <div className="cards">
        <CotacaoCard
          titulo="Dólar"
          nome={cotacoes.USDBRL.name}
          atual={parseFloat(cotacoes.USDBRL.bid)}
          variacao={parseFloat(cotacoes.USDBRL.varBid)}
          porcentagem={parseFloat(cotacoes.USDBRL.pctChange)}
        />
        <CotacaoCard
          titulo="Euro"
          nome={cotacoes.EURBRL.name}
          atual={parseFloat(cotacoes.EURBRL.bid)}
          variacao={parseFloat(cotacoes.EURBRL.varBid)}
          porcentagem={parseFloat(cotacoes.EURBRL.pctChange)}
        />
        <CotacaoCard
          titulo="Libra"
          nome={cotacoes.GBPBRL.name}
          atual={parseFloat(cotacoes.GBPBRL.bid)}
          variacao={parseFloat(cotacoes.GBPBRL.varBid)}
          porcentagem={parseFloat(cotacoes.GBPBRL.pctChange)}
        />
        <CotacaoCard
          titulo="Bitcoin"
          nome={cotacoes.BTCBRL.name}
          atual={parseFloat(cotacoes.BTCBRL.bid)}
          variacao={parseFloat(cotacoes.BTCBRL.varBid)}
          porcentagem={parseFloat(cotacoes.BTCBRL.pctChange)}
        />
      </div>
    </div>
  );
};

export default Home;