const TownSchema = require('./model');

exports.checkCityName = (req, res, next) => {
  const { cityname } = req.params;
  return TownSchema.find({ name: cityname })
    .then(result => {
      console.log(result);
      res.status(200).send({ result });
    })
    .catch(err => {
      console.log(err);
      next({ status: 400 });
    });
};
