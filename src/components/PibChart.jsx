import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { PibContext } from '../context/PibContext';
import styles from './PibChart.module.css'; // Importe os estilos

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PibChart = () => {
  const { pibData, loading, error } = useContext(PibContext);

  if (loading) return <p>Carregando...</p>;  // TODO: Substituir pelo component Loader
  if (error) return <p>Erro ao carregar dados.</p>;

  const chartData = {
    labels: pibData.map(item => item.ano),
    datasets: [
      {
        label: 'PIB Total (US$)',
        data: pibData.map(item => item.pibTotal),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'PIB Per Capita (US$)',
        data: pibData.map(item => item.pibPerCapita),
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Evolução do PIB Brasileiro',
      },
    },
  };


  return (
    <div className={styles.chartContainer}>  {/* Aplique o estilo */}
      <Line data={chartData} options={options} />
    </div>
  );
};

export default PibChart;