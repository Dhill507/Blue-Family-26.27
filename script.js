/*
  BLUE COVENANT FAMILY WEBSITE
  Administrator-friendly update area:
  Edit the arrays below to update announcements, calendar events, and gallery cards.
*/

const siteData = {
  announcements: [
    {
      date: "May 2027",
      title: "100 Year Centennial Celebration Planning",
      body: "Family committees are preparing worship, banquet, youth, hospitality, history, media, and legacy archive experiences."
    },
    {
      date: "Family Archive",
      title: "Submit Elder Stories & Photos",
      body: "Gather old photos, written memories, testimonies, family documents, and oral history recordings for the legacy section."
    },
    {
      date: "Next Generation",
      title: "Youth Voices Matter",
      body: "Young family members are invited to submit creative ideas, video messages, art, music, and reflections for the website."
    }
  ],
  events: [
    { date: "Fall 2026", title: "Centennial Committee Kickoff", body: "Planning teams meet to organize celebration programming, registration, and communications." },
    { date: "Winter 2026", title: "Family History Collection Drive", body: "Collect photographs, family records, elder interviews, testimonies, and archival materials." },
    { date: "May 2027", title: "Blue Covenant Family 100 Year Centennial", body: "A weekend of faith, fellowship, remembrance, celebration, and vision for the next century." }
  ],
  gallery: [
    {
      title: "50th Wedding Anniversary",
      caption: "A treasured anniversary celebration from the Blue Covenant Family archive.",
      image: "assets/family-photos/anniversary-50th.webp"
    },
    {
      title: "Patriarch Tribute",
      caption: "Honoring Elder John Henry Blue and the spiritual foundation of the family.",
      image: "assets/family-photos/patriarch-tribute.webp"
    },
    {
      title: "Elder John Henry",
      caption: "A seated portrait preserving the presence and dignity of family leadership.",
      image: "assets/family-photos/elder-portrait-seated.webp"
    },
    {
      title: "Ministry Portrait",
      caption: "Faith, service, and leadership represented through the family archive.",
      image: "assets/family-photos/elder-ministry-portrait.webp"
    },
    {
      title: "First Four Elders",
      caption: "A family memory honoring connection across generations.",
      image: "assets/family-photos/first-four-elders.webp"
    },
    {
      title: "Jeanetta Graduation",
      caption: "Celebrating education, achievement, and generational promise.",
      image: "assets/family-photos/jeanetta-graduation.webp"
    },
    {
      title: "Jeanetta Family Memory",
      caption: "A warm family moment preserved for future generations.",
      image: "assets/family-photos/jeanetta-family-memory.webp"
    },
    {
      title: "John and Lula Bell",
      caption: "Honoring the family foundation and the covenant legacy.",
      image: "assets/family-photos/founders-together.webp"
    },
    {
      title: "Mother Lula Bell",
      caption: "A classic matriarch portrait from the family archive.",
      image: "assets/family-photos/matriarch-portrait-classic.webp"
    },
    {
      title: "Mother Lula Bell Portrait",
      caption: "Grace, wisdom, and legacy captured in a treasured family image.",
      image: "assets/family-photos/matriarch-hat-portrait.webp"
    },
    {
      title: "Mother Lula Youth",
      caption: "A youthful portrait from before the family legacy continued to grow.",
      image: "assets/family-photos/matriarch-youth.webp"
    },
    {
      title: "Young Elder John Henry",
      caption: "An early portrait honoring the family patriarch.",
      image: "assets/family-photos/young-patriarch.webp"
    },
    {
      title: "Young Evelyn",
      caption: "A graduation portrait celebrating family achievement.",
      image: "assets/family-photos/young-evelyn-graduation.webp"
    },
    {
      title: "Young Georgia Mae",
      caption: "A family portrait preserved as part of the Blue Covenant story.",
      image: "assets/family-photos/young-georgia-mae.webp"
    }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  renderAnnouncements();
  renderCalendar();
  renderGallery();
  setupPasswordArea();
  setupForms();
  setupCountdown();
  setupAnimations();
});

function setupNavigation() {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    const open = navLinks.classList.contains("show");
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    menuToggle.textContent = open ? "×" : "☰";
  });
}

function renderAnnouncements() {
  const list = document.getElementById("announcementList");
  if (!list) return;
  list.innerHTML = siteData.announcements.map(item => `
    <article>
      <time>${item.date}</time>
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </article>
  `).join("");
}

function renderCalendar() {
  const list = document.getElementById("calendarList");
  if (!list) return;
  list.innerHTML = siteData.events.map(item => `
    <article>
      <time>${item.date}</time>
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </article>
  `).join("");
}

