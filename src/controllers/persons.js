const personsHandler = (req, res) => {
  let name = req.query.name;
  if (name != null) {
    res.json({
      name: name,
    });
  } else {
    next(errorHandler);
  }
};

module.exports = personsHandler;
