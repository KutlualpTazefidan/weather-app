// import ReactRain from "react-rain-animation";
import "./BackgroundAnimation.css";
// import "react-rain-animation/lib/style.css";

function BackgroundAnimation() {
  // return <ReactRain numDrops="20" />;

  function rain() {
    const amount = 100;
    const backgroundContainer = document.getElementsByClassName(
      "background-container"
    );
    // let i = 0;
    // while (i < amount) {
    for (let index = 0; index < amount; index++) {
      const size = Math.random() * 5;
      const posX = Math.floor(Math.random() * window.innerWidth);
      const delay = Math.random() * -20;
      const duration = Math.random() * 5;

      const drop = document.createElement("i");
      drop.setAttribute("class", "drop");
      // drop.style.width = 0.2 + size + "px";
      // drop.style.left = posX + "px";
      // drop.style.animationDelay = delay + "s";
      // drop.style.animationDuration = 1 + duration + "s";
      console.log(backgroundContainer);
      backgroundContainer.appendChild(drop);
    }
    // i++;
    // }
  }
  rain();
  return <div className="background-container">asd</div>;
}
export default BackgroundAnimation;
