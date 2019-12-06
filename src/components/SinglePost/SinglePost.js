import React, {useEffect, useState} from 'react';
import "./SinglePost.scss";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {editPostPending, getSinglePostPending} from "../../store/actions/posts.actions";
import axios from "axios";
import {HOST} from "../../core/api"
import Chip from "@material-ui/core/Chip";
import VisibilityIcon from '@material-ui/icons/Visibility';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Avatar from "@material-ui/core/Avatar";

const SinglePost = props => {
    let {id} = useParams();
    const [post, setPost] = useState();
    const [tags, setTags] = useState([]);

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
            })
            .catch(e => console.log('Error', e));
    }, []);

    return (
        <div className="single-post">
            {console.log('post', post)}
            <div className="single-page-content">
                <div className="left-column">
                    <img className="post-image" src={post ? post.imageUrl : null} alt={post ? post.title : null}/>
                    <div className="title-container">
                        <h1>{post ? post.title : null}</h1>
                    </div>
                    <p className="post-description">{post ? post.description : null}</p>
                    <p className="post-content" dangerouslySetInnerHTML={{__html: post ? post.content : null}}/>
                </div>
                <div className="right-column">
                    <div className="post-info-box">
                        <h2>Details</h2>

                        <div className="post-info">
                            <div className="post-info-row">
                                <div className="time-views"><AccessTimeIcon/> <p>{post ? post.readTime : null}min</p>
                                </div>
                                <div className="time-views"><VisibilityIcon/> <p>{post ? post.views : null}</p></div>
                                <div className="time-views"><CalendarTodayIcon/> <p>10 april 2019</p></div>
                            </div>

                            <div className="author-row">
                                <Avatar className="post-user-avatar" alt={`${post ? post.user.nickname : null}`}
                                        src="https://media.licdn.com/dms/image/C4D03AQHPJ5csW5ggrA/profile-displayphoto-shrink_200_200/0?e=1580947200&v=beta&t=7nrdYW-5SiT-Xa6XZQuBxkz6JtWxSPTFepHU5pkzqeI"/>
                                <h3 className="user-nickname">
                                    {post ? post.user.nickname : null}
                                </h3>
                            </div>
                        </div>


                        <div className="post-tags">
                            <h3>Tags</h3>
                            {post && post.tags != null && post.tags.length > 0 ? post.tags.map((mappedTag, index) => {
                                return (

                                    <Chip key={index} label={mappedTag.value}/>

                                )
                            }) : null}
                        </div>
                    </div>

                    <div className="post-info-box">
                        <h2>Tags</h2>
                    </div>
                </div>
            </div>

        </div>

    );
};

const mapDispatchToProps = dispatch => ({
    getSinglePost: payload => dispatch(getSinglePostPending(payload)),
    editPost: payload => dispatch(editPostPending(payload))
});

export default connect(null, mapDispatchToProps)(SinglePost);
