import readline from "readline";
import { showAllItems } from "./showAll.js";
import { insertItem } from "./insert.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showMenu() {
  console.log("1. View all");
  console.log("2. Insert");
  console.log("3. Update");
  console.log("4. Delete");
  console.log("5. Quit");
}

function promptUser() {
  rl.question("Please choose an option:  ", (option) => {
    switch (option) {
      case "1. View all":
        showAllItems();
        break;
      case "2. Insert":
        console.log("Insert Item");
        break;
      default:
        console.log("Make sure to choose the right option!");
        showMenu();
        promptUser();
    }
  });
}

function main() {
  showMenu();
  promptUser();
}

main();

/* const args = process.argv.slice(2);

if (args.length !== 2) {
    console.log("Usage: node command.js <num1> <num2>");
    process.exit(1);
}


const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);

const sum = num1 + num2;

console.log(`result: ${sum}`); */
