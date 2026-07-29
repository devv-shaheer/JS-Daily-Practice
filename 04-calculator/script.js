let num1 = prompt("enter first number")
let num2 = prompt("enter second number")

let calculation =prompt("Choose one amoung them + | - | * | / ")

if (calculation === "+") {
    alert(+num1 + +num2)
}                              // ← just this, no { after
else if (calculation === "-") {
    alert(+num1 - +num2)
}                              // ← same here
else if (calculation === "*") {
    alert(+num1 * +num2)
}                              // ← same here
else if (calculation === "/") {
    alert(+num1 / +num2)
}
