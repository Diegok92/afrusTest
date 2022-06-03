module.exports = {
  home: function (req, res) {
    res.render("index");
  },
  p5: (req, res) => {
    res.render("p5");
  },
};
