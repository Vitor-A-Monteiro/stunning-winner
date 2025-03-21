// src/pages/GraphPage.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import GraphPage from './GraphPage';
import * as ibgeService from '../services/ibgeService'; 


jest.mock('../services/ibgeService', () => ({
  __esModule: true, 
  default: jest.fn() 
}));

describe('GraphPage', () => {
  it('should display loading message while data is being fetched', () => {
  
    ibgeService.default.mockResolvedValue([]);

    render(<GraphPage />);

    expect(screen.getByText(/carregando/i)).toBeInTheDocument(); 
  });

  it('should display data when data is successfully fetched', async () => {
    const mockData = [
      { ano: '2020', pibTotal: 1000, pibPerCapita: 500 },
      { ano: '2021', pibTotal: 1200, pibPerCapita: 600 },
    ];

    // Configura o mock para retornar os dados mockados
    ibgeService.default.mockResolvedValue(mockData);

    render(<GraphPage />);

    // Espera que os dados sejam carregados e exibidos
    await waitFor(() => {
      expect(screen.getByText('2020')).toBeInTheDocument();
      expect(screen.getByText('2021')).toBeInTheDocument();
    });
  });

  it('should display error message when data fetching fails', async () => {
  
    ibgeService.default.mockRejectedValue(new Error('API Error'));

    render(<GraphPage />);

   
    await waitFor(() => {
      expect(screen.getByText(/erro ao carregar os dados/i)).toBeInTheDocument();
    });
  });
});
