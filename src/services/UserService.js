import axios from "axios";

const SERVER_URL = "https://api.github.com";
const REPOS_COUNT = 5;
const CLIENT_ID = "e1ee0ea8809376818a4e"
const CLIENT_SECRET = "ce8c59a89f0c951fe42aaf38e179b274a1fb214a"


// @desc Get User With UserName
export const getUser = (username) => {
    const url = `${SERVER_URL}/users/${username}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    return axios.get(url);
};

// @desc Get Repositories With UserName
export const getRepos = (username) => {
    const url = `${SERVER_URL}/users/${username}/repos?per_page=${REPOS_COUNT}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    return axios.get(url);
};