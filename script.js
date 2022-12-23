window.onload = function() {
    for(var i = 1; i < 11; i++) {
        var div = document.getElementById("notas");
        var span = document.createElement("span");
        var icon = document.createElement("i");
        span.setAttribute("id", "star" + i);
        icon.setAttribute("id", "i" + i);
        span.onmouseover = function () {
            paintStars(this.id);
        };
        span.onmouseout = function () {
            unpaintStars();
        };
        span.onclick = function() {
            rate(this.id);
        };
        icon.className = "far fa-star fa-2x";		
        span.appendChild(icon);
        div.appendChild(span);
    }
}

function paintStars(id) {
    var star = id.replace(/[^0-9]/g, "");
    for(var i = star; i > 0; i--) {
        document.getElementById("i" + i).className = "fas fa-star fa-2x";
    }
}

function unpaintStars() {
    for(var i = 1; i < 11; i++) {
        document.getElementById("i" + i).className = "far fa-star fa-2x";
    }
}

function rate(id) {
    var rating = id.replace(/[^0-9]/g, "");
    modal.style.display = "block";
    var texto = document.createElement("p");
    texto.innerHTML = "Sua nota é: " + rating + ". Confirma essa nota?";
    document.getElementById("nota").appendChild(texto);
}

var modal = document.getElementById('modal');
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
    var nota = document.getElementById("nota");
    if(nota.hasChildNodes()) {
        nota.removeChild(nota.childNodes[0]);
    }
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
        var nota = document.getElementById("nota");
        if(nota.hasChildNodes()) {
            nota.removeChild(nota.childNodes[0]);
        }
    }
}
