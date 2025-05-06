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
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'delete';
    checkbox.onclick = deleteRow;
    cell3.appendChild(checkbox);

    totalSpendingWeekly += Number(amount);
    total.innerHTML = totalSpendingWeekly;
    remainingWeekly.innerHTML = weeklyBudget - totalSpendingWeekly;
    
    if((weeklyBudget - totalSpendingWeekly) < 0){
        alert("Warning: You've exceeded your budget.");
    } 
}

function deleteRow(){
    //inputs = document.getElementsByTagName("input");
    inputs = document.getElementsByName('delete');
    for (i = 0; i < inputs.length; i++){
        input = inputs[i];
        if(input.checked){
            var cell = input.parentNode;
            var row = cell.parentNode;
            row.remove();
        }
    }  
}