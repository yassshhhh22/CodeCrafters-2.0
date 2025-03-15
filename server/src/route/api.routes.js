import { Router } from "express";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { MarketTrendsApi } from "../controller/api.controller";

const router = Router()

router.route("/market-trends",AuthMiddleware,MarketTrendsApi)


export {router}