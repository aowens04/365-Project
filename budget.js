window.onload = pageload;
var totalSpendingWeekly = Number(0);
var totalSpendingMonthly = Number(0);
var totalSpendingYearly = Number(0);

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
    var weeklyBudget = $("input").value;
    var remaining = $("remaining");
    remaining.innerHTML = weeklyBudget;
}

function updateWeekly(){
    alert();
    var weeklyBudget = $("input").value;
    var remaining = $("remaining");
    var category = $("selCategory").value;
    var amount = $("amount").value;
    var day = $("day").value;
    var total = $("total");

    var table = $("table");
    var row = table.insertRow();
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);

    cell0.innerHTML = category;
    cell1.innerHTML = amount;
    cell2.innerHTML = day;
    cell3.innerHTML = <button id="delButton">delete</button>;

    totalSpendingWeekly += Number(amount);
    total.innerHTML = totalSpendingWeekly;
    remaining.innerHTML = weeklyBudget - totalSpendingWeekly;
    
    if((weeklyBudget - totalSpendingWeekly) < 0){
        alert("Warning: You've exceeded your budget.");
    }
}

function createMonthly(){
    alert();
    var monthlyBudget = $("inputMonthly").value;
    var remainingMonthly = $("remainingMonthly");
    remainingMonthly.innerHTML = monthlyBudget;
}

function updateMonthly(){
    alert();
    var monthlyBudget = $("inputMonthly").value;
    var remainingMonthly = $("remainingMonthly");
    var category = $("selCategory").value;
    var amount = $("amount").value;
    var month = $("month").value;
    var total = $("totalMonthly");

    var table = $("tableMonth");
    var row = table.insertRow();
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);

    cell0.innerHTML = category;
    cell1.innerHTML = amount;
    cell2.innerHTML = month;
    cell3.innerHTML = "<button>delete</button>";

    totalSpendingMonthly += Number(amount);
    total.innerHTML = totalSpendingMonthly;
    remainingMonthly.innerHTML = monthlyBudget - totalSpendingMonthly;
    
    if((monthlyBudget - totalSpendingMonthly) < 0){
        alert("Warning: You've exceeded your budget.");
    }
}

function createYearly(){
    var yearlyBudget = $("inputYearly").value;
    var remainingYearly = $("remainingYearly");
    remainingYearly.innerHTML = yearlyBudget;
}

function updateYearly(){
    var yearlyBudget = $("inputYearly").value;
    var remainingYearly = $("remainingYearly");
    var category = $("selCategory").value;
    var amount = $("amount").value;
    var date = $("date").value;
    var total = $("totalYearly");

    var table = $("tableYear");
    var row = table.insertRow();
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);

    cell0.innerHTML = category;
    cell1.innerHTML = amount;
    cell2.innerHTML = date;
    cell3.innerHTML = "<button>delete</button>";

    totalSpendingYearly += Number(amount);
    total.innerHTML = totalSpendingYearly;
    remainingYearly.innerHTML = yearlyBudget - totalSpendingYearly;
    
    if((yearlyBudget - totalSpendingYearly) < 0){
        alert("Warning: You've exceeded your budget.");
    }
}

