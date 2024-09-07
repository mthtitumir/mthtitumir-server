/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
// import express, { NextFunction, Request, Response } from 'express';
import auth from '../../middlewares/auth';
// import { upload } from '../../utils/sendImageToCloudinary';
import { USER_ROLE } from './user.constant';
import { UserControllers } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';

const router = express.Router();
//for admins only
router.get(
  '/',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  UserControllers.getAllUser,
);

router.post(
  '/',
  validateRequest(UserValidation.createUser),
  UserControllers.createUser,
);

router.patch(
  '/:id',
  auth(),
  validateRequest(UserValidation.updateUser),
  UserControllers.updateUser,
);

router.patch(
  '/change-status/:id',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  validateRequest(UserValidation.changeStatus),
  UserControllers.changeStatus,
);

router.get(
  '/me',
  auth(
    USER_ROLE.superAdmin,
    USER_ROLE.admin,
  ),
  UserControllers.getMe,
);

router.get(
  '/:id',
  UserControllers.getSingleUser,
)

export const UserRoutes = router;
