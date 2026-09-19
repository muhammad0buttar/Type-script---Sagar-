"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let day = "Tuesday";
switch (day) {
    case "Monday":
        console.log("Start of the work week!");
        break;
    case "Tuesday":
        // The variable matches this case exactly!
        console.log("It's Tuesday!");
        break; // Stops the code from bleeding into the next case
    case "Friday":
        console.log("Weekend is almost here!");
        break;
    default:
        // Acts exactly like the final "else" catch-all
        console.log("Just another regular day.");
}
// Output: "It's Tuesday!"
//# sourceMappingURL=switch.js.map