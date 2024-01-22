// calling elements

let basktImg = document.getElementById("basketImage");


// handel basketimage-------------------------

let step = 50;
let maxWidth = window.innerWidth - basktImg.width;
document.addEventListener("keydown", function (event) {
  if (event.key == "ArrowLeft") {
    step -= 10;
    step = Math.max(step, 0);
    basktImg.style.left = step + "px";
  } else if (event.key == "ArrowRight") {
    step += 10;
    step = Math.min(step, maxWidth);
    basktImg.style.left = step + "px";
  }
});

// handel eggimage-----------------------------------
const scoreElement = document.getElementById('score');
let score = 0;

const moveEggImage = function (eggImg, currentLeft, currentTop) {
  let idStopInterval = setInterval(() => {
    // Handel Left
  
    scoreElement.innerText = score;
    currentTop += 10;

    if (currentLeft >= window.innerWidth - eggImg.width) {
      currentLeft = 0;
    }
    currentLeft += 5;
    // Handel Top
    if (currentTop >= window.innerHeight - (eggImg.height + 10)) {
      if (compareBasketAndEgg() == true) {
        eggImg.classList.add("notShow");
        score++
        if(score==5){
          alert("good player")
          score=0;
          moveEggImage(eggImg,currentLeft,0)
        }
    

      } else {
        // show broken image
        eggImg.src = "images/Uovo_sorridente.png";
      }
      clearInterval(idStopInterval);
      setTimeout(() => {
        setTimeout(() => {
          eggImg.src = "images/1182.png";
          eggImg.classList.remove("notShow");
          eggImg.style.left = currentLeft + "px";
        }, 50);
        moveEggImage(eggImg, currentLeft, 0);
      }, 300);
    } else {
      eggImg.style.top = currentTop + "px";
    }
  }, 50);
};
// 
const compareBasketAndEgg = function () {
  const movableBasket = document
    .getElementById("basketImage")
    .getBoundingClientRect();
  const movingEgg = document.getElementById("eggimage").getBoundingClientRect();
  return !(
    //will return true if these options dosen't occur
    (
      movableBasket.top > movingEgg.bottom ||
      movableBasket.right < movingEgg.left ||
      movableBasket.bottom < movingEgg.top ||
      movableBasket.left > movingEgg.right
    )
  );
};
