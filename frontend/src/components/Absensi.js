import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Absensi = () => {
    const [absensi, setAbsensi] = useState([]);
    const [isEdit, setIsEdit] = useState(false); // Penanda apakah sedang mode edit
    const [editId, setEditId] = useState(null); // Menyimpan ID data yang diedit
    const [formData, setFormData] = useState({
        nama: '',
        nim: '',
        tanggal: '',
        status: 'Hadir'
    });

    const fetchAbsensi = async () => {
        try {
            const res = await axios.get('http://localhost:5000/absensi');
            setAbsensi(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchAbsensi();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Fungsi untuk memicu mode Edit
    const handleEdit = (item) => {
        setIsEdit(true);
        setEditId(item.id);
        // Mengisi form dengan data lama (Format tanggal disesuaikan untuk input date)
        const formattedDate = item.tanggal ? item.tanggal.split('T')[0] : '';
        setFormData({
            nama: item.nama,
            nim: item.nim,
            tanggal: formattedDate,
            status: item.status
        });
        window.scrollTo(0, 0); // Biar otomatis scroll ke atas ke arah form
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEdit) {
                // Jika sedang mode edit, panggil fungsi PUT ke backend
                await axios.put(`http://localhost:5000/absensi/${editId}`, formData);
                alert("Data Berhasil Diperbarui!");
            } else {
                // Jika tidak, panggil fungsi POST (tambah baru)
                await axios.post('http://localhost:5000/absensi', formData);
                alert("Data Berhasil Ditambahkan!");
            }
            
            // Reset Form dan State
            setFormData({ nama: '', nim: '', tanggal: '', status: 'Hadir' });
            setIsEdit(false);
            setEditId(null);
            fetchAbsensi(); // Refresh tabel
        } catch (err) {
            alert("Gagal memproses data");
        }
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Apakah yakin ingin menghapus absensi tersebut?");
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:5000/absensi/${id}`);
                alert("Data berhasil dihapus!");
                fetchAbsensi();
            } catch (err) {
                alert("Gagal menghapus data");
            }
        }
    };

    return (
        <div className="container mt-4 pb-5">
            <div className="card mb-4 shadow-sm border-0">
                <div className={`card-header text-white ${isEdit ? 'bg-warning' : 'bg-primary'}`}>
                    {isEdit ? 'Mode Edit Data Absensi' : 'Tambah Absensi Baru'}
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="row g-3">
                        <div className="col-md-3">
                            <input type="text" name="nama" className="form-control" placeholder="Nama" value={formData.nama} onChange={handleChange} required />
                        </div>
                        <div className="col-md-3">
                            <input type="text" name="nim" className="form-control" placeholder="NIM" value={formData.nim} onChange={handleChange} required />
                        </div>
                        <div className="col-md-3">
                            <input type="date" name="tanggal" className="form-control" value={formData.tanggal} onChange={handleChange} required />
                        </div>
                        <div className="col-md-2">
                            <select name="status" className="form-select" value={formData.status} onChange={handleChange}>
                                <option value="Hadir">Hadir</option>
                                <option value="Izin">Izin</option>
                                <option value="Sakit">Sakit</option>
                                <option value="Alpha">Alpa</option>
                            </select>
                        </div>
                        <div className="col-md-1">
                            <button type="submit" className={`btn w-110 ${isEdit ? 'btn-warning' : 'btn-success'}`}>
                                {isEdit ? 'Update' : 'Save'}
                            </button>
                        </div>
                    </form>
                    {isEdit && (
                        <button className="btn btn-link btn-sm mt-2 text-secondary" onClick={() => {
                            setIsEdit(false);
                            setFormData({ nama: '', nim: '', tanggal: '', status: 'Hadir' });
                        }}>Batal Edit</button>
                    )}
                </div>
            </div>

            <h2 className="text-center mb-4">Daftar Absensi Mahasiswa</h2>
            <div className="table-responsive shadow-sm bg-white p-3 rounded">
                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Nama</th>
                            <th>NIM</th>
                            <th>Tanggal</th>
                            <th>Status</th>
                            <th className="text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {absensi.map((item) => (
                            <tr key={item.id}>
                                <td>{item.nama}</td>
                                <td>{item.nim}</td>
                                <td>{new Date(item.tanggal).toLocaleDateString('id-ID')}</td>
                                <td>
                                    <span className={`badge ${item.status === 'Hadir' ? 'bg-success' : 'bg-warning'}`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="text-center">
                                    <button className="btn btn-outline-primary btn-sm me-2" onClick={() => handleEdit(item)}>Edit</button>
                                    <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(item.id)}>Hapus</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Absensi;