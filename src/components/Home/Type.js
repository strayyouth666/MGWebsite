import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Tuxedo.Autocare",
          "Huh-Hah!",
          "Sateh.Pojok",
          "Bahureksa.Leatherworks",
          "Sappox.Snacks",
          "Ubamie",
          "Shore.id",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
