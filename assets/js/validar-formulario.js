function validarTexto()
{
    window.event.preventDefault()

    if(document.form.nombre.value=="")
    {
        alert("El campo nombre es obligatorio");
        document.form.nombre.focus();
    }
    else if(document.form.email.value=="")
    {
        alert("El campo email es obligatorio");
        document.form.email.focus();
    }
    else if(document.form.email.value.indexOf('@')==1 || document.form.email.value.indexOf('.')==1)
    {
        alert("El e-mail ingresado no es valido");
    }
    else if(document.form.asunto.value=="")
    {
        alert("El Campo asunto es obligatorio")
        document.form.asunto.focus();
    }
    else if (document.form.mensaje.value=="" || document.form.mensaje.value.length <= 50 )
    {
        alert("Campo Mensaje es obligatorio y debe contener máximo 50 carateres"); 
        document.form.mensaje.focus();
    }
}

document.querySelector('form').addEventListener('submit',validarTexto);