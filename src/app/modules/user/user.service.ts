/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from './user.model';


const getMe = async (userId: string, role: string) => {
  let result = null;
  if (role === 'student') {
    result = await User.findOne({ id: userId }).populate('user');
  }
  if (role === 'admin') {
    result = await User.findOne({ id: userId }).populate('user');
  }

  if (role === 'faculty') {
    result = await User.findOne({ id: userId }).populate('user');
  }

  return result;
};

const changeStatus = async (id: string, payload: { status: string }) => {
  const result = await User.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

export const UserServices = {
  getMe,
  changeStatus,
};
