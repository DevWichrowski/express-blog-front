import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getAllPosts} from "../../store/selectors/posts.selectors";
import {deletePostPending, getPostsPending, getSinglePostPending} from "../../store/actions/posts.actions";
import {getSinglePost} from "../../core/api";
import {Redirect} from "react-router-dom";
import {useHistory} from 'react-router-dom';
import Chip from "@material-ui/core/Chip";

const Home = (props) => {
    const history = useHistory();

    useEffect(() => {
        props.getAllPosts();
    }, [])

    const editPost = id => history.push(`/edit-post/${id}`);

    return (
        <div>
            <h1>HOME</h1>
            {props.allPosts.map((post, index) => {
                return (
                    <div key={post._id}>
                        <hr/>
                        <h1>{post.title}</h1>
                        <img src={post.imageUrl}/>
                        <p>{post.description}</p>
                        <p>Author: {post.userId && post.userId.login}</p>
                        <div>
                            {post != null && post.tags.length > 0 ? post.tags.map((tag, index) => {
                                return (
                                    <Chip key={index} label={tag.value} color="primary"/>
                                )
                            }) : null}
                        </div>
                        <strong style={{cursor: 'pointer'}} onClick={id => props.deletePost(post._id)}>DELETE -
                            X</strong>
                        <br/>
                        <strong style={{cursor: 'pointer'}} onClick={id => editPost(post._id)}>EDIT POST</strong>
                        <hr/>
                    </div>
                )
            })}
        </div>
    );
};

const mapStateToProps = state => ({
    allPosts: getAllPosts(state),
    singlePost: getSinglePost(state)
});


const mapDispatchToProps = dispatch => ({
    getAllPosts: payload => dispatch(getPostsPending(payload)),
    deletePost: payload => dispatch(deletePostPending(payload)),
    getSinglePost: payload => dispatch(getSinglePostPending(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

