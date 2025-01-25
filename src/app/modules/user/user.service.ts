import { TUser } from './user.interface';
import { User } from './user.model';

const RegisterUserIntoDB = async (userData: TUser) => {
  // console.log(userData);

  const result = await User.create(userData);
  return result;
};

export const userServices = {
  RegisterUserIntoDB,
};
