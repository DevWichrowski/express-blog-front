import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {addPostPending} from "../../store/actions/posts.actions";
import {connect} from "react-redux";
import Chip from "@material-ui/core/Chip";
import * as uuid from "uuid";

const AddPost = props => {
    const [postTitle, setPostTitle] = useState(null);
    const [postDesc, setPostDesc] = useState(null);
    const [postImgUrl, setPostImgUrl] = useState(null);
    const [postTags, setPostTags] = useState([]);
    const [tempTag, setTempTag] = useState(null);


    const submitPost = (e) => {
        props.addPost({
            title: postTitle,
            description: postDesc,
            imageUrl: postImgUrl,
            tags: postTags,
        })
    };

    const saveTempTag = e => {
        setTempTag({
            id: uuid(),
            value: e,
        });
    };

    const saveTagToArr = e => {
        if (e.key === "Enter") {
            setPostTags([...postTags, tempTag]);
            setTempTag(null);
        }
    };

    const deleteTag = tag => {
        setPostTags(postTags.filter(_tag => _tag.id !== tag.id))
    };

    return (
        <div>
            <h1>Add post</h1>
            <form style={{display: 'flex', flexDirection: 'column', width: '60%', margin: '0 auto'}} noValidate
                  autoComplete="off">
                <TextField id="standard-basic" label="Title" onChange={e => setPostTitle(e.target.value)}/>
                <TextField id="standard-basic" label="Description" onChange={e => setPostDesc(e.target.value)}/>
                <TextField id="standard-basic" label="Image url" onChange={e => setPostImgUrl(e.target.value)}/>
                <TextField id="standard-basic" label="Tags" onChange={e => saveTempTag(e.target.value)}
                           onKeyPress={e => saveTagToArr(e)} value={tempTag ? tempTag.value : ''}/>
                <div>
                    {postTags != null && postTags.length > 0 ? postTags.map(mappedTag => {
                        return (
                            <Chip label={mappedTag.value} color="primary" onDelete={() => deleteTag(mappedTag)}/>
                        )
                    }) : null}
                </div>
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