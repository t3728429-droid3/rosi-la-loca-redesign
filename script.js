const elements = document.querySelectorAll(
  ".card, .testimonial, .gallery-grid img, .features h2, .gallery h2, .testimonials h2"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.15
});

elements.forEach(el => el.classList.add("reveal"));
elements.forEach(el => observer.observe(el));

document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;

    const message = `🍽 NEW RESERVATION REQUEST
-----------------------
Name: ${name}
Email: ${email}
Phone: ${phone}
Date: ${date}
Time: ${time}
Guests: ${guests}`;

    const whatsappNumber = "34600111222";

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
});