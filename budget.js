window.onload = pageload;

function pageload(){
    document.getElementById("add").onclick = update;
}

function update(){
    weeklyBudget = document.getElementById("input").value;
    category = document.getElementById("selCategory").value;
    amount = document.getElementById("input").value;
    date = document.getElementById("date");

    tableBody = document.getElementById("table");

    newRow = document.createElement("tr");
    newCat = document.createElement("td");
    newAmt = document.createElement("td");
    newDate = document.createElement("td");
    newDelete = document.createElement("td");

    tableBody.innerHTML += newRow;
    tableBody.innerHTML += newCat + newAmt + newDate + newDelete;
}