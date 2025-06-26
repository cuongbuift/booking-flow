import type { RoomInfo } from '@/types';
import restService from './restService';

export const getRooms = (order: 'asc' | 'desc'): Promise<RoomInfo[]> => {
  return new Promise((resolve) => {
    restService.get<RoomInfo[]>('/rooms').then((response) => {
      const rooms = response.data;
      rooms.sort((a, b) => (order === 'asc' ? a.price - b.price : b.price - a.price));
      resolve(rooms);
    });
  });
};

export const getRoomById = (id: string) => {
  return restService.get<RoomInfo>(`/rooms/${id}`);
};
