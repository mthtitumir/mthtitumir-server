import express from 'express';
import { ProjectControllers } from './project.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
    '/',
    auth(),
    ProjectControllers.addProject,
);

router.get(
    '/',
    ProjectControllers.getAllProjects,
);

router.get(
    '/:id',
    ProjectControllers.getSingleProject,
);

export const ProjectRoutes = router;
