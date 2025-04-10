import type { Request, Response } from "express";
import type { User, UserDTO } from "../interfaces/user.model";
import UserModel from "../models/user.model";
import EmailController from "./emails.controller";

class UserController {
  async getUserList(_req: Request, res: Response) {
    const users = await UserModel.find({});

    if (!users || users.length === 0)
      return res.status(404).json({ error: "No users found" });

    return res.status(200).json(users);
  }

  async getUser(req: Request, res: Response) {
    const userId = req.params.id;

    try {
      const user = await UserModel.findById(userId);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { email }: UserDTO = req.body;

      const existUser = await this.get(email);

      if (existUser) {
        return res.status(409).json(existUser);
      }

      const userSaved = await this.createUser(req.body);

      if (!userSaved) {
        return res.status(500).json({ error: "Internal Server Error" });
      }

      const { error } = await EmailController.sendEmail({ email });

      if (error) {
        console.log("Error to send email after create user", error);
      }

      return res.status(201).json(userSaved);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  private async get(email: string): Promise<User | null> {
    return await UserModel.findOne({ email });
  }

  private async createUser(
    user: Partial<Omit<User, "_id">>
  ): Promise<User | null> {
    const newUser = new UserModel(user);

    return await newUser.save();
  }
}

export default new UserController();
