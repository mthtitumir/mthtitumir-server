import { Types } from "mongoose";

export type TText = {
    _id: string;
    senderId: Types.ObjectId;
    receiverId: Types.ObjectId;
    content: string;
    isRead: boolean;
    isAnonymous: boolean;
    createdAt: Date;
    chat: Types.ObjectId;
}