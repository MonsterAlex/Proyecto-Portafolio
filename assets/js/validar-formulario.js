const email = document.getElementById("email");
const nombre = document.getElementById("nombre");

nombre.addEventListener("submit", function(event){
    if(nombre == 0)
		{
			return;
		}
		else
		{
			alert("se requiere que des tu nombre")
		};
});

email.addEventListener("submit", function (event) 
{
  if (email.validity.typeMismatch) 
  {
    email.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
  } 
  else 
  {
    email.setCustomValidity("");
    alert("esto funciona");
  }
});