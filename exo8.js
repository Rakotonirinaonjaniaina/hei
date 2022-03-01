// A little game of password 
const prompt = require("prompt-sync")(); 
// Set password
const ATTEMPTED_PASSWORD = "Jamall";
// Maximum tries
const MAX_ATTEMPT = 5;
let count = 0;
for (let i = 0; i < MAX_ATTEMPT; i++) {
    const password = prompt("Please enter password: ");
    if (password === ATTEMPTED_PASSWORD) {
        console.log("Validated passwords");
        break;
    } else {
        count++;
    }
    if (count === MAX_ATTEMPT) {
        console.log("You are unable to authenticate");
    }
}




