import React from "react";

const Logo = (props) => {
  return (
    <div>
      <header>
        <h1>Welcome to the {props.appName}</h1>
        <img onClick={props.handleClick} src='https://i.ibb.co/wYZy13z/charmander.png' alt='Charmander'></img>
      </header>
    </div>
  );
}

export default Logo