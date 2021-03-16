/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */

const myFunction = require("./factorial");
const Benchmark = require("benchmark");
const suite = new Benchmark.Suite();

Benchmark.options.minSamples = 40;

exports.helloWorld = (req, res) => {
  let message = req.query.message || req.body.message || "0";
  output = benchmarking(message);
  res.status(200).send(output);
};

function benchmarking(message) {
  number = parseInt(message);

  suite
    .add(`factorial ${number}`,  function () {
      myFunction.factorial(number);
    })
    .on("cycle", function (event) {
      console.log(String(event.target));
      console.log("All events: ", event);
    })
    .on("complete", function () {
      console.log("Fastest is " + this.filter("fastest").map("name"));
    })
    .run({ async: false });

  return `Factorial Finished Successfully for ${number} !`;
}

// benchmarking(2);
