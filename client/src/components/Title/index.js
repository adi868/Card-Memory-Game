import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
        <div className="container text-align">
            <img src="/images/squirtle.png" id="ash" alt="Ash Ketchum" data-toggle="tooltip" data-placement="top" data-content="Hey Poke-Trainer! Try and Catch Them All (But Don't Do It Twice!)" />
            <span id="hover">Hey There!</span>
            <span id="clickMe">Click Me!</span>
            <input type="button" id = "play" value="PLAY MUSIC" onclick="play()"></input>
        </div>
        {props.children}
    </div>
  )
  }
export default Title;
