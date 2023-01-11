const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let passwordOne = document.getElementById("passwordOne")
let passwordTwo = document.getElementById("passwordTwo")
let passwordLength = document.getElementById("passwordLength")
let modal = document.getElementById("modal")
let close = document.getElementsByClassName("close")

function generateCharacter() {
    return characters[Math.floor((Math.random()*characters.length))]
} 

function generatePassword() {
    var passwordLength = parseInt(document.getElementById("passwordLength").value)
    let randomPassword = []

    if(Number.isInteger(passwordLength) == true && passwordLength < 21){
        for (let i = 0; i < passwordLength; i++){
             randomPassword.push(generateCharacter())
          } 
          randomPassword = randomPassword.toString().replaceAll(",","")
          console.log(randomPassword)
          return randomPassword
        } else {
        modal.style.display = "block"
        return randomPassword
    }
}

function getTwo() {
   passwordOne.innerText = generatePassword()
   passwordTwo.innerText = generatePassword()
}

function remove() {
    passwordLength = ""
}

function closeModal() {
    modal.style.display = "none"
}