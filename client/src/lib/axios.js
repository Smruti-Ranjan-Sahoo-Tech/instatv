import axios from "axios";

// Use the public iptv-org API in both dev and production so Netlify can fetch
// the streams.json successfully. Previously production used `/api` which
// doesn't exist on Netlify unless you host the file there.
export const axiosInstance = axios.create({
    baseURL: "https://iptv-org.github.io/api",
});