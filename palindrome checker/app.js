const palindromeValue = document.querySelector("#palindrome");
const result = document.querySelector("#result");


palindromeValue.addEventListener("input",(e) =>{

    let word = e.target.value;
    result.innerHTML = word
    ? palindrome(word)
    ?`<span class="green">${word}</span> is palindrome`
    :`<span class="red">${word}</span> is not palindrome`
    : "";
});

function palindrome(word){
    word = word.replace(/[^a-z0-9]/gi, "").toLowerCase();
    let reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
}