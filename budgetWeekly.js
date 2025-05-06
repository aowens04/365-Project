window.onload = pageload;
var totalSpendingWeekly = Number(0);
var numRows = 0;

function pageload(){
    $("setWeekly").onclick = createWeekly;
    $("addWeekly").onclick = updateWeekly;
    $('delete').onclick = delButton; 
}

function createWeekly(){
    var weeklyBudget = $("input").value;
    var remainingWeekly = $("remainingWeekly");
    remainingWeekly.innerHTML = weeklyBudget;
}

function updateWeekly(){
    var weeklyBudget = $("input").value;
    var remainingWeekly = $("remainingWeekly");
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
    cell3.innerHTML = "<button id ='" + String(numRows) +"'>delete</button>";

    totalSpendingWeekly += Number(amount);
    total.innerHTML = totalSpendingWeekly;
    remainingWeekly.innerHTML = weeklyBudget - totalSpendingWeekly;
    
    if((weeklyBudget - totalSpendingWeekly) < 0){
        alert("Warning: You've exceeded your budget.");
    } 

    var hiddenInputs = $("hiddenInputs");
    hiddenInputs.insertAdjacentHTML("beforeend", `
        <input type="hidden" name="category[]" value="${category}">
        <input type="hidden" name="amount[]" value="${amount}">
        <input type="hidden" name="day[]" value="${day}">
    `);
            
    //$().onclick = delClick;
}
/*
function delClick(){
    new AjaxRequest("weekly.html",
        {
        onSuccess: delButton,
        onFailure: ajaxFailure,
        onException: ajaxException
        }
    );
}

function delButton(){
    var cell = this.parentNode;
    var row = cell.parentNode;
    row.remove();
}

function ajaxFailure(){
    alert("An error was encountered");
}

function ajaxException(){
    alert("An exception was encountered");
}*/