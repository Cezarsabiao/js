document.getElementById("submit").addEventListener("click", eventListener);

function eventListener(){
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var unitSelected = document.getElementById("units").value;
    
    if(weight == "" || height == ""){
        alert("Please type your Weight and Height");
    }
    else{
        if(unitSelected == "metric"){
        var bmi = weight / (height * height);
        var decimal = Math.round(bmi * 10) / 10;
        result(decimal)
    }
        else{
            var bmi = [(weight * 703) / (height * height)];
            var decimal = Math.round(bmi * 10) / 10;
            result(decimal)
        }
    }   
}

document.getElementById("units").addEventListener("change", measurementOption);

function measurementOption(){
    var unitSelected = document.getElementById("units").value;
    if(unitSelected == "imperial"){
        document.getElementById("weight").value = "";
        document.getElementById("height").value = "";
        document.getElementById("weight").placeholder = "Inches"
        document.getElementById("height").placeholder = "Pounds";
    }
    else{
        document.getElementById("weight").value = "";
        document.getElementById("height").value = "";
        document.getElementById("weight").placeholder = "KG";
        document.getElementById("height").placeholder = "M";
    }
}

function result(decimal){
    if(decimal <= 18.4){
        document.getElementById("display").innerHTML = decimal + " = Underweight";
    }
    else if (decimal >= 18.5 && decimal <= 24.9){
        document.getElementById("display").innerHTML = decimal + " = Normal";
    }
    else if (decimal >= 25.0 && decimal <= 39.9){
        document.getElementById("display").innerHTML = decimal + " = Overweight";
    }
    else{
        document.getElementById("display").innerHTML = decimal + " = Obese";
    }
}