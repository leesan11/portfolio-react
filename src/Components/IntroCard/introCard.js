import React, { Component } from "react";
import {Card, CardTitle} from 'react-materialize';
import Me from "./me.jpg";
import "./introCard.css"
class IntroCard extends Component {

    render() {
        return (
        <Card className='large'
            header={<CardTitle image={Me}>About Me</CardTitle>}
            >
            <p>I am a full-stack MERN web developer. Below are the languages that I have experience with: </p>
            <ul>
                <li>JavaScript ~5 years</li>
                <li>HTML ~5 years</li>
                <li>CSS ~5 years</li>
                <li>Java ~2 years</li>
                <li>Python ~4 years</li>
                <li>PHP ~1 year</li>
                <li>C#</li>
                </ul>
        </Card>)
    }
}

export default IntroCard;