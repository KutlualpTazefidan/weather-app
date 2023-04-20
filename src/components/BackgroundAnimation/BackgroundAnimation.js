// import ReactRain from "react-rain-animation";
import { useEffect, useState } from "react";
import "./BackgroundAnimation.css";

function BackgroundAnimation({ weather, onColorModeChange }) {
  const [backgroundClassName, setBackgroundClassName] = useState(
    "background-image-container"
  );

  useEffect(() => {
    clearDropsAndFlakes();
    if (weather.location === "Rainforest") {
      rain();
      setBackgroundClassName("background-image-container --rainy");
    }
    if (weather.location === "Arctic") {
      snowFall();
      setBackgroundClassName("background-image-container --snowy");
    }
    if (weather.location === "Sahara") {
      const rainDropDomElements = document.getElementsByClassName("rainDrop");
      while (rainDropDomElements.length > 0) {
        rainDropDomElements[0].remove();
      }
      setBackgroundClassName("background-image-container");
    }
    onColorModeChange(weather.location);
  }, [weather.location]);
  return <div className={backgroundClassName}></div>;

  function rain() {
    const amount = 20;
    const backgroundContainer = document.getElementsByClassName(
      "background-container"
    )[0];
    for (let index = 0; index < amount; index++) {
      const drop = document.createElement("i");
      const size = Math.random() * 5;
      const posX = Math.floor(Math.random() * window.innerWidth);
      const delay = Math.random() * -20;
      const duration = Math.random() * 10;
      drop.style.width = 0.2 + size + "px";
      drop.style.left = posX + "px";
      drop.style.animationDelay = delay + "s";
      drop.style.animationDuration = 1 + duration + "s";
      drop.setAttribute("class", "rainDrop");
      backgroundContainer.appendChild(drop);
    }
  }

  function snowFall() {
    const amount = 20;
    const backgroundContainer = document.getElementsByClassName(
      "background-container"
    )[0];
    for (let index = 0; index < amount; index++) {
      const randomX = randomRange(-100000, 100000) * 0.01;
      const randomOffset = randomRange(0, 100000) * 0.001;
      const randomXEnd = Math.floor(randomX + randomOffset) / 1000 + "vh";
      const randomXEndYoyo = Math.floor(randomX + randomOffset / 2) / 10 + "vh";
      const randomYoyoTime = randomRange(30000, 80000) / 100000;
      const randomYoyoY = randomYoyoTime + "vh";
      const randomScale = Math.random(10000) * 10;
      const fallDuration = randomRange(10, 30) * 1 + "s";
      const fallDelay = Math.random(30) * -1 + "s";
      const keyframesRule = `@keyframes snow-flake${index} {
        #{percentage(${randomYoyoTime})} {
          transform: translate(${randomXEnd}, ${randomYoyoY}) scale(${randomScale});
        }

        to {
          transform: translate(${randomXEndYoyo}, 100vh) scale(${randomScale});
        }
      }`;

      const styleSheet = document.styleSheets[0];
      styleSheet.insertRule(keyframesRule);
      const flake = document.createElement("div");
      const delay = Math.random() * -20 + "s";
      const duration = 1 + randomRange(10, 30) + "s";
      flake.style.left = (Math.random() * 2 - 1) * 200 + 200 + "px";
      flake.style.opacity = Math.random(10000);
      flake.style.translateX = Math.random() * 200 + "px";
      flake.style.translateY = "-10px";
      flake.style.scale = Math.random(10000);
      flake.style.animationDelay = delay;
      flake.style.animationDuration = duration;
      flake.style.animationTimingFunction = "linear";
      flake.style.animationIterationCount = "infinite";
      flake.style.animationName = `snow-flake${index}`;
      flake.setAttribute("class", "snowFlake");
      backgroundContainer.appendChild(flake);
    }
  }

  function randomRange(min, max) {
    const rand = Math.random();
    return min + Math.floor(rand * (max - min + 1));
  }

  function clearDropsAndFlakes() {
    const rainDropDomElements = document.getElementsByClassName("rainDrop");
    while (rainDropDomElements.length > 0) {
      rainDropDomElements[0].remove();
    }
    const snowFlakesDomElements = document.getElementsByClassName("snowFlake");
    while (snowFlakesDomElements.length > 0) {
      snowFlakesDomElements[0].remove();
    }
  }
}
export default BackgroundAnimation;
