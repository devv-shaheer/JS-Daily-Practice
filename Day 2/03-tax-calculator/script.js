let myMonthlyIncome = prompt("Enter your monthly income:");

switch (true) {

    case myMonthlyIncome >= 100000:
        console.log("Tax bracket 10%");
        break;
    case myMonthlyIncome >= 50000:
        console.log("Tax bracket 5%");
        break;
    default:
        console.log("Tax bracket 0%");
        break;
}    