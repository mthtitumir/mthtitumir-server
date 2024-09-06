import { Schema, model } from 'mongoose';
import { TGiftTransaction } from './giftTransaction.interface';

const giftTransactionSchema = new Schema<TGiftTransaction>(
    {
        senderId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        receiverId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        giftId: {
            type: Schema.Types.ObjectId,
            ref: 'Gift',
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        message: {
            type: String,
        },
        status: {
            type: String,
            required: true,
        },
        paymentMethod: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        currency: {
            type: String,
            required: true,
        },
        metaData: {
            type: Schema.Types.Mixed,
        },
    },
    {
        timestamps: true,
    }
);

// Create and export the model
export const GiftTransaction = model<TGiftTransaction>('GiftTransaction', giftTransactionSchema);