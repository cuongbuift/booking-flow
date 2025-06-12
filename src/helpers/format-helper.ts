import dayjs from 'dayjs';

export const formatNumber = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export const formatCurrency = (value: number) => {
  return `S$${formatNumber(value)}`;
};

export const formatDateISO = (value: Date | string | null) => {
  if (!value) return undefined;
  return dayjs(value).format('YYYY-MM-DD');
};

export const formatDate = (value: Date | string | null) => {
  if (!value) return '';
  return dayjs(value).format('MMM DD, YYYY');
};
