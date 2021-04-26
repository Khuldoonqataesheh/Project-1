document.addEventListener("DOMContentLoaded", () => {
  const cells = document.querySelectorAll(".grid-container div");
  const reset = document.querySelector("#reset");
  const displayNumberOfPlayer = document.querySelector("#numberofplayer");

  let numberOfPlayer = 1;

  for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = () => {
      if (cells[i + 7].classList.contains("filled")) {
        if (numberOfPlayer === 1) {
          cells[i].classList.add("filled");
          cells[i].classList.add("player_1");
          numberOfPlayer = 2;
          displayNumberOfPlayer.innerHTML = "Player 2 turn ";

          if (
            horizontalCheck() ||
            verticalCheck() ||
            diagonalCheck() ||
            diagonalCheck_2()
          ) {
            displayNumberOfPlayer.innerHTML = "Player_1 Is Winner ";
            const button = document.createElement("button");
            reset.append(button);
            button.innerText = "Reset Game";
            button.onclick = () => {
              for (let i = 0; i < 42; i++) {
                cells[i].classList.remove("filled", "player_1", "player_2");
              }
              button.remove();
              numberOfPlayer = 2;
              displayNumberOfPlayer.innerHTML = "Player 2 turn ";
            };
          }
        } else if (numberOfPlayer === 2) {
          cells[i].classList.add("filled");
          cells[i].classList.add("player_2");
          numberOfPlayer = 1;
          displayNumberOfPlayer.innerHTML = "Player 1 turn ";

          if (
            horizontalCheck() ||
            verticalCheck() ||
            diagonalCheck() ||
            diagonalCheck_2()
          ) {
            displayNumberOfPlayer.innerHTML = "Player_2 Is Winner ";
            const button = document.createElement("button");
            reset.append(button);
            button.innerText = "Reset Game";
            button.onclick = () => {
              for (let i = 0; i < 42; i++) {
                cells[i].classList.remove("filled", "player_1", "player_2");
              }
              button.remove();
              numberOfPlayer = 1;
              displayNumberOfPlayer.innerHTML = "Player 1 turn ";
            };
          }
        }
      } else {
        alert("Can't Press Here");
      }
    };
  }

  horizontalCheck = () => {
    for (let row = 0; row < 42; row += 7) {
      for (let match = 0; match < 4; match++) {
        if (
          cells[row + match].classList[1] === "player_2" &&
          cells[row + match + 1].classList[1] === "player_2" &&
          cells[row + match + 2].classList[1] === "player_2" &&
          cells[row + match + 3].classList[1] === "player_2"
        ) {
          return true;
        }
        if (
          cells[row + match].classList[1] === "player_1" &&
          cells[row + match + 1].classList[1] === "player_1" &&
          cells[row + match + 2].classList[1] === "player_1" &&
          cells[row + match + 3].classList[1] === "player_1"
        ) {
          return true;
        }
      }
    }
  };
  verticalCheck = () => {
    for (let column = 0; column < 7; column++) {
      for (let match = 0; match < 42; match += 7) {
        if (
          cells[column + match].classList[1] === "player_2" &&
          cells[column + match + 7].classList[1] === "player_2" &&
          cells[column + match + 14].classList[1] === "player_2" &&
          cells[column + match + 21].classList[1] === "player_2"
        ) {
          return true;
        }
        if (
          cells[column + match].classList[1] === "player_1" &&
          cells[column + match + 7].classList[1] === "player_1" &&
          cells[column + match + 14].classList[1] === "player_1" &&
          cells[column + match + 21].classList[1] === "player_1"
        ) {
          return true;
        }
      }
    }
  };
  diagonalCheck = () => {
    for (let diag = 0; diag < 17; diag++) {
      for (let match = 0; match < 4; match++) {
        if (
          cells[diag + match].classList[1] === "player_2" &&
          cells[diag + match + 8].classList[1] === "player_2" &&
          cells[diag + match + 16].classList[1] === "player_2" &&
          cells[diag + match + 24].classList[1] === "player_2"
        ) {
          return true;
        }
        if (
          cells[diag + match].classList[1] === "player_1" &&
          cells[diag + match + 8].classList[1] === "player_1" &&
          cells[diag + match + 16].classList[1] === "player_1" &&
          cells[diag + match + 24].classList[1] === "player_1"
        ) {
          return true;
        }
      }
    }
  };
  diagonalCheck_2 = () => {
    for (let diag = 0; diag < 23; diag++) {
      for (let match = 0; match < 4; match++) {
        if (
          cells[diag + match].classList[1] === "player_2" &&
          cells[diag + match + 6].classList[1] === "player_2" &&
          cells[diag + match + 12].classList[1] === "player_2" &&
          cells[diag + match + 18].classList[1] === "player_2"
        ) {
          return true;
        }
        if (
          cells[diag + match].classList[1] === "player_1" &&
          cells[diag + match + 6].classList[1] === "player_1" &&
          cells[diag + match + 12].classList[1] === "player_1" &&
          cells[diag + match + 18].classList[1] === "player_1"
        ) {
          return true;
        }
      }
    }
  };
});
