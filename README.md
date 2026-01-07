# Sistem Absensi Mahasiswa 
Aplikasi berbasis web untuk manajemen absensi mahasiswa secara real-time. Aplikasi ini dibangun menggunakan MySQL sebagai database untuk pengelolaan data. Sistem absensi yang dibangun menggunakan framework React.js untuk interface yang interaktif serta menggunakan Node.js dan Express.js sebagai server pengolah data.

## Arsitektur Teknologi 
- **Frontend**: React.js
- **Styling**: Bootstrap
- **Backend**: Node.js & Express.js
- **Database**: MySQL
- **HTTP Client**: Axios

##  Fitur Utama (CRUD)
Aplikasi ini dilengkapi dengan fitur CRUD yakni:
1.  **Create**: Menambahkan data absensi (Nama, NIM, Tanggal, dan Status Kehadiran).
2.  **Read**: Menampilkan daftar seluruh absensi mahasiswa.
3.  **Update (Ubah)**: Memperbarui data absensi jika terdapat kesalahan input tanpa menghapus data lama.
4.  **Delete (Hapus)**: Menghapus data absensi dari sistem secara permanen.

## Cara Instalasi & Menjalankan

### 1. Membuat Database
- Mengkoneksikan MySQL di XAMPP.
- Mengimport file `absensi.sql` melalui PHPMyAdmin untuk membuat database `db_absensi`.
### 2. Konfigurasi Backend
- Membuka terminal di folder `backend`.
- Menjalankan `npm install`.
- Menjalankan server dengan `node app.js`.

### 3. Konfigurasi Frontend
- Membuka terminal di folder `frontend`.
- Menjalankan `npm install`.
- Menajalankan aplikasi `npm start`.
- Jika berhasil aplikasi akan berjalan di browser localhost `http://localhost:3000`.
