
export default {
  hostPassword: process.env.HOST_PASSWORD || "1234",
  maxDelay: parseInt(process.env.MAX_DELAY!) || 5000,
  clientVersionRequirements: "0.5.x",
  clientRecommendedVersion: "0.5.0"
}
