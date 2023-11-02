import React from 'react';
import { Select, SelectProps } from 'antd';
import styles from './index.module.scss';

function SelectButton(props: SelectProps) {
  return (
    <div className={styles.customSelect}>
      <Select {...props} />
    </div>
  );
}

export default SelectButton;
