const form = document.getElementById("myForm")
const message = document.getElementById("message")
const resetButton = document.getElementById("resetButton")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  const numA = parseInt(document.getElementById("numA").value)
  const numB = parseInt(document.getElementById("numB").value)

  if (numB > numA) {
    message.textContent = "Formulário válido!"
    message.style.color = "green"
  } else {
    message.textContent = "Formulário inválido. O número B deve ser maior que o número A."
    message.style.color = "red"
  }
})

resetButton.addEventListener("click", () => {
  message.textContent = ""
  document.getElementById("numA").value = ""
  document.getElementById("numB").value = ""
})