import { TProduct } from './product.interface';
import { Product } from './product.model';

const addBookDataIndoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllBookDataFromDB = async () => {
  const result = await Product.find({ isDeleted: false });
  return result;
};
export const productServices = {
  addBookDataIndoDB,
  getAllBookDataFromDB,
};
