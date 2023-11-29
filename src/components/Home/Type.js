import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "React Developers",
          "Angular Developers",
          "Node Developers",
          "DotNet Developers",
          "MERN Stack Developers",
          "MEAN Stack Developers",
          "Open Source Contributors",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
