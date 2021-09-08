import { createClient } from "microcms-js-sdk"; //ES6

const { MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY } = process.env;
if (!MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN が設定されていません");
}

if (!MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY が設定されていません");
}

const client = createClient({
  serviceDomain: MICROCMS_SERVICE_DOMAIN,
  apiKey: MICROCMS_API_KEY,
});
export default client;
