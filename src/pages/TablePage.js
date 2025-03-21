import React from 'react';
import TablePIB from '../components/Table/TablePIB'; // Importe TablePIB
import useFetchData from '../hooks/useFetchData';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

const API_URL = 'https://servicodados.ibge.gov.br/api/v3/agregados/73/periodos/-60/variaveis/9286,9287?localidades=1';

const TablePage = () => {
  const { data, loading, error } = useFetchData(API_URL);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    let errorMessage = 'Erro ao carregar os dados. Por favor, tente novamente.'; 
    if (error.response && error.response.status === 500) {
      errorMessage = 'Erro no servidor do IBGE. Por favor, tente novamente mais tarde.';
    }

    return <ErrorMessage message={errorMessage} />;
  }

  return (
    <div>
      <h1>Tabela do PIB Brasileiro</h1>
      {data && <TablePIB data={data} />}
    </div>
  );
};

export default TablePage;
