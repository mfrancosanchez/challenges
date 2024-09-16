import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

console.log(randomNumber);

const getUserGuess = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "number",
        message: "Guess the number!",
        validate(value) {
          const valid = !isNaN(parseInt(value));
          return valid || "Please enter a valid number!";
        },
        filter: Number,
      },
    ])
    .then((answers) => {
      attempts++;
      const userGuess = parseInt(answers.number);

      if (
        (userGuess >= randomNumber - 5 && userGuess <= randomNumber - 1) ||
        (userGuess >= randomNumber + 1 && userGuess <= randomNumber + 5)
      ) {
        console.log(`Attempt #${attempts}`);
        console.log("Warm");
        getUserGuess();
      } else if (userGuess > randomNumber) {
        console.log(`Attempt #${attempts}`);
        console.log("High");
        getUserGuess();
      } else if (userGuess > randomNumber + 10) {
        console.log(`Attempt #${attempts}`);
        console.log("Too high");
        getUserGuess();
      } else if (userGuess < randomNumber - 10) {
        console.log(`Attempt #${attempts}`);
        console.log("Too low");
        getUserGuess();
      } else if (userGuess < randomNumber) {
        console.log(`Attempt #${attempts}`);
        console.log("Low");
        getUserGuess();
      } else if (userGuess === randomNumber) {
        console.log(`Congratulations! You guessed it in ${attempts} attempts.`);
      }
    });
};

getUserGuess();
