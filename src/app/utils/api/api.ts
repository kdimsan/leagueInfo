import axios from "axios";

const serverIp = process.env.PROXY_SERVER_IP;

export const api = axios.create({
  baseURL: `https://${serverIp}`,
});
