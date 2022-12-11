import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import axios from 'axios';
import getErrorMessage from '../utils/getErrorMessage';

class ListController {
  static getFriendlist = async (req: Request, res: Response) => {
    try {
      const url = 'https://jsonplaceholder.typicode.com/users';
      const { data } = await axios.get(
        url,
        {
          headers: { 'Accept-Encoding': 'gzip,deflate,compress' },
        },
      );
      return res.status(StatusCodes.OK).send(data);
    } catch (error) {
      return res.status(StatusCodes.NOT_FOUND).send({ message: getErrorMessage(error) });
    }
  };
}

export default ListController;
