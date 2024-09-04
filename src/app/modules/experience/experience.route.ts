import express from 'express';
import auth from '../../middlewares/auth';
import { ExperienceControllers } from './experience.controller';

const router = express.Router();

router.post(
    '/',
    auth(),
    ExperienceControllers.addExperience,
);

router.get(
    '/',
    ExperienceControllers.getAllExperiences,
);

export const ExperienceRoutes = router;
