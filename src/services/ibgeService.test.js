import fetchData from './ibgeService';
import axios from 'axios';

jest.mock('axios'); // Mocks the axios module

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

    axios.get.mockResolvedValue({ data: mockData }); // Mocks the axios.get method

    const data = await fetchData();

    expect(axios.get).toHaveBeenCalledTimes(1); // Verifies that axios.get was called once
    expect(data).toEqual([{
      ano: '2020',
      pibTotal: 1000,
      pibPerCapita: 1000
    }]); // Verifies that the function returns the expected data
  });

  it('should handle errors when fetching data from the API', async () => {
    axios.get.mockRejectedValue(new Error('API Error')); // Mocks the axios.get method to reject with an error

    await expect(fetchData()).rejects.toThrow('API Error'); // Verifies that the function throws an error
  });
});