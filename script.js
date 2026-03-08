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

let nama = document.getElementById("name").value;
let hp = document.getElementById("phone").value;
let alamat = document.getElementById("home").value;
let pesan = document.getElementById("pesan").value;

let text = `Halo Admin,

Nama: ${nama}
No HP: ${hp}
Alamat: ${alamat}
Pesan: ${pesan}`;

let nomorAdmin = "6283852222174";

let url = "https://wa.me/" + nomorAdmin + "?text=" + encodeURIComponent(text);

window.open(url, "_blank");

}


