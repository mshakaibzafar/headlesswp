// components/Loading.js

import React from 'react';
import styles from './Loading.module.css'; // Import CSS file for styling

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.aiAnimation}></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
