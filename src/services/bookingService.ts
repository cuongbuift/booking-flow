import type { Booking } from '@/types';
import restService from './restService';
import dayjs from 'dayjs';

export const submitBooking = (booking: Booking) => {
  return restService.post('/bookings', booking);
};

export const getComingBooking = () => {
  return new Promise<Booking[]>((resolve) => {
    return restService.get<Booking[]>('/bookings').then((response) => {
      const bookings = response.data;
      resolve(
        bookings
          .filter((x) => !dayjs().isAfter(dayjs(x.fromDate), 'day'))
          .sort((a, b) => (dayjs(a.fromDate).isAfter(dayjs(b.fromDate), 'day') ? 0 : 1)),
      );
    });
  });
};

export const getPassBooking = () => {
  return new Promise<Booking[]>((resolve) => {
    return restService.get<Booking[]>('/bookings').then((response) => {
      const bookings = response.data;
      resolve(
        bookings
          .filter((x) => dayjs().isAfter(dayjs(x.fromDate), 'day'))
          .sort((a, b) => (dayjs(a.fromDate).isAfter(dayjs(b.fromDate), 'day') ? 0 : 1)),
      );
    });
  });
};
