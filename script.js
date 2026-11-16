
// ==========================================
// PENTECH SOLUTIONS LIMITED
// Website JavaScript
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // 1. WHATSAPP BUSINESS NUMBER
    const whatsappNumber = "254721351481";


    // 2. WHATSAPP LINK GENERATOR
    function createWhatsAppLink(message) {
        return "https://wa.me/" + whatsappNumber +
            "?text=" + encodeURIComponent(message);
    }


    // 3. AUTOMATIC COPYRIGHT YEAR
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // 4. MOBILE NAVIGATION MENU
    const menuButton = document.getElementById("hamburger");
    const navigation = document.getElementById("nav");

    if (menuButton && navigation) {

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.addEventListener("click", function () {

            navigation.classList.toggle("open");

            const menuIsOpen = navigation.classList.contains("open");

            menuButton.textContent = menuIsOpen ? "×" : "☰";

            menuButton.setAttribute(
                "aria-expanded",
                menuIsOpen ? "true" : "false"
            );

        });


        // Close menu when a navigation link is clicked
        const navigationLinks = navigation.querySelectorAll("a");

        navigationLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("open");

                menuButton.textContent = "☰";

                menuButton.setAttribute("aria-expanded", "false");

            });

        });

    }


    // 5. PRODUCT WHATSAPP ENQUIRIES
    const productButtons = document.querySelectorAll(".product-wa");

    productButtons.forEach(function (button) {

        const productName = button.dataset.product || "your products";

        const message =
            "Hello Pentech Solutions Limited! " +
            "I am interested in " + productName + ". " +
            "Please share the available options, specifications and prices.";

        button.href = createWhatsAppLink(message);

        button.target = "_blank";

        button.rel = "noopener noreferrer";

    });


    // 6. SERVICE WHATSAPP ENQUIRIES
    const serviceButtons = document.querySelectorAll(".service-link");

    serviceButtons.forEach(function (button) {

        const serviceName = button.dataset.service || "your services";

        const message =
            "Hello Pentech Solutions Limited! " +
            "I would like to enquire about " + serviceName + ". " +
            "Please share more information and your charges.";

        button.href = createWhatsAppLink(message);

        button.target = "_blank";

        button.rel = "noopener noreferrer";

    });


    // 7. GENERAL WHATSAPP BUTTONS
    const generalWhatsAppButtons = document.querySelectorAll(".whatsapp-link");

    generalWhatsAppButtons.forEach(function (button) {

        if (!button.href || button.getAttribute("href") === "#") {

            button.href = createWhatsAppLink(
                "Hello Pentech Solutions Limited! I would like to make an enquiry."
            );

        }

        button.target = "_blank";

        button.rel = "noopener noreferrer";

    });


    // 8. CONTACT FORM
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name")?.value.trim() || "";
            const email = document.getElementById("email")?.value.trim() || "";
            const phone = document.getElementById("phone")?.value.trim() || "";
            const message = document.getElementById("message")?.value.trim() || "";

            if (!name || !email || !message) {

                alert("Please fill in your name, email and message.");

                return;

            }

            const subject = encodeURIComponent(
                "Website Enquiry from " + name
            );

            const body = encodeURIComponent(
                "Hello Pentech Solutions Limited,\n\n" +
                "Name: " + name + "\n" +
                "Email: " + email + "\n" +
                "Phone: " + phone + "\n\n" +
                "Message:\n" + message
            );

            window.location.href =
                "mailto:pentechsolutions2011@gmail.com" +
                "?subject=" + subject +
                "&body=" + body;

        });

    }


    // 9. SMOOTH SCROLLING
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const targetElement = document.querySelector(targetId);

            if (targetElement) {

                event.preventDefault();

                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // 10. BACK TO TOP BUTTON
    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    // 11. WEBSITE READY
    console.log("Pentech Solutions website loaded successfully!");

});
