function encryptText() {
    let inputText = document.getElementById("inputText").value;
    let encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    displayOutput(encryptedText);
}

function decryptText() {
    let inputText = document.getElementById("inputText").value;
    let decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    displayOutput(decryptedText);
}

function displayOutput(text) {
    document.getElementById("outputImage").style.display = "none";  // Ocultar la imagen
    document.getElementById("outputTextTitle").innerText = "Resultado";
    document.getElementById("outputText").innerText = text;
}

function copyText() {
    let outputText = document.getElementById("outputText").innerText;
    navigator.clipboard.writeText(outputText).then(() => {
        alert("Texto copiado al portapapeles");
    });
}
