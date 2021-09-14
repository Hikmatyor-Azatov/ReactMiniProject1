import React, { Component } from "react";
import * as Icon from "react-bootstrap-icons";

class LikeIcon extends Component {
    constructor() {
        super();
        this.liked = false;
        this.disliked = false;
    }
    state = {
        like: <Icon.HandThumbsUp />,
        dislike: <Icon.HandThumbsDown />,
    };
    getLike = () => {
        if (this.liked === false) {
            this.setState({ like: <Icon.HandThumbsUpFill /> });
            this.liked = true;
        } else {
            this.setState({ like: <Icon.HandThumbsUp /> });
            this.liked = false;
        }
    };
    getDisLike = () => {
        if (this.disliked === false) {
            this.setState({ dislike: <Icon.HandThumbsDownFill /> });
            this.disliked = true;
        } else {
            this.setState({ dislike: <Icon.HandThumbsDown /> });
            this.disliked = false;
        }
    };
    getBtnLikeStyle = () => {
        let style = "btn btn-lg ";
        if (this.disliked === true) {
            style += "disabled";
        }
        return style;
    };
    getBtnDisLikeStyle = () => {
        let style = "btn btn-lg ";
        if (this.liked === true) {
            style += "disabled";
        }
        return style;
    };
    render() {
        return (
            <div>
                <span onClick={this.getLike} className={this.getBtnLikeStyle()}>
                    {this.state.like}
                </span>

                <span
                    onClick={this.getDisLike}
                    className={this.getBtnDisLikeStyle()}
                >
                    {this.state.dislike}
                </span>
            </div>
        );
    }
}

export default LikeIcon;
