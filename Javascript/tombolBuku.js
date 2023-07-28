const mainElement = document.querySelector(".main"); //base grid
const kontenHideElement = document.querySelector(".kontenHide");
const menuBarHideElement = document.querySelector(".menuBarHide");
const tombolMenu = document.querySelector(".tombol"); //menuTombol
const blender = document.querySelector(".blender"); //buku blender
const unity = document.querySelector(".sampah"); //buku unity

let gridColumns = "1fr 0fr"; // Inisialisasi gridColumns dengan nilai awal

//========================================================================================================================
//tombol menu
tombolMenu.addEventListener("click", function () {
  UbahGridColumn();
  if (window.getComputedStyle(menuBarHideElement).display === "none") {
    menuBarHideElement.style.display = "block";
    kontenHideElement.style.display = "none";
  } else {
    menuBarHideElement.style.display = "none";
    kontenHideElement.style.display = "block";
  }
});
//========================================================================================================================
//buku
blender.addEventListener("click", function () {
  UbahGridColumn();
  BukaTutup();
});

unity.addEventListener("click", function () {
  UbahGridColumn();
  BukaTutup();
});

//==> FUNCTION
//========================================================================================================================
//untuk buka tutup
function BukaTutup() {
  if (window.getComputedStyle(menuBarHideElement).display === "block") {
    menuBarHideElement.style.display = "none";
    kontenHideElement.style.display = "block";
  }
}

//========================================================================================================================
//mengganti grid css
function UbahGridColumn() {
  // Mengubah nilai gridColumns
  gridColumns = gridColumns === "1fr 0fr" ? "0fr 1fr" : "1fr 0fr";
  mainElement.style.gridTemplateColumns = gridColumns;
}

//========================================================================================================================
//untuk mencari konten
function searchButton() {
  const searchInput = document.getElementById("searchInput").value;
  const buttons = document.querySelectorAll(".tombolC button");

  buttons.forEach((button) => {
    if (button.textContent.toLowerCase().includes(searchInput.toLowerCase())) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
}