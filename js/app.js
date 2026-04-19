console.log("Sitio cargado correctamente");

// alerta al enviar formulario
document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Formulario enviado correctamente");
});
