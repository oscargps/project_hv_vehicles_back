import httpStatus from "http-status";
import { Request, Response } from "express";
const Literal = require("../models/literal.model");
class LiteralController {
    public async getLiterals(request: Request, res: Response, next: any) {
        try {
            const literals = await Literal.findAll();
            res.status(httpStatus.OK).json(literals);
        } catch (error: any) {
            res.status(error.Status.StatusCode).json({ result: "error" });
        }
    }
}

const LiteralControllerInstance = new LiteralController();
export default LiteralControllerInstance;
