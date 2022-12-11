import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import getErrorMessage from '../utils/getErrorMessage';

class AuthMiddleware {
  static async authToken(req: Request, res: Response, next: NextFunction) {
    const { authorization: token } = req.headers;

    try {
      if (!token) throw new Error('A token is required');
      const secret = 'secret_key';
      const verify = jwt.verify(token, secret);
      if (!verify) throw new Error('Invalid token');
      return next();
    } catch (error) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: getErrorMessage(error) });
    }
  }
}

export default AuthMiddleware;
