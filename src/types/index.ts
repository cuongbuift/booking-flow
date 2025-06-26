export interface RoomInfo {
  id?: string;
  title?: string;
  description?: string;
  content?: string;
  price: number;
  image?: string;
}

export interface Contact {
  title?: string;
  fullName?: string;
  emailAddress?: string;
}

export interface Booking {
  id?: string;
  no?: string;
  fromDate?: string | Date;
  toDate?: string | Date;
  room?: RoomInfo;
  contact?: Contact;
  adults?: number;
  children?: number;
  night?: number;
  tax?: number;
  roomPrice?: number;
  totalPrice?: number;
  bookingDate?: string | Date;
}

export interface User {
  email?: string;
}
