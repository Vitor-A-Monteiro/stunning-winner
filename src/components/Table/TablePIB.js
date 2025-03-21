import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  background-color: #f2f2f2;
  padding: 8px;
  border: 1px solid #ddd;
  text-align: left;
`;

const Td = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;

const TablePIB = React.memo(({ data }) => {
  console.log("TablePIB component rendered"); 

  return (
    <Table>
      <thead>
        <tr>
          <Th>Ano</Th>
          <Th>PIB Total (U$)</Th>
          <Th>PIB Per Capita (U$)</Th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.ano}>
            <Td>{item.ano}</Td>
            <Td>{item.pibTotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</Td>
            <Td>{item.pibPerCapita.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
});

export default TablePIB;
