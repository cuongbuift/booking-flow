import dayjs from 'dayjs';

export const formatNumber = (value: number | undefined | null, digits: number = 0) => {
  if (value === undefined || value === null) return '';
  return new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
};

export const formatCurrency = (value: number | undefined | null, digits: number = 0) => {
  return `S$${formatNumber(value, digits)}`;
};

export const formatDateISO = (value: Date | string | null | undefined) => {
  if (!value) return undefined;
  return dayjs(value).format('YYYY-MM-DD');
};

export const formatDate = (value: Date | string | null | undefined) => {
  if (!value) return '';
  return dayjs(value).format('MMM DD, YYYY');
};

export const generateBookingNo = () => `RES${Math.floor(100000000 + Math.random() * 900000000)}`;
