const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generatePatientNote = async (prompt) => {
  console.log(`PROMPT: ${prompt}`);
  console.log(`ENV VAR: ${process.env.OPENAI_API_KEY}`);
  console.log(JSON.stringify({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.6,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  }, null, 2));
  return await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.6,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  });
};

module.exports.generatePatientNote = generatePatientNote;