$(document).ready(function()
{

  $("#enviar-info").click(function(event)
  {
    $("#form").submit();

    var nombreContacto=$("#nombre").val();
    var mailContacto=$("#email").val();
    if(nombreContacto=="" || mailContacto=="")
    {
      alert("Alguno de los campos esta vacio",1500);
    }          
    else
    { 
      if(nombreContacto=="Alejandro" && mailContacto=="5321@1.com")
      {
        alert("Bienvenido De nuevo");
      }  
      else
      {
        alert("El Usuario o contraseña son incorrectos");
      }
    }
  });
});