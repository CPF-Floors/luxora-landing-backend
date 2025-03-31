import { User } from "../interfaces/user.model";
import { Schema, models, model } from "mongoose";

const userSchema = new Schema<User>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    companyName: { type: String },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    message: { type: String },
    terms: { type: Boolean, required: true },
    promoCode: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const userModel = models.User || model<User>("User", userSchema);

export default userModel;
