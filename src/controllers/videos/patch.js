import VideoProject from "../../../models/video.js";
import { SchemaUpdate } from "./validation.js";

/**
 * @openapi 
 *  components:
 *   schemas:
 *    VideoprojectUpdateSchema:
 *     type: object
 *     properties:
 *      email:
 *        type: string
 *      url:
 *        type: string
 *      teacherName:
 *        type: string
 *     required:
 *      - url
 *      - teacherName
 *     example:
 *      url: https://www.youtube.com/watch?v=N2Uquz_ekXI&list=RDEMy1jlKyX_GYhAAPvBR43tFQ&index=21&ab_channel=ElCuartetodeNos-Topic
 *      teacherName: Karen Eche
 */

/**
 * @openapi
 * /api/videos/{id}:
 *  patch:
 *   summary: Update a video by ID
 *   tags: [Videos]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *      required: true
 *      description: The video ID
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       $ref: '#/components/schemas/VideoprojectUpdateSchema'
 *   responses:
 *    201:
 *     description: Video updated successfully
 *    400:
 *     description: Bad request. Something went wrong.
 *    404:
 *     description: Video not found.
 *    500:
 *     description: Unknown error.
 */

//Modifica video por su propio id (unidad)
const videoEdit = async (request, response, next) => { 
  const id = request.params.id
  const {error} = SchemaUpdate.validate(request.body);
    if (error) { 
    return response.status(400).json({error: error.details[0].message}) 
  }
  
  //Búsqueda por id del video
  const { url , nameTeacher } = request.body
 try { 
    const videoUpdate = await VideoProject.findByIdAndUpdate(id , { 
      url:url,
      ...nameTeacher && {nameTeacher:nameTeacher.toUpperCase()}}, {new:true});
    if (!videoUpdate) {
      return response.status(404).json({
        message:"Video Not Found"})
        }
      return response.status(201).json({
       update:("Ok"),
       data: videoUpdate
      })
  } catch (error) { 
    next (error);
  };
}

export default videoEdit;