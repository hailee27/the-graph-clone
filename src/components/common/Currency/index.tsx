import React from 'react';
import { formatNumber } from '../../../utils/formatNumber';

interface Props {
  onChange?: () => void;
  value?: number;
}
function Currency(props: Props) {
  const { value } = props;
  return (
    <div>
      <span className="text-[48px]  font-bold  truncate">{formatNumber(value as number)}</span>
    </div>
  );
}

export default Currency;
