import httpStatus from "http-status";
import { Request, Response } from "express";
const Literal = require("../models/literal.model");
const User = require("../models/user.model");
class UserController {
    public async getUsers(request: Request, res: Response, next: any) {
        try {
            const users = await User.findAll( {
                include: [
                  {
                    model: Literal,
                    as: 'subscriptionType',
                    attributes: ['value'], // Obtener solo el nombre del documento
                  },
                  {
                    model: Literal,
                    as: 'subscriptionStatus',
                    attributes: ['value'], // Obtener solo el nombre del documento
                  }
                ],
              });
            res.status(httpStatus.OK).json(users);
        } catch (error: any) {
            res.status(error.Status.StatusCode).json({ result: "error" });
        }
    }
    public async createUser(request: Request, res: Response, next: any) {
        try {
            await User.create(request.body)
            res.status(httpStatus.OK).json({});
        } catch (error: any) {
            res.status(httpStatus.FAILED_DEPENDENCY).json({ result: "error" });
        }
    }
}


const userController = new UserController();
export default userController;
