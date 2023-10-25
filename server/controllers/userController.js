const { User } = require("../models");
const bcrypt = require("bcrypt");

class UserController {
  static async getUsers(req, res) {
    try {
      let users = await User.findAll();

      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async register(req, res) {
    try {
      const { username, email, password, role } = req.body;

      // Generate salt
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);

      // Hash the password
      const passhash = await bcrypt.hash(password, salt);

      // Create a new user with the hashed password
      const newUser = {
        username,
        email,
        password: passhash,
        role,
      };

      const result = await User.create(newUser);

      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      let emailFound = await User.findOne({
        where: {
          email,
        },
      });

      if (emailFound) {
        if (decryptPwd(password, emailFound.password)) {
          let access_token = tokenGenerator(emailFound);

          res.status(200).json({ access_token });

          let verifyToken = tokenVerifier(access_token);
          console.log(verifyToken);
        } else {
          res.status(403).json({
            message: "Invalid password!",
          });
        }
      } else {
        res.status(404).json({
          message: "User not found!",
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
  //   try {
  //     const { email, password } = req.body;
  //     let result = await User.findOne({
  //       where: { email },
  //     });

  //     if (result) {
  //       // Gunakan bcrypt.compare untuk membandingkan password yang dimasukkan dengan password di-hash
  //       const passwordMatch = await bcrypt.compare(password, result.password);

  //       if (passwordMatch) {
  //         // Password cocok, kirim respons dengan data pengguna
  //         res.status(200).json({ message: "Login Sukses" });
  //       } else {
  //         // Password tidak cocok
  //         res.status(401).json({
  //           message: "Invalid password",
  //         });
  //       }
  //     } else {
  //       // Email tidak ditemukan
  //       res.status(404).json({
  //         message: "Email not found",
  //       });
  //     }
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // }

  static async delete(req, res) {
    try {
      let id = +req.params.id;

      let result = await User.destroy({
        where: { id: id },
      });

      result === 1
        ? res.status(200).json({
            message: `Id ${id} has been deleted.`,
          })
        : res.status(400).json({
            message: `Id ${id} has not been deleted.`,
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async update(req, res) {
    try {
      let id = +req.params.id;
      const { username, email, password, role } = req.body;

      let result = await User.update(
        {
          username,
          email,
          password,
          role,
        },
        {
          where: { id: id },
        }
      );

      result[0] === 1
        ? res.status(200).json({
            message: `Id ${id} has been updated.`,
          })
        : res.status(400).json({
            message: `Id ${id} has not been updated.`,
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async getDetails(req, res) {
    try {
      const id = +req.params.id;

      let result = await User.findByPk(id);

      result
        ? res.status(200).json(result)
        : res.status(404).json({
            message: `User id ${id} not found`,
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = UserController;
