import axios from "axios";

export const BASE_URL = "https://jsonplaceholder.typicode.com";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Cache-Control": "no-cache",
    "Content-Type": "application/json",
  },
  timeout: 3000,
});

const URIS = {
  POSTS: "posts",
};

export const setAuthorizationHeader = (token: string) => {
  api.defaults.headers.Authorization = `Bearer ${token}`;
};

export const setAuthorizationRefreshToken = (refreshToken: string) => {
  api.defaults.headers.RefreshToken = refreshToken;
};

export const apis = {
  firstPost: () => api.get(URIS.POSTS),
};
