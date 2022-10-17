//ecrire fonction pour true si palindrome et false sinon.
// bien si tient pas compte accents/espaces/case



function isPalindrome(word) {
    // Transformation du string en tableau, en enlevant les espaces.
    let newWord = word.split("")
    for (let i = 0; i < newWord.length; i++) {
        if (newWord[i] == " ") newWord.splice(i, 1);
    }

    // Or let newWord = word.split(" ").join("") pour faire la meme chose


    // Check if is palindrome
    for (let i = 0; i < newWord.length - 1 - i; i++) {
        let firstCase = newWord[i];
        let lastCase = newWord[newWord.length - 1 - i];

        if (firstCase.localeCompare(lastCase, "en", { sensitivity: "base", ignorePunctuation: true })) return false;

    }
    return true;
}

console.log(isPalindrome("elù paR cettE crapule"))