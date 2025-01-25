import { Request, Response } from 'express';
import { userServices } from './user.service';

const registerUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    // console.log('User Data', userData);
    const result = await userServices.RegisterUserIntoDB(userData);
    res.status(200).json({
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: true,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

export const userController = {
  registerUser,
};
