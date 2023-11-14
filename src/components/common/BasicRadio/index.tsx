import React from 'react';
import { Radio, RadioProps } from 'antd';
import styles from './index.module.scss';

function BasicRadio(props: RadioProps & { typeRadio: 'default' | 'primary' }) {
  const { typeRadio, ...rest } = props;
  const combinedClassName = [
    typeRadio === 'primary' && styles.primaryRadio,
    typeRadio === 'default' && styles.defaultRadio,
  ]
    .filter((e) => e)
    .join(' ');
  return (
    <div className={combinedClassName}>
      <Radio {...rest} />
    </div>
  );
}
BasicRadio.defaultProps = {
  typeRadio: 'default',
};
export default BasicRadio;
