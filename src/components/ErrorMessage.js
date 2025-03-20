import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  margin-top: 20px;
`;

const ErrorMessage = ({ message }) => {
  return (
    <ErrorContainer>
      <strong>Erro:</strong> {message}
    </ErrorContainer>
  );
};

export default ErrorMessage;