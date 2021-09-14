import React, { Component } from "react";
import Card from "./card";
import { utilities } from "./News";

class CardList extends Component {
    render() {
        const sorted = utilities().sort(function (a, b) {
            return b.vote - a.vote;
        });
        const allNews = sorted.map((item, key) => (
            <Card
                key={key}
                id={key}
                title={item.title}
                content={item.content}
                imgUrl={item.imgUrl}
                vote={item.vote}
            />
        ));
        return (
            <div>
                <h1 className="text-center mt-3 text-warning">Breaking News</h1>
                {allNews}
            </div>
        );
    }
}

export default CardList;
