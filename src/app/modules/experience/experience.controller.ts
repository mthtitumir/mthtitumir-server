import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ExperienceServices } from "./experience.service";

const addExperience = catchAsync(async (req, res) => {
    const result = await ExperienceServices.addExperience(req?.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Experience added successfully!',
        data: result,
    });
});

const getAllExperiences = catchAsync(async (req, res) => {
    const result = await ExperienceServices.getAllExperiences();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Experiences received successfully!',
        data: result,
    });
});

export const ExperienceControllers = {
    addExperience,
    getAllExperiences,
}