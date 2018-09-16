import React,{Component} from 'react';
import {Carousel} from 'react-materialize';
import "./projectcard.css";
import nyt from "./nytreact.jpg";
import sch from "./scheduler.jpg";
import wor from "./worksheet.jpg";


class ProjectCard extends Component {
    
    componentDidMount(){
        document.body.addEventListener("click",function(e){
            
            if(e.target===document.getElementsByTagName("img")[0]||e.target===document.getElementsByTagName("img")[1]||e.target===document.getElementsByTagName("img")[2])return;

            document.getElementsByClassName("carousel")[0].style.display="none";
            
        })
    }

    render(){
        return(
            <Carousel options={{ fullWidth: true }} images={[
                nyt,
                sch,
                wor,
              ]} />
        )
    }
}
export default ProjectCard;