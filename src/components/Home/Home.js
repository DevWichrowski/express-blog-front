import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getAllPosts} from "../../store/selectors/posts.selectors";
import {deletePostPending, getPostsPending, getSinglePostPending} from "../../store/actions/posts.actions";
import {getSinglePost} from "../../core/api";

const Home = (props) => {

    useEffect(() => {
        props.getAllPosts();
    }, [])

    const getSinglePost = id => {
        props.getSinglePost(id);
        console.log('single post', props.getPost)
    };

    return (
        <div>
            <h1>HOME</h1>
            {props.allPosts.map((post, index) => {
                return (
                    <div key={index}>
                        <hr/>
                        <h1>{post.title}</h1>
                        <img src={post.imageUrl}/>
                        <p>{post.description}</p>
                        <p>Author: {post.userId && post.userId.login}</p>
                        <p>Tags: {post.tags.length > 0 ? post.tags.map(tag => {
                            return (
                                `${tag},`
                            )
                        }) : null}</p>
                        <strong style={{cursor: 'pointer'}} onClick={id => props.deletePost(post._id)}>DELETE -
                            X</strong>
                        <br/>
                        <strong style={{cursor: 'pointer'}}>EDIT POST</strong>
                        <hr/>
                    </div>
                )
            })}
        </div>
    );
};

const mapStateToProps = state => ({
    allPosts: getAllPosts(state),
    getPost: getSinglePost(state)
});


const mapDispatchToProps = dispatch => ({
    getAllPosts: payload => dispatch(getPostsPending(payload)),
    deletePost: payload => dispatch(deletePostPending(payload)),
    getSinglePost: payload => dispatch(getSinglePostPending(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

