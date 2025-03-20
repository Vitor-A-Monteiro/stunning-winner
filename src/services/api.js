const API_URL = 'https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData';
const PIB_TOTAL_VAR = 3704;
const PIB_PER_CAPITA_VAR = 3706;

async function fetchData(variableId) {
    try {
        const response = await fetch(`${API_URL}&variavel=${variableId}`);
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Erro na requisição: ${response.status} - ${errorText}`);
        }
        const data = await response.json();
        return data[0].resultados[0].series['1'].map((value, index) => ({
            ano: data[0].periodos[index],
            valor: parseFloat(value),
        }));
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        throw error; // Propaga o erro para ser tratado no componente
    }
}

export const fetchPibData = async () => {
    try {
        const [pibTotalData, pibPerCapitaData] = await Promise.all([
            fetchData(PIB_TOTAL_VAR),
            fetchData(PIB_PER_CAPITA_VAR),
        ]);

        // Processa e combina os dados para criar um único array com ambas as variáveis
        const combinedData = pibTotalData.map((total, index) => ({
            ano: total.ano,
            pibTotal: total.valor,
            pibPerCapita: pibPerCapitaData[index].valor,
        }));

        return combinedData;
    } catch (error) {
        console.error('Erro ao buscar dados combinados do PIB:', error);
        throw error;
    }
};