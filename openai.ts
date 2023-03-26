import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
  organization: process.env.OPEN_AI_ORGINIATION,
  apiKey: process.env.OPEN_AI_KEY
});

const openai = new OpenAIApi(config)

export default openai;