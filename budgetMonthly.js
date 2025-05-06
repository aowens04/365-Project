window.onload = pageload;
var totalSpendingMonthly = Number(0);

function pageload(){
    $("setMonthly").onclick = createMonthly;
    $("addMonthly").onclick = updateMonthly;
    //$("delete").onclick = delButton; 
}

function createMonthly(){
    var monthlyBudget = $("inputMonthly").value;
    var remainingMonthly = $("remainingMonthly");
    remainingMonthly.innerHTML = monthlyBudget;
}

function updateMonthly(){
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