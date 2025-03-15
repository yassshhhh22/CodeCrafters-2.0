import { Router } from "express";
import { AuthMiddleware } from "../middlewares/auth.middleware.js";
import { MarketTrendsApi } from "../controller/api.controller.js";

const router = Router()

router.route("/market-trends",AuthMiddleware,MarketTrendsApi)


export {router}