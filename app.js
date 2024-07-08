// Importing Inquirer And Chalk Package 
import inquirer from "inquirer";
import chalk from "chalk";
// Display A Colorfull Welcome Message
console.log(chalk.bold.cyanBright("\n \t\t Welcome To Yashna - Word_Counter"));
console.log("=".repeat(65));
// Prompt The User To Enter A Sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter A Sentence",
    }
]);
// Trimming The Sentence And Splitting It Into Words Based On "Spaces"
let words = answers.sentence.trim().split(" ");
// Analysis Of User Input Sentence
console.log("=".repeat(65));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n -Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(65));
