import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import GraphPage from './pages/GraphPage';
import TablePage from './pages/TablePage';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  padding: 10px;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
  }
  li {
    a {
      color: white;
      text-decoration: none;
      padding: 10px;
      display: block;
      &:hover {
        background-color: #555;
      }
    }
  }
`;

const App = () => {
  return (
    <Router>
      <Nav>
        <ul>
          <li>
            <Link to="/">Gráfico do PIB</Link>
          </li>
          <li>
            <Link to="/tabela">Tabela do PIB</Link>
          </li>
        </ul>
      </Nav>
      <Routes>
        <Route path="/" element={<GraphPage />} />
        <Route path="/tabela" element={<TablePage />} />
      </Routes>
    </Router>
  );
};

export default App;