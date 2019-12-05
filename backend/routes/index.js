const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.sendStatus(400);
    conn.query(`SELECT * FROM user_info`, (err, rows) => {
      if (err) return res.sendStatus(400);
      res.send({
        success : true,
        rows,
      });
    });
  });
});

router.get('/:user', (req, res) => {
  const { user } = req.params;
  req.getConnection((err, conn) => {
    if (err) return res.sendStatus(400);
    conn.query(`SELECT * FROM user_info WHERE name = '${user}'`, (err, rows) => {
      if (err) return res.sendStatus(400);
      const value = rows.length === 0 ? 0 : rows[0].value;
      res.send({
        success : true,
        value,
      });
    });
  });
});

router.post('/', (req, res) => {
  const { user, value } = req.body;
  req.getConnection((err, conn) => {
    if (err) return res.sendStatus(400);
    conn.query(`SELECT * FROM user_info WHERE name = '${user}'`, (err, rows) => {
      if (err) return res.sendStatus(400);
      if(rows.length === 0) {
        conn.query('INSERT INTO user_info(name, value) VALUES (?, ?)', [user, value], (err) => {
          if (err) return res.sendStatus(400);
          res.send({
            success : true,
          });
        });
      }
      else {
        conn.query(`UPDATE user_info SET value = value + ${value} WHERE name = '${user}'`, (err) => {
          if (err) return res.sendStatus(400);
          res.send({
            success : true,
          });
        });
      }
    });
  });
});

router.put('/', (req, res) => {
  const { user, value } = req.body;
  req.getConnection((err, conn) => {
    if (err) return res.sendStatus(400);
    conn.query(`UPDATE user_info SET value = ${value} WHERE name = '${user}'`, (err) => {
      if (err) return res.sendStatus(400);
      res.send({
        success : true,
      });
    });
  })
});

router.delete('/', (req, res) => {
  const { user } = req.body;
  req.getConnection((err, conn) => {
    if (err) return res.sendStatus(400);
    conn.query(`DELETE FROM user_info WHERE name = '${user}'`, (err) => {
      if (err) return res.sendStatus(400);
      res.send({
        success : true,
      });
    });
  });
});

module.exports = router;