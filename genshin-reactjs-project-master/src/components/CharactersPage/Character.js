import "./character.css";
import React from "react";
import CharacterSub from "./CharacterSub";

function Character() {
  return (
    <div>
      <div
        className="character"
        style={{
          backgroundImage:
            "url(" + "./images/characters-img/characters-background.jpg" + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
          <CharacterSub/>

          <div className="chars-sliders">
              
          </div>
          <div className="chars-wrapper">
                <img className="char-img" src="/images/characters-img/zhongli.png" alt="d" />
          </div>
      </div>
    </div>
  );
}

export default Character;
