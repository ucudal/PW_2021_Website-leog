const button = document.getElementById("boton");
button.addEventListener("click", function(e) {
    e.preventDefault();
    fetch("https://PW2021-APINode-leog.leog4.repl.co/enviar-formulario", {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: document.getElementById("email-address").value,
            password: document.getElementById("password").value
        }),
        credentials: 'include'
    })
    .then(data => {
        if(data.ok) {
            // Login correcto
            document.getElementById("login").classList.add("hidden");
            document.getElementById("card").classList.remove("hidden");
        } else {
            // Login incorrecto
            button.textContent = "Los datos fueron incorrectos.";
            button.classList.remove("bg-blue-600");
            button.classList.add("animate-pulse", "bg-red-500");
            setTimeout(function() {
                button.classList.remove("animate-pulse", "bg-red-500"); 
                button.classList.add("bg-blue-600");       
                button.textContent = "Entrar";        
            }, 5000)
        }
    });
});