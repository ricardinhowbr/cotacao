import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';

import './CotacaoChart.css';

// Registre as escalas e componentes usados no gráfico
ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

const CotacaoChart = ({ historico }) => {
  const chartRef = useRef(null);

  // Chama os hooks fora do retorno condicional
  const labels = historico ? historico.map((data) => data.date) : [];
  const valores = historico ? historico.map((data) => data.valor) : [];

  const data = {
    labels,
    datasets: [
      {
        label: 'Cotação (R$)',
        data: valores,
        fill: false,
        borderColor: '#007bff',
        tension: 0.1,
      },
    ],
  };

  useEffect(() => {
    const chartInstance = chartRef.current && chartRef.current.chartInstance;
    
    if (chartInstance) {
      // Destrua o gráfico existente antes de criar um novo
      chartInstance.destroy();
    }

    // Retorna uma função de limpeza para destruir o gráfico quando o componente for desmontado
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [historico]); // A dependência é o histórico, então será chamado novamente quando o histórico mudar

  if (!historico || historico.length === 0) {
    return <p>Carregando gráfico...</p>;
  }

  return (
    <div className="cotacao-chart">
      <h3>Gráfico de Cotações</h3>
      <Line ref={chartRef} data={data} />
    </div>
  );
};

CotacaoChart.propTypes = {
  historico: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      valor: PropTypes.number.isRequired,
    })
  ),
};

export default CotacaoChart;