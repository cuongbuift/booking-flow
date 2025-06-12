import type { RoomInfo } from '@/types';

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

export const getRooms = () => {
  return new Promise<RoomInfo[]>((resolve) => {
    setTimeout(() => {
      resolve(rooms);
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
