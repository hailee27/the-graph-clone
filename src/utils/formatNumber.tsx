export const formatNumber = (num: number, digits?: number): string => {
  // if (!number) {
  //   return `${displaySign ? '+0' : '0'}`;
  // }
  // if (!Number.isNaN(numberValue)) {
  //   return `${displaySign ? `${Math.sign(numberValue) > 0 ? '+' : ''}` : ''}${new Intl.NumberFormat('ja-JP', {
  //     maximumFractionDigits: 0,
  //   }).format(numberValue)}`;
  // }

  // return number as string;
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: '万' },
    { value: 1e8, symbol: '億' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find(function (e) {
      return num >= e.value;
    });
  return item ? (num / item.value).toFixed(digits ?? 1).replace(rx, '$1') + item.symbol : '0';
};
