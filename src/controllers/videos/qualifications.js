import mongoose  from "mongoose";
import Video from "../../models/videoModels.js"
import { assessmentSchema } from "./validationVideo.js";

export const patchVideo = async (request, response) => {
  
  const { id } = request.params;
  
  if (!mongoose.isValidObjectId(id)) {
    return response.status(422).json({message: "Invalid Id"});
  }
  const videoQualification = await Video.findById(id);
  if (!videoQualification) {
    return response.status(404).json({message: "Video not found"});
  }
  const updatedVideo = await Video.findByIdAndUpdate(id , request.body, { new: true});
  return response.status(200).json(updatedVideo);

}




