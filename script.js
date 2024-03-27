const resetBtn = document.querySelector("#reset-btn");
const newBtn = document.querySelector("#new-btn");

let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".winmgs")
let mgs = document.querySelector(".mgs");

let turn0 = true;
let count = 9;


const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


const resetGame = () => {
    turn0 = true;
    msgContainer.classList.add("hide");
    enableBox();
    count = 9;


}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O"
            turn0 = false
        }
        else {
            box.innerText = "X"
            turn0 = true
        }
        box.disabled = true
        checkWinner();
        count--
        console.log(count)

    })

})


const showWinner = (winner) => {

    mgs.innerText = `Congratulations,Winner is "${winner}"`
    msgContainer.classList.remove("hide")
    disabledBox();
}





const enableBox = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }


}


const disabledBox = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}


const checkWinner = () => {
    for (pattern of winPatterns) {
        let posval0 = boxes[pattern[0]].innerText;
        let posval1 = boxes[pattern[1]].innerText;
        let posval2 = boxes[pattern[2]].innerText;
        if (posval0 != "" && posval1 != "" && posval2 != "") {
            if (posval0 === posval1 && posval1 === posval2) {
                showWinner(posval0);
                return;
            }
        }
    }
    if (count === 1) {
        drawGame();
    }
}



const drawGame = () => {
    {
        mgs.innerText = `Game was Draw`
        msgContainer.classList.remove("hide")
        disabledBox();
    }
}

resetBtn.addEventListener("click", resetGame)
newBtn.addEventListener("click", resetGame)

