/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.helloWorld = (req, res) => {
  let message = req.query.message || req.body.message || "0";
  benchmarking(message);
  res.status(200).send("Factorial Run Successfully");
};

function factorial(num) {
  // checking if number is negative
  if (number < 0) {
    console.log("Error! Factorial for negative number does not exist.");
  }

  // if number is 0
  else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
  }

  // if number is positive
  else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
      fact *= i;
    }
  }
}

function benchmarking(num){
    factorial(num);
}
