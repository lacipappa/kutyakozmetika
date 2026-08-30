/* White Label engine — business-specific values come from config.js */
(() => {
  const c = window.CONFIG || {};
  const lang = window.WHITE_LABEL_LANGUAGE || "hu";
  const local = value => (value && typeof value === "object" && !Array.isArray(value)) ? (value[lang] ?? value.hu ?? value.en ?? Object.values(value)[0] ?? "") : (value ?? "");
  const cleanPhone = value => String(value || "").replace(/[^\d+]/g, "");
  const dict = key => (window.LNKR_LANG || {})[key] || key;

  document.documentElement.style.setProperty("--primary", c.primaryColor || "#c88352");
  document.documentElement.style.setProperty("--hero-image", `url("${c.heroImage || ""}")`);
  document.title = `${c.brandName || "Dog Grooming"} — ${lang === "es" ? "Peluquería canina" : lang === "en" ? "Dog grooming" : "Kutyakozmetika"}`;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", c.primaryColor || "#c88352");

  document.querySelectorAll("[data-brand]").forEach(el => el.textContent = c.brandName || "");
  document.querySelectorAll("[data-phone]").forEach(el => el.textContent = c.phone || "");
  document.querySelectorAll("[data-address]").forEach(el => el.textContent = c.address || "");
  document.querySelectorAll("[data-hours]").forEach(el => el.textContent = local(c.openingHours));

  const setLink = (id, href, text) => { const el=document.getElementById(id); if(el){el.href=href;el.textContent=text||"";} };
  setLink("bookingEmail", `mailto:${c.email || ""}`, c.email);
  setLink("contactPhone", `tel:${cleanPhone(c.phone)}`, c.phone);
  setLink("footerPhone", `tel:${cleanPhone(c.phone)}`, c.phone);
  setLink("footerEmail", `mailto:${c.email || ""}`, c.email);
  const ig=document.getElementById("instagramLink"); if(ig){ig.href=c.instagram||"#";ig.textContent=String(c.instagram||"").replace(/^https?:\/\/(www\.)?/i,"").replace(/\/$/,"")||"Instagram";}
  const map=document.getElementById("mapLink"); if(map) map.href=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.address||"")}`;

  const hero=document.getElementById("heroBg"); if(hero) hero.style.backgroundImage=`url("${c.heroImage||""}")`;
  const split=document.getElementById("splitPhoto"); if(split) split.style.backgroundImage=`url("${c.heroImage||""}")`;
  const about=document.getElementById("aboutImage"); if(about) about.src=c.aboutImage||c.heroImage||"";
  const beforeImg=document.getElementById("beforeImage"); if(beforeImg) beforeImg.src=c.beforeImage||"";
  const afterImg=document.getElementById("afterImage"); if(afterImg) afterImg.src=c.afterImage||"";

  const gallery=document.getElementById("galleryGrid");
  (c.galleryImages||[]).forEach((src,i)=>{const b=document.createElement("button");b.dataset.full=src;b.innerHTML=`<img src="" alt="Gallery image ${i+1}" loading="lazy">`;b.querySelector("img").src=src;gallery?.appendChild(b);});

  const icons=["✂","◌","⌁","♡","✦","✧"];
  const servicesGrid=document.getElementById("servicesGrid"), select=document.getElementById("serviceSelect");
  (c.services||[]).forEach((s,i)=>{
    if(servicesGrid){const a=document.createElement("article");a.className="service";a.innerHTML=`<div class="service-num">${String(i+1).padStart(2,"0")}</div><span class="service-icon">${icons[i%icons.length]}</span><h3></h3><p></p><div><b></b><a href="#booking" data-i18n="service_book"></a></div>`;a.querySelector("h3").textContent=local(s.name);a.querySelector("p").textContent=local(s.description);a.querySelector("b").textContent=s.price||"";servicesGrid.appendChild(a);}
    if(select){const o=document.createElement("option");o.value=local(s.name);o.textContent=local(s.name);select.appendChild(o);}
  });

  const prices=document.getElementById("pricesGrid");
  (c.prices||[]).forEach(item=>{if(!prices)return;const a=document.createElement("article");a.className=`price${item.featured?" featured":""}`;a.innerHTML=`${item.featured?'<span class="popular" data-i18n="popular"></span>':""}<h3></h3><p></p><strong></strong><ul></ul><a href="#booking" data-i18n="choose"></a>`;a.querySelector("h3").textContent=local(item.name);a.querySelector("p").textContent=local(item.description);a.querySelector("strong").textContent=item.price||"";const features=local(item.features);(Array.isArray(features)?features:[]).forEach(f=>{const li=document.createElement("li");li.textContent=f;a.querySelector("ul").appendChild(li);});prices.appendChild(a);});

  const menu=document.querySelector(".menu"), nav=document.querySelector(".nav nav");menu?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open)});nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
  const lb=document.getElementById("lightbox"),lbImg=document.getElementById("lightboxImg");document.querySelectorAll(".masonry button").forEach(b=>b.addEventListener("click",()=>{lbImg.src=b.dataset.full;lb.classList.add("open")}));lb?.addEventListener("click",e=>{if(e.target===lb)lb.classList.remove("open")});lb?.querySelector("button")?.addEventListener("click",()=>lb.classList.remove("open"));document.addEventListener("keydown",e=>{if(e.key==="Escape")lb?.classList.remove("open")});
  const range=document.querySelector(".comparison input"),before=document.querySelector(".comparison .before"),divider=document.querySelector(".comparison .divider");const compare=()=>{if(range&&before&&divider){before.style.width=`${range.value}%`;divider.style.left=`${range.value}%`;}};range?.addEventListener("input",compare);compare();

  document.getElementById("bookingForm")?.addEventListener("submit",e=>{
    e.preventDefault(); const form=e.currentTarget, data=new FormData(form);
    const labels={hu:["Időpontkérés","Név","Kutyus","Telefon","Szolgáltatás","Preferált időpont"],en:["Appointment request","Name","Dog","Phone","Service","Preferred time"],es:["Solicitud de cita","Nombre","Perro","Teléfono","Servicio","Horario preferido"]}[lang];
    const message=`${labels[0]} — ${c.brandName}\n${labels[1]}: ${data.get("name")}\n${labels[2]}: ${data.get("dog")}\n${labels[3]}: ${data.get("phone")}\n${labels[4]}: ${data.get("service")}\n${labels[5]}: ${data.get("message")||"-"}`;
    const wa=cleanPhone(c.whatsapp).replace(/^\+/,"");
    if(wa) window.open(`https://wa.me/${wa}?text=${encodeURIComponent(message)}`,"_blank","noopener");
    else if(c.email) window.location.href=`mailto:${c.email}?subject=${encodeURIComponent(labels[0])}&body=${encodeURIComponent(message)}`;
    form.querySelector(".success").hidden=false;
  });

  const obs=new IntersectionObserver(entries=>entries.forEach(x=>{if(x.isIntersecting)x.target.classList.add("visible")}),{threshold:.12});document.querySelectorAll(".service,.cards article,.price,.review-grid blockquote").forEach(el=>{el.classList.add("reveal");obs.observe(el)});
})();
