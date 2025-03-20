import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const ChartContainer = styled.div`
  width: 100%;
  height: 400px;
`;

const ChartPIB = ({ data }) => {
  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="ano" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pibTotal" stroke="#8884d8" name="PIB Total (U$)"/>
          <Line type="monotone" dataKey="pibPerCapita" stroke="#82ca9d" name="PIB Per Capita (U$)"/>
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default ChartPIB;