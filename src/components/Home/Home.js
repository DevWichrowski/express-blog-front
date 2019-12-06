import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getAllPosts, getSinglePostSelector} from "../../store/selectors/posts.selectors";
import {deletePostPending, getPostsPending, getSinglePostPending} from "../../store/actions/posts.actions";
import {useHistory} from "react-router-dom";
import Chip from "@material-ui/core/Chip";
import {getMyProfilePending} from "../../store/actions/users.actions";
import "./Home.scss";
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from '../../styles/slider-core.scss';


const Home = (props) => {
    const history = useHistory();

    useEffect(() => {
        props.getAllPosts();
    }, []);

    const editPost = id => history.push(`/edit-post/${id}`);
    const goToPost = post => history.push(`/single-post/${post._id}`);

    return (
        <div>
            {props.allPosts.length !== 0 ?   <div>
                <div>
                <div className="main-post">
                    {/*<div className="main-post-container">*/}
                    {/*    <img src={props.allPosts[0].imageUrl}/>*/}
                    {/*    <div className="desc">*/}
                    {/*        {props.allPosts[0].title}*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                    <AwesomeSlider cssModule={AwesomeSliderStyles}>
                        <div data-src={props.allPosts[3].imageUrl} />
                        <div data-src={props.allPosts[1].imageUrl} />
                        <div data-src={props.allPosts[2].imageUrl} />
                    </AwesomeSlider>
                </div>
                </div>
                <div className="all-posts">
                {props.allPosts.map((post, index) => {
                    return (
                            <div>
                                <img src={post.imageUrl}/>
                            </div>
                    )
                })}
                </div>
            </div> : null}

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

