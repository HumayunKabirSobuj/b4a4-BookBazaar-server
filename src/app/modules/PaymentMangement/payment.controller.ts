import catchAsync from '../../utils/catchAsync';
import { paymentService } from './payment.service';

const paymentSuccess = catchAsync(async (req, res) => {
  const tranId = req.params.tranId;
  // console.log('Transaction ID:', tranId);
  await paymentService.paymentSuccessfullIntoDB(tranId);

  res.redirect(`http://localhost:5173/payment-successful/${req.params.tranId}`);
});
const paymentFailed = catchAsync(async (req, res) => {
  const tranId = req.params.tranId;
  // console.log('Transaction ID:', tranId);
  await paymentService.paymentFailedDeleteThisIntoDB(tranId);

  res.redirect(`http://localhost:5173/payment-failed/${req.params.tranId}`);
});

export const paymentController = {
  paymentSuccess,
  paymentFailed
};
