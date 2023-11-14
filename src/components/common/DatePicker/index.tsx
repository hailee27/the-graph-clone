import React, { useCallback } from 'react';
import styles from './index.module.scss';
import { Select, SelectProps } from 'antd';
import moment from 'moment';
function DatePicker(
  props: SelectProps & {
    type?: 'default' | 'primary';
    typePicker?: 'year' | 'month' | 'day';
    numberYear?: number;
    monthInYear?: number | string;
  }
) {
  const { type, size, suffixIcon, typePicker, numberYear, monthInYear, ...rest } = props;
  const combinedClassName = [
    type === 'primary' && styles.selectPrimary,
    type === 'default' && styles.customSelect,
    size === 'small' && styles.selectSmall,
  ]
    .filter((e) => e)
    .join(' ');
  const years = useCallback((back: number) => {
    const y = new Date().getFullYear();
    return Array.from({ length: back }, (v, i) => y - back + i + 1).reverse();
  }, []);
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const days = useCallback(() => {
    return Array.from({ length: moment(String(monthInYear)).daysInMonth() }, (v, i) => i + 1);
  }, [monthInYear]);

  if (typePicker === 'year') {
    return (
      <div className={combinedClassName}>
        <Select
          options={years(numberYear ?? 100).map((e) => ({
            label: e,
            value: e,
          }))}
          showSearch
          suffixIcon={
            suffixIcon ? (
              suffixIcon
            ) : (
              <svg fill="none" height="6" viewBox="0 0 8 6" width="8" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.81089 4.8764C4.41175 5.42946 3.58825 5.42946 3.18912 4.8764L0.813897 1.58521C0.336598 0.923841 0.809173 -7.16065e-07 1.62478 -6.44762e-07L6.37522 -2.29466e-07C7.19083 -1.58163e-07 7.6634 0.923841 7.1861 1.58521L4.81089 4.8764Z"
                  fill="#333333"
                />
              </svg>
            )
          }
          {...rest}
        />
      </div>
    );
  } else if (typePicker === 'month') {
    return (
      <div className={combinedClassName}>
        <Select
          options={months.map((e) => ({
            label: e,
            value: e,
          }))}
          showSearch
          suffixIcon={
            suffixIcon ? (
              suffixIcon
            ) : (
              <svg fill="none" height="6" viewBox="0 0 8 6" width="8" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.81089 4.8764C4.41175 5.42946 3.58825 5.42946 3.18912 4.8764L0.813897 1.58521C0.336598 0.923841 0.809173 -7.16065e-07 1.62478 -6.44762e-07L6.37522 -2.29466e-07C7.19083 -1.58163e-07 7.6634 0.923841 7.1861 1.58521L4.81089 4.8764Z"
                  fill="#333333"
                />
              </svg>
            )
          }
          {...rest}
        />
      </div>
    );
  }
  return (
    <div className={combinedClassName}>
      <Select
        options={days().map((e) => ({
          label: e,
          value: e,
        }))}
        showSearch
        suffixIcon={
          suffixIcon ? (
            suffixIcon
          ) : (
            <svg fill="none" height="6" viewBox="0 0 8 6" width="8" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.81089 4.8764C4.41175 5.42946 3.58825 5.42946 3.18912 4.8764L0.813897 1.58521C0.336598 0.923841 0.809173 -7.16065e-07 1.62478 -6.44762e-07L6.37522 -2.29466e-07C7.19083 -1.58163e-07 7.6634 0.923841 7.1861 1.58521L4.81089 4.8764Z"
                fill="#333333"
              />
            </svg>
          )
        }
        {...rest}
      />
    </div>
  );
}
DatePicker.defaultProps = {
  type: 'default',
  typePicker: undefined,
  numberYear: undefined,
  monthInYear: undefined,
};

export default DatePicker;
