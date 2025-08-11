const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const decrementBtn = document.getElementById("decrementBtn");



let count = 0;

//update function
function updateNum(){
    counter.textContent = count;
}

//increment

incrementBtn.addEventListener('click', () =>{
    count++;
    updateNum();
})

//decrement

decrementBtn.addEventListener('click', () =>{
    count--;
    updateNum();
})

//reset

resetBtn.addEventListener('click', () =>{
    count=0;
    updateNum();
})