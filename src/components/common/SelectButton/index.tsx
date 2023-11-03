import React from 'react';
import { Select, SelectProps } from 'antd';
import styles from './index.module.scss';

function SelectButton(props: SelectProps) {
  return (
    <div className={styles.customSelect}>
      <Select
        suffixIcon={
          <svg fill="none" height="6" viewBox="0 0 8 6" width="8" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.81089 4.8764C4.41175 5.42946 3.58825 5.42946 3.18912 4.8764L0.813897 1.58521C0.336598 0.923841 0.809173 -7.16065e-07 1.62478 -6.44762e-07L6.37522 -2.29466e-07C7.19083 -1.58163e-07 7.6634 0.923841 7.1861 1.58521L4.81089 4.8764Z"
              fill="#333333"
            />
          </svg>
        }
        {...props}
      />
    </div>
  );
}

export default SelectButton;
