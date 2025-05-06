window.onload = pageload;
var totalSpendingYearly = Number(0);

function pageload(){
    $("setYearly").onclick = createYearly;
    $("addYearly").onclick = updateYearly;
    //$("delete").onclick = delButton; 
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
    var date = $("year").value;
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

