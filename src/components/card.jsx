import React, { Component } from "react";
import "../styles/index.css";
import VoteButtons from "./buttons";
import LikeIcon from "./likeIcon";

class Card extends Component {
    getImgStyle = () => {
        const style = {
            width: 300,
            height: 300,
            padding: 3,
            margin: 5,
            backgroundColor: "lightcyan",
            border: "1px solid gray",
            borderRadius: 6,
        };
        const checkEven = this.props.id % 2 === 0;
        style.float = checkEven ? "right" : "left";
        const margin = checkEven ? "marginLeft" : "marginRight";
        style[margin] = 20;
        return style;
    };

    render() {
        return (
            <div className="container my-3" style={{ overflow: "hidden" }}>
                <img
                    src={this.props.imgUrl}
                    alt="Some photos here"
                    style={this.getImgStyle()}
                />

                <div style={{ textAlign: "justify" }}>
                    <h3 className="text-primary">{this.props.title}</h3>
                    <p className="text-muted">{this.props.content}</p>
                </div>
                <h4>Number of Votes:</h4>
                <VoteButtons vote={this.props.vote} />
                <LikeIcon />
                <hr />
            </div>
        );
    }
}

export default Card;
