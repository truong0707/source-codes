import React, { useState } from "react";
import "./characterSub.css";

function CharacterSub() {
  const [changeBtn, setChangeBtn] = useState(false);

  const handleChangeBtn = () => setChangeBtn(!changeBtn);

  return (
    <div>
      <div className="character-name">
        <img src="/images/characters-img/zhongli-name.png" alt="char-name" />
      </div>


      <div className="character-cv">
        <img
          className="character-btn"
          src="/images/characters-img/character-btn.jpg"
          alt="char-btn"
        />
        <div className="character-cv-actor">
          <p>GENSHIN VOICE ACTOR</p>
        </div>
        <div className="character-voice">
          <img
            onClick={changeBtn}
            src="/images/characters-img/character-voice.png"
            alt="character-btn"
          />
          <audio src={`${changeBtn && "/audio/zhongli-EN.ogg"}`}  
                  autoPlay loop="loop" preload="preload">
          </audio>
          {/* {voice && <CharacterAudio/>} */}
        </div>
      </div>

      <div
        onClick={handleChangeBtn}
        className={`character-switch  ${changeBtn ? "" : "active"}`}
      >
        <div className="character-subscribe"></div>
        <div className="character-subscribe-btn"></div>
      </div>

      {/* Character Information */}
      <div className="character-info">
        <div className="char-btn">
          <img src="images/characters-img/character-info.png" alt="info-btn" />
        </div>
        <div className="character-content">
          <p>Vị khách bí ẩn của Vãng Sinh Đường. Anh ta có vẻ bề ngoài khôi ngô tuấn tú, phong độ lịch lãm và sở hữu kiến thức vượt xa người thường. <br/> 
              Mặc dù có lai lịch thần bí, nhưng anh ấy lại biết lễ nghi, hiểu quy định. Tọa trấn Vãng Sinh Đường, có thể thực hiện các nghi lễ của vạn vật trong trời đất. </p>
        </div>
      </div>
      
        <img className="character-text" src="images/characters-img/zhongli-text.png" alt="zhongli-text" />
    </div>
  );
}

export default CharacterSub;
