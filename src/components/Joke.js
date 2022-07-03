import React from "react";

export default function Joke({setup, punchline}){
  return(
    <div>
      <h1>Setup: {setup}</h1>
      <h2>Punchline: {punchline}</h2>
      <hr/>
    </div>
  );
}
