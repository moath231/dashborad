let spancount = document.querySelectorAll(".Statistics .box span");
let Statistics = document.querySelector(".Statistics");
let state = false;
function startcount(e1){
  let goal = e1.dataset.goal;
  let count = setInterval(() => {
    e1.textContent++;
    if (e1.textContent == goal) {
      clearInterval(count);
    }
  }, 3000/goal);
}
// **
// **
// **
// !
let Targets = document.querySelector(".Targets");
let Targetsrow1 = document.querySelectorAll(".Targets .row .progress .first");
let Targetsrow2 = document.querySelectorAll(".Targets .row .progress .secend");
function Target(){
  Targetsrow1.forEach((e1 ,index)=>{
    e1.style.width = e1.dataset.width;
    Targetsrow2[index].innerHTML = e1.dataset.width;
  });
}


onscroll = function(){
  if(this.scrollY >= Statistics.offsetTop){
    if(!state){
      spancount.forEach((e1) => {startcount(e1)});
    }
    state =true;
  }

  if(this.scrollY >= Targets.offsetTop){
    Target();
  }
}

//
//
// ! To-Do list
/*
  <div class="row">
    <span>fuck up</span>
    <i class="fa-solid fa-trash"></i>
  </div>
*/
let TODo = document.querySelector(".todo");
let list = document.querySelector(".todo .list");
let ButtonAddToDo = document.querySelector(".todo button");
let X = document.querySelector(".todo form i");

let ArrOfTask = [];

    if(localStorage.getItem("objtask")){
      ArrOfTask = JSON.parse(localStorage.getItem("objtask"));
    }
    ButtonAddToDo.addEventListener("click",()=>{
        document.querySelector(".todo form").style.display = 'block';
    })
    X.addEventListener("click",()=>{
      document.querySelector(".todo form").style.display = 'none';
    })

let ToDocontent = document.querySelector(".todo form input[type='text']");
    ToDocontent.addEventListener("input",()=>{
      text = ToDocontent.value;
    });
let ToDobutton = document.querySelector(".todo form input[type='button']");
    ToDobutton.addEventListener("click",()=>{
      if(ToDocontent.value !== ""){
        addtasktoarr(ToDocontent.value);
        ToDocontent.value = '';
      }
    });

function addtasktoarr(){
    const obj = {
      id:Date.now(),
      text:`${ToDocontent.value}`,
      complate:false
    }
    ArrOfTask.push(obj);
    window.localStorage.setItem("objtask",JSON.stringify(ArrOfTask));
}

let getarrtask = JSON.parse(localStorage.getItem("objtask"))

getarrtask.forEach((ee)=>{
let RowToDo = document.createElement("div");
    RowToDo.className = "row";
    RowToDo.id =`${ee.id}`;


let SpanTextToDo = document.createElement("span");
    SpanTextToDo.textContent = ee.text;

let iconToDo = document.createElement("i");
    iconToDo.className = "fa-solid";
    iconToDo.classList.add("fa-trash");


  RowToDo.appendChild(SpanTextToDo);
  RowToDo.appendChild(iconToDo);

  list.appendChild(RowToDo);

  iconToDo.addEventListener("click",(Xe)=>{
    Xe.target.parentElement.remove();
    removeitemfromlocalstorge(Xe.target.parentElement.id);
  });
});

function removeitemfromlocalstorge(id){
  ArrOfTask = ArrOfTask.filter((task) => task.id != id)
  window.localStorage.setItem("objtask",JSON.stringify(ArrOfTask));
}