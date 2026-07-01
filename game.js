let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgamebtn=document.querySelector("#new_btn");
let msgcontainer=document.querySelector(".msg_container");
let msg=document.querySelector("#msg");
let turnO=true;
let count=0;
const winPattern= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame =()=>{
    turnO=true;
    count=0;
    enableboxes();
    msgcontainer.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click",() => {
       
        if(turnO){
            box.innerText = "O";
            box.style.color="#f43f5e"
            turnO=false;
        }
        else{
            box.innerText= "X";
            box.style.color="#06b6d4"
            turnO=true;
        }
        box.disabled=true;
        count++;
        let iswinner=checkWinner();
        if(count===9 &&!iswinner){
            msg.innerText="Game Draw"
            msgcontainer.classList.remove("hide")
        }
    });
});
const disableboxes =() =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes =() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        box.style.color="";
    }
}
const showWinner =(winner) =>{
    msg.innerText =`Congratulation,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();

}
const checkWinner =() =>{
    for ( let pattern of winPattern){
            let pos1val =boxes[pattern[0]].innerText;
            let pos2val=boxes[pattern[1]].innerText;
            let pos3val=boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "" ){
            if(pos1val === pos2val && pos2val=== pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
                return true;
            }
        }
    }
    return false;
}
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
