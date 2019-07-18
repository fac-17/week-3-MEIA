const tape = require("tape");
const logic = require("../logic.js");

tape("Check if tape is working", t => {
  t.pass();
  t.end();
});

tape("Check if getTimeOfDay returns Morning", t => {

    t.equal(logic.getTimeOfDay(7),"Morning");
    t.equal(logic.getTimeOfDay(9),"Morning");
    t.equal(logic.getTimeOfDay(11),"Morning");
    t.end();
  });
  
  tape("Check if getTimeOfDay returns Afternoon", t => {

    t.equal(logic.getTimeOfDay(17),"Afternoon");
    t.equal(logic.getTimeOfDay(15),"Afternoon");
    t.equal(logic.getTimeOfDay(12),"Afternoon");
    t.end();
  });
  