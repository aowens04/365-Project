window.onload = pageload;

function pageload(){
    document.getElementById("add").onClick = update;
}

function update(){
    weeklyBudget = document.getElementById("input").value;
    newItem = document.createElement("tr");
    alert("reached");
}