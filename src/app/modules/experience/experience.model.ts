import { Schema, model } from 'mongoose';
import { TExperience } from './experience.interface';

const experienceSchema = new Schema<TExperience>(
    {
        title: {
            type: String,
            required: true,
        },
        company: {
            type: String,
            required: true,
        },
        company_website: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        job_location: {
            type: String,
            required: true,
        },
        duration: {
            type: String,
            required: true,
        },
        responsibilities: {
            type: [String],
            required: true,
        },
        technologies: {
            type: [String],
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Experience = model('Experience', experienceSchema);
