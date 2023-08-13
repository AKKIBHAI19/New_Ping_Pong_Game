const p1 = {
  Score: 0,
  Display: document.querySelector("#p1Display"),
  Button: document.querySelector("#p1Button"),
};
const p2 = {
  Score: 0,
  Display: document.querySelector("#p2Display"),
  Button: document.querySelector("#p2Button"),
};
const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");
let winningScore = 3;
let isGameOver = false;

function setScore(player, opponent) {
  if (!isGameOver) {
    player.Score += 1;
    if (player.Score === winningScore) {
      isGameOver = true;
      player.Display.classList.toggle("winner");
      opponent.Display.classList.toggle("loser");
      opponent.Button.disabled = true;
      player.Button.disabled = true;
    }
    player.Display.textContent = player.Score;
  }
}

p1.Button.addEventListener("click", function(){
    setScore(p1, p2)
});
p2.Button.addEventListener("click", ()=>{
    setScore(p2, p1)
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});
resetButton.addEventListener("click", function(){
    reset()
});

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.Score = 0;
    p.Display.innerText = 0;
    p.Display.classList.remove("winner", "loser");
    p.Button.disabled = false;
  }
}
