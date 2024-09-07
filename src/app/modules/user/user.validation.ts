import { z } from 'zod';

const createUser = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),
    username: z.string().min(3, "Username must be at least 3 characters long"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    profileImage: z.string().url("Invalid URL for profile image").optional(),
    bio: z.string().max(500, "Bio must not exceed 500 characters").optional(),
    followersCount: z.number().int().nonnegative("Followers count must be a non-negative integer").optional(),
    isBanned: z.boolean().optional().default(false),
    settings: z.record(z.unknown()).optional(),
  }),
});

const updateUser = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    profileImage: z.string().url("Invalid URL for profile image").optional(),
    bio: z.string().max(500, "Bio must not exceed 500 characters").optional(),
    followersCount: z.number().int().nonnegative("Followers count must be a non-negative integer").optional(),
    isBanned: z.boolean().optional().default(false),
    settings: z.record(z.unknown()).optional(),
  }),
});

const changeStatus = z.object({
  body: z.object({
    isBanned: z.boolean(),
  }),
});


export const UserValidation = {
  createUser,
  updateUser,
  changeStatus
};
