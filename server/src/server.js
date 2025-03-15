import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import {router as ApiRouter} from "./route/api.routes.js"

const app = express()


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({ extended: true, limit: "50mb" }))
app.use(express.static("public"))

app.use(cookieParser())

import healthcheckRouter from "./routes/healthcheck.routes.js"
import userRouter from './routes/user.routes.js'

app.use("/v1/healthcheck", healthcheckRouter)
app.use("/v1/users", userRouter)
app.use("/v1/api", ApiRouter)

export default app