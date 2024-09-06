import { Types } from "mongoose";

export type TGiftTransaction = {
    _id: string;
    senderId: Types.ObjectId;
    receiverId: Types.ObjectId;
    giftId: Types.ObjectId;
    quantity: number;
    message: string;
    status: string;
    paymentMethod: string;
    amount: number;
    currency: string;
    metaData: Record<string, string | number>;
}