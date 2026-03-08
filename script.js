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

let text = "Halo Admin,%0A%0A"
+ "Nama: " + nama + "%0A"
+ "No HP: " + hp + "%0A"
+ "Alamat: " + alamat + "%0A"
+ "Pesan: " + pesan;

let nomorAdmin = "6283852222174";

window.open("https://wa.me/" + nomorAdmin + "?text=" + text, "_blank");

}
