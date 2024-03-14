const lenghtList = ["Select...", "Kilometer", "Meter", "Centimeter", "Millimeter", "Mile", "Yard", "Foot", "Inch"];
const temperatureList = ["Select...", "Celsius", "Fahrenheit", "Kelvin"];
const areaList = ["Select...", "Square Kilometer", "Square Meter", "Square Mile", "Square Yard", "Square Foot", "Square Inch", "Hectare"];
const weightList = ["Select...", "Tonne", "Kilogram", "Gram", "Milligram", "Microgram", "Stone", "Pound", "Once"];
const volumeList = ["Select...", "Gallon", "Fluid Ounce", "Cubic Meter", "Liter", "Milliliter", "Cup", "Tablespoon", "Teaspoon"];
const speedList = ["Select...", "Miles per Hour", "Foot per Second", "Meter per Second", "Kilometer per Hour", "Knot"];

//Lists to select box
var option = "";
function opt(list, originalUnitId, newUnitID){
    for (var i = 0; i < list.length; i++) { 
        option += '<option value="' + list[i] + '">' + list[i] + "</option>";
    }
    document.getElementById(originalUnitId).innerHTML = option;
    document.getElementById(newUnitID).innerHTML = option;
    option = "";
} 

opt(lenghtList, "originallen", "newlen");
opt(temperatureList, "originaltemp", "newtemp");
opt(areaList, "originalarea", "newarea");
opt(weightList, "originalweight", "newweight");
opt(volumeList, "originalvolume", "newvolume");
opt(speedList, "originalspeed", "newspeed");

//Get selected element and send to errors()
var btnClass = document.getElementsByClassName("btn");
    for (var i=0; i<btnClass.length; i++) {
    btnClass[i].addEventListener("click", function(eventListener){
       var btnID = eventListener.target.id;
        if(btnID){
            var userValue = document.getElementById(btnID + "Value").value;
            var originalUnitValue = document.getElementById("original" + btnID).value;
            var newUnitValue = document.getElementById("new" + btnID).value;
            var newID = btnID + 'Result';
            errors(userValue, originalUnitValue, newUnitValue, newID);
        }
    }); 
}

//Check if all info is correct and send to convert()
function errors(userValue, originalUnitValue, newUnitValue, newID){
    if(originalUnitValue == newUnitValue){
        alert('Medidas iguais');
        return
    }
    if(originalUnitValue == 'Select...' || newUnitValue == 'Select...'){
        alert('Medida não selecionada');
        return
    }
    if(userValue == ''){
        alert('Sem Valor '); 
        return
    }
    else{
        convert(userValue, originalUnitValue, newUnitValue, newID);
    }
}

