const datosFormulario = document.querySelector(".formcontato__input");

function validarTexto()
{
    let datosEscritosFormulario = document.querySelector(".formcontato__input").value;
    let validar = datosEscritosFormulario.match(/^[a-z-A-Z]*$/);

    if(!validar == "") 
    {
        alert("Es Necesario que ingrese los datos requeridos")
        return true;
    }
    else
    {
      return false;
    }
}

function btnEnviar()
{
    if(!validarTexto()) 
    {
        alert("Formulario enviado")
    }
}