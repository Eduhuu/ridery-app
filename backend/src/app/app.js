import dotenv from "dotenv"
import helmet from 'helmet';
import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import router from "./routes/routes.js"
import cors from "cors"
import { connect_mongo } from "./db/mongoose.js"
dotenv.config()
const app = express()

// Create port variable
app.set("port", process.env.PORT || 3000)

// Use helmet middleware for security
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        "script-src": ["'self'", "example.com"],
        "img-src": ["'self'", "https: data: blob:"],
      },
    },
  })
);

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))
app.use(cookieParser());
app.use(cors())

// Use Controladores
app.use(router)

// Connect to Mongo
connect_mongo()

export default app

