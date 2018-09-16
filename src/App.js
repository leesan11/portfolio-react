import React, { Component } from 'react';
import Navigation from "./Components/Navigation/navigation";
import ProjectCard from "./Components/ProjectCard/projectCard"
import "./App.css";

class App extends Component {


  renderProject(){
    if(this.state.showProject){
      return (<ProjectCard/>)
    }
  }

  render() {
    return (
      <div className="contain">
      <div class="type-writer" style={{width:"fit-content",overflow:"hidden"}}>
                <h4>My name is John.</h4>
                <h4>I am a full-stack web developer.</h4>
                <h4>Welcome to my Front End React site!</h4>
            </div>
      <Navigation
      handleClickProject={this.handleClickProject}
      />
      <ProjectCard/>
      </div>
    );
  }
}

export default App;
