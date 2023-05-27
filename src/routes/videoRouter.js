import express from 'express';

const videosRouter = express.Router();

import upload from "../controllers/videos/post.js";
import { videosId , allVideos } from "../controllers/videos/get.js";
import videoEdit from "../controllers/videos/patch.js";
import videoDelete from "../controllers/videos/delete.js";

//Cargar video
videosRouter.post("/upload", upload);

//Consultar videos
videosRouter.get("/videos", allVideos);
videosRouter.get("/videos/:id", videosId);

//Modificar videos
videosRouter.patch("/videos/:id", videoEdit);

//Eliminar videos
videosRouter.delete("/videos/:id", videoDelete);

export default videosRouter;