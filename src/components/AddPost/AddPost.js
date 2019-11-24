import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const AddPost = props => {
    const [postTitle, setPostTitle] = useState(null);
    const [postDesc, setPostDesc] = useState(null);
    const [postImgUrl, setPostImgUrl] = useState(null);
    const [postTags, setPostTags] = useState(null);

    return (
        <div>
            <h1>Add post</h1>
            <form style={{display: 'flex', flexDirection: 'column', width: '60%', margin: '0 auto'}} noValidate
                  autoComplete="off">
                <TextField id="standard-basic" label="Title" onChange={setPostTitle}/>
                <TextField id="standard-basic" label="Description" onChange={setPostDesc}/>
                <TextField id="standard-basic" label="Image url" onChange={setPostImgUrl}/>
                <TextField id="standard-basic" label="Tags" onChange={setPostTags}/>
                <br/>
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default AddPost;