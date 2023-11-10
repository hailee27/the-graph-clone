import { Input, InputProps } from 'antd';
import React from 'react';
import styles from './index.module.scss';

function BasicInput(props: InputProps) {
  const { type } = props;

  return (
    <div className={styles.customInput}>
      <Input
        {...props}
        onKeyDown={(event) => {
          if (type === 'number' && /\+|-/.test(event.key)) {
            event.preventDefault();
          }
        }}
        type={type}
      />
    </div>
  );
}

export default BasicInput;
