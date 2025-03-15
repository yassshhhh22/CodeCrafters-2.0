import { AxiosInstance } from "../Utils/AxiosInstance"

const BuyStocks = async (data)=>{
    try {
        const reponse = await AxiosInstance.post("/v1/stocks/buy", data)
        if(Response.status === 201){
            return response.data.data
        }
    } catch (error) {
        console.log(error)
    }
}

export {BuyStocks}