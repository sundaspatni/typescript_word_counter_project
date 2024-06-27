#! /usr/bin/env node
//importing inquirer and chalk pakages
import inquirer from "inquirer";
import chalk from "chalk";
//display pakage of colourful welcome message
console.log(chalk.bold.greenBright("\n \t\t 'code_with_resham' -word counter"));
console.log("=".repeat(70));
//prompt the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence",
    }
]);
// trimming the sentence and splitting it into words based on spaces
let words = answers.sentence.trim().split(" ");
//analysise user input sentence
console.log("=".repeat(70));
console.log(chalk.bold("- sentence words:"));
console.log(words);
console.log(chalk.bold(`\n -word count: ${chalk.bgYellowBright.redBright(words.length)} `));
console.log("=".repeat(70));
