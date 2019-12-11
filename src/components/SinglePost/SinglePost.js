import React, {useEffect, useState} from 'react';
import "./SinglePost.scss";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {editPostPending, getRelatedPostsPending, getSinglePostPending} from "../../store/actions/posts.actions";
import axios from "axios";
import {HOST} from "../../core/api"
import Chip from "@material-ui/core/Chip";
import VisibilityIcon from '@material-ui/icons/Visibility';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Avatar from "@material-ui/core/Avatar";
import moment from "moment";
import Tooltip from "@material-ui/core/Tooltip";
import {Zoom} from "@material-ui/core";
import PostInfoBox from "../shared/PostInfoBox/PostInfoBox";
import {getRelatedPostsSelector} from "../../store/selectors/posts.selectors";
import SmallPost from "../shared/SmallPost/SmallPost";
import CircularProgress from "@material-ui/core/CircularProgress";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const SinglePost = props => {
    let {id} = useParams();
    const [post, setPost] = useState();
    const [tags, setTags] = useState([]);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    useEffect(() => {
        axios.get(`${HOST}/posts/${id}`, {
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
        })
            .then(res => {
                setPost({...res.data});
                setTags(res.data.tags);
                props.getRelatedPosts({tags: res.data.tags.map(tag => tag.value)})
            })
            .catch(e => console.log('Error', e));


    }, [id]);

    return (
        <div className="single-post">
            {/*{console.log('post', post)}*/}
            <div className="single-page-content">
                <div className="left-column">
                    <img className="post-image" src={post ? post.imageUrl : <CircularProgress/>}
                         alt={post ? post.title : null}/>
                    <div className="title-container">
                        <h1>{post ? post.title : <CircularProgress/>}</h1>
                    </div>
                    <p className="post-description">{post ? post.description : null}</p>
                    <p className="post-content" dangerouslySetInnerHTML={{__html: post ? post.content : null}}/>
                </div>
                <div className="right-column">
                    <PostInfoBox title={'Details'}>
                        <div className="post-info">
                            <div className="post-info-row">
                                <Tooltip TransitionComponent={Zoom} title="Read time" aria-label="Read time"
                                         placement="top">
                                    <div className="time-views"><AccessTimeIcon/>
                                        <p>{post ? post.readTime : null}min</p></div>
                                </Tooltip>
                                <Tooltip TransitionComponent={Zoom} title="Views" aria-label="Views" placement="top">
                                    <div className="time-views"><VisibilityIcon/> <p>{post ? post.views : null}</p>
                                    </div>
                                </Tooltip>
                                <Tooltip TransitionComponent={Zoom} title="Creation date" aria-label="Creation date"
                                         placement="top">
                                    <div className="time-views"><CalendarTodayIcon/>
                                        <p>{moment(post ? post.date : null).format('DD MMM YYYY')}</p></div>
                                </Tooltip>
                            </div>
                            {post && post.user.nickname ? (<div className="author-row">
                                <Avatar className="post-user-avatar" alt={`${post ? post.user.nickname : null}`}
                                        src="https://media.licdn.com/dms/image/C4D03AQHPJ5csW5ggrA/profile-displayphoto-shrink_200_200/0?e=1580947200&v=beta&t=7nrdYW-5SiT-Xa6XZQuBxkz6JtWxSPTFepHU5pkzqeI"/>
                                <h3 className="user-nickname">
                                    {post ? post.user.nickname : null}
                                </h3>
                            </div>) : <CircularProgress color="secondary"/>}

                        </div>
                    </PostInfoBox>

                    <PostInfoBox title={'Tags'}>
                        <div className="post-tags">
                            {post && post.tags != null && post.tags.length > 0 ? post.tags.map((mappedTag, index) => {
                                return (

                                    <Chip key={index} label={mappedTag.value}/>

                                )
                            }) : null}
                        </div>
                    </PostInfoBox>

                    <PostInfoBox title={'Related posts'}>
                        <div className="small-post">
                            {post && props.relatedPosts && props.relatedPosts.length > 0 ? props.relatedPosts.filter(_post => _post.title !== post.title).map((post, index) => {
                                return (
                                    <SmallPost
                                        key={index}
                                        _id={post._id}
                                        imageUrl={post.imageUrl}
                                        title={post.title}
                                        views={post.views}
                                        readTime={post.readTime}
                                    />
                                )
                            }) : <CircularProgress color="secondary"/>}
                        </div>
                    </PostInfoBox>
                </div>
            </div>
            <div className="newest-posts">
                <h3>Newest posts</h3>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    relatedPosts: getRelatedPostsSelector(state),
});

const mapDispatchToProps = dispatch => ({
    getSinglePost: payload => dispatch(getSinglePostPending(payload)),
    editPost: payload => dispatch(editPostPending(payload)),
    getRelatedPosts: payload => dispatch(getRelatedPostsPending(payload))
});


export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
