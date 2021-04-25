document.addEventListener("DOMContentLoaded", () => {
  const cells = document.querySelectorAll(".grid-container div");
  const result = document.querySelector("#result");
  const displayNumberOfPlayer = document.querySelector("#numberofplayer");
  let numberOfPlayer = 1;
const rows =[[0,1,2,3,4,5,6],
[7,8,9,10,11,12,13],
[14,15,16,17,18,19,20],
[21,22,23,24,25,26,27],
[28,29,30,31,32,33,34],
[35,36,37,38,39,40,41]] 
const columns = [[0,7,14,21,28,35],
[1,8,15,22,29,36],
[2,9,16,23,30,37],
[3,10,17,24,31,38],
[4,11,18,25,32,39],
[5,12,19,26,33,40],
[6,13,20,27,34,41]]
  
  for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = () => {
      if (cells[i + 7].classList.contains("filled")) {
        if (numberOfPlayer === 1) {
          cells[i].classList.add("filled");
          cells[i].classList.add("player_1");
          displayNumberOfPlayer.innerHTML = numberOfPlayer;
          console.log(diagonalCheck_2())
          console.log(verticalCheck())
          console.log(diagonalCheck())
          console.log(horizontalCheck())
         // console.log(cells[i].classList[0])
          numberOfPlayer = 2;
          
        } else if (numberOfPlayer === 2) {
          cells[i].classList.add("filled");
          cells[i].classList.add("player_2");
          console.log(diagonalCheck_2())
          console.log(verticalCheck())
          console.log(diagonalCheck())
          console.log(horizontalCheck())
       //  console.log(cells[i].classList[1])
          numberOfPlayer = 1;
          displayNumberOfPlayer.innerHTML = numberOfPlayer;
        }
      } else {
        alert("Unavailable");
      }
    };
  }
   colorMatchCheck= (one, two, three, four)=>{
    return (one === two && one === three && one === four );
}
horizontalCheck= ()=>{
    for (let row = 0; row < 42; row+=7){
        for (let match =0; match < 4; match++){
           if (cells[row+match].classList[1]==="player_2"&&cells[row+match+1].classList[1]==="player_2"&& 
            cells[row+match+2].classList[1]==="player_2"&& cells[row+match+3].classList[1]==="player_2"){
               return true;
           }
           if (cells[row+match].classList[1]==="player_1"&&cells[row+match+1].classList[1]==="player_1"&& 
           cells[row+match+2].classList[1]==="player_1"&& cells[row+match+3].classList[1]==="player_1"){
              return true;
          }
        }
    }
}
verticalCheck= ()=>{
    for (let column = 0; column < 7; column++){
        for (let match =0; match < 42; match+=7){
           if (cells[column+match].classList[1]==="player_2"&&cells[column+match+7].classList[1]==="player_2"&& 
            cells[column+match+14].classList[1]==="player_2"&& cells[column+match+21].classList[1]==="player_2"){
               return true;
           }
           if (cells[column+match].classList[1]==="player_1"&&cells[column+match+7].classList[1]==="player_1"&& 
           cells[column+match+14].classList[1]==="player_1"&& cells[column+match+21].classList[1]==="player_1"){
              return true;
          }
        }
    }
}
diagonalCheck= ()=>{
    for (let diag = 0; diag < 17; diag++){
        for (let match =0; match < 4; match++){
            
           if (cells[diag+match].classList[1]==="player_2"&&cells[diag+match+8].classList[1]==="player_2"&& 
            cells[diag+match+16].classList[1]==="player_2"&& cells[diag+match+24].classList[1]==="player_2"){
               return true;
           }
           if (cells[diag+match].classList[1]==="player_1"&&cells[diag+match+8].classList[1]==="player_1"&& 
           cells[diag+match+16].classList[1]==="player_1"&& cells[diag+match+24].classList[1]==="player_1"){
              return true;
          }
         
        }
    }
}
diagonalCheck_2= ()=>{
    for (let diag = 0; diag < 23; diag++){
        for (let match =0; match < 4; match++){
            
           if (cells[diag+match].classList[1]==="player_2"&&cells[diag+match+6].classList[1]==="player_2"&& 
            cells[diag+match+12].classList[1]==="player_2"&& cells[diag+match+18].classList[1]==="player_2"){
               return true;
           }
           if (cells[diag+match].classList[1]==="player_1"&&cells[diag+match+6].classList[1]==="player_1"&& 
           cells[diag+match+12].classList[1]==="player_1"&& cells[diag+match+18].classList[1]==="player_1"){
              return true;
          }
         
        }
    }
}
});
