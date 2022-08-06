const addGoalBtn = document.querySelector('button');
const addGoalInput = document.querySelector('input');
const goals = document.querySelector('ul');
const CLICK = "click";
let counter = 1;


function resetGoal(){
    addGoalInput.value = '';

}
function addGoal() {
    const goalToLi = document.createElement('li');
    goalToLi.textContent = `${counter} - ${addGoalInput.value}`;
    goals.appendChild(goalToLi);
   resetGoal();
   counter += 1;
}

addGoalBtn.addEventListener(CLICK, addGoal);