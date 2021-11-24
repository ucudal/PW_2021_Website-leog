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
        })
    })
    .then(data => {
        console.log("Data", data);
        console.log("Cookies", document.cookie)
    });
});