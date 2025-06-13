import type { Booking, RoomInfo } from '@/types';
import dayjs from 'dayjs';

const rooms: RoomInfo[] = [
  {
    id: 1,
    title: 'Deluxe Room',
    description: 'Includes breakfast and free Wi-Fi.',
    content: 'A spacious room with a king-size bed and a beautiful view.',
    price: 1500,
    image: './image_0.jpg',
  },
  {
    id: 2,
    title: 'Standard Room',
    description: 'Includes free Wi-Fi.',
    content: 'A comfortable room with all basic amenities.',
    price: 999,
    image: './image_1.jpeg',
  },
  {
    id: 3,
    title: 'Suite Room',
    description: 'Luxury suite with breakfast, Wi-Fi, and minibar.',
    content: 'An elegant suite with a separate living area and premium amenities.',
    price: 2500,
    image: './image_2.jpeg',
  },
  {
    id: 4,
    title: 'Family Room',
    description: 'Spacious room for families, includes breakfast.',
    content: 'A large room with two queen beds, perfect for families.',
    price: 1800,
    image: './image_3.jpeg',
  },
  {
    id: 5,
    title: 'Single Room',
    description: 'Ideal for solo travelers, includes Wi-Fi.',
    content: 'A cozy room with a single bed and workspace.',
    price: 800,
    image: './image_4.jpeg',
  },
  {
    id: 6,
    title: 'Executive Room',
    description: 'Includes breakfast, Wi-Fi, and executive lounge access.',
    content: 'A modern room with business amenities and city views.',
    price: 2000,
    image: './image_5.jpeg',
  },
  {
    id: 7,
    title: 'Twin Room',
    description: 'Two single beds, includes Wi-Fi.',
    content: 'A comfortable room with twin beds and a relaxing ambiance.',
    price: 1200,
    image: './image_6.jpeg',
  },
  {
    id: 8,
    title: 'Presidential Suite',
    description: 'Top-tier suite with all luxury amenities.',
    content: 'A grand suite with multiple rooms, private balcony, and premium services.',
    price: 5000,
    image: './image_7.jpeg',
  },
  {
    id: 9,
    title: 'Garden View Room',
    description: 'Room with a view of the garden, includes breakfast.',
    content: 'A peaceful room overlooking the hotel gardens.',
    price: 1300,
    image: './image_8.jpeg',
  },
  {
    id: 10,
    title: 'Penthouse',
    description: 'Exclusive penthouse with panoramic views.',
    content: 'A luxurious penthouse suite with private terrace and jacuzzi.',
    price: 7000,
    image: './image_9.jpg',
  },
];

const bookings: Booking[] = [];
export const generateBooking = () => {
  bookings.length = 0;
  for (let index = 0; index < 10; index++) {
    const room = rooms[Math.floor(Math.random() * 10)];
    // Generate a random fromDate within February 2025
    const startDay = Math.floor(Math.random() * 24) + 1; // 1 to 24
    const maxNights = 5;
    const nights = Math.floor(Math.random() * maxNights) + 1; // 1 to 5
    const fromDate = `2025-06-${startDay.toString().padStart(2, '0')}`;
    const toDate = dayjs(fromDate).add(nights, 'day').format('YYYY-MM-DD');
    const night = dayjs(toDate).diff(dayjs(fromDate), 'day');
    const roomPrice = room.price * night;
    const tax = roomPrice * 0.09;
    const totalPrice = roomPrice + tax;
    const titles = ['Mr.', 'Mrs.'];
    const names = [
      { fullName: 'John Butler', emailAddress: 'john.b@email.com' },
      { fullName: 'Emily Clark', emailAddress: 'emily.c@email.com' },
      { fullName: 'Michael Smith', emailAddress: 'michael.s@email.com' },
      { fullName: 'Sarah Johnson', emailAddress: 'sarah.j@email.com' },
      { fullName: 'David Lee', emailAddress: 'david.l@email.com' },
      { fullName: 'Anna Brown', emailAddress: 'anna.b@email.com' },
      { fullName: 'James Wilson', emailAddress: 'james.w@email.com' },
      { fullName: 'Linda Taylor', emailAddress: 'linda.t@email.com' },
      { fullName: 'Robert Miller', emailAddress: 'robert.m@email.com' },
      { fullName: 'Jessica Davis', emailAddress: 'jessica.d@email.com' },
    ];
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    const randomName = names[Math.floor(Math.random() * names.length)];

    const booking: Booking = {
      no: `RES${Math.floor(100000000 + Math.random() * 900000000)}`,
      fromDate,
      toDate,
      room,
      contact: {
        title: randomTitle,
        fullName: randomName.fullName,
        emailAddress: randomName.emailAddress,
      },
      adults: 2,
      children: 0,
      night,
      tax,
      roomPrice,
      totalPrice,
      bookingDate: dayjs()
        .subtract(Math.floor(Math.random() * 60) + 1, 'day')
        .format('YYYY-MM-DD'),
    };

    bookings.push(booking);
  }
};

export const getRooms = (order: 'asc' | 'desc') => {
  return new Promise<RoomInfo[]>((resolve) => {
    setTimeout(() => {
      resolve(rooms.sort((a, b) => (order === 'asc' ? a.price - b.price : b.price - a.price)));
    }, 250);
  });
};

export const getRoomById = (id: number) => {
  return new Promise<RoomInfo | undefined>((resolve) => {
    setTimeout(() => {
      const room = rooms.find((room) => room.id === id);
      resolve(room);
    }, 250);
  });
};

export const getUpComingBooking = () => {
  return new Promise<Booking[]>((resolve) => {
    setTimeout(() => {
      const data = bookings.filter((x) => dayjs(x.fromDate).isAfter(dayjs(), 'day'));
      resolve(data);
    }, 250);
  });
};

export const getPassBooking = () => {
  return new Promise<Booking[]>((resolve) => {
    setTimeout(() => {
      const data = bookings.filter((x) => dayjs().isAfter(dayjs(x.fromDate), 'day'));
      resolve(data);
    }, 250);
  });
};
