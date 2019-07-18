const tape = require("tape");
const logic = require("../logic.js");

tape("Check if tape is working", t => {
  t.pass();
  t.end();
});

tape("Check if status class function returns a string", t => {
  t.equal(
    typeof logic.getStatusClass(""),
    "string",
    "getStatusClass should return a string"
  );
  t.end();
});
