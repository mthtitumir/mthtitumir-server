import { TExperience } from "./experience.interface";
import { Experience } from "./experience.model";

const addExperience = async (payload: TExperience) => {
    const result = await Experience.create(payload);
    return result;
}

const getAllExperiences = async () => {
    const result = await Experience.find().sort({ createdAt: -1 });
    return result;
}

export const ExperienceServices = {
    addExperience,
    getAllExperiences,
}