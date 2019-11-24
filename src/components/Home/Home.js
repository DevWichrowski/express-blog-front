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
                        <h1>{post.title}</h1>
                        <p>{post.description}</p>
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

