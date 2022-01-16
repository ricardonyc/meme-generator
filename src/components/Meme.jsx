import memesData from "../memesData";
import React, { useState } from "react";
import { computeHeadingLevel } from "@testing-library/react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  // console.log(meme.randomImage);

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function randomMeme() {
    const memesArray = allMemeImages.data.memes;
    const randomNum = Math.floor(Math.random() * memesArray.length);
    const { url } = memesArray[randomNum];
    console.log(url);
    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: url,
      };
    });
  }

  console.log();

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={randomMeme}>
          Get a new meme image 🖼
        </button>
      </div>

      <div className="image-container">
        <img src={meme.randomImage} alt="" className="meme-image" />
      </div>
    </main>
  );
}
