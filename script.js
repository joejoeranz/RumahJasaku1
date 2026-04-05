// toggle class active untuk hamburger menu

const navbarNav = document.querySelector(".navbar-nav");
//  ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

});
// toggel untuk search form active
  
const searchForm = document.querySelector('.search-form');
  const searchBox = document.querySelector('#search-box');
  const semuaMenu = document.querySelectorAll('.menu-card');
const searchBtn = document.querySelector('#search-button');



// Fungsi Pencarian
searchBox.addEventListener('input', function () {
  // .trim() untuk menghapus spasi tak sengaja di awal/akhir ketikan
  const kataKunci = searchBox.value.toLowerCase().trim();

  semuaMenu.forEach((item) => {
    // Ambil teks dari h3
    const judulElement = item.querySelector('.menu-card-title');
    
    if (judulElement) {
      // Kita bersihkan tanda hubung (-) agar pencarian lebih akurat
      // Contoh: "- Teman Main -" menjadi "teman main"
      const judulJasa = judulElement.innerText.toLowerCase().replace(/-/g, '').trim();

      // Cek apakah kata kunci ada di dalam judul
      if (judulJasa.includes(kataKunci)) {
        item.style.display = 'block'; // Tampilkan
      } else {
        item.style.display = 'none';  // Sembunyikan
      }
    }
  });
});
// --- FUNGSI ISI OTOMATIS (SAAT KLIK KIRIM PESAN) ---
function isiOtomatis(namaJasa) {
  // Tangkap elemen input pesan di form kontak
  const inputPesan = document.getElementById('pesan');
  
  if (inputPesan) {
    // Masukkan teks otomatis
    inputPesan.value = "Halo, saya ingin memesan jasa: " + namaJasa;
    
    // Berikan efek fokus (kursor aktif di sana)
    inputPesan.focus();
  }
}
searchBox.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault(); // Mencegah form reload
    document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
  }
});
searchBtn.onclick = (e) => {
  searchForm.classList.toggle('active');
  
  // Jika aktif, otomatis kursor ada di dalam kotak pencarian
  if (searchForm.classList.contains('active')) {
    searchBox.focus();
  }


  e.preventDefault(); // Mencegah halaman refresh/loncat ke atas
};
 // 2. Fungsi KLIK DI MANA SAJA (Klik di luar elemen)
document.addEventListener('click', function (e) {
  // Jika klik dilakukan di luar area tombol DAN di luar area form
  if (!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }
});

// fungsi search
// Fungsi Pencarian Menu
 
//  untuk menghilangkan 
//  wa admin/
function kirimWA() {
  // 1. Mengambil data dari input (Pastikan ID sesuai HTML kamu)
  const nama = document.getElementById("name").value;
  const hp = document.getElementById("phone").value;
  const alamat = document.getElementById("alamat").value; // Ini harus 'home'
  const pesan = document.getElementById("pesan").value;

  // 2. Nomor WhatsApp Admin (Gunakan format internasional tanpa + atau spasi)
  const nomorAdmin = "6283852222174";

  // 3. Menyusun Pesan (Menggunakan Template Literals agar rapi)
  const text = `Halo Admin,%0A%0A` +
               `*Data Pesanan Baru*%0A` +
               `---------------------------%0A` +
               `*Nama:* ${nama}%0A` +
               `*No HP:* ${hp}%0A` +
               `*Alamat:* ${alamat}%0A` +
               `*Pesan:* ${pesan}%0A` +
               `---------------------------`;

  // 4. Membuka WhatsApp di Tab Baru
  window.open(`https://wa.me/${nomorAdmin}?text=${text}`, "_blank");
}
