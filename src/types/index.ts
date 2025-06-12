export interface RoomInfo {
  id?: number;
  title?: string;
  description?: string;
  content?: string;
  price: number;
  image?: string;
}

export interface Contact {
  title?: 'Mr.' | 'Ms.' | 'Mrs.';
  fullName?: string;
  emailAddress?: string;
}

export interface Booking {
  fromDate?: string | Date;
  toDate?: string | Date;
  room?: RoomInfo;
  contact?: Contact;
  tax?: number;
  totalPrice?: number;
  numberOfQuests?: number;
}
