import { Router } from "express";
import { crearTareas, listarTareas } from "../controllers/tareas.controllers.js";

const router = Router()

// Vamos a crear la ruta y las peticiones que se pueden hacer

router.route("/tareas").get(listarTareas).post(crearTareas)

export default router