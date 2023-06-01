import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      <Home color={user.color} name={user.name} city={user.city} />
      <About 
      github={Links.github} 
      linkedin={Links.linkedin} 
      bio={user.bio} 
      />
    </div>
  );
}


export default App;