function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;
  grid.innerHTML = siteData.gallery.map(item => `
    <article class="gallery-card">
      ${item.image ? `<img src="${item.image}" alt="${item.title}" />` : ""}
      <div>
        <h3>${item.title}</h3>
        <p>${item.caption}</p>
      </div>
    </article>
  `).join("");
}

function setupPasswordArea() {
  const input = document.getElementById("familyPassword");
  const btn = document.getElementById("unlockBtn");
  const content = document.getElementById("protectedContent");
  const message = document.getElementById("passwordMessage");
  if (!input || !btn || !content) return;

  btn.addEventListener("click", () => {
    const correctPassword = "bluefamily100";
    if (input.value.trim() === correctPassword) {
      content.classList.add("show");
      message.textContent = "Access granted. Welcome, family.";
      if (window.gsap) gsap.fromTo(content, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: .6 });
    } else {
      content.classList.remove("show");
      message.textContent = "Incorrect password. Please try again.";
    }
  });
}

function setupForms() {
  document.querySelectorAll(".contact-form").forEach(form => {
    if (form.dataset.liveMail === "true") return;

    form.addEventListener("submit", event => {
      event.preventDefault();
      const message = form.querySelector(".form-message");
      if (message) message.textContent = "Thank you. This demo form is ready to connect to your preferred form service.";
      form.reset();
    });
  });
}

function setupCountdown() {
  const el = document.getElementById("countdown");
  const card = document.querySelector(".countdown-card");
  const orbitStage = document.getElementById("countdownOrbitStage");
  if (!el) return;

  const target = new Date(2027, 4, 14, 0, 0, 0).getTime();
  const units = ["Days", "Hours", "Minutes", "Seconds"];
  let lastValues = {};

  el.innerHTML = units.map(unit => `
    <div class="countdown-unit" data-unit="${unit}">
      <span class="countdown-shine"></span>
      <strong class="countdown-number">0</strong>
      <span class="countdown-label">${unit}</span>
    </div>
  `).join("");

  const unitCards = Array.from(el.querySelectorAll(".countdown-unit"));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setValue(label, value) {
    const unit = el.querySelector(`[data-unit="${label}"]`);
    const number = unit?.querySelector(".countdown-number");
    if (!number) return;

    if (lastValues[label] !== value) {
      number.textContent = value;
      lastValues[label] = value;

      if (window.gsap && !reducedMotion) {
        gsap.fromTo(number,
          { rotateX: -92, y: -10, opacity: .35, transformOrigin: "50% 50% -24px" },
          { rotateX: 0, y: 0, opacity: 1, duration: .58, ease: "back.out(1.9)" }
        );
        gsap.fromTo(unit,
          { scale: 1.08 },
          { scale: 1, duration: .55, ease: "power3.out" }
        );
      }
    }
  }

  function update() {
    const distance = Math.max(target - Date.now(), 0);
    const values = {
      Days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      Hours: Math.floor((distance / (1000 * 60 * 60)) % 24).toString().padStart(2, "0"),
      Minutes: Math.floor((distance / (1000 * 60)) % 60).toString().padStart(2, "0"),
      Seconds: Math.floor((distance / 1000) % 60).toString().padStart(2, "0")
    };

    Object.entries(values).forEach(([label, value]) => setValue(label, value));
  }

  function placeOrbitingCards(rotation = 0) {
    if (!orbitStage || !unitCards.length) return;
    const rect = orbitStage.getBoundingClientRect();
    const radiusX = Math.min(rect.width * .39, 230);
    const radiusY = Math.min(rect.height * .31, 155);

    unitCards.forEach((unit, index) => {
      const angle = rotation + index * (Math.PI * 2 / unitCards.length);
      const x = Math.cos(angle) * radiusX;
      const y = Math.sin(angle) * radiusY;
      const z = Math.sin(angle) * 145;
      const scale = .84 + ((Math.sin(angle) + 1) * .15);
      const opacity = .72 + ((Math.sin(angle) + 1) * .14);

      gsap.set(unit, {
        x,
        y,
        z,
        scale,
        opacity,
        rotationY: Math.cos(angle) * -20,
        rotationX: Math.sin(angle) * 8,
        zIndex: Math.round(100 + z)
      });
    });
  }

  if (window.gsap) {
    gsap.set(unitCards, { transformPerspective: 1600, transformOrigin: "50% 50% -40px" });

    if (orbitStage && !reducedMotion) {
      const orbit = { rotation: 0 };
      placeOrbitingCards(orbit.rotation);

      gsap.from(unitCards, {
        scrollTrigger: { trigger: orbitStage, start: "top 82%" },
        opacity: 0,
        scale: .35,
        z: -220,
        rotateX: 75,
        stagger: .14,
        duration: 1.15,
        ease: "back.out(1.7)",
        onUpdate: () => placeOrbitingCards(orbit.rotation)
      });

      gsap.to(orbit, {
        rotation: Math.PI * 2,
        duration: 18,
        repeat: -1,
        ease: "none",
        onUpdate: () => placeOrbitingCards(orbit.rotation)
      });

      gsap.set(".seal-core", { xPercent: -50, yPercent: -50, z: 80, transformOrigin: "50% 50%" });
      gsap.to(".seal-core", {
        rotateY: 360,
        duration: 28,
        repeat: -1,
        ease: "none"
      });

      gsap.to(".seal-halo", {
        scale: 1.18,
        opacity: .65,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    } else {
      gsap.set(unitCards, { clearProps: "x,y,z,scale,opacity,rotationX,rotationY,zIndex" });
    }

    gsap.to(".countdown-shine", {
      xPercent: 260,
      duration: 2.4,
      ease: "power2.inOut",
      repeat: -1,
      repeatDelay: 1.2,
      stagger: .25
    });
  }

  if (card && window.gsap && !reducedMotion) {
    card.addEventListener("mousemove", event => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      gsap.to(card, { rotateY: x * 8, rotateX: y * -6, duration: .45, ease: "power2.out" });
      gsap.to(".seal-core", { xPercent: -50 + x * 3, yPercent: -50 + y * 3, duration: .45, ease: "power2.out" });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, { rotateY: 0, rotateX: 0, duration: .7, ease: "elastic.out(1, .65)" });
      gsap.to(".seal-core", { xPercent: -50, yPercent: -50, duration: .7, ease: "elastic.out(1, .65)" });
    });
  }

  update();
  setInterval(update, 1000);
  window.addEventListener("resize", () => {
    if (window.gsap && orbitStage && !reducedMotion) placeOrbitingCards(0);
  });
}

