import express from 'express';
import auth from '../../middlewares/auth';
import { BlogControllers } from './blog.controller';

const router = express.Router();

router.post('/', auth(), BlogControllers.addBlog);
router.get('/', BlogControllers.getAllBlogs);
router.get('/:id', BlogControllers.getSingleBlog);

export const BlogRoutes = router;
