import { Schema, model } from 'mongoose';
import { TProject } from './project.interface';

const projectSchema = new Schema<TProject>(
  {
    project_id: {
      type: Number,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    contributions: {
      type: [String],
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    technologies_used: {
      type: [String],
      required: true,
    },
    live_url: {
      type: String,
      required: true,
    },
    github_client: {
      type: String,
      required: true,
    },
    github_server: {
      type: String,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
    stack: {
      type: String,
      required: true,
    },
    team_size: {
      type: Number,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Project = model<TProject>('Project', projectSchema);
