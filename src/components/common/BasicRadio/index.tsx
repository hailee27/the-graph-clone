import React from 'react';
import { Radio, RadioProps } from 'antd';
import styles from './index.module.scss';

function BasicRadio(props: RadioProps) {
  return (
    <div className={styles.customeRadio}>
      <Radio {...props} />
    </div>
  );
}

export default BasicRadio;
