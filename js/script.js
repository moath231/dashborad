let spancount = document.querySelectorAll(".Statistics .box span");
let Statistics = document.querySelector(".Statistics");
let state = false;
console.log(Statistics.offsetTop);
onscroll = function(){
  if(this.scrollY >= Statistics.offsetTop){
    if(!state){
      spancount.forEach((e1) => {startcount(e1)});
    }
    state =true;
  }
}
function startcount(e1){
  let goal = e1.dataset.goal;
  let count = setInterval(() => {
    e1.textContent++;
    if (e1.textContent == goal) {
      clearInterval(count);
    }
  }, 3000/goal);
}


