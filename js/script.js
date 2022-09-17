// William atua aqui e Arthur Revisa em seguida!
const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

const goBack = () => {
  history.back();
};
const refreshJogada = () => {
  location.reload();
};

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.left = `${marioPosition}px`;

    mario.src = "../assets/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    // alert("Você perdeu, bobinho.");

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);
