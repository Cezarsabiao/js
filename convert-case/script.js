var btn = document.getElementsByClassName('btn');

for (var i=0; i<btn.length; i++) {
    btn[i].addEventListener("click", function(event){
        var btnId = event.target.id;
        var text = document.getElementById('text').value;
        if(btnId == "upperBtn"){
            document.getElementById('text').value = text.toUpperCase();
        }
        if(btnId == "lowerBtn"){
            document.getElementById('text').value = text.toLowerCase();
        }
        if(btnId == "capitalizedBtn"){
            document.getElementById('text').value = text[0].toUpperCase() + text.substring(1);
        }
        if(btnId == "italicBtn"){
            var text = document.getElementById('text').value;
            document.getElementById('text').style.fontStyle = "italic";
            //document.getElementById('text').value = text.italics();
        }
        if(btnId == "boldBtn"){
            var text = document.getElementById('text').value;
            document.getElementById('text').style.fontWeight = "bold";
        }
        if(btnId == "underlineBtn"){
            var text = document.getElementById('text').value;
            document.getElementById('text').style.textDecoration = "underline";
        }
        if(btnId == "resetBtn"){
            var text = document.getElementById('text').value;
            document.getElementById('text').style.fontWeight = "normal";
            document.getElementById('text').style.fontWeight = "normal";
            document.getElementById('text').style.textDecoration = "none";
        }
    })
}
    