import { TProject } from "./project.interface"
import { Project } from "./project.model"

const addProject = async (payload: TProject) =>{
    const result = await Project.create(payload);
    return result;
}   

const getAllProjects = async () =>{
    const result = await Project.find();
    return result;
}  

const getSingleProject = async (id:string) =>{
    const result = await Project.findById(id);
    return result;
}   

export const ProjectServices = {
    addProject,
    getAllProjects,
    getSingleProject,
}