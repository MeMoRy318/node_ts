import { NextFunction, Request, Response } from "express";

import { authService } from "../services";
import { IUser } from "../types";

class AuthControllers {
  public async register(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const user = await authService.register(req.body);
      res.status(201).json({ data: user });
    } catch (e) {
      next(e);
    }
  }
  public async login(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const { _id: userId } = req.res.locals as IUser;
      const tokenPair = await authService.login({ userId });
      res.status(201).json({ data: tokenPair });
    } catch (e) {
      next(e);
    }
  }
}

const authController = new AuthControllers();

export { authController };