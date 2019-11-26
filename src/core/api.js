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

export const addPostApi = (body) => {
    return axios.post(`${HOST}/posts`, body, {
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
    });
};

export const deletePostApi = (id) => {
    return axios.delete(`${HOST}/posts/${id}`, {
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
    });
};