import React from 'react';
import ChartPIB from '../components/Chart/ChartPIB';
import useFetchData from '../hooks/useFetchData';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

const API_URL = 'https://servicodados.ibge.gov.br/api/v3/agregados/73/periodos/-60/variaveis/9286,9287?localidades=1';

const GraphPage = () => {
  const { data, loading, error } = useFetchData(API_URL);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    let errorMessage = 'Erro ao carregar os dados. Por favor, tente novamente.'; // Mensagem padrão
    if (error.response && error.response.status === 500) {
      errorMessage = 'Erro no servidor do IBGE. Por favor, tente novamente mais tarde.';
    }

    return <ErrorMessage message={errorMessage} />;
  }

  return (
    <div>
      <h1>Evolução do PIB Brasileiro</h1>
      {data && <ChartPIB data={data} />}
    </div>
  );
};

export default GraphPage;