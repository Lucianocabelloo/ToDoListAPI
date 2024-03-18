import { Router } from "express";
import { listarTareas } from "../controllers/tareas.controllers.js";

const router = Router()

// Vamos a crear la ruta y las peticiones que se pueden hacer

router.route("/tareas").get(listarTareas).post().delete().patch()

export default router