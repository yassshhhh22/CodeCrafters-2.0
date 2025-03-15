import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json());
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({ extended: true, limit: "50mb" }))
app.use(express.static("public"))

app.use(cookieParser())

import healthcheckRouter from "./route/healthcheck.routes.js"
import userRouter from './route/user.route.js'

app.use("/api/v1/healthcheck", healthcheckRouter)
app.use("/api/v1/users", userRouter)

export default app