import asynchandler from "express-async-handler"
import { AxiosInstance } from "../utils/AxiosInstance.js";
import { ApiResponse } from "../utils/apiResponse.js";

const MarketTrendsApi = asynchandler(
    async (req, res) => {

        const { trend_type } = req.query

        const response = await AxiosInstance.get(`https://real-time-finance-data.p.rapidapi.com/market-trends?trend_type=${trend_type}&country=us&language=en`)

        if (response.data.status !== "OK") {
            throw new ApiError(401, "Failed to fetch market trends");
        }


        return res.json(new ApiResponse(
            200,
            response.data.data,
            `Market Trends : ${trend_type} Fetched Successfully`
        ))
    }
)

export {
    MarketTrendsApi
}
