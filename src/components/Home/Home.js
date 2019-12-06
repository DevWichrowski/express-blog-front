import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getAllPosts, getSinglePostSelector} from "../../store/selectors/posts.selectors";
import {deletePostPending, getPostsPending, getSinglePostPending} from "../../store/actions/posts.actions";
import {useHistory} from "react-router-dom";
import Chip from "@material-ui/core/Chip";
import {getMyProfilePending} from "../../store/actions/users.actions";
import "./Home.scss";

const Home = (props) => {
    const history = useHistory();

    useEffect(() => {
        props.getAllPosts();
    }, []);

    const editPost = id => history.push(`/edit-post/${id}`);
    const goToPost = post => history.push(`/single-post/${post._id}`);

    return (
        <div>
            {console.log(props.allPosts)}
            <div className="main-post">
                <div className="main-post-container">
                    <img src={props.allPosts[0].imageUrl}/>
                    <div>
                        {props.allPosts[0].description}
                    </div>
                </div>
            </div>
            {props.allPosts.map((post, index) => {
                return (
                    <div key={post._id}>

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

