import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProjectServices } from "./project.service";

const addProject = catchAsync(async (req, res) => {
    const result = await ProjectServices.addProject(req?.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Project added successfully!',
        data: result,
    });
});

const getAllProjects = catchAsync(async (req, res) => {
    const result = await ProjectServices.getAllProjects();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Projects received successfully!',
        data: result,
    });
});

const getSingleProject = catchAsync(async (req, res) => {
    const result = await ProjectServices.getSingleProject(req.params.id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Project received successfully!',
        data: result,
    });
});


export const ProjectControllers = {
    addProject,
    getAllProjects,
    getSingleProject
}