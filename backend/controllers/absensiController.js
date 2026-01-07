const db = require('../config/db');

//read data absensi
exports.getAllAbsensi = (req, res) => {
    db.query('SELECT * FROM absensi', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

//create data absensi
exports.createAbsensi = (req, res) => {
    const { nama, nim, tanggal, status } = req.body;
    const sql = 'INSERT INTO absensi (nama, nim, tanggal, status) VALUES (?, ?, ?, ?)';
    db.query(sql, [nama, nim, tanggal, status], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Data berhasil ditambah!', id: result.insertId });
    });
};

//update data absensi
exports.updateAbsensi = (req, res) => {
    const { id } = req.params;
    const { nama, nim, tanggal, status } = req.body;
    const sql = 'UPDATE absensi SET nama=?, nim=?, tanggal=?, status=? WHERE id=?';
    db.query(sql, [nama, nim, tanggal, status, id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Data berhasil diupdate!' });
    });
};

// delete data absensi
exports.deleteAbsensi = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM absensi WHERE id=?', [id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Data berhasil dihapus!' });
    });
};