document.getElementById("next").addEventListener("click", nextCharacter)
document.getElementById("prev").addEventListener("click", prevCharacter)
document.getElementById("random").addEventListener("click", randomCharacter)
let i = 1
let i2 = 5
let characters = ["po", "tigress", "mantis", "crane", "monkey", "viper"]

function nextCharacter() {
    document.getElementById("pic").src = `images/${characters[i]}.png`
    console.log(characters[i])
i++

 if (i == 6) {
    i = 0
 }
}

function prevCharacter() {
    document.getElementById("pic").src = `images/${characters[i2]}.png`
    console.log(characters[i2])
i2--

if (i2 == -1) {
    i2 = 5
}

}

function randomCharacter() {
    function randomNum() {
        let rand = Math.floor(Math.random() * 6)
        return rand
    }

       document.getElementById("pic").src = `images/${characters[i]}.png`


    i = randomNum()
}