import Task from "../database/models/tarea.js"

export const listarTareas = async (req,res) =>{
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
    } catch (error) {
        console.error("El error es", error)
        res.status(404).json({
            mensaje: "No se pudo obtener la lista de tareas"
        })
    }

}

export const crearTareas = async (req,res) => {
    try {
        const newTask = new Task(req.body)

        await newTask.save()

        res.status(201).json({
            mensaje: "La tarea fue creada correctamente"
        })
    } catch (error) {
        console.error("Ha habido un error", error)
        res.status(400).json({
            mensaje: "La tarea no pudo ser creada correctamente"
        })
    }
}


export const editarTarea = async (req,res) => {
    try {
        const id = req.params.id
        const taskFind = await Task.findById(id)
        if(!taskFind){
            return res.status(404).json({
                mensaje: "No se ha encontradoo la tarea"
            })
        }

        await Task.findByIdAndUpdate(id, req.body)
        res.status(200).json({
            mensaje: "Se edito el producto con exito"
        })
    } catch (error) {
        console.error("Ha habido un error", error)
        res.status(404).json({
            mensaje: "Error al intentar editar el producto"
        })
    }
}

export const borrarTarea = async (req,res) => {
    try {
        
    } catch (error) {
        
    }

}