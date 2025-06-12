import type { Booking, RoomInfo } from '@/types';
import dayjs from 'dayjs';
import { defineStore } from 'pinia';
const keyStore = 'bookingSession';
const storeSession = (booking: Booking) => {
  sessionStorage.setItem(keyStore, JSON.stringify(booking));
};

const getSession = (): Booking => {
  const data = sessionStorage.getItem(keyStore);
  const result = JSON.parse(data || '{}');
  console.log('result: ', result);

  return result;
};

const useBookingStore = defineStore(keyStore, {
  state: () => getSession() as Booking,
  actions: {
    selectRoom(
      room: RoomInfo,
      fromDate: string | Date,
      toDate: string | Date,
      adults: number,
      children: number,
    ) {
      this.room = room;
      this.fromDate = fromDate;
      this.toDate = toDate;
      this.adults = adults;
      this.children = children;

      this.night = dayjs(toDate).diff(dayjs(fromDate), 'day');
      this.roomPrice = room.price * this.night;
      this.tax = this.roomPrice * 0.09;
      this.totalPrice = this.roomPrice + this.tax;

      this.store();
    },
    addContact(title: string, fullName: string, emailAddress: string) {
      this.no = `RES${Math.floor(100000000 + Math.random() * 900000000)}`;
      this.contact = {
        title,
        fullName,
        emailAddress,
      };

      this.store();
    },
    store() {
      storeSession({
        room: this.room,
        fromDate: this.fromDate,
        toDate: this.toDate,
        adults: this.adults,
        children: this.children,
        night: this.night,
        roomPrice: this.roomPrice,
        tax: this.tax,
        totalPrice: this.totalPrice,
        no: this.no,
        contact: this.contact,
      });
    },
  },
  getters: {
    searchParams(state) {
      return {
        fromDate: state.fromDate,
        toDate: state.toDate,
        adults: state.adults,
        children: state.children,
      };
    },
  },
});

export default useBookingStore;
