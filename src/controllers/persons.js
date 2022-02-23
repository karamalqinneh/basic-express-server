const personsHandler = (req, res) => {
  let name = req.query.name;
  res.json({
    name: name,
  });
};

module.exports = personsHandler;
