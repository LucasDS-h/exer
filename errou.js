const errouKaka = document.getElementById("errouKaka");

errouKaka.addEventListener("submit", function (event){
    event.preventDefault();

    const nomeE = document.getElementById("nomeE").value.trim();
    const senhaE = document.getElementById("senhaE").value;

if( nomeE === "fracasei" && senhaE === "utgfdtihsr3754308gldjgdbffsifaffghcklshfhnsdfgh" ) {
    window.location.href = "index.html"
}
});