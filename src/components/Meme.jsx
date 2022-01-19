import memesData from "../memesData";
import React, { useState } from "react";
import { computeHeadingLevel } from "@testing-library/react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function randomMeme(event) {
    const memesArray = allMemeImages.data.memes;
    const randomNum = Math.floor(Math.random() * memesArray.length); 
    const { url } = memesArray[randomNum];
    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: url,
      };
    });
  }

  return (
    <main>
      <div className="form">
        <input
          name="topText"
          value={meme.topText}
          type="text"
          placeholder="Top text"
          className="form--input"
          onChange={handleChange}
        />
        <input
          name="bottomText"
          value={meme.bottomText}
          type="text"
          placeholder="Bottom text"
          className="form--input"
          onChange={handleChange}
        />
        <button className="form--button" onClick={randomMeme}>
          Get a new meme image 🖼
        </button>
      </div>

      <div className="image-container">
        <img src={meme.randomImage} alt="" className="meme-image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
