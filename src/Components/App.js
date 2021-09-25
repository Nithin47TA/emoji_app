import React from "react";
import Detail from "./detail";
import emojipedia from "../Data/emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
       { emojipedia.map((data)=><Detail key={data.id} emoji={data.emoji} meaning={data.meaning} name={data.name}/>)}
       
      </dl>
    </div>
  );
}

export default App;

