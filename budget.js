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
    $("delete").onclick = delButton; 
}

function createWeekly(){
    alert();
    weeklyBudget = $("input").value;
    remaining = $("remaining");
    remaining.innerHTML = weeklyBudget;
}

function updateWeekly(){
    alert();
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
    cell3.innerHTML = <button id="delButton">delete</button>;

    totalSpendingWeekly += Number(amount);
    total.innerHTML = totalSpendingWeekly;
    remaining.innerHTML = weeklyBudget - totalSpendingWeekly;
    
    if((weeklyBudget - totalSpending) < 0){
        alert("Warning: You've exceeded your budget.");
    }
}

function createMonthly(){
    alert();
    monthlyBudget = $("inputMonthly").value;
    remainingMonthly = $("remainingMonthly");
    remainingMonthly.innerHTML = monthlyBudget;
}

function updateMonthly(){
    alert();
    monthlyBudget = $("inputMonthly").value;
    remainingMonthly = $("remainingMonthly");
    category = $("selCategory").value;
    amount = $("amount").value;
    month = $("month").value;
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
    cell3.innerHTML = document.createElement("button");

    totalSpendingMonthly += Number(amount);
    total.innerHTML = totalSpendingMonthly;
    remainingMonthly.innerHTML = monthlyBudget - totalSpendingMonthly;
    
    if((monthlyBudget - totalSpendingMonthly) < 0){
        alert("Warning: You've exceeded your budget.");
    }
}

function createYearly(){
    yearlyBudget = $("inputYearly").value;
    remainingYearly = $("remainingYearly");
    remainingYearly.innerHTML = yearlyBudget;
}

function updateYearly(){
    yearlyBudget = $("inputYearly").value;
    remainingYearly = $("remainingYearly");
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
    cell3.innerHTML = document.createElement("button");

    totalSpendingYearly += Number(amount);
    total.innerHTML = totalSpendingYearly;
    remainingYearly.innerHTML = YearlyBudget - totalSpendingYearly;
    
    if((YearlyBudget - totalSpendingYearly) < 0){
        alert("Warning: You've exceeded your budget.");
    }
}

