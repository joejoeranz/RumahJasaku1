// toggle class active

const navbarNav = document.querySelector(".navbar-nav");
//  ketika hamburger menu di klik
   document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik diluar sidebar untuk menghilangkan nav
  const hamburger = document.querySelector ('#hamburger-menu');

 document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
  });



  //  wa admin

function kirimWA(){

let nama = document.getElementById("nama").value;
let hp = document.getElementById("hp").value;
let alamat = document.getElementById("alamat").value;
let produk = document.getElementById("produk").value;
let pembayaran = document.getElementById("pembayaran").value;
let catatan = document.getElementById("catatan").value;

let pesan = "Halo Admin,%0A%0ASaya ingin melakukan pemesanan:%0A%0A"
+ "Nama: " + nama + "%0A"
+ "No HP: " + hp + "%0A"
+ "Alamat: " + alamat + "%0A"
+ "Produk: " + produk + "%0A"
+ "Pembayaran: " + pembayaran + "%0A"
+ "Catatan: " + catatan;

let nomorAdmin = "6283852222174";

window.open("https://wa.me/6283852222174" + nomorAdmin + "?text=" + pesan, "_blank");

}