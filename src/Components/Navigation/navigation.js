import React, {Component} from "react";
import ModalIntro from "../ModalIntro/modalIntro"
import {Button} from 'react-materialize';


class Navigation extends Component{

    handleClickProject(){
        document.getElementsByClassName("carousel")[0].style.display="block";
    }

    render(){
        return(
    <Button floating icon='home' fab='vertical' faicon='fa fa-plus' className='red' large style={{bottom: '45px', right: '24px'}}>
    <ModalIntro
    Trigger={<Button data='first' floating icon='perm_identity' className='red'/>}
    />
    <Button onClick={this.handleClickProject} floating icon='format_quote' className='yellow darken-1'/>
    
    </Button>)
    }


}

export default Navigation;