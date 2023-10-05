let name = document.getElementById("nimi");
let note = document.getElementById("viesti");
let checkbox = document.getElementById("important");
document.querySelector("button").addEventListener("click", addNote);
let body = document.querySelector("body");
var date = new Date();
var dateString = date.toLocaleString();
//luodaan funktio addNote
function addNote() {
  let r = document.createElement("r");
  let p = document.createElement("p");
  let d = document.createElement("d");
  r.textContent = nimi.value;
  p.textContent = viesti.value;
  d.textContent = date.value;
  //onko täppä vai ei
  if (checkbox.checked) {
    r.classList.add("important");
    p.classList.add("important");
    d.classList.add("important");
  }
  body.append(r, p, date, document.createElement("br"));
}
