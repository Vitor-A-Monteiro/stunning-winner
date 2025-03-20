import React, { createContext, useState, useEffect } from 'react';
import { fetchPibData } from '../services/api'; // Vamos criar isso

export const PibContext = createContext();

export const PibProvider = ({ children }) => {
  const [pibData, setPibData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
        setLoading(true);
        try {
            const data = await fetchPibData(); // Função para buscar os dados
            setPibData(data);
            console.log("Dados do PIB:", data); // Adicione este log
        } catch (err) {
            setError(err);
            console.error("Erro ao buscar dados do PIB:", err);
        } finally {
            setLoading(false);
            console.log("Loading:", loading, "Error:", error); // Adicione este log
        }
    };

    loadData();
}, []);

  return (
    <PibContext.Provider value={{ pibData, loading, error }}>
      {children}
    </PibContext.Provider>
  );
};