import React from 'react';
import "./NewestPosts.scss";
import Slider from "react-slick";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom";

const NewestPosts = props => {

    const history = useHistory();

    const navigateTo = id => {
        history.push(`/single-post/${id}`);
        props.elementRef.current.scrollIntoView({
            behavior: 'smooth',
            block: "start",
        })
    };

    return (
        <div className="newest-posts">
            <h3>Newest posts</h3>
            {console.log('element', props.element)}
            <div className="newest-post-container">
                <Slider {...props.settings}>
                    {props.element.map(post => {
                        return (
                            <div className="newest-post-img-container" key={post._id}
                                 onClick={() => navigateTo(post._id)}>
                                <img src={post.imageUrl} alt={post.title || 'My new post'}/>
                                <div className="newest-post-info">
                                    <h3 className="newest-post-title">{post.title}</h3>
                                    <div className="post-info">
                                        <div className="info-col">
                                            <VisibilityIcon/>
                                            <p className="info-text">{post.views}</p>
                                        </div>
                                        <div className="info-col">
                                            <AccessTimeIcon/>
                                            <p className="info-text">{post.readTime}min</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    );
};

NewestPosts.propTypes = {
    element: PropTypes.array.isRequired,
    settings: PropTypes.object.isRequired,
};

export default NewestPosts;