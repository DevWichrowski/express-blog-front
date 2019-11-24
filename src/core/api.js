import axios from "axios";

const HOST = "http://localhost:3000";

export const getAllPosts = () => {
    return axios.get(`${HOST}/posts`, {
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
    });
};

export const addPost = (body) => {
    return axios.put(`${HOST}/posts`, body, {
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
    });
};