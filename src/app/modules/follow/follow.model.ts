// follow.model.ts
import mongoose, { Schema } from 'mongoose';
import { TFollow } from './follow.interface';

const FollowSchema: Schema<TFollow> = new Schema({
  follower: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  influencer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const FollowModel = mongoose.model<TFollow>('Follow', FollowSchema);
