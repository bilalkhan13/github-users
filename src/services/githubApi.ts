import axios from "axios";

const BASE_URL = "https://api.github.com";

export const getUsers = async () => {
  const response: any = axios.get(`${BASE_URL}/users`);
  return response;
};

export const getUserDetails = (username: string) => {
  const response = axios.get(`${BASE_URL}/users/${username}`);
  return response;
};

export const getUserRepos = (username: string) => {
  return axios.get(`${BASE_URL}/users/${username}/repos`);
};

export const getUserOrgs = (username: string) => {
  return axios.get(`${BASE_URL}/users/${username}/orgs`);
};

export const getUserFollowers = (username: string) => {
  return axios.get(`${BASE_URL}/users/${username}/followers`);
};