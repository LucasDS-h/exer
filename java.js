const seila = document.getElementById("seila");

seila.addEventListener("submit", function (event){
    event.preventDefault();


const nome = document.getElementById("nome").value.trim();
const senha = document.getElementById("senha").value;

if( nome === "helldivers" && senha === "viva-a-democracia-que-vai-gobernar-a-terra" ) {
    window.location.href = "acertou.html"
} else {
    window.location.href = "errou.html"
}
});
