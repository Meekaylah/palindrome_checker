const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");


const checkWord = (text) => {
    const string = text.value;
    const lcase = string.toLowerCase();
    const reverse = [...lcase].reverse().join('');
    reverse === lcase ? alert(`${string} is a palindrome`) : alert(`${string} is NOT a palindrome`);
}

checkBtn.addEventListener("click", () => {
    if (textInput.value === "") {
        alert("Please input a value")
    } else {
        checkWord(textInput)
    }
})