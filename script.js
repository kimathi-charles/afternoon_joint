

const num=document.querySelector("#num")
const btn=document.querySelector("#btn")
const output=document.querySelector("#output")


btn.addEventListener('click' , ()=>{
    let nums=num.value
    if(isNaN(nums)){
        alert("please enter a number")
    }

    else{
        const li =document.createElement("li")
        li.textContent=nums
        const bttn=document.createElement("button")
        bttn.textContent="remove"
        bttn.addEventListener('click' , ()=>{
            output.removeChild(li)
        })
        output.appendChild(li)
        li.append(bttn)
        
    }

    num.value=""
})
// getting html element...

const form=document.querySelector("#form")
const username=document.querySelector("#username")
const error=document.querySelector("#error")


form.addEventListener('submit' , (e)=>{
    e.preventDefault(); //stop page reload
    let usernameValue=username.value

    if(usernameValue===""){
        error.textContent="username required!"
        error.style.color="red"
    }

    else{
        error.textContent="username created successfully"
        error.style.color="green"
    }
})


// Mini project

let input = document.getElementById("task");
let button = document.getElementById("add");
let list = document.getElementById("list");

button.addEventListener("click", () => {
  if (input.value === "") return;

  let li = document.createElement("li");
  li.textContent = input.value;

  li.addEventListener("click", () => {
    li.remove(); // delete on click
  });

  list.appendChild(li);
  input.value = "";
});

// count project
const incbtn=document.querySelector("#increase");
const decbtn=document.querySelector("#decrease");


// increase button
function increase(){
    const display=document.querySelector("#display");
    let count=0;
    count=count++;
    display.innerHTML=count
}


//decrease button
function decrease(){
    const display=document.querySelector("#display");
    let count=0;
    count=count--;
    display.innerHTML=count
}

function reset(){
    let count=0;
    display.textContent=count
}






