const sql = require("../db");

module.exports = function (app) {
  app.get("/lienhe", async (req, res) => {
    let qr = "SELECT * FROM lien_he ";
    if (req.query.search) {
      qr += `WHERE lh_ten like '%${req.query.search}%'`;
    }
    sql.query(qr, (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }
      return res.status(200).send(data);
    });
  });

  app.post("/lienhe/active", async (req, res) => {
    const { id, active } = req.body;
    console.log(req.body);
    if (!id) return res.status(404).send("No content");
    const qr = "UPDATE lien_he SET active = ? where lh_id = ?";
    sql.query(qr, [active, id], (err, _) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }
      return res.status(200).send("Cập nhật thành công");
    });
  });

//   app.get("/lienhe/:id", async (req, res) => {
//     const { id } = req.params;
//     console.log(req.params);
//     if (!id) return res.status(404).send(null);
//     const qr = " SELECT * FROM ngon_ngu where nn_id = ?";
//     await sql.query(qr, id, (err, data) => {
//       if (err) return res.status(500).send(err);
//       return res.status(200).send(data);
//     });
//   });

//   app.put("/ngonngu/:id/edit", async (req, res) => {
//     const { id } = req.params;
//     const data = req.body;
//     const qr = "UPDATE ngon_ngu SET ? WHERE nn_id = ?";
//     sql.query(qr, [data, id], (err, _) => {
//       if (err) {
//         return res.status(500).send(err);
//       }
//       return res.status(200).send("Cập nhật thành công!");
//     });
//   });

  app.post("/lienhe/create", async (req, res) => {
    const data = req.body;
    const qr = "INSERT INTO lien_he SET ?";
    try{
        await sql.query(qr, data);
        return res.status(200).send("Thêm thành công!");
    }catch(e){
        console.log(e)
    }
  });

  app.delete("/lienhe/delete", async (req, res) => {
    if (!!req.body.arrID) {
      const arrID = JSON.parse(req.body.arrID);
      await Promise.all(
        arrID.map(async (e) => {
          let qr = "DELETE FROM lien_he where lh_id = ?";
          await sql.query(qr, [e], (err, _) => {
            if (err) {
              console.log(err);
            }
          });
        })
      );
      return res.status(201).send("Xóa thành công!");
    }
  });
};
