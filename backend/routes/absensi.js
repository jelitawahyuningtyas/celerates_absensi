const express = require('express');
const router = express.Router();
const absensiController = require('../controllers/absensiController');

// Daftar endpoint API
router.get('/', absensiController.getAllAbsensi);       // GET /absensi
router.post('/', absensiController.createAbsensi);     // POST /absensi
router.put('/:id', absensiController.updateAbsensi);    // PUT /absensi/:id
router.delete('/:id', absensiController.deleteAbsensi); // DELETE /absensi/:id

/*router.get('/test', (req, res) => {
  res.json({ message: 'Route /absensi/test OK' });
});*/

module.exports = router;