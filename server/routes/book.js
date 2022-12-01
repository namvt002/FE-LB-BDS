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
  app.post("/book/create", upload.array("sp_hinhanh", 10), async (req, res) => {
    let { data } = req.body;
    data = JSON.parse(data);
    delete data.sp_hinhanh_old;
    const qr_sp = "SELECT * FROM san_pham WHERE sp_masp = ?";
    await db.query(qr_sp, data.sp_masp, async (err, result) => {
      if (err) {
        console.log(err)
        return
      } ;
      if (result.length !== 0)
        return res.status(500).send("Mã sản phẩm đã tồn tại");
      else {
        delete data.sp_hinhanh;
        const qr = "INSERT INTO san_pham SET ?";
        let id_sp = "";
        let values = [];

        await db.query(qr, data, async (err, rs) => {
          if(err){
            console.log(err);
            return
          }
          id_sp = rs.insertId;
          if (req.files.length > 0) {
            const qr_ha = "INSERT INTO hinh_anh(ha_hinh, ha_idsp) VALUES ?";
            req.files.map((file) => {
              values.push([file.filename, id_sp]);
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

  app.get("/books", async (req, res) => {
    let qr = `
    SELECT 
        san_pham.*,  the_loai.tl_ten, tac_gia.*, danh_muc.dm_ten
    FROM san_pham
        LEFT JOIN the_loai ON the_loai.tl_id = san_pham.sp_idtl
        LEFT JOIN tac_gia ON tac_gia.tg_id = san_pham.sp_idtg
        LEFT JOIN danh_muc ON danh_muc.dm_id = san_pham.sp_iddm
    `;
    if (req.query.search) {
      qr += ` WHERE tl_ten like '%${req.query.search}%' or 
                  tg_ten like '%${req.query.search}%' or
                  dm_ten like '%${req.query.search}%' or
                  sp_ten like '%${req.query.search}%' or 
                  sp_masp like '%${req.query.search}%'
      `;
    }
    const _books = await query(db, qr);
    await Promise.all(
      _books.map(async (book, idx) => {
        _hinhanh = await query(
          db,
          "SELECT * FROM hinh_anh WHERE ha_idsp = ?",
          book.sp_id
        );
        _books[idx].sp_hinhanh = _hinhanh;
      })
    );
    res.status(200).send(_books);
  });
  //danh sach sp moi
  app.get("/books/new", async (req, res) => {
    let qr = `
    SELECT 
      san_pham.*,  the_loai.tl_ten, tac_gia.tg_ten, danh_muc.dm_ten
    FROM san_pham
        LEFT JOIN the_loai ON the_loai.tl_id = san_pham.sp_idtl
        LEFT JOIN tac_gia ON tac_gia.tg_id = san_pham.sp_idtg
        LEFT JOIN danh_muc ON danh_muc.dm_id = san_pham.sp_iddm
        WHERE san_pham.sp_active = 1
        ORDER BY san_pham.sp_id DESC LIMIT 9 
    `;
    const _books = await query(db, qr);
    await Promise.all(
      _books.map(async (book, idx) => {
        _hinhanh = await query(
          db,
          "SELECT * FROM hinh_anh WHERE ha_idsp = ?",
          book.sp_id
        );
        _books[idx].sp_hinhanh = _hinhanh;
      })
    );
    res.status(200).send(_books);
  });
  //sp thue
  app.get("/books/thue", async (req, res) => {
    let qr = `
    SELECT 
      san_pham.*,  the_loai.tl_ten, tac_gia.*, danh_muc.dm_ten
    FROM san_pham
        LEFT JOIN the_loai ON the_loai.tl_id = san_pham.sp_idtl
        LEFT JOIN tac_gia ON tac_gia.tg_id = san_pham.sp_idtg
        LEFT JOIN danh_muc ON danh_muc.dm_id = san_pham.sp_iddm
        WHERE the_loai.tl_ten = "Cho thuê" AND san_pham.sp_active = 1
        ORDER BY san_pham.sp_id DESC LIMIT 9
    `;
    const _books = await query(db, qr);
    await Promise.all(
      _books.map(async (book, idx) => {
        _hinhanh = await query(
          db,
          "SELECT * FROM hinh_anh WHERE ha_idsp = ?",
          book.sp_id
        );
        _books[idx].sp_hinhanh = _hinhanh;
      })
    );
    res.status(200).send(_books);
  });
  //sp ban
  app.get("/books/ban", async (req, res) => {
    let qr = `
    SELECT 
      san_pham.*,  the_loai.tl_ten, tac_gia.*, danh_muc.dm_ten
    FROM san_pham
        LEFT JOIN the_loai ON the_loai.tl_id = san_pham.sp_idtl
        LEFT JOIN tac_gia ON tac_gia.tg_id = san_pham.sp_idtg
        LEFT JOIN danh_muc ON danh_muc.dm_id = san_pham.sp_iddm
        WHERE the_loai.tl_ten = "Bán" AND san_pham.sp_active = 1
        ORDER BY san_pham.sp_id DESC LIMIT 9
    `;
    const _books = await query(db, qr);
    await Promise.all(
      _books.map(async (book, idx) => {
        _hinhanh = await query(
          db,
          "SELECT * FROM hinh_anh WHERE ha_idsp = ?",
          book.sp_id
        );
        _books[idx].sp_hinhanh = _hinhanh;
      })
    );
    res.status(200).send(_books);
  });

  //lay sp theo id danh muc
  app.get("/books/danhmuc/:id", async (req, res) => {
    const {id} = req.params;
    let qr = `
    SELECT 
        san_pham.*,  the_loai.tl_ten, tac_gia.*, danh_muc.dm_ten
    FROM san_pham
        LEFT JOIN the_loai ON the_loai.tl_id = san_pham.sp_idtl
        LEFT JOIN tac_gia ON tac_gia.tg_id = san_pham.sp_idtg
        LEFT JOIN danh_muc ON danh_muc.dm_id = san_pham.sp_iddm
        WHERE san_pham.sp_iddm = ?
    `;
    const _books = await query(db, qr, id);
    await Promise.all(
      _books.map(async (book, idx) => {
        _hinhanh = await query(
          db,
          "SELECT * FROM hinh_anh WHERE ha_idsp = ?",
          book.sp_id
        );
        _books[idx].sp_hinhanh = _hinhanh;
      })
    );
    res.status(200).send(_books);
  });

  //lay tat ca sp va loc theo danh muc
  app.get("/sanpham/tatca", async (req, res) => {
    const {_fromPrice, _toPrice, _fromSize, _toSize, type, sort, category} = req.query;
    const { pageURL } = req.query;
    let limit = 12;
    if (pageURL) {
      limit = limit * pageURL;
    }
    let qr = `
    SELECT 
        san_pham.*,  the_loai.tl_ten, tac_gia.*, danh_muc.dm_ten
    FROM san_pham
        LEFT JOIN the_loai ON the_loai.tl_id = san_pham.sp_idtl
        LEFT JOIN tac_gia ON tac_gia.tg_id = san_pham.sp_idtg
        LEFT JOIN danh_muc ON danh_muc.dm_id = san_pham.sp_iddm
    WHERE san_pham.sp_active = 1 
    `;

    if(type){
      qr += `sp_idtl = '${type}' AND `;
    }

    if(_fromPrice){
        if(_toPrice){
          qr += `sp_gia  BETWEEN ${_fromPrice} AND ${_toPrice} AND `;
        }else{
          qr += `sp_gia >= ${_fromPrice} AND `
        }
    } else{
      if(_toPrice){
          qr += `sp_gia <= ${_toPrice} AND `;
        }
    }

    if(_fromSize){
      if(_toSize){
        qr += `sp_dientich  BETWEEN ${_fromSize} AND ${_toSize} AND`;
      }else{
        qr += `sp_dientich >= ${_fromSize} AND`
      }
  } else{
    if(_toSize){
        qr += `sp_gia <= ${_toSize} AND`;
      }
  }
if(category.split(',').length == 1 && category.split(',')[0] != ''){
  qr += ` danh_muc.dm_id = '${category}'`;
} 
if(category.split(',').length > 1 && category.split(',').length <= 2 ){
  for(let i = 0; i <= category.split(',').length - 2; i++){
    qr += ` ( danh_muc.dm_id = '${category.split(',')[i]}' OR `;
    qr += ` danh_muc.dm_id = '${category.split(',')[category.split(',').length  - 1]}' ) `;
  }
} 
if(category.split(',').length > 2 ){
  for(let i = 0; i <= category.split(',').length - 2; i++){
    if(category.split(',').length > 2){
      qr += ` ( danh_muc.dm_id = '${category.split(',')[i]}' OR `;
    }
    if(i  ==  category.split(',').length - 2){
      qr += ` danh_muc.dm_id = '${category.split(',')[category.split(',').length  - 1]}' )`;
    }else{
      qr += ` danh_muc.dm_id = '${category.split(',')[category.split(',').length  - 1]}' ) OR `;

    }
  }
} 
if(category.split(',').length == 1 && category.split(',')[0] == ''){
  qr += ` LIMIT ${limit} `;
}


    if(sort){
      qr += ` ORDER BY sp_gia ${sort}`;
    }
    // console.log(qr)
    const _books = await query(db, qr);
    await Promise.all(
      _books.map(async (book, idx) => {
        _hinhanh = await query(
          db,
          "SELECT * FROM hinh_anh WHERE ha_idsp = ?",
          book.sp_id
        );
        _books[idx].sp_hinhanh = _hinhanh;
      })
    );
    res.status(200).send(_books);
  });


  //lay sp theo id sp
  app.get("/book/:id", async (req, res) => {
    const { id } = req.params;
    let qr = `
    SELECT 
        san_pham.*, the_loai.tl_ten, tac_gia.*, danh_muc.dm_ten
    FROM san_pham
        LEFT JOIN the_loai ON the_loai.tl_id = san_pham.sp_idtl
        LEFT JOIN tac_gia ON tac_gia.tg_id = san_pham.sp_idtg
        LEFT JOIN danh_muc ON danh_muc.dm_id = san_pham.sp_iddm

    WHERE sp_id = ?;
    `;
    const _books = await query(db, qr, id);
    _hinhanh = await query(db, "SELECT * FROM hinh_anh WHERE ha_idsp = ?", id);
    if (_books.length > 0) _books[0].sp_hinhanh = _hinhanh;
    res.status(200).send(_books[0]);
  });

  app.put("/book/:id", upload.array("sp_hinhanh", 10), async (req, res) => {
    const id = req.params.id;
    upload.array("sp_hinhanh", 10);
    let { data } = req.body;
    data = JSON.parse(data);
    if (req.files.length > 0) {
      await query(db, "DELETE FROM hinh_anh WHERE ha_idsp = ?", id);
      const qr_ha = "INSERT INTO hinh_anh(ha_hinh, ha_idsp) VALUES ?";
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
        "SELECT * FROM hinh_anh WHERE ha_idsp = ?",
        id
      );
      console.log(results.length, data.sp_hinhanh);
      if (results.length !== data.sp_hinhanh.length) {
        await query(db, "DELETE FROM hinh_anh WHERE ha_idsp = ?", id);
        let values = [];
        console.log(data.sp_hinhanh);
        data.sp_hinhanh.map((e) => {
          values.push([e.replace("http://localhost:4000/public/", ""), id]);
        });
        const qr_ha1 = "INSERT INTO hinh_anh(ha_hinh, ha_idsp) VALUES ?";
        await db.query(qr_ha1, [values], (err, results) => {
          if (err) console.log(err);
        });
      }
    }
    delete data.sp_hinhanh;
    delete data.sp_hinhanh_old;
    await db.query(
      "UPDATE san_pham SET ? WHERE sp_id = ?",
      [data, id],
      (err, results) => {
        if (err) console.log(err);
      }
    );
    return res.status(200).send("Cập nhật thành công");
  });

  app.delete("/book/delete", async (req, res) => {
    if (!!req.body.arrID) {
      const arrID = JSON.parse(req.body.arrID);
      await Promise.all(
        arrID.map(async (e) => {
          let qr_sp = "DELETE FROM san_pham where sp_id = ?";
          await db.query(qr_sp, [e], (err, _) => {
            if (err) {
              console.log(err);
            }
          });

          let qr_ha = "DELETE FROM hinh_anh where ha_idsp = ?";
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

  app.post("/book/active", async (req, res) => {
    const { id, sp_active } = req.body;
    console.log(req.body);
    if (!id) return res.status(404).send("No content");
    const qr = "UPDATE san_pham SET sp_active = ? where sp_id  = ?";
    await db.query(qr, [sp_active, id]);
    return res.status(201).send("Cập nhật thành công!");
  });

};
