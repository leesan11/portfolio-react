import React, {Component} from 'react';
import {Modal} from 'react-materialize';
import IntroCard from '../IntroCard/introCard';
import "./modalIntro.css";

class modalIntro extends Component{
    render(){
        return (<Modal
            header='About Me'
            trigger={this.props.Trigger}
            >
            <IntroCard/>
          </Modal>)
    }
}
export default modalIntro;