var listaDeNodos = document.getElementsByTagName("li");
var i;
for (i=0; i<listaDeNodos.length; i++) {
	var span = document.createElement("span");
	var texto = document.createTextNode("\u00D7");
	span.className = "eliminar";
	span.appendChild(texto);
	listaDeNodos[i].appendChild(span);
}

var close = document.getElementsByClassName("eliminar");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Debes escribir algo");
  } else {
    document.getElementById("miUl").appendChild(li);
  }
  document.getElementById("miUl").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "eliminar";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
