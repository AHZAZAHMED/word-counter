#! /usr/bin/env node
import inquirer from "inquirer";

const answer :{
    sentense : string
} = await inquirer.prompt([
    {
        name : "sentense" ,
        type : "input",
        message : "Enter your sentense to count no of words:",
        validate : function (input){
            if(input.trim() === ""){
                return "please enter valid input";
            }
            return true;
        }
            
        }
    
])

const wordCount = answer.sentense.trim().split(" ");

console.log(wordCount);

console.log(`Total number of words in the sentense are ${wordCount.length}`);