function displayOutputText(text) {
    outputText = document.getElementById('outputSection');
    outputText.textContent = text;
}

function encrypt(){
    let inputText = document.getElementById('textArea').value.toLowerCase();

    let encryptedText = inputText
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat")

    displayOutputText(encryptedText);
}

function decrypt() {
    let inputText = document.getElementById('textArea').value.toLowerCase();

    let decryptedText = inputText
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u")

    displayOutputText(decryptedText);
}

function copy() {
    let outputText = document.getElementById('outputSection').textContent;
    navigator.clipboard.writeText(outputText);
}