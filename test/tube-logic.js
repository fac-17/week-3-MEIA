const tape = require("tape");
const logic = require("../logic.js");

tape("Check if tape is working", t => {
  t.pass();
  t.end();
});

tape("Check if getStatusClass function returns a string", t => {
  t.equal(
    typeof logic.getStatusClass(""),
    "string",
    "getStatusClass should return a string"
  );
  t.end();
});

tape("Check if getStatusClass returns correct class name", t => {
  t.equal(logic.getStatusClass("Good Service"), "tube-good");
  t.equal(logic.getStatusClass("Minor Delays"), "tube-minor");
  t.equal(logic.getStatusClass("Part suspended"), "tube-part");
  t.equal(logic.getStatusClass("Severe Delays"), "tube-severe");
  t.end();
});
