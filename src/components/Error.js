import React from 'react';
import styles from './Error.module.css';

function Error() {
  return (
    <div className={styles.recipeError}>
        <h2>No recipes found with those search options</h2>
    </div>
  );
}

export default Error;