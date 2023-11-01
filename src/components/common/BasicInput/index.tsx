import { Input, InputProps } from 'antd';
import React from 'react';
import styles from './index.module.scss';

function BasicInput(props: InputProps) {
  return (
    <div className={styles.customInput}>
      <Input {...props} />
    </div>
  );
}

export default BasicInput;
