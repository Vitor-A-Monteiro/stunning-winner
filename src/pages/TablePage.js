import React, { useState, useEffect } from 'react';
import TablePIB from '../components/TablePIB';
import fetchData from '../services/ibgeService';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

const TablePage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const fetchedData = await fetchData();
        setData(fetchedData);
      } catch (err) {
        setError('Erro ao carregar os dados. Por favor, tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div>
      <h1>PIB Brasileiro por Ano</h1>
      {data && <TablePIB data={data} />}
    </div>
  );
};

export default TablePage;