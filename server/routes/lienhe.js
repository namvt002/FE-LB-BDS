const sql = require("../db");

module.exports = function (app) {
  app.get("/lienhes", async (req, res) => {
    let qr = "SELECT lien_he.*, san_pham.sp_ten, san_pham.sp_masp FROM lien_he JOIN san_pham ON lien_he.lh_idsp = san_pham.sp_id ";
    if (req.query.search) {
      qr += ` WHERE lien_he.lh_ten like '%${req.query.search}%' or
              lien_he.lh_email like '%${req.query.search}%' or
              lien_he.lh_sdt like '%${req.query.search}%' or
              san_pham.sp_ten like '%${req.query.search}%' or
              san_pham.sp_masp like '%${req.query.search}%'
      `;
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

  app.get("/lienhe", async (req, res) => {
    const { idlh } = req.query;
    if(idlh == 0) return res.status(200).send({})

    if (!idlh) return res.status(404).send(null);
    const qr = `
    SELECT lien_he.*, san_pham.sp_ten, san_pham.sp_masp, san_pham.sp_gia, hinh_anh.* 
      FROM lien_he JOIN san_pham ON lien_he.lh_idsp = san_pham.sp_id 
        JOIN hinh_anh on san_pham.sp_id = hinh_anh.ha_idsp 
        WHERE  hinh_anh.ha_idsp = ${idlh} AND hinh_anh.ha_id =
          (
            SELECT MIN(hinh_anh.ha_id) FROM hinh_anh WHERE hinh_anh.ha_idsp = ${idlh}
          );
    `;
    await sql.query(qr, (err, data) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(data);
    });
  });

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
      return res.status(200).send("Cập nhập trang thái giao dịch thành công");
    });
  });

  app.post("/lienhe/confirm", async (req, res) => {
    const { id, active } = req.body;
    console.log(req.body);
    if (!id) return res.status(404).send("No content");
    const qr = "UPDATE lien_he SET lh_confirm = ? where lh_id = ?";
    sql.query(qr, [active, id], (err, _) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }
      return res.status(200).send("Cập nhập thành công");
    });
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
