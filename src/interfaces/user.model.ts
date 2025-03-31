import { Types } from "mongoose";

export interface User {
  _id: Types.ObjectId;
  name: string;
  email: string;
  companyName?: string;
  phone: string;
  address: string;
  message?: string;
  terms: boolean;
  promoCode: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserDTO extends Omit<User, "_id"> {}
