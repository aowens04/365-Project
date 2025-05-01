window.onload = pageload;

pageload(){
    document.getElementById("button").onClick = update;
}

update(){
    if(document.getElementById("weekly").selected){
        weeklyTable = document.getElementById("weeklyTable");
        newItem = document.createElement("tr");
        newItem 

    }else if(document.getElementById("monthly").selected){
        monthlyTable = document.getElementById("monthlyTable");

    }else if(document.getElementById("yearly").selected){
        yearlyTable = document.getElementById("yearlyTable");

    }
}