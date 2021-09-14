import React, { Component } from "react";
import * as Icon from "react-bootstrap-icons";

class VoteButtons extends Component {
    state = {
        vote: this.props.vote,
    };
    voteIncrease = () => {
        let numberOfVotes = this.state.vote;

        this.setState({
            vote: ++numberOfVotes,
        });
    };
    voteDecrease = () => {
        let numberOfVotes = this.state.vote;
        this.setState({
            vote: numberOfVotes === 0 ? 0 : --numberOfVotes,
        });
    };
    getDownBtnStyle = () => {
        let style = "btn btn-outline-danger btn-sm ";
        if (this.state.vote === 0) {
            style += "disabled";
        }
        return style;
    };
    render() {
        return (
            <div className="btn-group me-3">
                <button
                    onClick={this.voteIncrease}
                    className="btn btn-outline-success btn-sm"
                >
                    <Icon.ArrowUp size={20} />
                    Increase
                </button>
                <span className="btn btn-info btn-sm border-secondary">
                    {this.state.vote}
                </span>
                <button
                    onClick={this.voteDecrease}
                    className={this.getDownBtnStyle()}
                >
                    <Icon.ArrowDown size={20} />
                    Decrease
                </button>
            </div>
        );
    }
}

export default VoteButtons;
