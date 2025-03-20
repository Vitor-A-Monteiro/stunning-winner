import React from 'react';
import PibChart from './components/PibChart';
import PibTable from './components/PibTable';
import { PibProvider } from './context/PibContext';
import './App.css';

function App() {
  return (
    <PibProvider>
      <div className="App">
        <h1>Evolução do PIB Brasileiro</h1>
        <PibChart />
        <PibTable />
      </div>
    </PibProvider>
  );
}

export default App;
