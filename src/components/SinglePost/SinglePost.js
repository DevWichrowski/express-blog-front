import React, {useEffect, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {
    editPostPending,
    getSinglePostPending
} from "../../store/actions/posts.actions";
import axios from "axios";
import {HOST} from "../../core/api"
import Chip from "@material-ui/core/Chip";
import * as uuid from "uuid";

const SinglePost = props => {
    let {id} = useParams();
    const [post, setPost] = useState();
    const [setTags] = useState([]);

    useEffect(() => {
        axios.get(`${HOST}/posts/${id}`, {
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
        })
            .then(res => {
                setPost({...res.data});
                setTags(res.data.tags);
            })
            .catch(e => console.log('Error', e));
    }, []);

    return (
        <div className="edit-post">
            {console.log(post)}
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    getSinglePost: payload => dispatch(getSinglePostPending(payload)),
    editPost: payload => dispatch(editPostPending(payload))
});

export default connect(null, mapDispatchToProps)(SinglePost);
