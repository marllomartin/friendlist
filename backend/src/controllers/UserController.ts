import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import generateToken from '../utils/generateToken';
import getErrorMessage from '../utils/getErrorMessage';

class UserController {
  static login = async (req: Request, res: Response) => {
    const user = req.body;
    try {
      const token = generateToken(user);
      const success = true;
      return res.status(StatusCodes.OK).json({ success, token });
    } catch (error) {
      const message = getErrorMessage(error);
      const success = false;
      return res.status(StatusCodes.NOT_FOUND).send({ success, message });
    }
  };
}

export default UserController;
