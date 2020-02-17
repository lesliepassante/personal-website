import React from 'react';
import styles from './index.module.scss';

export default ({ children, ...props }) => {
  return (
    <a {...props} className={styles.social}>
      {children}
    </a>
  );
};
