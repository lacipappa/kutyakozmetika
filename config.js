/*
 * MANCS & MÓKA — WHITE LABEL CONFIG
 * =================================
 * Új ügyfélhez elsősorban EZT a fájlt kell módosítani.
 * A weboldal szerkezetéhez nem kell hozzányúlni.
 */
window.CONFIG = {
  brandName: "Mancs & Móka",
  phone: "+36 30 123 4567",
  whatsapp: "+36 30 123 4567",
  email: "hello@mancsesmoka.hu",
  address: "1136 Budapest, Mancs utca 12.",
  instagram: "https://instagram.com/mancsesmoka",
  primaryColor: "#c88352",

  /* Fő- és tartalmi képek */
  heroImage: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1800&q=88",
  aboutImage: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1400&q=88",
  beforeImage: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1600&q=88",
  afterImage: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1600&q=88",
  galleryImages: [
    "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1400&q=88",
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1400&q=88",
    "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=1400&q=88",
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1400&q=88",
    "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1400&q=88"
  ],

  /* Nyitvatartás */
  openingHours: {
    hu: "H–P: 8:00–18:00 | Sz: 9:00–14:00",
    en: "Mon–Fri: 8:00–18:00 | Sat: 9:00–14:00",
    es: "Lun–Vie: 8:00–18:00 | Sáb: 9:00–14:00"
  },

  /* A szolgáltatás neve/leírása lehet 3 nyelvű. Az ár közös. */
  services: [
    {
      name: {hu:"Teljes kozmetika", en:"Full grooming", es:"Peluquería completa"},
      description: {
        hu:"Fürdetés, szárítás, bontás, nyírás vagy trimmelés, mancs- és fülápolás.",
        en:"Bath, drying, detangling, clipping or trimming, paw and ear care.",
        es:"Baño, secado, desenredado, corte o trimming y cuidado de patas y oídos."
      },
      price: "12 500 Ft-tól"
    },
    {
      name: {hu:"Fürdetés & szárítás", en:"Bath & dry", es:"Baño y secado"},
      description: {
        hu:"Bőrtípushoz illő sampon, alapos szárítás és kifésülés a friss, könnyű szőrzetért.",
        en:"Skin-appropriate shampoo, thorough drying and brushing for a fresh, light coat.",
        es:"Champú adecuado, secado completo y cepillado para un pelaje limpio y ligero."
      },
      price: "6 500 Ft-tól"
    },
    {
      name: {hu:"Fazonigazítás", en:"Style trim", es:"Corte y arreglo"},
      description: {
        hu:"A kutyus szőrtípusához és életmódjához igazított nyírás, trimmelés és formázás.",
        en:"Clipping, trimming and styling adapted to your dog's coat and lifestyle.",
        es:"Corte, trimming y acabado adaptados al pelaje y estilo de vida de tu perro."
      },
      price: "8 500 Ft-tól"
    },
    {
      name: {hu:"Kölyök első élménye", en:"Puppy's first visit", es:"Primera visita del cachorro"},
      description: {
        hu:"Rövid, játékos ismerkedés a kozmetikával, hogy a későbbi alkalmak természetesek legyenek.",
        en:"A short, playful introduction so future grooming visits feel natural.",
        es:"Una introducción corta y positiva para que las futuras visitas sean naturales."
      },
      price: "5 500 Ft-tól"
    }
  ],

  prices: [
    {
      name:{hu:"Mini frissítés",en:"Mini refresh",es:"Mini retoque"},
      description:{hu:"Gyors alapápolás két teljes kozmetika között.",en:"Quick care between full grooming visits.",es:"Cuidado rápido entre dos sesiones completas."},
      price:"3 000 Ft-tól",
      features:{hu:["Karomvágás","Mancsápolás","Higiéniai igazítás"],en:["Nail trim","Paw care","Hygiene trim"],es:["Corte de uñas","Cuidado de patas","Arreglo higiénico"]}
    },
    {
      name:{hu:"Teljes kozmetika",en:"Full grooming",es:"Peluquería completa"},
      description:{hu:"A teljes szépülés, amit a legtöbb vendég választ.",en:"The complete grooming package most guests choose.",es:"El servicio completo que elige la mayoría de nuestros clientes."},
      price:"12 500 Ft-tól",
      features:{hu:["Fürdetés & szárítás","Bontás & fazonigazítás","Mancs- & fülápolás"],en:["Bath & dry","Detangling & styling","Paw & ear care"],es:["Baño y secado","Desenredado y corte","Cuidado de patas y oídos"]},
      featured:true
    },
    {
      name:{hu:"Extra Spa",en:"Extra Spa",es:"Extra Spa"},
      description:{hu:"Teljes kozmetika egy kis extra kényeztetéssel.",en:"Full grooming with a little extra pampering.",es:"Peluquería completa con un extra de cuidado."},
      price:"16 500 Ft-tól",
      features:{hu:["Prémium kozmetikum","Ápoló pakolás","Extra szőrzetápolás"],en:["Premium cosmetics","Conditioning treatment","Extra coat care"],es:["Cosmética premium","Tratamiento nutritivo","Cuidado extra del pelaje"]}
    }
  ]
};
