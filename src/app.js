const searchBar = document.getElementById("searchInput")
const titles = document.querySelectorAll(".card-title")
let userInput = ""

searchBar.addEventListener("input", (e) => {
  userInput = e.target.value.toLowerCase()

  titles.forEach((card) => {
    const isVisible = card.innerHTML.toLowerCase().includes(userInput)
    card.parentElement.parentElement.classList.toggle("hide", !isVisible)
  })
})
