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
  app.post("/blog/create", upload.array("bv_hinhanh", 10), async (req, res) => {
    let { data } = req.body;
    data = JSON.parse(data);
    console.log(data);
    delete data.bv_hinhanh_old;
    const qr_sp = "SELECT * FROM bai_viet WHERE bv_ma = ?";
    await db.query(qr_sp, data.bv_ma, async (err, result) => {
      if (err) {
        console.log(err)
        return
      } ;
      if (result.length !== 0)
        return res.status(500).send("Mã bài viết đã tồn tại");
      else {
        delete data.bv_hinhanh;
        const qr = "INSERT INTO bai_viet SET ?";
        let id_bv = "";
        let values = [];

        await db.query(qr, data, async (err, rs) => {
          if(err){
            console.log(err);
            return
          }
          id_bv = rs.insertId;
          console.log(id_bv, "THEM NGON ROI DO")
          if (req.files.length > 0) {
            const qr_ha = "INSERT INTO anh_bai_viet(abv_hinh, abv_idbv) VALUES ?";
            req.files.map((file) => {
              values.push([file.filename, id_bv]);
            });
            await db.query(qr_ha, [values], (err, results) => {
              if (err) console.log(err);
            });
          }
        });

        return res.status(200).send("Thêm thành công");
      }
    });
  });

  app.get("/blogs", async (req, res) => {
    let qr = `
     SELECT * FROM bai_viet 
    `;
    if (req.query.search) {
      qr += ` WHERE bv_ten like '%${req.query.search}%' 
      `;
    }
    const _baiviet = await query(db, qr);
    await Promise.all(
        _baiviet.map(async (baiviet, idx) => {
        _hinhanh = await query(
          db,
          "SELECT * FROM anh_bai_viet WHERE abv_idbv = ? ",
          baiviet.bv_id
        );
        _baiviet[idx].bv_hinhanh = _hinhanh;
      })
    );
    res.status(200).send(_baiviet);
  });
 
 
  
 
  //lay sp theo id sp
  app.get("/blog/:id", async (req, res) => {
    const { id } = req.params;
    let qr = `
    SELECT 
        *
    FROM bai_viet
    WHERE bv_id = ?;
    `;
    const _baiviet = await query(db, qr, id);
    _hinhanh = await query(db, "SELECT * FROM anh_bai_viet WHERE abv_idbv = ?", id);
    if (_baiviet.length > 0) _baiviet[0].bv_hinhanh = _hinhanh;
    res.status(200).send(_baiviet[0]);
  });

  app.put("/blog/:id", upload.array("bv_hinhanh", 10), async (req, res) => {
    const id = req.params.id;
    upload.array("bv_hinhanh", 10);
    let { data } = req.body;
    data = JSON.parse(data);
    if (req.files.length > 0) {
      await query(db, "DELETE FROM anh_bai_viet WHERE abv_idbv = ?", id);
      const qr_ha = "INSERT INTO anh_bai_viet(abv_hinh, abv_idbv) VALUES ?";
      let values = [];
      req.files.map((file) => {
        values.push([file.filename, id]);
      });
      await db.query(qr_ha, [values], (err, results) => {
        if (err) console.log(err);
      });
    } else {
      let results = await query(
        db,
        "SELECT * FROM anh_bai_viet WHERE abv_idbv = ?",
        id
      );
      if (results.length !== data.bv_hinhanh.length) {
        await query(db, "DELETE FROM anh_bai_viet WHERE abv_idbv = ?", id);
        let values = [];
        data.bv_hinhanh.map((e) => {
          values.push([e.replace("http://localhost:4000/public/", ""), id]);
        });
        const qr_ha1 = "INSERT INTO anh_bai_viet(abv_hinh, abv_idbv) VALUES ?";
        await db.query(qr_ha1, [values], (err, results) => {
          if (err) console.log(err);
        });
      }
    }
    delete data.bv_hinhanh;
    delete data.bv_hinhanh_old;
    await db.query(
      "UPDATE bai_viet SET ? WHERE bv_id = ?",
      [data, id],
      (err, results) => {
        if (err) console.log(err);
      }
    );
    return res.status(200).send("Cập nhật thành công");
  });

  app.delete("/blog/delete", async (req, res) => {
    if (!!req.body.arrID) {
      console.log(req.body.arrID)
      const arrID = JSON.parse(req.body.arrID);
      await Promise.all(
        arrID.map(async (e) => {
          let qr_sp = "DELETE FROM bai_viet where bv_id = ?";
          await db.query(qr_sp, [e], (err, _) => {
            if (err) {
              console.log(err);
            }
          });

          let qr_ha = "DELETE FROM anh_bai_viet where abv_idbv = ?";
          await db.query(qr_ha, [e], (err, _) => {
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