function setupAnimations() {
  if (!window.gsap) return;
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".site-header", { y: -40, opacity: 0, duration: .8, ease: "power3.out" });
  gsap.from(".hero-copy > *", { y: 34, opacity: 0, duration: .85, stagger: .12, ease: "power3.out", delay: .15 });
  gsap.from(".hero-seal", { scale: .76, opacity: 0, rotate: -8, duration: 1.25, ease: "elastic.out(1, .75)", delay: .25 });
  gsap.to(".hero-seal", { y: -14, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
  gsap.to(".hero-glow", { scale: 1.18, opacity: .7, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
  gsap.from(".coming-seal", { scale: .7, opacity: 0, rotate: -10, duration: 1.1, ease: "elastic.out(1, .7)", delay: .15 });
  gsap.to(".coming-seal", { y: -10, rotateY: 360, duration: 8, repeat: -1, yoyo: true, ease: "sine.inOut" });
  gsap.to(".coming-seal-glow", { scale: 1.18, opacity: .72, duration: 2.6, repeat: -1, yoyo: true, ease: "sine.inOut" });


  document.querySelectorAll(".reveal").forEach(el => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: "top 84%" },
      y: 44,
      opacity: 0,
      duration: .85,
      ease: "power3.out"
    });
  });

  gsap.from(".legacy-photo-card", {
    scrollTrigger: { trigger: ".legacy-photo-band", start: "top 80%" },
    y: 55,
    opacity: 0,
    rotateY: -8,
    duration: .95,
    stagger: .14,
    ease: "power3.out"
  });

  gsap.from(".founders-collage img", {
    scrollTrigger: { trigger: ".founders-collage", start: "top 78%" },
    scale: .82,
    opacity: 0,
    y: 40,
    rotate: -3,
    duration: 1,
    stagger: .16,
    ease: "back.out(1.4)"
  });

  gsap.from(".memory-tile", {
    scrollTrigger: { trigger: ".memory-wall-grid", start: "top 82%" },
    y: 45,
    opacity: 0,
    scale: .94,
    duration: .85,
    stagger: .08,
    ease: "power3.out"
  });

  document.querySelectorAll(".feature-card, .gallery-card, .timeline-item, .legacy-photo-card, .memory-tile").forEach(card => {
    card.addEventListener("mouseenter", () => gsap.to(card, { y: -8, duration: .25, ease: "power2.out" }));
    card.addEventListener("mouseleave", () => gsap.to(card, { y: 0, duration: .25, ease: "power2.out" }));
  });
}
