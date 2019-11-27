import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const EditPost = props => {
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
        setTempTag(e);
        console.log('tempTag', tempTag)
    };

    const saveTagToArr = e => {
        console.log('e', e)
        if (e.key === "Enter") {
            setPostTags([...postTags, tempTag]);
            setTempTag(null);
            console.log('postTags', postTags);
            console.log('tempTag', tempTag);
        }
    };

    return (
        <div className="edit-post">
            <h1>Edit post</h1>
            <form style={{display: 'flex', flexDirection: 'column', width: '60%', margin: '0 auto'}} noValidate
                  autoComplete="off">
                <TextField id="standard-basic" label="Title" onChange={e => setPostTitle(e.target.value)}/>
                <TextField id="standard-basic" label="Description" onChange={e => setPostDesc(e.target.value)}/>
                <TextField id="standard-basic" label="Image url" onChange={e => setPostImgUrl(e.target.value)}/>
                <TextField id="standard-basic" label="Tags" onChange={e => saveTempTag(e.target.value)}
                           onKeyPress={e => saveTagToArr(e)} value={tempTag ? tempTag : ''}/>
                <br/>
                <Button variant="contained" color="primary" onClick={submitPost}>
                    Submit
                </Button>
            </form>
        </div>
    );
}

export default EditPost;