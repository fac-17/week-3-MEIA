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

tape("Check if requiresShadow returns a boolean", t => {
  t.equal(typeof logic.requiresShadow(""), 'boolean')
  t.end();
});

tape("Check if requiresShadow returns false for the non shadowed input", t => {
  t.equal(logic.requiresShadow("central"), false);
  t.equal(logic.requiresShadow("piccadilly"), false);
  t.end();
});
tape("Check if requiresShadow returns true for the shadowed input", t => {
  t.equal(logic.requiresShadow("circle"), true);
  t.equal(logic.requiresShadow("victoria"), true);
  t.end();
});
