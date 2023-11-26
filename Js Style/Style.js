// &#x1f319 &#x2600

const listElement = document.getElementById("nav");
const menuIcon = document.querySelector(".menu-icon");

const toggleList = () => {
  menuIcon.classList.toggle("open");

  if (listElement.style.display === "block") {
    listElement.style.display = "none";
  } else {
    listElement.style.display = "block";
  }
}

const hideNavOnScroll = () => {
  listElement.style.display = "none";
  menuIcon.classList.remove("open");
}

document.body.addEventListener('click', function(event) {

  if (!event.target.closest('.Navsection') && !event.target.closest('.dropdown-content a')) {
    hideNavOnScroll();
  }
});

const dropdownLinks = document.querySelectorAll('.dropdown-content a');
dropdownLinks.forEach(link => {
  link.addEventListener('click', () => {

    hideNavOnScroll();
  });
});

window.addEventListener('scroll', hideNavOnScroll);


const listDropdown1 = document.getElementById("dropdown1B");
const listDropdown2 = document.getElementById("dropdown2B");
const listDropdown3 = document.getElementById("dropdown3B");

function toggleDropdown1(){

  if (listDropdown2) {
    listDropdown2.style.display = "none";
  }

  if (listDropdown3) {
    listDropdown3.style.display = "none";
  }
  
  if (listDropdown1.style.display === "block") {
    listDropdown1.style.display = "none";
  } else {
    listDropdown1.style.display = "block";
  }
}

function toggleDropdown2(){

  if (listDropdown1) {
    listDropdown1.style.display = "none";
  }

  if (listDropdown3) {
    listDropdown3.style.display = "none";
  }

  if (listDropdown2.style.display === "block") {
    listDropdown2.style.display = "none";
  } else {
    listDropdown2.style.display = "block";
  }
}

function toggleDropdown3(){

  if (listDropdown1) {
    listDropdown1.style.display = "none";
  }

  if (listDropdown2) {
    listDropdown2.style.display = "none";
  }

  if (listDropdown3.style.display === "block") {
    listDropdown3.style.display = "none";
  } else {
    listDropdown3.style.display = "block";
  }
}


function toggleMode() {

  let originalContent = " 🌙";

    const body = document.body;
    body.classList.toggle('dark_mode');
    body.classList.toggle('light_mode');

  let darkMode = document.getElementById("dark_mode");
  let darkModeN = document.getElementById("dark_mode1");

  if (darkMode.innerHTML === originalContent) {
    darkModeN.innerHTML = "<span class='light_mode--btn'>☀️</span>";
    darkMode.innerHTML = "<span class='light_mode--btn'>☀️</span>";
  } else {
    darkModeN.innerHTML = originalContent;
    darkMode.innerHTML = originalContent;
  }
};