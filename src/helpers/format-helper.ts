export const formatNumber = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'SGD',
    currencyDisplay: 'symbol',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(value);
};
