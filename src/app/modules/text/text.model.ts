import { Schema, model } from 'mongoose';
import { TText } from './text.interface';

const textSchema = new Schema<TText>(
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
        content: {
            type: String,
            required: true,
        },
        isRead: {
            type: Boolean,
            default: false,
        },
        isAnonymous: {
            type: Boolean,
            default: false,
        },
        chat: {
            type: Schema.Types.ObjectId,
            ref: 'Chat',
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

// Create and export the model
export const Text = model<TText>('Text', textSchema);