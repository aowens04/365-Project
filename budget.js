window.onload = pageload;
totalSpending = Number(0);

function pageload(){
    document.getElementById("add").onclick = update;
    document.getElementById("set").onclick = create;
}

function create(){
    weeklyBudget = document.getElementById("input").value;
    remaining = document.getElementById("remaining");
    remaining.innerHTML = weeklyBudget;
}
function update(){
    weeklyBudget = document.getElementById("input").value;
    remaining = document.getElementById("remaining").value;
    category = document.getElementById("selCategory").value;
    amount = document.getElementById("amount").value;
    date = document.getElementById("date").value;
    total = document.getElementById("total");

    tableBody = document.getElementById("table");
    row = table.insertRow();
    cell0 = row.insertCell(0);
    cell1 = row.insertCell(1);
    cell2 = row.insertCell(2);
    cell3 = row.insertCell(3);

    cell0.innerHTML = category;
    cell1.innerHTML = amount;
    cell2.innerHTML = date;
    cell3.innerHTML = "delete";

    totalSpending += Number(amount);
    total.style.textDecoration = "no underline";
    total.innerHTML = totalSpending;
    remaining -= amount;
    remaining.innerHTML = weeklyBudget;
    
}