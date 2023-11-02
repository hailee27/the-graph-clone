import { Input, InputProps } from 'antd';
import React from 'react';
import styles from './index.module.scss';

function InputPassword(props: InputProps) {
  return (
    <div className={styles.customInput}>
      <Input.Password {...props} />
    </div>
  );
}

export default InputPassword;
