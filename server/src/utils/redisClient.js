import { createClient } from "redis";
const redisClient = createClient();

redisClient.on("error", (err) => {
  console.error("Redis Client Error", err);
});
const connectRedis = async () => {
  if (!redisClient.isOpen) {
    await redisClient.connect();
  }
};

export { redisClient, connectRedis };
