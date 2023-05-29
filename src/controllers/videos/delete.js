import VideoProject from "../../models/video.js";

/**
 * @openapi
 * /api/videos/{id}:
 *   delete:
 *     summary: Delete a video by id
 *     tags: [Videos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The video ID
 *     responses:
 *       200:
 *         description: Video deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   description: The user's email.
 *                 url:
 *                   type: string
 *                   description: The URL of the video.
 *                 teacherName:
 *                   type: string
 *                   description: The name of the teacher.
 *                 skills:
 *                   type: object
 *                   properties:
 *                     communication:
 *                       type: string
 *                       description: The communication skill level.
 *                     collaboration:
 *                       type: string
 *                       description: The collaboration skill level.
 *                     creativity:
 *                       type: string
 *                       description: The creativity skill level.
 *                     critical_thinking:
 *                       type: string
 *                       description: The critical thinking skill level.
 *                   description: The skills of the video project.
 *                 comment:
 *                   type: string
 *                   description: Additional comments about the video project.
 *       400:
 *         description: Bad request. Something went wrong.
 *       500:
 *         description: Unknown error.
 */
const videoDelete = async (request, response, next) => { 
  const id = request.params.id
  try { 
     const videoDelete = await VideoProject.findByIdAndDelete(id);
     if (!videoDelete) {
      return response.status(404).json({
        message:"Video Not Found"})
      }
      return response.status(200).json({
       delete:("Ok"),
       data: videoDelete
     })
   } catch (error) { 
     next (error);
   };
 }

export default videoDelete;