const userModel = require("../models/User");
class userController {
  static home = (req, res) => {
    res.render("index1");
  };

  static login = (req, res) => {
    res.render("login");
  };

  static registration = (req, res) => {
    res.render("registration");
  };

  static createDoc = async (req, res) => {
    try {
      const doc = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      await doc.save();
      res.redirect("/login");
    } catch (error) {
      console.log(error);
    }
  };

  static validateLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      const result = await userModel.findOne({ email: email });
      // console.log(result)

      if (result != null) {
        if (result.email == email && result.password == password) {
          res.render("crudop");
        } else {
          res.render("Error1");
        }
      } else {
        res.render("Error2");
      }
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = userController;
