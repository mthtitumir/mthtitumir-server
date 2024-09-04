import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogServices } from "./blog.service";

const addBlog = catchAsync(async (req, res) => {
    const result = await BlogServices.addBlog(req?.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Blog added successfully!',
        data: result,
    });
});

const getAllBlogs = catchAsync(async (req, res) => {
    const result = await BlogServices.getAllBlogs();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Blogs received successfully!',
        data: result,
    });
});

const getSingleBlog = catchAsync(async (req, res) => {
    const result = await BlogServices.getSingleBlog(req?.params?.id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Blog received successfully!',
        data: result,
    });
});

export const BlogControllers = {
    addBlog,
    getAllBlogs,
    getSingleBlog
}