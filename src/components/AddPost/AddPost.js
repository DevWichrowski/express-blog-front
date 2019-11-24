import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {addPostPending} from "../../store/actions/posts.actions";
import {connect} from "react-redux";

const AddPost = props => {
    const [postTitle, setPostTitle] = useState(null);
    const [postDesc, setPostDesc] = useState(null);
    const [postImgUrl, setPostImgUrl] = useState(null);
    const [postTags, setPostTags] = useState(null);

    const submitPost = (e) => {
        props.addPost({
            title: postTitle,
            description: postDesc,
            imageUrl: postImgUrl,
            tags: postTags,
        })
    };

    return (
        <div>
            <h1>Add post</h1>
            <form style={{display: 'flex', flexDirection: 'column', width: '60%', margin: '0 auto'}} noValidate
                  autoComplete="off">
                <TextField id="standard-basic" label="Title" onChange={e => setPostTitle(e.target.value)}/>
                <TextField id="standard-basic" label="Description" onChange={e => setPostDesc(e.target.value)}/>
                <TextField id="standard-basic" label="Image url" onChange={e => setPostImgUrl(e.target.value)}/>
                <TextField id="standard-basic" label="Tags" onChange={e => setPostTags(e.target.value)}/>
                <br/>
                <Button variant="contained" color="primary" onClick={submitPost}>
                    Submit
                </Button>
            </form>
        </div>
    );
};


const mapDispatchToProps = dispatch => ({
    addPost: payload => dispatch(addPostPending(payload))
});

export default connect(null, mapDispatchToProps)(AddPost);