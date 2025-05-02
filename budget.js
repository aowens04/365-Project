window.onload = pageload;
totalSpending = Number(0);

function pageload(){
    document.getElementById("add").onclick = update;
}

function update(){
    weeklyBudget = document.getElementById("input").value;
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

    totalSpending += amount;
    weeklyBudget -= amount;
    total.innerHTML = totalSpending;
    
}