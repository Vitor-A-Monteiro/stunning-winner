import React from 'react';
import styles from './Loader.module.css'; // Importe os estilos CSS

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.spinner}></div>
      <p>Carregando...</p>
    </div>
  );
};

export default Loader;