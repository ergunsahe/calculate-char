function calcuChar(word, char) {
    const count = word.toLowerCase().split("").filter(t => t==char.toLowerCase())
    // console.log(count.length)
    return count.length
}

calcuChar("clarusway", "a")
calcuChar("clarusway", "A")