const db = require("../db");
const bcrypt = require("bcryptjs");
const { sendEmail } = require("../lib/sendMail");
const jwt = require("jsonwebtoken");
require("dotenv").config();
//-------------------------------------------------------------------------------------------
function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

module.exports = function (app) {
  app.get("/auth/verify/email", async (req, res) => {
    const tokenEmail = req.query.token;
    const decode = jwt.verify(tokenEmail, process.env.SECRET);
    const token = jwt.sign({ email: decode.email }, process.env.SECRET, {
      expiresIn: 86400, // 24h
    });
    const sql = `UPDATE users SET verify = '1' WHERE email = '${decode.email}'`;
    const sql_user = "select users.*, q_ten  as role from users left join quyen on users.role_id = quyen.q_id WHERE email = ?";
    await db.query(sql);
    await db.query(sql_user, decode.email, (err, user) => {
      if (err) return res.status(500).send(err);
      if (user.length === 0)
        return res.status(404).send("Tài khoản không tồn tại");
      res.cookie("token", token, { expire: new Date() + 86400 });
      res.cookie("fullname", user[0].fullname);
      res.cookie("email", user[0].email);
      res.cookie("role", user[0].role);
      return res.redirect("http://localhost:3000");
    });
  });
  app.post("/user/register", async (req, res) => {
    const { fullname, email, password } = req.body;
    await db.query(
      "select users.*, q_ten  as role from users left join quyen on users.role_id = quyen.q_id WHERE email = ?",
      email,
      async (err, data) => {
        if (err) return res.status(500);
        if (data.length !== 0) {
          return res.status(500).send("Email đã tồn tại");
        } else {
          const tokenEmail = jwt.sign({ email: email }, process.env.SECRET, {
            expiresIn: 18000, // 5m
          });
          const sql_insert =
            "\
          INSERT INTO `users` (`email`, `fullname`, `credential`) VALUES (?,?,?)";
          await db.query(sql_insert, [
            email,
            fullname,
            bcrypt.hashSync(password, 8),
          ]);
          const URL = `http://localhost:4000/auth/verify/email?token=${tokenEmail}`;
          const optionsSendMail = {
            to: email, // list of receivers
            subject: "Verify Account", // Subject line
            html:
              '<p>Please click this link to verify your account <b><a href="' +
              URL +
              '"> Click here </a></b></p>',
          };
          sendEmail(optionsSendMail);
          return res.status(200).send("Successfully!");
        }
      }
    );
  });

  app.post("/auth/login", async (req, res) => {
    const { email, password } = req.body;
    const sql_user = "select users.*, q_ten  as role from users left join quyen on users.role_id = quyen.q_id WHERE email = ?";
    await db.query(sql_user, email, (err, data) => {
      if (err) return res.status(200).send(err);
      if (data.length === 0) {
        return res.status(404).send("Tài khoản không tồn tại!");
      }
      if (data[0].verify === 0) {
        const tokenEmail = jwt.sign({ email: email }, process.env.SECRET, {
          expiresIn: 18000, // 5m
        });
        const URL = `http://localhost:4000/auth/verify/email?token=${tokenEmail}`;
        const optionsSendMail = {
          to: email, // list of receivers
          subject: "Verify Account", // Subject line
          html:
            '<p>Please click this link to verify your account <b><a href="' +
            URL +
            '"> Click here </a></b></p>',
        };
        sendEmail(optionsSendMail);
        return res
          .status(400)
          .send(
            "Tài khoản của bạn chưa kích hoạt vui lòng check mail để kích hoạt"
          );
      }

      if (!data[0].credential)
        return res
          .status(401)
          .send("Vui lòng đăng nhập tài khoản google để đổi mật khẩu");
      const passwordIsValid = bcrypt.compareSync(password, data[0].credential);
      if (!passwordIsValid) {
        return res.status(401).send("Mật khẩu không chính xác");
      }
      const token = jwt.sign({ email: email }, process.env.SECRET, {
        expiresIn: 86400, // 24m
      });
      res.cookie("token", token, {
        expire: new Date() + 86400,
      });
      res.cookie("fullname", data[0].fullname);
      res.cookie("email", data[0].email);
      res.cookie("role", data[0].role);
      return res.status(200).send("successfully!");
    });
  });

  app.get("/auth/login/google", isLoggedIn, async (req, res) => {
    const token = jwt.sign({ email: req.user.email }, process.env.SECRET, {
      expiresIn: 86400, // 24h
    });
    console.log(req.user);
    await db.query(
      `select users.*, q_ten  as role from users left join quyen on users.role_id = quyen.q_id WHERE email = ?`,
      req.user.email,
      async (err, data) => {
        if (err) return res.status(500);
        if (data.length !== 0) {
          res.cookie("token", token, { expire: new Date() + 86400 });
          res.cookie("fullname", req.user.displayName);
          res.cookie("email", req.user.email);
          res.cookie("role", data[0].role);
          if(data[0].role === 'ADMIN') return res.redirect("http://localhost:3000/dashboard");
          return res.redirect("http://localhost:3000");
        } else {
          let sql =
            "INSERT INTO `users` (`user_id`, `email`, `fullname`, `verify`) VALUES ?";
          let value = [[req.user.id, req.user.email, req.user.displayName, 1]];
          await db.query(sql, [value], (err, _) => {
            if (err) return res.status(500);
            res.cookie("fullname", req.user.displayName);
            res.cookie("email", req.user.email);
            res.cookie("token", token, { expire: new Date() + 86400 });
            res.cookie("role", "USER");
            return res.redirect("http://localhost:3000");
          });
        }
      }
    );
  });
};
