import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { productServices } from './product.service';

const addBookData = catchAsync(async (req, res) => {
  const result = await productServices.addBookDataIndoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Book Data Added Successfully',
    data: result,
  });
});

export const productController = {
  addBookData,
};
