import dotenv from "dotenv";
dotenv.config();

export const config = {
  DATA_BASE_URL: process.env.DATA_BASE_URL,
  PORT: process.env.PORT || 3001,
  resend_api: process.env.resend_api,
  own_email: process.env.own_email,
};
