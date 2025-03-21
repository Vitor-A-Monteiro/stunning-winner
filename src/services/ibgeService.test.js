import fetchData from './ibgeService';
import axios from 'axios';

jest.mock('axios'); 

describe('ibgeService', () => {
  it('should fetch data successfully from the API', async () => {
    const mockData = [{
      resultados: [{
        series: [{
          periodo: '2020',
          valor: 1000
        }]
      }]
    }];

    axios.get.mockResolvedValue({ data: mockData }); 

    const data = await fetchData();

    expect(axios.get).toHaveBeenCalledTimes(1); 
    expect(data).toEqual([{
      ano: '2020',
      pibTotal: 1000,
      pibPerCapita: 1000
    }]); 
  });

  it('should handle errors when fetching data from the API', async () => {
    axios.get.mockRejectedValue(new Error('API Error')); 

    await expect(fetchData()).rejects.toThrow('API Error'); 
  });
});
