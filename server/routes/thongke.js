const sql = require("../db");

module.exports = function (app) {

  app.get("/thongke/tong", async (req, res) => {
    const qr=` SELECT COUNT(lien_he.lh_id) as total FROM lien_he `
    sql.query(qr, (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }
      return res.status(200).send(data);
    });
  });

  app.get("/thongke/daban", async (req, res) => {
    const qr=` SELECT COUNT(lien_he.lh_id) as total FROM lien_he WHERE lien_he.lh_confirm = 1 `
    sql.query(qr, (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }
      return res.status(200).send(data);
    });
  });

  // thong ke da lien he
  app.get("/thongke/dalienhe", async (req, res) => {
    const qr=` SELECT COUNT(lien_he.lh_id) as total FROM lien_he WHERE lien_he.active = 1 `
    sql.query(qr, (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }
      return res.status(200).send(data);
    });
  });

  app.get("/thongke/chualienhe", async (req, res) => {
    const qr=` SELECT COUNT(lien_he.lh_id) as total FROM lien_he WHERE lien_he.active = 0 `
    sql.query(qr, (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }
      return res.status(200).send(data);
    });
  });
  //đã liên hệ nhưng chưa mua
  app.get("/thongke/chuamua", async (req, res) => {
    const qr=` SELECT COUNT(lien_he.lh_id) as total FROM lien_he WHERE lien_he.active = 1 AND lien_he.lh_confirm = 0 `
    sql.query(qr, (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }
      return res.status(200).send(data);
    });
  });
  
 
};
