import inquirer from "inquirer";

inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Introduce tu texto aquí!",
    },
  ])
  .then((answers) => {
    let str = answers.text;
    str = str.replace(/\W/g, "").toLowerCase(); // Remove non-alphanumeric characters and convert to lowercase
    const reversedTxt = str.split("").reverse().join("");
    
    if (str === reversedTxt) {
      return console.log("True (It's a palindrome)");
    } else {
      return console.log("False (Not a palindrome)");
    }
  });
