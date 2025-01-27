import { Order } from './payment.model';

const paymentSuccessfullIntoDB = async (transactionId: string) => {
  const result = await Order.findOneAndUpdate(
    { transactionId: transactionId },
    { paidStatus: true },
  );

  return result;
};
const paymentFailedDeleteThisIntoDB = async (transactionId: string) => {
  const result = await Order.findOneAndDelete({ transactionId: transactionId });

  return result;
};

export const paymentService = {
  paymentSuccessfullIntoDB,
  paymentFailedDeleteThisIntoDB,
};
