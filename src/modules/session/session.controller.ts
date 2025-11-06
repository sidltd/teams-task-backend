import { Request, Response } from "express";
import { generateToken } from "./session.service";
import { AuthRequest } from "../../types/auth";
import { User } from "../user/user.model";
import InvalidCredentialsError from "../../errors/invalidcredentialsError";

export const signin = async (req: Request, res: Response) => {
  const {
    email, password
  } = req.body;

  const user = await User.findOne({ email, role: "admin" })
  if (!user) throw new InvalidCredentialsError("Either username or password is incorrect", 422);
  
  const isMatch = await user.comparePassword(password)
  if(!isMatch) throw new InvalidCredentialsError("Either username or password is incorrect", 422);

  const token = await generateToken(email, password);

  res.cookie("token", token, {
    sameSite: "strict",
    maxAge: 24 * 60 * 60 * 1000
  })

  res.status(200).json(user)
};

export const me = (req: AuthRequest, res: Response) => {
  if (!req.user) {
    return res.status(200).json({})
  } else {
    return res.json(req.user)
  }
}

export const signout = (req: Request, res: Response) => {
  res.clearCookie("token", {
    sameSite: "strict"
  })

  res.json({message: "Logged out successfully"})
}