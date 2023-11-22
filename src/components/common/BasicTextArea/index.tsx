import React from 'react';
import styles from './index.module.scss';
import { Input } from 'antd';
import { TextAreaProps } from 'antd/es/input';

const { TextArea } = Input;

function BasicTextArea(props: TextAreaProps) {
  const { value, maxLength, showCount, ...rest } = props;

  return (
    <div className={styles.customeTextArea}>
      <TextArea {...rest} value={value} />
      {showCount && (
        <div className="text-right">
          {value ? String(value)?.length : 0}/{maxLength}
        </div>
      )}
    </div>
  );
}
BasicTextArea.defaultProps = {
  showCount: true,
};
export default BasicTextArea;
