/* White Label engine: all business-specific values come from config.js */
(() => {
  const c = window.CONFIG || {};
  const esc = (value) => String(value ?? "");

  document.documentElement.style.setProperty("--primary", c.primaryColor || "#c88352");
  document.documentElement.style.setProperty("--hero-image", `url("${c.heroImage || ""}")`);

  document.title = `${esc(c.brandName)} — Prémium kutyakozmetika`;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", c.primaryColor || "#27322b");

  document.querySelectorAll("[data-brand]").forEach(el => el.textContent = esc(c.brandName));
  document.querySelectorAll("[data-phone]").forEach(el => el.textContent = esc(c.phone));
  document.querySelectorAll("[data-address]").forEach(el => el.textContent = esc(c.address));

  const setLink = (id, href, text) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.href = href;
    el.textContent = text;
  };

  const phoneHref = `tel:${esc(c.phone).replace(/[^\d+]/g, "")}`;
  const emailHref = `mailto:${esc(c.email)}`;
  setLink("bookingEmail", emailHref, c.email);
  setLink("contactPhone", phoneHref, c.phone);
  setLink("footerPhone", phoneHref, c.phone);
  setLink("footerEmail", emailHref, c.email);

  const instagram = String(c.instagram || "").trim();
  const instagramLink = document.getElementById("instagramLink");
  if (instagramLink) {
    instagramLink.href = instagram || "#";
    instagramLink.textContent = instagram.replace(/^https?:\/\/(www\.)?/i, "").replace(/\/$/, "") || "Instagram";
  }

  const address = encodeURIComponent(c.address || "");
  setLink("mapLink", `https://www.google.com/maps/search/?api=1&query=${address}`, "Útvonaltervezés →");

  const hero = document.getElementById("heroBg");
  if (hero && c.heroImage) hero.style.backgroundImage = `url("${c.heroImage}")`;
  const splitPhoto = document.getElementById("splitPhoto");
  if (splitPhoto && c.heroImage) splitPhoto.style.backgroundImage = `url("${c.heroImage}")`;

  const serviceIcons = ["✂", "◌", "⌁", "♡", "✦", "✧"];
  const servicesGrid = document.getElementById("servicesGrid");
  const serviceSelect = document.getElementById("serviceSelect");

  (Array.isArray(c.services) ? c.services : []).forEach((service, index) => {
    if (servicesGrid) {
      const article = document.createElement("article");
      article.className = "service";
      article.innerHTML = `
        <div class="service-num">${String(index + 1).padStart(2, "0")}</div>
        <span class="service-icon">${serviceIcons[index % serviceIcons.length]}</span>
        <h3></h3><p></p>
        <div><b></b><a href="#booking">Foglalás →</a></div>`;
      article.querySelector("h3").textContent = service.name || "";
      article.querySelector("p").textContent = service.description || "";
      article.querySelector("b").textContent = service.price || "";
      servicesGrid.appendChild(article);
    }

    if (serviceSelect) {
      const option = document.createElement("option");
      option.value = service.name || "";
      option.textContent = service.name || "";
      serviceSelect.appendChild(option);
    }
  });

  const pricesGrid = document.getElementById("pricesGrid");
  (Array.isArray(c.prices) ? c.prices : []).forEach((item) => {
    if (!pricesGrid) return;
    const article = document.createElement("article");
    article.className = `price${item.featured ? " featured" : ""}`;
    article.innerHTML = `
      ${item.featured ? '<span class="popular">LEGNÉPSZERŰBB</span>' : ""}
      <h3></h3><p></p><strong></strong><ul></ul>
      <a href="#booking">Ezt választom →</a>`;
    article.querySelector("h3").textContent = item.name || "";
    article.querySelector("p").textContent = item.description || "";
    const price = article.querySelector("strong");
    const rawPrice = String(item.price || "");
    const match = rawPrice.match(/^(.+?)(\s+(?:Ft|€|\$|USD|EUR).*)$/i);
    if (match) {
      price.append(document.createTextNode(match[1]));
      const small = document.createElement("small");
      small.textContent = match[2].trim();
      price.appendChild(document.createTextNode(" "));
      price.appendChild(small);
    } else {
      price.textContent = rawPrice;
    }
    const ul = article.querySelector("ul");
    (Array.isArray(item.features) ? item.features : []).forEach(feature => {
      const li = document.createElement("li");
      li.textContent = feature;
      ul.appendChild(li);
    });
    pricesGrid.appendChild(article);
  });

  // Existing interactions
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav nav");
  menu?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", open);
  });
  nav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lightboxImg");
  document.querySelectorAll(".masonry button").forEach(b => b.addEventListener("click", () => {
    lbImg.src = b.dataset.full;
    lbImg.alt = b.querySelector("img").alt;
    lb.classList.add("open");
  }));
  lb?.addEventListener("click", e => { if (e.target === lb) lb.classList.remove("open"); });
  lb?.querySelector("button")?.addEventListener("click", () => lb.classList.remove("open"));
  document.addEventListener("keydown", e => { if (e.key === "Escape") lb?.classList.remove("open"); });

  const range = document.querySelector(".comparison input");
  const before = document.querySelector(".comparison .before");
  const divider = document.querySelector(".comparison .divider");
  function compare() {
    if (!range || !before || !divider) return;
    before.style.width = `${range.value}%`;
    divider.style.left = `${range.value}%`;
  }
  range?.addEventListener("input", compare);
  compare();

  const form = document.getElementById("bookingForm");
  form?.addEventListener("submit", e => {
    e.preventDefault();
    form.querySelector(".success").hidden = false;
    form.reset();
  });

  const obs = new IntersectionObserver(entries => entries.forEach(x => {
    if (x.isIntersecting) x.target.classList.add("visible");
  }), {threshold: .12});
  document.querySelectorAll(".service,.cards article,.price,.review-grid blockquote").forEach(el => {
    el.classList.add("reveal");
    obs.observe(el);
  });
})();
