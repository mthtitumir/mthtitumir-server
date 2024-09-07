import { Types } from "mongoose";

export type TFollow = {
    follower: Types.ObjectId;
    influencer: Types.ObjectId;
    createdAt: Date;
}