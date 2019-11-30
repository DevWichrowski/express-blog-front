import axios from "axios";

export const HOST = "http://localhost:3000";

export const getAllPosts = () => {
    return axios.get(`${HOST}/posts`, {
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
    });
};

export const addPostApi = (body) => {
    const token = localStorage.token;

    return axios.post(`${HOST}/posts/add`, body, {
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`
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

export const getSinglePost = (id) => {
    return axios.get(`${HOST}/posts/${id}`, {
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
    });
};

export const editPost = (id, body) => {
    return axios.patch(`${HOST}/posts/${id}`, body, {
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
    });
};

export const loginPost = body => {
    return axios.post(`${HOST}/users/login`, body, {
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
    });
};

export const getMyProfileApi = (id) => {
    const token = localStorage.token;

    return axios.get(`${HOST}/users/me`, {
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
};