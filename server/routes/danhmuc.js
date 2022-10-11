const sql = require("../db");
const db = require("../db");
const multer = require("multer");
const bodyParser = require("body-parser");
const query = require("../lib/query");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    let ext = file.originalname.substring(
      file.originalname.lastIndexOf("."),
      file.originalname.length
    );
    cb(null, file.fieldname + "-" + Date.now() + ext);
  },
});

let upload = multer({ storage: storage , limits: {
  fileSize: 100000000
}});


module.exports = function (app) {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.get("/danhmuc", async (req, res) => {
    let qr = "SELECT * FROM danh_muc";
    if (req.query.search) {
      qr += ` WHERE dm_ten LIKE '%${req.query.search}%' `;
    }
    const _danhmuc = await query(db, qr);
    console.log(_danhmuc)
    await Promise.all(
      _danhmuc.map(async (danhmuc, idx) => {
        _hinhanh = await query(
          db,
          "SELECT * FROM anh_danh_muc WHERE adm_iddm = ?",
          danhmuc.dm_id
        );
        _danhmuc[idx].dm_hinhanh = _hinhanh;
      })
    );
    res.status(200).send(_danhmuc);
  });

  app.get("/danhmuc/tieubieu", async (req, res) => {
    let qr = `
      SELECT san_pham.*, danh_muc.dm_ten,hinh_anh.adm_hinh, COUNT(DISTINCT(san_pham.sp_id)) as so_luong_Sp
      FROM san_pham
      LEFT JOIN danh_muc ON danh_muc.dm_id =san_pham.sp_iddm
      LEFT JOIN anh_danh_muc ON anh_danh_muc.adm_iddm = danh_muc.dm_id,
      (
        SELECT anh_danh_muc.*
          FROM anh_danh_muc, 
            (	SELECT MAX(adm1.adm_id) adm_id, adm1.adm_iddm
              FROM anh_danh_muc adm1
              GROUP BY adm1.adm_iddm
              ) adm_t
          WHERE anh_danh_muc.adm_iddm = adm_t.adm_iddm AND anh_danh_muc.adm_id = adm_t.adm_id
      ) hinh_anh
      WHERE hinh_anh.adm_iddm = san_pham.sp_iddm
      GROUP BY san_pham.sp_iddm
    `;
    const _danhmuc = await query(db, qr);
    res.status(200).send(_danhmuc);
  });



  app.post("/danhmuc/active", async (req, res) => {
    const { id, active } = req.body;
    if (!id) return res.status(404).send("No content");
    const qr = "UPDATE danh_muc SET active = ? where dm_id = ?";
    sql.query(qr, [active, id], (err, _) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }
      return res.status(200).send("Cập nhật thành công");
    });
  });

  app.get("/danhmuc/:id", async (req, res) => {
    const { id } = req.params;
    if (!id) return res.status(404).send(null);
    const qr = "SELECT * FROM danh_muc where danh_muc.dm_id = ?";    
    const _danhmuc = await query(db, qr, id);
    const _anhdanhmuc = await query(db, "SELECT * FROM anh_danh_muc WHERE adm_iddm = ?", id)
    if (_danhmuc.length > 0) _danhmuc[0].dm_hinhanh = _anhdanhmuc;
    res.status(200).send(_danhmuc[0]);
  });

  app.put("/danhmuc/:id/edit", upload.array("dm_hinhanh", 10), async (req, res) => {
    const { id } = req.params;
    upload.array("dm_hinhanh", 10);
    let {data} = req.body;
    data = JSON.parse(data);
    if(req.files.length > 0){
      await query(db, "DELETE FROM anh_danh_muc WHERE adm_iddm = ?", id);
      console.log("delete when you update")
      const qr_ha = "INSERT INTO anh_danh_muc(adm_hinh, adm_iddm) VALUES ?";
      let values = [];
      req.files.map((file) => {
        values.push([file.filename, id]);
      });
      await db.query(qr_ha, [values], (err, results) => {
        if (err) console.log(err);
      });
    }else{
      let results = await query(
        db,
        "SELECT * FROM anh_danh_muc WHERE adm_iddm = ?",
        id
      );
      console.log(results.length, data.dm_hinhanh);
      if (results.length !== data.dm_hinhanh.length) {
        await query(db, "DELETE FROM anh_danh_muc WHERE adm_iddm = ?", id);
        let values = [];
        data.dm_hinhanh.map((e) => {
          values.push([e.replace("http://localhost:4000/public/", ""), id]);
        });
        const qr_ha1 = "INSERT INTO anh_danh_muc(adm_hinh, adm_iddm) VALUES ?";
        await db.query(qr_ha1, [values], (err, results) => {
          if (err) console.log(err);
        });
      }
    }
    delete data.dm_hinhanh;
    delete data.dm_hinhanh_old;
    const qr = "UPDATE danh_muc SET ? WHERE dm_id = ?";
    sql.query(qr, [data, id], (err, _) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200).send("Cập nhật thành công!");
    });
  });

  app.post("/danhmuc/create", upload.array("dm_hinhanh", 10), async (req, res) => {
    let { data } = req.body;
    data = JSON.parse(data);
    delete data.dm_hinhanh_old;
    const qr_exist = "SELECT * FROM danh_muc where dm_ten = ?";

    await sql.query(qr_exist, data.dm_ten, async (err, result) => {
      if (err) return res.status(500).send(err);
      if (result.length !== 0){
        return res.status(500).send("Tên đã tồn tại");
      }else{
        delete data.dm_hinhanh;
        const qr = "INSERT INTO danh_muc SET ?";
        let id_dm = "";
        let values = [];

        await sql.query(qr, data, async(_, rs) => {
          id_dm = rs.insertId;
          if (req.files.length > 0) {
            const qr_ha = "INSERT INTO anh_danh_muc(adm_hinh, adm_iddm) VALUES ?";
            req.files.map((file) => {
              values.push([file.filename, id_dm]);
            });
            await db.query(qr_ha, [values], (err, results) => {
              if (err) console.log(err);
            });
          }
          console.log(values);
        });
        return res.status(200).send("Thêm thành công!");
      }
    });
  });

  app.delete("/danhmuc/delete", async (req, res) => {
    if (!!req.body.arrID) {
      const arrID = JSON.parse(req.body.arrID);
      await Promise.all(
        arrID.map(async (e) => {
          let qr = "DELETE FROM danh_muc where dm_id = ?";
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
