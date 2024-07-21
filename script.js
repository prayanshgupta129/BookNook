// console.log("radhe radhe");
let music= new Audio("music.mp3");
let turnmusic=new Audio("ting.mp3");
let gameovermusic=new Audio("gameover.mp3");
let turn="X";
let gameover=false;

//function to change the record
const changeval=()=>{
    return turn ==="X"?"0":"X";
}
//function to check win
const checkwin=()=>{
    boxtext=document.getElementsByClassName("box")
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
 wins.forEach(e=>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText === boxtext[e[1]].innerText)
 &&(boxtext[e[0]].innerText !=="")){
document.querySelector(".info").innerText =   boxtext[e[0]].innerText + " Won";
gameover = true;
gameovermusic.play();
document.querySelector(".image-div").getElementsByTagName("img")[0].style.width= "160px";
}
 })


}
//game logic 
let boxes = document.getElementsByClassName("boxtext");
Array.from(boxes).forEach(element => {
    let boxtext=element.querySelector(".box");
    element.addEventListener("click",(e)=>{
        if(boxtext.innerText===""){
            boxtext.innerText = turn;
            music.play();
            turn = changeval();
            turnmusic.play();
            checkwin();
            music.pause();
            if(!gameover){
            document.getElementsByClassName("info")[0].innerText ="Turn for "+ turn;
           }
    
  
        }
       
    })
    // document.getElementsByClassName("info")[0].innerText ="The Game Has Been Drawn";
});
btn.addEventListener("click",()=>{
    boxtexts=document.querySelectorAll(".box");
    Array.from(boxtexts).forEach((e)=>{
      e.innerText=" "
      document.querySelector(".image-div").getElementsByTagName("img")[0].style.width= "0px"

    })
    turn="X";
    gameover=false;
    document.getElementsByClassName("info")[0].innerText ="Turn for "+ turn;
})

    