//Convert the typed value
function convert(userValue, originalUnitValue, newUnitValue, newID){
//LENGHT
//KM
    if(originalUnitValue == 'Kilometer'){
        if (newUnitValue == 'Meter') {var newValue = parseFloat(userValue) * 1000;}
        if (newUnitValue == 'Centimeter') {var newValue = parseFloat(userValue) * 100000;}
        if (newUnitValue == 'Millimeter') {var newValue = parseFloat(userValue) * 1000000;}
        if (newUnitValue == 'Mile') {var newValue = parseFloat(userValue) / 1.609;}
        if (newUnitValue == 'Yard') {var newValue = parseFloat(userValue) * 1094;}
        if (newUnitValue == 'Foot') {var newValue = parseFloat(userValue) * 3281;}
        if (newUnitValue == 'Inch') {var newValue = parseFloat(userValue) * 39370;}
    }  
//Meter
    if(originalUnitValue == 'Meter'){
        if (newUnitValue == 'Kilometer') {var newValue = parseFloat(userValue) / 1000;}
        if (newUnitValue == 'Centimeter') {var newValue = parseFloat(userValue) * 100;}
        if (newUnitValue == 'Millimeter') {var newValue = parseFloat(userValue) * 1000;}
        if (newUnitValue == 'Mile') {var newValue = parseFloat(userValue) / 1609;}
        if (newUnitValue == 'Yard') {var newValue = parseFloat(userValue) * 1.094;}
        if (newUnitValue == 'Foot') {var newValue = parseFloat(userValue) * 3.281;}
        if (newUnitValue == 'Inch') {var newValue = parseFloat(userValue) * 39.37;}
    }
//Centimeter
    if(originalUnitValue == 'Centimeter'){
        if (newUnitValue == 'Kilometer') {var newValue = parseFloat(userValue) * 100000;}
        if (newUnitValue == 'Meter') {var newValue = parseFloat(userValue) / 100;}
        if (newUnitValue == 'Millimeter') {var newValue = parseFloat(userValue) * 10;}
        if (newUnitValue == 'Mile') {var newValue = parseFloat(userValue) / 160934;}
        if (newUnitValue == 'Yard') {var newValue = parseFloat(userValue) / 91.44;}
        if (newUnitValue == 'Foot') {var newValue = parseFloat(userValue) / 30.48;}
        if (newUnitValue == 'Inch') {var newValue = parseFloat(userValue) / 2.54;}
    }
//Millimeter
    if(originalUnitValue == 'Millimeter'){
        if (newUnitValue == 'Kilometer') {var newValue = parseFloat(userValue) / 1000000;}
        if (newUnitValue == 'Meter') {var newValue = parseFloat(userValue) / 1000;}
        if (newUnitValue == 'Centimeter') {var newValue = parseFloat(userValue) / 10;}
        if (newUnitValue == 'Mile') {var newValue = parseFloat(userValue) / 1.609e+6;}
        if (newUnitValue == 'Yard') {var newValue = parseFloat(userValue) / 914;}
        if (newUnitValue == 'Foot') {var newValue = parseFloat(userValue) / 305;}
        if (newUnitValue == 'Inch') {var newValue = parseFloat(userValue) / 24.5;}
    }
//Mile
    if(originalUnitValue == 'Mile'){
        if (newUnitValue == 'Kilometer') {var newValue = parseFloat(userValue) * 1.609;}
        if (newUnitValue == 'Meter') {var newValue = parseFloat(userValue) * 1609;}
        if (newUnitValue == 'Centimeter') {var newValue = parseFloat(userValue) * 160934;}
        if (newUnitValue == 'Millimeter') {var newValue = parseFloat(userValue) * 1.609e+6;}
        if (newUnitValue == 'Yard') {var newValue = parseFloat(userValue) * 1760;}
        if (newUnitValue == 'Foot') {var newValue = parseFloat(userValue) * 5280;}
        if (newUnitValue == 'Inch') {var newValue = parseFloat(userValue) * 63360;}
    }
//Yard
    if(originalUnitValue == 'Yard'){
        if (newUnitValue == 'Kilometer') {var newValue = parseFloat(userValue) / 1094;}
        if (newUnitValue == 'Meter') {var newValue = parseFloat(userValue) / 1.094;}
        if (newUnitValue == 'Centimeter') {var newValue = parseFloat(userValue) * 91.44;}
        if (newUnitValue == 'Millimeter') {var newValue = parseFloat(userValue) * 914;}
        if (newUnitValue == 'Mile') {var newValue = parseFloat(userValue) / 1760;}
        if (newUnitValue == 'Foot') {var newValue = parseFloat(userValue) * 3;}
        if (newUnitValue == 'Inch') {var newValue = parseFloat(userValue) * 36;}
    }
//Foot
    if(originalUnitValue == 'Foot'){
        if (newUnitValue == 'Kilometer') {var newValue = parseFloat(userValue) / 3281;}
        if (newUnitValue == 'Meter') {var newValue = parseFloat(userValue) / 3.281;}
        if (newUnitValue == 'Centimeter') {var newValue = parseFloat(userValue) * 30.48;}
        if (newUnitValue == 'Millimeter') {var newValue = parseFloat(userValue) * 304.8;}
        if (newUnitValue == 'Mile') {var newValue = parseFloat(userValue) / 5280;}
        if (newUnitValue == 'Yard') {var newValue = parseFloat(userValue) / 3;}
        if (newUnitValue == 'Inch') {var newValue = parseFloat(userValue) * 12;}
    }

//Inch
    if(originalUnitValue == 'Inch'){
        if (newUnitValue == 'Kilometer') {var newValue = parseFloat(userValue) / 39370;}
        if (newUnitValue == 'Meter') {var newValue = parseFloat(userValue) / 39.37;}
        if (newUnitValue == 'Centimeter') {var newValue = parseFloat(userValue) * 2.54;}
        if (newUnitValue == 'Millimeter') {var newValue = parseFloat(userValue) * 25.4;}
        if (newUnitValue == 'Mile') {var newValue = parseFloat(userValue) / 63360;}
        if (newUnitValue == 'Yard') {var newValue = parseFloat(userValue) / 36;}
        if (newUnitValue == 'Foot') {var newValue = parseFloat(userValue) / 12;} 
    }
//TEMPERATURE
//Celsius
    if(originalUnitValue == 'Celsius'){
        if (newUnitValue == 'Fahrenheit') {var newValue = (parseFloat(userValue) * 9 / 5) + 32;}
        if (newUnitValue == 'Kelvin') {var newValue = parseFloat(userValue) + 273.15;}
    }

//Fahrenheit
    if(originalUnitValue == 'Fahrenheit'){
        if (newUnitValue == 'Celsius') {var newValue = (parseFloat(userValue) -32) * 5 / 9;}
        if (newUnitValue == 'Kelvin') {var newValue = ((parseFloat(userValue) -32) * 5 / 9) + 273.15;}
    }
//Kelvin
    if(originalUnitValue == 'Kelvin'){
        if (newUnitValue == 'Celsius') {var newValue = parseFloat(userValue) - 273.15;}
        if (newUnitValue == 'Fahrenheit') {var newValue = ((parseFloat(userValue) - 273.15) * 9 / 5) + 32;}
    }
//AREA
//Square Kilometer
    if(originalUnitValue == 'Square Kilometer'){
        if (newUnitValue == 'Square Meter') {var newValue = parseFloat(userValue) * 1000000;}
        if (newUnitValue == 'Square Mile') {var newValue = parseFloat(userValue) / 2.59;}
        if (newUnitValue == 'Square Yard') {var newValue = parseFloat(userValue) * (1.196 * (10 ** 6));}
        if (newUnitValue == 'Square Foot') {var newValue = parseFloat(userValue) * (1.076 * (10 ** 7));}
        if (newUnitValue == 'Square Inch') {var newValue = parseFloat(userValue) * (1.55 * (10 ** 9));}
        if (newUnitValue == 'Hectare') {var newValue = parseFloat(userValue) * 100;}
    }
//Square Meter
    if(originalUnitValue == 'Square Meter'){
        if (newUnitValue == 'Square Kilometer') {var newValue = parseFloat(userValue) / 1000000;}
        if (newUnitValue == 'Square Mile') {var newValue = parseFloat(userValue) / (2.59 * (10 ** 6));}
        if (newUnitValue == 'Square Yard') {var newValue = parseFloat(userValue) * 1.196}
        if (newUnitValue == 'Square Foot') {var newValue = parseFloat(userValue) * 10.764;}
        if (newUnitValue == 'Square Inch') {var newValue = parseFloat(userValue) * 1550;}
        if (newUnitValue == 'Hectare') {var newValue = parseFloat(userValue) / 10000;}
    }
//Square Mile
    if(originalUnitValue == 'Square Mile'){
        if (newUnitValue == 'Square Kilometer') {var newValue = parseFloat(userValue) * 2.59;}
        if (newUnitValue == 'Square Meter') {var newValue = parseFloat(userValue) * (2.59 * (10 ** 6));}
        if (newUnitValue == 'Square Yard') {var newValue = parseFloat(userValue) * (3.098 * (10 ** 6));}
        if (newUnitValue == 'Square Foot') {var newValue = parseFloat(userValue) * (2.788 * (10 ** 7));}
        if (newUnitValue == 'Square Inch') {var newValue = parseFloat(userValue) * (4.014 * (10 ** 9))}
        if (newUnitValue == 'Hectare') {var newValue = parseFloat(userValue) * 259}
    }
//Square Yard
    if(originalUnitValue == 'Square Yard'){
        if (newUnitValue == 'Square Kilometer') {var newValue = parseFloat(userValue) / (1.196 * (10 ** 6));}
        if (newUnitValue == 'Square Meter') {var newValue = parseFloat(userValue) / 1.196;}
        if (newUnitValue == 'Square Mile') {var newValue = parseFloat(userValue) / (3.098 * (10 ** 6));}
        if (newUnitValue == 'Square Foot') {var newValue = parseFloat(userValue) * 9;}
        if (newUnitValue == 'Square Inch') {var newValue = parseFloat(userValue) * 1296;}
        if (newUnitValue == 'Hectare') {var newValue = parseFloat(userValue) / 11960;}
    }
//Square Foot
    if(originalUnitValue == 'Square Foot'){
        if (newUnitValue == 'Square Kilometer') {var newValue = parseFloat(userValue) / (1.076 * (10 ** 7));}
        if (newUnitValue == 'Square Meter') {var newValue = parseFloat(userValue) / 10.764;}
        if (newUnitValue == 'Square Mile') {var newValue = parseFloat(userValue) / (2.788 * (10 ** 7));}
        if (newUnitValue == 'Square Yard') {var newValue = parseFloat(userValue) / 9;}
        if (newUnitValue == 'Square Inch') {var newValue = parseFloat(userValue) * 144;}
        if (newUnitValue == 'Hectare') {var newValue = parseFloat(userValue) / 107639;}
    }
//Square Inch
    if(originalUnitValue == 'Square Inch'){
        if (newUnitValue == 'Square Kilometer') {var newValue = parseFloat(userValue) / (1.55 * (10 ** 9));}
        if (newUnitValue == 'Square Meter') {var newValue = parseFloat(userValue) / 1550;}
        if (newUnitValue == 'Square Mile') {var newValue = parseFloat(userValue) / (4.014 * (10 ** 9));}
        if (newUnitValue == 'Square Yard') {var newValue = parseFloat(userValue) / 1296;}
        if (newUnitValue == 'Square Foot') {var newValue = parseFloat(userValue) / 144;}
        if (newUnitValue == 'Hectare') {var newValue = parseFloat(userValue) / (1.55 * (10 ** 7));}
    }
//Hectare
    if(originalUnitValue == 'Hectare'){
        if (newUnitValue == 'Square Kilometer') {var newValue = parseFloat(userValue) / 100;}
        if (newUnitValue == 'Square Meter') {var newValue = parseFloat(userValue) * 10000;}
        if (newUnitValue == 'Square Mile') {var newValue = parseFloat(userValue) / 259;}
        if (newUnitValue == 'Square Yard') {var newValue = parseFloat(userValue) * 11960;}
        if (newUnitValue == 'Square Foot') {var newValue = parseFloat(userValue) * 107639;}
        if (newUnitValue == 'Square Inch') {var newValue = parseFloat(userValue) * (1.55 * (10 ** 7));}
    }
//WEIGHT
//Tonne
    if(originalUnitValue == 'Tonne'){
        if (newUnitValue == 'Kilogram') {var newValue = parseFloat(userValue) * 1000;}
        if (newUnitValue == 'Gram') {var newValue = parseFloat(userValue) * 1e+6;}
        if (newUnitValue == 'Milligram') {var newValue = parseFloat(userValue) * 1e+9;}
        if (newUnitValue == 'Microgram') {var newValue = parseFloat(userValue) * 1e+12;}
        if (newUnitValue == 'Stone') {var newValue = parseFloat(userValue) * 157.5;}
        if (newUnitValue == 'Pound') {var newValue = parseFloat(userValue) * 2205;}
        if (newUnitValue == 'Once') {var newValue = parseFloat(userValue) * 35270;}
    }
//Kilogram
    if(originalUnitValue == 'Kilogram'){
        if (newUnitValue == 'Tonne') {var newValue = parseFloat(userValue) / 1000;}
        if (newUnitValue == 'Gram') {var newValue = parseFloat(userValue) * 1000;}
        if (newUnitValue == 'Milligram') {var newValue = parseFloat(userValue) * 1e+6;}
        if (newUnitValue == 'Microgram') {var newValue = parseFloat(userValue) *1e+9;}
        if (newUnitValue == 'Stone') {var newValue = parseFloat(userValue) * 6.35;}
        if (newUnitValue == 'Pound') {var newValue = parseFloat(userValue) * 2.205;}
        if (newUnitValue == 'Once') {var newValue = parseFloat(userValue) * 35.274;}
    }
//Gram
    if(originalUnitValue == 'Gram'){
        if (newUnitValue == 'Tonne') {var newValue = parseFloat(userValue) / 1e+6;}
        if (newUnitValue == 'Kilogram') {var newValue = parseFloat(userValue) /1000;}
        if (newUnitValue == 'Milligram') {var newValue = parseFloat(userValue) * 1000;}
        if (newUnitValue == 'Microgram') {var newValue = parseFloat(userValue) * 1e+6;}
        if (newUnitValue == 'Stone') {var newValue = parseFloat(userValue) / 6350;}
        if (newUnitValue == 'Pound') {var newValue = parseFloat(userValue) / 453.6;}
        if (newUnitValue == 'Once') {var newValue = parseFloat(userValue) / 28.35;}
    }
//Milligram
    if(originalUnitValue == 'Milligram'){
        if (newUnitValue == 'Tonne') {var newValue = parseFloat(userValue) / 1e+9;}
        if (newUnitValue == 'Kilogram') {var newValue = parseFloat(userValue) / 1e+6;}
        if (newUnitValue == 'Gram') {var newValue = parseFloat(userValue) / 1000;}
        if (newUnitValue == 'Microgram') {var newValue = parseFloat(userValue) * 1000;}
        if (newUnitValue == 'Stone') {var newValue = parseFloat(userValue) / 6.35e+6;}
        if (newUnitValue == 'Pound') {var newValue = parseFloat(userValue) / 453600;}
        if (newUnitValue == 'Once') {var newValue = parseFloat(userValue) / 28350;}
    }
//Microgram
    if(originalUnitValue == 'Microgram'){
        if (newUnitValue == 'Tonne') {var newValue = parseFloat(userValue) / 1e+12;}
        if (newUnitValue == 'Kilogram') {var newValue = parseFloat(userValue) / 1e+9;}
        if (newUnitValue == 'Gram') {var newValue = parseFloat(userValue) / 1e+6;}
        if (newUnitValue == 'Milligram') {var newValue = parseFloat(userValue) / 1000;}
        if (newUnitValue == 'Stone') {var newValue = parseFloat(userValue) / 6.35e+9;}
        if (newUnitValue == 'Pound') {var newValue = parseFloat(userValue) / 4.536e+8;}
        if (newUnitValue == 'Once') {var newValue = parseFloat(userValue) / 2.835e+7;}
    }
//Stone
    if(originalUnitValue == 'Stone'){
        if (newUnitValue == 'Tonne') {var newValue = parseFloat(userValue) / 157.5;}
        if (newUnitValue == 'Kilogram') {var newValue = parseFloat(userValue) * 6.35;}
        if (newUnitValue == 'Gram') {var newValue = parseFloat(userValue) * 6350;}
        if (newUnitValue == 'Milligram') {var newValue = parseFloat(userValue) * 6.35e+6;}
        if (newUnitValue == 'Microgram') {var newValue = parseFloat(userValue) * 6.35e+9;}
        if (newUnitValue == 'Pound') {var newValue = parseFloat(userValue) * 14;}
        if (newUnitValue == 'Once') {var newValue = parseFloat(userValue) * 224;}
    }
//Pound
    if(originalUnitValue == 'Pound'){
        if (newUnitValue == 'Tonne') {var newValue = parseFloat(userValue) / 2205;}
        if (newUnitValue == 'Kilogram') {var newValue = parseFloat(userValue) / 2.205;}
        if (newUnitValue == 'Gram') {var newValue = parseFloat(userValue) * 453.6;}
        if (newUnitValue == 'Milligram') {var newValue = parseFloat(userValue) * 453600;}
        if (newUnitValue == 'Microgram') {var newValue = parseFloat(userValue) * 4.536e+8;}
        if (newUnitValue == 'Stone') {var newValue = parseFloat(userValue) / 14;}
        if (newUnitValue == 'Once') {var newValue = parseFloat(userValue) * 16;}
    }
//Once
    if(originalUnitValue == 'Once'){
        if (newUnitValue == 'Tonne') {var newValue = parseFloat(userValue) / 35270;}
        if (newUnitValue == 'Kilogram') {var newValue = parseFloat(userValue) / 35.274;}
        if (newUnitValue == 'Gram') {var newValue = parseFloat(userValue) * 28.35;}
        if (newUnitValue == 'Milligram') {var newValue = parseFloat(userValue) * 28350;}
        if (newUnitValue == 'Microgram') {var newValue = parseFloat(userValue) * 2.835e+7;}
        if (newUnitValue == 'Stone') {var newValue = parseFloat(userValue) / 224;}
        if (newUnitValue == 'Pound') {var newValue = parseFloat(userValue) / 16;}
    }
//VOLUME
//Gallon
    if(originalUnitValue == 'Gallon'){
        if (newUnitValue == 'Fluid Ounce') {var newValue = parseFloat(userValue) * 133.2;}
        if (newUnitValue == 'Cubic Meter') {var newValue = parseFloat(userValue) / 264.2;}
        if (newUnitValue == 'Liter') {var newValue = parseFloat(userValue) * 3.785;}
        if (newUnitValue == 'Milliliter') {var newValue = parseFloat(userValue) * 3785;}
        if (newUnitValue == 'Cup') {var newValue = parseFloat(userValue) * 13.323;}
        if (newUnitValue == 'Tablespoon') {var newValue = parseFloat(userValue) * 213.2;}
        if (newUnitValue == 'Teaspoon') {var newValue = parseFloat(userValue) * 639.5;}
    }
//Fluid Ounce
    if(originalUnitValue == 'Fluid Ounce'){
        if (newUnitValue == 'Gallon') {var newValue = parseFloat(userValue) / 128;}
        if (newUnitValue == 'Cubic Meter') {var newValue = parseFloat(userValue) / 33810;}
        if (newUnitValue == 'Liter') {var newValue = parseFloat(userValue) / 33.814;}
        if (newUnitValue == 'Milliliter') {var newValue = parseFloat(userValue) * 29.574;}
        if (newUnitValue == 'Cup') {var newValue = parseFloat(userValue) / 9.608;}
        if (newUnitValue == 'Tablespoon') {var newValue = parseFloat(userValue) * 1.665;}
        if (newUnitValue == 'Teaspoon') {var newValue = parseFloat(userValue) * 4.996;}
    }
//Cubic Meter
    if(originalUnitValue == 'Cubic Meter'){
        if (newUnitValue == 'Gallon') {var newValue = parseFloat(userValue) * 264.2;}
        if (newUnitValue == 'Fluid Ounce') {var newValue = parseFloat(userValue) * 33810;}
        if (newUnitValue == 'Liter') {var newValue = parseFloat(userValue) * 1000;}
        if (newUnitValue == 'Milliliter') {var newValue = parseFloat(userValue) * 1e+6;}
        if (newUnitValue == 'Cup') {var newValue = parseFloat(userValue) * 3520;}
        if (newUnitValue == 'Tablespoon') {var newValue = parseFloat(userValue) * 56310;}
        if (newUnitValue == 'Teaspoon') {var newValue = parseFloat(userValue) * 168900;}
    }
//Liter
    if(originalUnitValue == 'Liter'){
        if (newUnitValue == 'Gallon') {var newValue = parseFloat(userValue) / 3.785;}
        if (newUnitValue == 'Fluid Ounce') {var newValue = parseFloat(userValue) * 33.814;}
        if (newUnitValue == 'Cubic Meter') {var newValue = parseFloat(userValue) / 1000;}
        if (newUnitValue == 'Milliliter') {var newValue = parseFloat(userValue) * 1000;}
        if (newUnitValue == 'Cup') {var newValue = parseFloat(userValue) * 3.52;}
        if (newUnitValue == 'Tablespoon') {var newValue = parseFloat(userValue) * 56.312;}
        if (newUnitValue == 'Teaspoon') {var newValue = parseFloat(userValue) * 168.9;}
    }
//Milliliter
    if(originalUnitValue == 'Milliliter'){
        if (newUnitValue == 'Gallon') {var newValue = parseFloat(userValue) / 3785;}
        if (newUnitValue == 'Fluid Ounce') {var newValue = parseFloat(userValue) / 29.574;}
        if (newUnitValue == 'Cubic Meter') {var newValue = parseFloat(userValue) / 1e+6;}
        if (newUnitValue == 'Liter') {var newValue = parseFloat(userValue) / 1000;}
        if (newUnitValue == 'Cup') {var newValue = parseFloat(userValue) / 284.1;}
        if (newUnitValue == 'Tablespoon') {var newValue = parseFloat(userValue) / 17.758;}
        if (newUnitValue == 'Teaspoon') {var newValue = parseFloat(userValue) / 5.919;}
    }
//Cup
    if(originalUnitValue == 'Cup'){
        if (newUnitValue == 'Gallon') {var newValue = parseFloat(userValue) / 13.323;}
        if (newUnitValue == 'Fluid Ounce') {var newValue = parseFloat(userValue) * 9.608;}
        if (newUnitValue == 'Cubic Meter') {var newValue = parseFloat(userValue) / 3520;}
        if (newUnitValue == 'Liter') {var newValue = parseFloat(userValue) / 3.52;}
        if (newUnitValue == 'Milliliter') {var newValue = parseFloat(userValue) * 284.1;}
        if (newUnitValue == 'Tablespoon') {var newValue = parseFloat(userValue) * 16;}
        if (newUnitValue == 'Teaspoon') {var newValue = parseFloat(userValue) * 48;}
    }
//Tablespoon
    if(originalUnitValue == 'Tablespoon'){
        if (newUnitValue == 'Gallon') {var newValue = parseFloat(userValue) / 213.2;}
        if (newUnitValue == 'Fluid Ounce') {var newValue = parseFloat(userValue) / 1.665;}
        if (newUnitValue == 'Cubic Meter') {var newValue = parseFloat(userValue) / 56310;}
        if (newUnitValue == 'Liter') {var newValue = parseFloat(userValue) / 56.312;}
        if (newUnitValue == 'Milliliter') {var newValue = parseFloat(userValue) * 17.758;}
        if (newUnitValue == 'Cup') {var newValue = parseFloat(userValue) / 16;}
        if (newUnitValue == 'Teaspoon') {var newValue = parseFloat(userValue) * 3;}
    }
//Teaspoon
    if(originalUnitValue == 'Teaspoon'){
        if (newUnitValue == 'Gallon') {var newValue = parseFloat(userValue) / 639.5;}
        if (newUnitValue == 'Fluid Ounce') {var newValue = parseFloat(userValue) / 4.996;}
        if (newUnitValue == 'Cubic Meter') {var newValue = parseFloat(userValue) / 168900;}
        if (newUnitValue == 'Liter') {var newValue = parseFloat(userValue) / 168.9;}
        if (newUnitValue == 'Milliliter') {var newValue = parseFloat(userValue) * 5.919;}
        if (newUnitValue == 'Cup') {var newValue = parseFloat(userValue) / 48;}
        if (newUnitValue == 'Tablespoon') {var newValue = parseFloat(userValue) / 3;}
    }
//SPEED
//Miles per Hour
    if(originalUnitValue == 'Miles per Hour'){
        if (newUnitValue == 'Foot per Second') {var newValue = parseFloat(userValue) * 1.467;}
        if (newUnitValue == 'Meter per Second') {var newValue = parseFloat(userValue) / 2.237;}
        if (newUnitValue == 'Kilometer per Hour') {var newValue = parseFloat(userValue) * 1.609;}
        if (newUnitValue == 'Knot') {var newValue = parseFloat(userValue) / 1.151;}
    }
//Foot per Second
    if(originalUnitValue == 'Foot per Second'){
        if (newUnitValue == 'Miles per Hour') {var newValue = parseFloat(userValue) / 1.467;}
        if (newUnitValue == 'Meter per Second') {var newValue = parseFloat(userValue) / 3.281;}
        if (newUnitValue == 'Kilometer per Hour') {var newValue = parseFloat(userValue) * 1.097;}
        if (newUnitValue == 'Knot') {var newValue = parseFloat(userValue) / 1.688;}
    }
//Meter per Second
    if(originalUnitValue == 'Meter per Second'){
        if (newUnitValue == 'Miles per Hour') {var newValue = parseFloat(userValue) * 2.237;}
        if (newUnitValue == 'Foot per Second') {var newValue = parseFloat(userValue) * 3.281;}
        if (newUnitValue == 'Kilometer per Hour') {var newValue = parseFloat(userValue) * 3.6;}
        if (newUnitValue == 'Knot') {var newValue = parseFloat(userValue) * 1.944;}
    }
//Kilometer per Hour
    if(originalUnitValue == 'Kilometer per Hour'){
        if (newUnitValue == 'Miles per Hour') {var newValue = parseFloat(userValue) / 1.609;}
        if (newUnitValue == 'Foot per Second') {var newValue = parseFloat(userValue) / 1.097;}
        if (newUnitValue == 'Meter per Second') {var newValue = parseFloat(userValue) / 3.6;}
        if (newUnitValue == 'Knot') {var newValue = parseFloat(userValue) / 1.852;}
    }
//Knot
    if(originalUnitValue == 'Knot'){
        if (newUnitValue == 'Miles per Hour') {var newValue = parseFloat(userValue) * 1.151;}
        if (newUnitValue == 'Foot per Second') {var newValue = parseFloat(userValue) * 1.688;}
        if (newUnitValue == 'Meter per Second') {var newValue = parseFloat(userValue) / 1.944;}
        if (newUnitValue == 'Kilometer per Hour') {var newValue = parseFloat(userValue) * 1.852;}
    }
    if(newID){
        document.getElementById(newID).innerText = newValue.toFixed(2) + ' ' + newUnitValue;
    }
}
