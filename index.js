document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("no-input-image").style.display = "none";
    document.getElementById("no-input-text").style.display = "none";
});

function encriptar() {
    let texto = document.querySelector(".form-control").value;
    if (texto === "") {
        mostrarNoInput();
    } else {
        let textoEncriptado = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        mostrarResultado(textoEncriptado);
    }
}

function desencriptar() {
    let texto = document.querySelector(".form-control").value;
    if (texto === "") {
        mostrarNoInput();
    } else {
        let textoDesencriptado = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        mostrarResultado(textoDesencriptado);
    }
}

function mostrarResultado(texto) {
    document.getElementById("image").style.display = "none";
    document.getElementById("waiting-text").style.display = "none";
    document.getElementById("no-input-image").style.display = "none";
    document.getElementById("no-input-text").style.display = "none";
    document.getElementById("output-text").style.display = "block";
    document.getElementById("output-text").value = texto;
    document.getElementById("copy-button").style.display = "block";
}

function mostrarNoInput() {
    document.getElementById("image").style.display = "none";
    document.getElementById("waiting-text").style.display = "none";
    document.getElementById("output-text").style.display = "none";
    document.getElementById("copy-button").style.display = "none";
    document.getElementById("no-input-image").style.display = "block";
    document.getElementById("no-input-text").style.display = "block";
}

function copiar() {
    let textoCopiado = document.getElementById("output-text");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textoCopiado.value)
        .then(() => {
            alert("Texto copiado: " + textoCopiado.value);
        })
        .catch(err => {
            console.error('Error al copiar: ', err);
        });

}