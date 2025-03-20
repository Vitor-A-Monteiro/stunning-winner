import React, { useContext } from 'react';
import { PibContext } from '../context/PibContext';
import styles from './PibTable.module.css';  // Importe os estilos

const PibTable = () => {
  const { pibData, loading, error } = useContext(PibContext);

  if (loading) return <p>Carregando...</p>; //TODO:  Substituir pelo component Loader
  if (error) return <p>Erro ao carregar dados.</p>;

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };

  return (
    <div className={styles.tableContainer}> {/* Aplique o estilo */}
      <table>
        <thead>
          <tr>
            <th>Ano</th>
            <th>PIB Total (US$)</th>
            <th>PIB Per Capita (US$)</th>
          </tr>
        </thead>
        <tbody>
          {pibData.map((item) => (
            <tr key={item.ano}>
              <td>{item.ano}</td>
              <td>{formatCurrency(item.pibTotal)}</td>
              <td>{formatCurrency(item.pibPerCapita)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PibTable;