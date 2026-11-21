const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuBtn.textContent = nav.classList.contains("active") ? "✕" : "☰";
});

// Менюдан бөлүм тандалганда жабылат
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuBtn.textContent = "☰";
  });
});

// Учурдагы жыл
document.getElementById("year").textContent =
  new Date().getFullYear();

// WhatsApp байланышы
const whatsappBtn = document.getElementById("whatsappBtn");

// Бул жерге WhatsApp номериңди жаз.
// Өлкө коду менен, + белгисиз.
const phone = "996504553304";

const message = encodeURIComponent(
  "Саламатсызбы! NOVA WEB аркылуу сайтка заказ бергим келет."
);

whatsappBtn.href =
  `https://wa.me/${phone}?text=${message}`;

whatsappBtn.target = "_blank";
whatsappBtn.rel = "noopener noreferrer";