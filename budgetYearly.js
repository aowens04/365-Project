window.onload = pageload;
var totalSpendingYearly = Number(0);

function pageload(){
    $("setYearly").onclick = createYearly;
    $("addYearly").onclick = updateYearly;
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
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'delete';
    checkbox.onclick = deleteRow;
    cell3.appendChild(checkbox);

    totalSpendingYearly += Number(amount);
    total.innerHTML = totalSpendingYearly;
    remainingYearly.innerHTML = yearlyBudget - totalSpendingYearly;
    
    if((yearlyBudget - totalSpendingYearly) < 0){
        alert("Warning: You've exceeded your budget.");
    } 

    var hiddenInputs = $("hiddenInputs");
    hiddenInputs.insertAdjacentHTML("beforeend", `
        <input type="hidden" name="category[]" value="${category}">
        <input type="hidden" name="amount[]" value="${amount}">
        <input type="hidden" name="year[]" value="${year}">
    `);
}

function deleteRow(){
    inputs = document.getElementsByName('delete');
    for (i = 0; i < inputs.length; i++){
        input = inputs[i];
        if(input.checked){
            var cell = input.parentNode;
            var row = cell.parentNode;
            cell1 = row.childNodes[1];
            amount = cell1.childNodes[0].textContent;
            row.remove();

            var yearlyBudget = $("inputYearly").value;
            var remainingYearly = $("remainingYearly");
            var total = $("totalYearly");

            totalSpendingYearly -= Number(amount);
            total.innerHTML = totalSpendingYearly;
            remainingYearly.innerHTML = yearlyBudget - totalSpendingYearly;
        }
    }  
}

