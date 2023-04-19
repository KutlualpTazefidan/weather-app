// import ReactRain from "react-rain-animation";
import { useEffect } from "react";
import "./BackgroundAnimation.css";
// import "react-rain-animation/lib/style.css";

function BackgroundAnimation() {
  // return <ReactRain numDrops="20" />;

  function rain() {
    const amount = 20;
    const backgroundContainer = document.getElementsByClassName(
      "background-container"
    )[0];
    // let i = 0;
    // while (i < amount) {
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
      console.log(backgroundContainer);
    }
    // i++;
    // }
  }
  useEffect(() => {
    rain();
  }, []);
  return <></>;
}
export default BackgroundAnimation;
