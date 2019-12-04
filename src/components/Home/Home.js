import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getAllPosts, getSinglePostSelector} from "../../store/selectors/posts.selectors";
import {deletePostPending, getPostsPending, getSinglePostPending} from "../../store/actions/posts.actions";
import {useHistory} from "react-router-dom";
import Chip from "@material-ui/core/Chip";
import {getMyProfilePending} from "../../store/actions/users.actions";

const Home = (props) => {
    const history = useHistory();

    useEffect(() => {
        props.getAllPosts();
    }, []);

    const editPost = id => history.push(`/edit-post/${id}`);
    const goToPost = post => history.push(`/single-post/${post._id}`);

    return (
        <div>
            <h1>HOME</h1>
            {props.allPosts.map((post, index) => {
                return (
                    <div key={post._id}>
                        <hr/>
                        <h1 onClick={() => goToPost(post)} style={{cursor: 'pointer'}}>{post.title}</h1>
                        <img src={post.imageUrl} style={{width: '600px', height: '500px'}}/>
                        <p>{post.description}</p>
                        <p>Author: {post.user && post.user.nickname}</p>
                        <div>
                            {post != null && post.tags.length > 0 ? post.tags.map((tag, index) => {
                                return (
                                    <Chip key={index} label={tag.value} color="primary"/>
                                )
                            }) : null}
                        </div>
                        <hr/>
                    </div>
                )
            })}
        </div>
    );
};

const mapStateToProps = state => ({
    allPosts: getAllPosts(state),
    singlePost: getSinglePostSelector(state)
});


const mapDispatchToProps = dispatch => ({
    getAllPosts: payload => dispatch(getPostsPending(payload)),
    deletePost: payload => dispatch(deletePostPending(payload)),
    getSinglePost: payload => dispatch(getSinglePostPending(payload)),
    getMyProfilePending: payload => dispatch(getMyProfilePending(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

