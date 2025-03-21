import React from 'react';
import { render, screen } from '@testing-library/react';
import ChartPIB from './Chart/ChartPIB';

test('renders the chart with the provided data', () => {
  const data = [
    { ano: '2020', pibTotal: 1000, pibPerCapita: 500 },
    { ano: '2021', pibTotal: 1200, pibPerCapita: 600 },
  ];

  render(<ChartPIB data={data} />);

 
  const year2020Element = screen.getByText('2020');
  expect(year2020Element).toBeInTheDocument();

 
  const year2021Element = screen.getByText('2021');
  expect(year2021Element).toBeInTheDocument();
});
