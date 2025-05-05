window.onload = pageload;
totalSpendingWeekly = Number(0);
totalSpendingMonthly = Number(0);
totalSpendingYearly = Number(0);

function pageload(){
    $("add").onclick = updateWeekly;
    $("set").onclick = createWeekly;
    $("addMonthly").onclick = createMonthly;
    $("setMonthly").onclick = updateMonthly;
    $("addYearly").onclick = createYearly;
    $("setYearly").onclick = updateYearly;
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

    totalSpendingWeekly += Number(amount);
    total.innerHTML = totalSpendingWeekly;
    remaining.innerHTML = weeklyBudget - totalSpendingWeekly;
    
    if((weeklyBudget - totalSpending) < 0){
        alert("Warning: You've exceeded your budget.");
    }
}

function createMonthly(){
    monthlyBudget = $("input").value;
    remainingMonthly = $("remainingMonthly");
    remainingMonthly.innerHTML = monthlyBudget;
}
/*
function updateMonthly(){
    monthlyBudget = $("input").value;
    remainingMonthly = $("remaining");
    category = $("selCategory").value;
    amount = $("amount").value;
    month = $("date").value;
    total = $("total");

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

    totalSpendingMonthly += Number(amount);
    total.innerHTML = totalSpendingMonthly;
    remainingMonthly.innerHTML = monthlyBudget - totalSpendingMonthly;
    
    if((monthlyBudget - totalSpendingMonthly) < 0){
        alert("Warning: You've exceeded your budget.");
    }
}
*/
