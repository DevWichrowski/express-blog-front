import React from 'react';
import "./SmallPost.scss";
import VisibilityIcon from '@material-ui/icons/Visibility';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const SmallPost = props => (
    <div className="small-post">
        {/*<img src={props.image} alt={props.title}/>*/}
        {/*<h4>{props.title}</h4>*/}
        {/*<p>Views: {props.views}</p>*/}
        {/*<p>Read time: {props.readTime}</p>*/}
        <img className="post-img"
             src="https://i0.wp.com/storage.googleapis.com/blog-images-backup/1*OokUL1A5kfzYkQjX5s9rRQ.jpeg?ssl=1"/>
        <h4>Test posts for validation if working</h4>
        <div className="sp-info">
            <div className="info-col">
                <VisibilityIcon/>
                <p className="info-text">123</p>
            </div>

            <div className="info-col">
                <AccessTimeIcon/>
                <p className="info-text">5 min</p>
            </div>
        </div>
    </div>
);

// PostInfoBox.propTypes = {
//     title: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     views: PropTypes.number,
//     readTime: PropTypes.number
// };

export default SmallPost;