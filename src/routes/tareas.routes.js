import { Router } from "express";
import { borrarTarea, crearTareas, editarTarea, listarTareas } from "../controllers/tareas.controllers.js";

const router = Router()

// Vamos a crear la ruta y las peticiones que se pueden hacer

router.route("/tareas").get(listarTareas).post(crearTareas)
router.route("/tareas/:id").put(editarTarea).delete(borrarTarea)

export default router