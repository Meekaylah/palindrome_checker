const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");


const checkWord = (text) => {
    const string = text.value;
    const punctuationless = string.replace(/[^\p{L}\p{N}\s]/gu,"") .replace(/\s+/g, "");
    const lcase = punctuationless.toLowerCase();
    const reverse = [...lcase].reverse().join('');
    const pal = `<p class = user-input> <strong>${string}</strong> is a palindrome.</p>`;
    const npal = `<p class = user-input> <strong>${string}</strong> is not a palindrome.</p>`;
    result.classList.remove("hidden");
    reverse === lcase ? result.innerHTML = pal : result.innerHTML = npal;
    textInput.value = "";
}

checkBtn.addEventListener("click", () => {
    if (textInput.value === "") {
        alert("Please input a value")
        textInput.value = "";
    } else {
        checkWord(textInput)
    }
})