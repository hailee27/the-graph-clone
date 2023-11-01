import React from 'react';
import { Button, ButtonProps } from 'antd';
import styles from './index.module.scss';
function BasicButton(props?: ButtonProps) {
  const { children, type, className, disabled, ...antdProps } = props;
  const combinedClassName = [
    type === 'primary' && styles.btnPrimary,
    type === 'secondary' && styles.btnSecondary,
    type === 'default' && styles.btnDefault,
    disabled && styles.btnDisabled,
    className,
  ]
    .filter((e) => e)
    .join(' ');

  return (
    <div className={`${combinedClassName}`}>
      <Button {...antdProps}>{children}</Button>
    </div>
  );
}
BasicButton.defaultProps = {
  children: undefined,
  type: 'primary',
  className: undefined,
  disabled: false,
};
export default BasicButton;
