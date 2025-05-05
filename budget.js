window.onload = pageload;
totalSpending = Number(0);

function pageload(){
    $("add").onclick = updateWeekly;
    $("set").onclick = createWeekly;

}

function createWeekly(){
    weeklyBudget = $("input").value;
    remaining = $("remaining");
    remaining.innerHTML = weeklyBudget;
}

function updateWeekly(){
    weeklyBudget = $("input").value;
    remaining = $("remaining");
    category = $("selCategory").value;
    amount = $("amount").value;
    day = $("day").value;
    total = $("total");

    tableBody = document.getElementById("table");
    row = table.insertRow();
    cell0 = row.insertCell(0);
    cell1 = row.insertCell(1);
    cell2 = row.insertCell(2);
    cell3 = row.insertCell(3);

    cell0.innerHTML = category;
    cell1.innerHTML = amount;
    cell2.innerHTML = day;
    cell3.innerHTML = "delete";

    totalSpending += Number(amount);
    total.innerHTML = totalSpending;
    remaining.innerHTML = weeklyBudget - totalSpending;
    
    if((weeklyBudget - totalSpending) < 0){
        alert("Warning: You've exceeded your budget.");
    }
}