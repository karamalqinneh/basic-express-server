function pageNotFoundHandler(req, res) {
  return res.status(404).send({
    status: 404,
    responseText: "page not found",
  });
}

module.exports = pageNotFoundHandler;
