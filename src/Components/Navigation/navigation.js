import React, {Component} from "react";
import {Button} from 'react-materialize'

class Navigation extends Component{

    state={
        showCurrent:""
    }

    componentDidMount(){
        
    }


    handleClick(e){
        this.setState({showCurrent:e.target.data})
    }


    render(){
        return(
    <Button floating icon='home' fab='vertical' faicon='fa fa-plus' className='red' large style={{bottom: '45px', right: '24px'}}>
    <Button onClick={this.handleClick} data='first' floating icon='insert_chart' className='red'/>
    <Button floating icon='format_quote' className='yellow darken-1'/>
    <Button floating icon='publish' className='green'/>
    <Button floating icon='attach_file' className='blue'/>
    </Button>)
    }


}

export default Navigation;