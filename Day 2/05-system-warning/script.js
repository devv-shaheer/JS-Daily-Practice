let laptopStatus = "Hot";

switch (laptopStatus) {
    case "Hot":
     console.log("Hot Throttling Warning!");
     break;

    case "Normal":
     console.log("System's limit safe");
     break;

    default: 
     console.log("checking parameters");
     break;

}