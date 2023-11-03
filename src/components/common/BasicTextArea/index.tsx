import React from 'react';
import styles from './index.module.scss';
import { Input } from 'antd';
import { TextAreaProps } from 'antd/es/input';

const { TextArea } = Input;

function BasicTextArea(props: TextAreaProps) {
  return (
    <div className={styles.customeTextArea}>
      <TextArea {...props} />
    </div>
  );
}

export default BasicTextArea;
