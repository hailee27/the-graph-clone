import { Input, InputProps } from 'antd';
import React, { useState } from 'react';
import styles from './index.module.scss';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

function BasicInput(props: InputProps) {
  const { type, ...rest } = props;
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className={styles.customInput}>
      {type === 'password' ? (
        <div className="w-full h-full relative">
          <Input {...rest} type={showPassword ? 'text' : 'password'} />
          <div
            className="absolute right-4 top-[50%] -translate-y-[50%] z-[10] cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </div>
        </div>
      ) : (
        <Input
          {...rest}
          onKeyDown={(event) => {
            if (type === 'number' && /\+|-/.test(event.key)) {
              event.preventDefault();
            }
          }}
          onWheel={(e) => e.currentTarget.blur()}
          type={type}
        />
      )}
    </div>
  );
}

export default BasicInput;
