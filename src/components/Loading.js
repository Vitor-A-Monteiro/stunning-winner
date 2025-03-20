import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  width: 100%;
  padding: 20px;
  text-align: center;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <Skeleton count={5} height={30} style={{ marginBottom: '10px' }} />
    </LoadingContainer>
  );
};

export default Loading;