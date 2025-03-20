import axios from 'axios';

const API_URL = 'https://servicodados.ibge.gov.br/api/v3/agregados/73/periodos/-60/variaveis/9286,9287?localidades=1';

const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data[0].resultados[0].series.map(item => ({
      ano: item.periodo,
      pibTotal: item.valor,
      pibPerCapita: item.valor
    }));
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    throw error; // Propagar o erro para o componente que chama a função
  }
};

export default fetchData;