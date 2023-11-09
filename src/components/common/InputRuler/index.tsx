import React, { useMemo } from 'react';
import styles from './index.module.scss';
import { Slider } from 'antd';
import { SliderMarks, SliderRangeProps, SliderSingleProps } from 'antd/es/slider';

function InputRuler(props: SliderSingleProps | SliderRangeProps) {
  const marks = useMemo<SliderMarks>(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res: any = {};
    for (let index = 1; index <= 27; index++) {
      if (index % 10 === 0) {
        res[String(index)] = {
          style: {
            color: '#333',
            fontWeight: '500',
            fontSize: '18px',
          },
          label: <strong>{index}</strong>,
        };
      } else if (index === 1) {
        res[String(index)] = {
          style: {
            color: '#333',
            fontWeight: '500',
            fontSize: '18px',
          },
          label: <strong>{0}</strong>,
        };
      } else if (index === 27) {
        res[String(index)] = {
          style: {
            color: '#333',
            fontWeight: '500',
            fontSize: '18px',
          },
          label: <strong>{index}</strong>,
        };
      } else {
        res[String(index)] = {
          label: <strong>{}</strong>,
        };
      }
    }
    return res;
  }, []);

  return (
    <div className={styles.inputRuler}>
      <Slider marks={marks} max={27.5} min={0.5} {...props} step={1} />
    </div>
  );
}

export default InputRuler;
