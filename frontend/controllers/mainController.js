module.exports = {
  home: function (req, res) {
    res.render("index");
  },
  p5: (req, res) => {
    res.render("p5");
  },
  p6: (req, res) => {
    res.render("p6");
  },
  p7: (req, res) => {
    res.render("p7");
  },
};
