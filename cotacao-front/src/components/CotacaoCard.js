import React from 'react';
import PropTypes from 'prop-types';
import './CotacaoCard.css';

const CotacaoCard = ({ cod, titulo, nome, atual, variacao, porcentagem }) => {
  const isPositive = porcentagem >= 0;

  return (
    <div className="cotacao-card">
      <h2>{cod} - {titulo}</h2>
      <p className="nome">{nome}</p>
      <p>Cotaçao Atual: <span className="alta">R$ {atual.toFixed(2)}</span></p>
      <p>
        Variação: 
        <span className={isPositive ? 'positivo' : 'negativo'}>
          {variacao >= 0 ? '+' : ''}{variacao.toFixed(2)}
        </span>
      </p>
      <p>
        Porcentagem: 
        <span className={isPositive ? 'positivo' : 'negativo'}>
          {porcentagem >= 0 ? '+' : ''}{porcentagem.toFixed(2)}%
        </span>
      </p>
    </div>
  );
};

CotacaoCard.propTypes = {
  code: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  atual: PropTypes.number.isRequired,
  variacao: PropTypes.number.isRequired,
  porcentagem: PropTypes.number.isRequired,
};

export default CotacaoCard;
