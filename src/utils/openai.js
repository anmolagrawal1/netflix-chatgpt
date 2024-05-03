import OpenAI from 'openai';
import { KEY } from './constant';

const openai = new OpenAI({
  apiKey: KEY,dangerouslyAllowBrowser: true // defaults to process.env["OPENAI_API_KEY"]
});

export default openai