import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getAllPosts} from "../../store/selectors/posts.selectors";
import {getPostsPending} from "../../store/actions/posts.actions";

const Home = (props) => {

    useEffect(() => {
        props.getAllPosts();
    }, [])

    return (
        <div>
            <h1>HOME</h1>
            {props.allPosts.map((post, index) => {
                return (
                    <div>
                        <hr/>
                        <h1>{post.title}</h1>
                        <img src={post.imageUrl}/>
                        <p>{post.description}</p>
                        <p>Author: {post.userId && post.userId.login}</p>
                        <strong style={{cursor: 'pointer'}}>DELETE - X</strong>
                        <hr/>
                    </div>
                )
            })}
        </div>
    );
};

const mapStateToProps = state => ({
    allPosts: getAllPosts(state),
});


const mapDispatchToProps = dispatch => ({
    getAllPosts: payload => dispatch(getPostsPending(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

