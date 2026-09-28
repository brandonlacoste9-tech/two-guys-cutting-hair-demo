/* EN-only i18n for Two Guys Cutting Hair demo */
const i18n = {
  en: {
    "nav.services": "Services",
    "nav.why": "Why us",
    "nav.gallery": "Gallery",
    "nav.faq": "FAQ",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.call": "(504) 239-2397",
    "hero.kicker": "New Orleans, Louisiana · Precision barbers · Text to book",
    "hero.title": "A $20 cut that<br>looks like $50.",
    "hero.sub": "Rated 4.7 out of 5 from 155 reviews: precision cuts, fades, pixies and mullets by Adikus and Trent — text to book.",
    "hero.cta1": "Call (504) 239-2397",
    "hero.cta2": "See services",
    "trust.t1t": "Text to book",
    "trust.t1d": "Message (504) 239-2397 for appointments",
    "trust.t2t": "Precision cuts",
    "trust.t2d": "Scissors, clippers &amp; detail",
    "trust.t3t": "Fair prices",
    "trust.t3d": "$20 cuts, zero fuss",
    "stats.s1n": "4.7\u2605",
    "stats.s1l": "from 155 reviews",
    "stats.s2n": "New Orleans",
    "stats.s2l": "&amp; the Bywater",
    "stats.s3n": "2 barbers",
    "stats.s3l": "Adikus &amp; Trent",
    "stats.s4n": "Text booking",
    "stats.s4l": "fast appointments",
    "services.kicker": "What we do",
    "services.title": "Cuts — precise &amp; affordable",
    "services.s1t": "Precision haircuts",
    "services.s1d": "Scissor cuts shaped exactly how you want — classic or creative.",
    "services.s2t": "Skin fades",
    "services.s2d": "Crisp, clean fades blended smooth from skin to length.",
    "services.s3t": "Mullets",
    "services.s3d": "Business up front, party in the back — done right.",
    "services.s4t": "Layered looks",
    "services.s4d": "Movement and shape with expertly layered cuts.",
    "services.s5t": "Pixie cuts",
    "services.s5d": "Short, sharp pixie cuts with clean lines and style.",
    "services.s6t": "Beard trimming",
    "services.s6d": "Beard trims and shaping to finish the look.",
    "why.kicker": "Why choose us",
    "why.title": "New Orleans' no-fuss barbers",
    "why.intro": "Two Guys Cutting Hair keeps it simple: great cuts, honest prices, zero pretension. Adikus and Trent listen, then deliver — that is why regulars keep coming back.",
    "why.l1t": "Text-to-book ease",
    "why.l1d": "For appointments, text Adikus (215) 519-5030 or Trent (504) 239-2397.",
    "why.l2t": "Fair $20 prices",
    "why.l2d": "Professional results at a price that does not hurt.",
    "why.l3t": "Listened-to cuts",
    "why.l3d": "They hear what you want and shape it to your head and your style.",
    "why.l4t": "Friendly, relaxed vibe",
    "why.l4d": "A cozy Bywater spot where you are treated like a regular.",
    "gallery.kicker": "On the job",
    "gallery.title": "Work we are proud of",
    "gallery.c1": "Clean fades, sharp lines",
    "gallery.c2": "Cuts for every style",
    "reviews.kicker": "Word on the street",
    "reviews.title": "Rated 4.7 out of 5 by New Orleans customers",
    "reviews.more": "See what clients say about us — 4.7 stars from 155 reviews",
    "faq.kicker": "Good to know",
    "faq.title": "Frequently asked questions",
    "faq.q1": "How do I book?",
    "faq.a1": "Text Adikus at (215) 519-5030 or Trent at (504) 239-2397 to set up your appointment.",
    "faq.q2": "How much is a cut?",
    "faq.a2": "A full cut runs about $20 — professional results at a fair price.",
    "faq.q3": "Do you cut women's hair too?",
    "faq.a3": "Yes — pixies, layered looks and everything in between.",
    "faq.q4": "Do you take walk-ins?",
    "faq.a4": "Text first to check the chair — appointments keep things moving.",
    "contact.kicker": "Come see us",
    "contact.title": "Get in touch",
    "contact.addr": "Address",
    "contact.phone": "Phone",
    "contact.hours": "Hours",
    "contact.hoursVal": "Monday – Tuesday<br>12:00 PM – 7:00 PM<br><br>Wednesday – Thursday<br>10:00 AM – 7:00 PM<br><br>Friday<br>12:00 PM – 6:00 PM<br><br>Saturday<br>11:00 AM – 3:00 PM<br><br>Sunday<br>Closed",
    "contact.cta": "Call now",
    "footer.tag": "Barbershop · New Orleans, Louisiana"
  }
};

function applyLang(lang) {
  const dict = i18n[lang] || i18n.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang("en");

  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("mainNav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }, { passive: true });
});
