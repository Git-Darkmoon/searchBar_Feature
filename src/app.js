<<<<<<< HEAD
const searchBar = document.getElementById("searchInput")
const titles = document.querySelectorAll(".card-title")
let userInput = ""

searchBar.addEventListener("input", (e) => {
  userInput = e.target.value
  console.log(userInput)

  for (i of titles) {
    if (i.innerHTML.includes(userInput)) {
      console.log(`${i.innerHTML} includes the input.`)
    }
  }
})
=======
const searchBar = document.getElementById("searchInput")
const titles = document.querySelectorAll(".card-title")
let userInput = ""

searchBar.addEventListener("input", (e) => {
  userInput = e.target.value
  console.log(userInput)

  for (i of titles) {
    if (i.innerHTML.includes(userInput)) {
      console.log(`${i.innerHTML} includes the input.`)
    }
  }
})
>>>>>>> 5f01b06de5360838b904df692256974654c7db11
