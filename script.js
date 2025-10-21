// Contact form handling
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (formMessage) {
      formMessage.innerText = "✅ Thank you, your message has been sent!";
    }
    contactForm.reset();
  });
}

// Fade-in on scroll
const faders = document.querySelectorAll(".fade-in");

if (faders.length > 0) {
  const appearOptions = { threshold: 0.2 };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));
}
