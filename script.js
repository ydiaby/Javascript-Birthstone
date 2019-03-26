const sumbitButton = document.querySelector("#button1")

const displayBox = document.querySelector(".display")

const inputBox = document.querySelector("#input-box")

sumbitButton.addEventListener("click", e => {
  handleInput(inputBox.value)
})



function handleInput(x) {
  if (inputBox.value === "January"){
    displayBox.innerHTML = "Garnet"
}else if(inputBox.value === "February"){
  displayBox.innerHTML = "Amethyst"
}else if (inputBox.value === "March"){
  displayBox.innerHTML = "Aquamarine"
}else if (inputBox.value === "April"){
  displayBox.innerHTML = "Diamond"
}else if (inputBox.value === "May"){
  displayBox.innerHTML = "Emerald"
}else if (inputBox.value === "June"){
  displayBox.innerHTML = "Pearl"
}else if (inputBox.value === "July"){
  displayBox.innerHTML = "Ruby"
}else if (inputBox.value === "August"){
  displayBox.innerHTML = "Peridot"
}else if (inputBox.value === "September"){
  displayBox.innerHTML = "Sapphire"
}else if (inputBox.value === "October"){
  displayBox.innerHTML = "Opal"
}else if (inputBox.value === "November"){
  displayBox.innerHTML = "Topaz"
}else if (inputBox.value === "December")
  displayBox.innerHTML = "Turquoise"
}