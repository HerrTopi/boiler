var express = require("express");
var router = express.Router();
var mongodb = require("mongodb");
var mongoose = require("mongoose");
autoIncrement = require("mongoose-auto-increment");
/*var connection = mongoose.createConnection(
  "//connection txt"
);
Schema = mongoose.Schema;
autoIncrement.initialize(connection);

var exampleSchema = new Schema({
  asd: String,
  asdasd: Number,
  asdasdasd: Boolean
});

//static function example
exampleSchema.statics.findById = function(id, cb) {
  return this.find({ id: id }, cb);
};

//autoIncrement setup
exampleSchema.plugin(autoIncrement.plugin, { model: "example", field: "id" });
const example = connection.model("excess", exampleSchema);

//example post request with find query
router.post("/test/:id", function(req, res, next) {
  const data = req.body;
  const id = req.params.id;
  example.find({}, function(err, response) {
    res.json(response);
  });
});
*/

router.post("/test/:id", function(req, res, next) {
  const id = req.params.id;
  res.json(id);
});
module.exports = router;
