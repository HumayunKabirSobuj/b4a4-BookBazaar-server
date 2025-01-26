import { TProduct } from './product.interface';
import { Product } from './product.model';

const addBookDataIndoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

export const productServices = {
  addBookDataIndoDB,
};
