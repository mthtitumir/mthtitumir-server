/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TUser } from './user.interface';
import { User } from './user.model';


const getAllUser = async () => {
  const result = await User.find();
  return result;
};

const getSingleUser = async (id:string) => {
  const result = await User.findById(id);
  return result;
};

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

const createUser = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};

const updateUser = async (id: string, payload: Partial<TUser>) => {
  const result = await User.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

const changeStatus = async (id: string, payload: { isBanned: boolean }) => {
  const result = await User.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

export const UserServices = {
  getAllUser,
  createUser,
  updateUser,
  changeStatus,
  getMe,
  getSingleUser,
};
