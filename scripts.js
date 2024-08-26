// login form
document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.getElementById("loginForm");
    if (loginForm){
        loginForm.addEventListener("submit", function(event){
            event.preventDefault();
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            if(usuario == "admin" && password == "1234"){
                window.location.href = "dashboard.html";
            } else {
                alert("Usuario o contraseña incorrectos");
            }
        });
    }

    var registerForm = document.getElementById("registerForm");
    if(registerForm){
        registerForm.addEventListener("submit", function(event){
            event.preventDefault();
            var newUser = document.getElementById("newUser").value;
            var newPassword = document.getElementById("newpassword").value;
            
            alert("Usuario registrado: " + newUser);
            window.location.href = "index.html";
        });
    }
    var linkEstudiantes = document.getElementById("linkEstudiantes");
    var contenedorEstudiantes = document.getElementById("contenedorEstudiantes");
    var linkAsignaturas = document.getElementById("linkAsignaturas");
    var contenedorAsignaturas = document.getElementById("contenedorAsignaturas");

    linkEstudiantes.addEventListener("click", function(event) {
        event.preventDefault();
        contenedorEstudiantes.classList.add("active");
        contenedorAsignaturas.classList.remove("active");
    });

    linkAsignaturas.addEventListener("click", function(event) {
        event.preventDefault();
        contenedorAsignaturas.classList.add("active");
        contenedorEstudiantes.classList.remove("active");
    });

});
