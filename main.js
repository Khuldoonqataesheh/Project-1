document.addEventListener("DOMContentLoaded", () => {
  const cells = document.querySelectorAll(".grid-container div");
  const result = document.querySelector("#result");
  const displayNumberOfPlayer = document.querySelector("#numberofplayer");
  let numberOfPlayer = 1;
  for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = () => {
      if (cells[i + 7].classList.contains("filled")) {
        if (numberOfPlayer === 1) {
          cells[i].classList.add("filled");
          cells[i].classList.add("player_1");
          numberOfPlayer = 2;
          displayCurrentPlayer.innerHTML = numberOfPlayer;
        } else if (numberOfPlayer === 2) {
          cells[i].classList.add("filled");
          cells[i].classList.add("player_2");
          numberOfPlayer = 1;
          displayNumberOfPlayer.innerHTML = numberOfPlayer;
        }
      } else {
        alert("Unavailable");
      }
    };
  }
});
