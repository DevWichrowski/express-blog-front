import React, {useEffect, useState} from 'react';
import "./AddPost.scss"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {addPostPending} from "../../store/actions/posts.actions";
import {connect} from "react-redux";
import Chip from "@material-ui/core/Chip";
import * as uuid from "uuid";
import {useHistory} from "react-router-dom";
import {getUserSelector} from "../../store/selectors/users.selectors";

const AddPost = props => {
    const {loggedUser} = props;
    const history = useHistory();
    useEffect(() => {
        if (loggedUser == null) {
            history.push('/')
        }
    }, [loggedUser]);

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
        <div className="add-post">
            <h1>Add post</h1>
            <form noValidate autoComplete="off" className="add-post-container">
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
                {postImgUrl != null ? <img src={postImgUrl} alt="postImgUrl"
                                           style={{
                                               maxWidth: '500px',
                                               maxHeight: '500px',
                                               margin: '0 auto',
                                               marginTop: '50px;'
                                           }}/> : null}

            </form>
        </div>
    );
};

const mapStateToProps = state => ({
    loggedUser: getUserSelector(state),
});

const mapDispatchToProps = dispatch => ({
    addPost: payload => dispatch(addPostPending(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);