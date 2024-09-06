import { Schema, model } from 'mongoose';
import { TGift } from './gift.interface';

const giftSchema = new Schema<TGift>(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        },
        isAvailable: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true, // This will automatically add createdAt and updatedAt fields
    }
);

// Create and export the model
export const Gift = model<TGift>('Gift', giftSchema);