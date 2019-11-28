import React, {useEffect, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {getAllPosts} from "../../store/selectors/posts.selectors";
import {getSinglePost} from "../../core/api";
import {deletePostPending, getPostsPending, getSinglePostPending} from "../../store/actions/posts.actions";
import axios from "axios";
import {HOST} from "../../core/api"
import "./EditPost.scss";
import Chip from "@material-ui/core/Chip";
import * as uuid from "uuid";

const EditPost = props => {
    let {id} = useParams();

    const [post, setPost] = useState();
    const [tempTag, setTempTag] = useState(null);

    // const [postTitle, setPostTitle] = useState(null);
    // const [postDesc, setPostDesc] = useState(null);
    // const [postImgUrl, setPostImgUrl] = useState(null);
    const [postTags, setTags] = useState([]);

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

    const setPostTitle = e => setPost({...post, title: e.target.value});
    const setPostDescription = e => setPost({...post, description: e.target.value});
    const setPostImageUrl = e => setPost({...post, imageUrl: e.target.value});
    const setPostTags = e => setPost({...post, tags: e});

    const submitPost = (e) => {
        // props.addPost({
        //     title: postTitle,
        //     description: postDesc,
        //     imageUrl: postImgUrl,
        //     tags: postTags,
        // })
        console.log('Submited post', {...post, tags: postTags});
    };

    const saveTempTag = e => setTempTag(e);

    const saveTagToArr = e => {
        if (e.key === "Enter") {
            setTags([...postTags, {id: uuid(), value: e.target.value}]);
            setTempTag(null);
        }
    };

    const deleteTag = tag => setTags(postTags.filter(_tag => _tag.id !== tag.id));

    return (
        <div className="edit-post">
            <h1>Edit post</h1>
            <form style={{display: 'flex', flexDirection: 'column', width: '60%', margin: '0 auto'}} noValidate
                  autoComplete="off">
                <TextField
                    id="standard-basic"
                    label="Title"
                    value={post ? post.title : ''}
                    onChange={e => setPostTitle(e)}
                />
                <TextField
                    id="standard-basic"
                    label="Description"
                    value={post ? post.description : ''}
                    onChange={e => setPostDescription(e)}
                />
                <TextField
                    id="standard-basic"
                    label="Image url"
                    value={post ? post.imageUrl : ''}
                    onChange={e => setPostImageUrl(e)}
                />
                <TextField
                    id="standard-basic"
                    label="Tags"
                    onChange={e => saveTempTag(e.target.value)}
                    onKeyPress={e => saveTagToArr(e)}
                    value={tempTag ? tempTag : ''}/>
                <br/>
                <div>
                    {postTags != null && postTags.length > 0 ? postTags.map(tag => {
                        return (
                            <Chip key={tag.id} label={tag.value} color="primary" onDelete={() => deleteTag(tag)}/>
                        )
                    }) : null}
                </div>

                <br/>
                <Button variant="contained" color="primary" onClick={submitPost}>
                    Submit
                </Button>

                {post != null ? <img src={post.imageUrl} alt="postImgUrl"
                                     style={{
                                         maxWidth: '500px',
                                         maxHeight: '500px',
                                         margin: '0 auto',
                                         marginTop: '50px'
                                     }}/> : null}

            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    getSinglePost: payload => dispatch(getSinglePostPending(payload))
});

export default connect(null, mapDispatchToProps)(EditPost);