const boxes = document.querySelectorAll('.box')
const resetBtn = document.querySelectorAll('.reset')
const btn = document.querySelector('.btn-r');
let winner = document.querySelector('.winner');
let message = document.querySelector('.msg');

let turnO = true;
let WinPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
boxes.forEach((box)=>{
    box.addEventListener('click', ()=>{
        if(turnO){
            // box.innerHTML='<i class="fa-solid fa-xmark"></i>'
            box.innerHTML='X'
            turnO = false
        }
        else{
            box.innerHTML='O'
            // box.innerHTML='<i class="fa-regular fa-circle"></i>'
            turnO = true;

        }
        box.disabled = true

        checkwinner();
    })
})
function showWinner(p){
    winner.innerText = `Congratualation winner is ${p}`;
    message.style.display = 'flex'
    btn.style.display = 'flex'
}
function checkwinner(box){
    WinPatterns.forEach((pat,i)=>{
        // console.log(pat[0],pat[1],pat[2])
        // console.log(,boxes[pat[1]].innerText,boxes[pat[2]].innerText)
        let pos1 = boxes[pat[0]].innerText
        let pos2 = boxes[pat[1]].innerText
        let pos3 = boxes[pat[2]].innerText
        if( pos1 !== ''&& pos2 !== '' && pos3 !== ''){
            if(pos1 === pos2 && pos2 === pos3){
                // console.log('Winner is ',pos1)
                showWinner(pos1);
                
            }
        }
    })
}