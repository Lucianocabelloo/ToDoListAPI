import  express  from "express";
import cors from "cors"
import morgan from "morgan"
// dotenv: Configura las variables de enterno, nos permite recibir y leer las variables de entorno
import "dotenv/config"
import path from "path"
import { fileURLToPath } from "url";
import listaTareasRouter from "./src/routes/tareas.routes.js"
import "./src/database/database.js"


// Configuramos un puerto

const app = express()

app.set("port", process.env.port || 4000)

app.listen(app.get("port"), () =>{
    console.log("Esta activado el puerto", app.get("port"))
})

// Configuramos los middlewares

// Para aceptar conexiones
app.use(cors())

// para recibir notificaciones

app.use(morgan("dev"))

// para trabajar con formate json
app.use(express.json())

// para usar los datos del body

app.use(express.urlencoded({ extended: true }))

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
console.log(path.join( __dirname,"public"))
app.use(express.static(path.join( __dirname,"public")));


app.use("/api", listaTareasRouter)