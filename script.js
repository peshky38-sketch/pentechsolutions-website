const WHATSAPP_NUMBER = "254721351481";
const EMAIL_ADDRESS = "pentechsolutions2011@gmail.com";

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.querySelectorAll(".product-inquire").forEach(link => {
  link.href = whatsappLink(`Hello Pentech Solutions Limited, I would like to enquire about ${link.dataset.product}. Please share available options and prices.`);
  link.target = "_blank";
  link.rel = "noopener";
});
document.querySelectorAll(".repair-link").forEach(link => {
  link.href = whatsappLink(`Hello Pentech Solutions Limited, I would like to enquire about ${link.dataset.service}. Please advise on the next steps.`);
  link.target = "_blank";
  link.rel = "noopener";
});

document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".product-card").forEach(card => {
      card.classList.toggle("hidden", filter !== "all" && card.dataset.category !== filter);
    });
  });
});

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const subject = `Website enquiry: ${data.get("subject")}`;
  const body = [
    `Name: ${data.get("name")}`,
    `Phone: ${data.get("phone")}`,
    `Email: ${data.get("email")}`,
    `Enquiry: ${data.get("subject")}`,
    "",
    "Message:",
    data.get("message")
  ].join("\n");
  const mailto = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.getElementById("formNote").textContent = "Opening your email application with your enquiry...";
  window.location.href = mailto;
});
