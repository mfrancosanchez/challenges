import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const getUserGuess = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "number",
        message: "Guess the number between 1 and 100! (Type 'exit' to quit)",
        validate(value) {
          if (value.toLowerCase() === 'exit') {
            return true;
          }
          const valid = !isNaN(parseInt(value)) && parseInt(value) >= 1 && parseInt(value) <= 100;
          return valid || "Please enter a valid number between 1 and 100!";
        },
        filter: (value) => (value.toLowerCase() === 'exit' ? 'exit' : Number(value)),
      },
    ])
    .then((answers) => {
      if (answers.number === 'exit') {
        console.log("Goodbye! Thanks for playing.");
        return;
      }

      attempts++;
      const userGuess = answers.number;

      if (
        (userGuess >= randomNumber - 5 && userGuess <= randomNumber - 1) ||
        (userGuess >= randomNumber + 1 && userGuess <= randomNumber + 5)
      ) {
        console.log(`Attempt #${attempts}`);
        console.log("Warm");
        getUserGuess();
      } else if (userGuess > randomNumber + 10) {
        console.log(`Attempt #${attempts}`);
        console.log("Too high");
        getUserGuess();
      } else if (userGuess > randomNumber) {
        console.log(`Attempt #${attempts}`);
        console.log("High");
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
