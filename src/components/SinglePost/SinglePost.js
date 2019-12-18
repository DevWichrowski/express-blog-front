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
        // dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
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
            {console.log(id)}
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
                            }) : <h4>No tags</h4>}
                        </div>
                    </PostInfoBox>

                    {post && props.relatedPosts && props.relatedPosts.length ? (<PostInfoBox title={'Related posts'}>
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
                    </PostInfoBox>) : null}

                </div>
            </div>
            <div className="newest-posts">
                <h3>Newest posts</h3>
                <div className="newest-post-container">
                    <Slider {...settings}>
                        <div className="newest-post-img-container">
                            <img
                                src="https://9.allegroimg.com/s512/03b7ce/88c0174e4059a16a849b8b6d47c9/Poszewka-Dakimakura-150x50-Manga-Anime-Hentai-049"/>
                            <h3 className="newest-post-title">Test</h3>
                        </div>
                        <div className="newest-post-img-container">
                            <img
                                src="https://steamcommunity-a.akamaihd.net/economy/image/ppHD5hT1C-IVaNeRdCbdFsg1BnGB_bBCcGFB0iUx4s2PGjJgB7aDv9VMeoo1gWONYO63KqUHo9YtXFkHieItF5tPMUXNuMU0NxBUI5JUnRsI62JzvnewZqUwRqhLFABvP3AVXsTsmLKFUdNzMUVJ1aZ93w/360fx360f"/>
                            <h3 className="newest-post-title">Test</h3>
                        </div>
                        <div className="newest-post-img-container">
                            <img
                                src="https://www.download.net.pl/upload/News%20January%202015/waifu/anime.jpg"/>
                            <div className="newest-post-info">
                                <h3 className="newest-post-title">Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Eum excepturi illo incidunt necessitatibus nobis.</h3>
                                <div className="post-info">
                                    <div className="info-col">
                                        <VisibilityIcon/>
                                        <p className="info-text">1</p>
                                    </div>
                                    <div className="info-col">
                                        <AccessTimeIcon/>
                                        <p className="info-text">2min</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
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
