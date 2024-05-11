const mensajeAlerta = 'Por favor, completar todos los campos obligatorios'

var form1 = document.querySelector("#form_1")


var validar = (evento) => {
  evento.preventDefault()
  var name = document.querySelector("#name").value.trim();
  var email = document.querySelector("#mail").value.trim();
  var user = document.querySelector("#msg").value.trim();
  if (name.length === 0 || email.length === 0 || user.length === 0){
    alert(mensajeAlerta)
    return;
  } this.submit()
}

form1.addEventListener('submit', validar)

var form2 = document.querySelector("#form_2")


var validar2 = (evento2) => {
  evento2.preventDefault()
  var name2 = document.querySelector("#name").value.trim();
  var email2 = document.querySelector("#mail").value.trim();
  var user2 = document.querySelector("#msg").value.trim();
  if (name2.length === 0 || email2.length === 0 || user2.length === 0){
    alert(mensajeAlerta)
    return;
  } this.submit()
}

form2.addEventListener('submit', validar2)

