import axios from 'axios';

const API_URL = 'https://servicodados.ibge.gov.br/api/v3/agregados/73/periodos/-60/variaveis/9286,9287?localidades=1';
const MAX_RETRIES = 3; 
const fetchData = async (retries = 0) => {
  try {
    const response = await axios.get(API_URL);
    console.log("API Response:", response);
    return response.data[0].resultados[0].series.map(item => ({
      ano: item.periodo,
      pibTotal: item.valor,
      pibPerCapita: item.valor
    }));
  } catch (error) {
    console.error(`Erro ao buscar dados da API (tentativa ${retries + 1}):`, error);
    console.log("Erro detalhado:", error.message, error.response);

    if (retries < MAX_RETRIES) {
      console.log(`Tentando novamente em 1 segundo...`);
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      return fetchData(retries + 1); 
    } else {
      console.error("Número máximo de tentativas atingido. Desistindo.");
      if (error.response && error.response.status === 500) {
        throw new Error("Erro no servidor do IBGE. Por favor, tente novamente mais tarde.");
      } else {
        throw new Error("Erro ao buscar dados. Por favor, verifique sua conexão com a internet e tente novamente.");
      }
    }
  }
};

export default fetchData;
