/*
 * WHITE LABEL CONFIG
 * ------------------
 * Egy új kutyakozmetika verzióhoz alapvetően csak ezt a fájlt kell módosítani.
 *
 * Kötelező fő mezők:
 * brandName, phone, email, address, instagram, primaryColor, heroImage,
 * services, prices
 */
const CONFIG = {
  brandName: "Mancs & Móka",
  phone: "+36 30 123 4567",
  email: "hello@mancsesmoka.hu",
  address: "1136 Budapest, Mancs utca 12.",
  instagram: "https://instagram.com/mancsesmoka",
  primaryColor: "#c88352",
  heroImage: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1800&q=88",

  services: [
    {
      name: "Teljes kozmetika",
      description: "Fürdetés, szárítás, bontás, nyírás vagy trimmelés, mancs- és fülápolás.",
      price: "12 500 Ft-tól"
    },
    {
      name: "Fürdetés & szárítás",
      description: "Bőrtípushoz illő sampon, alapos szárítás és kifésülés a friss, könnyű szőrzetért.",
      price: "6 500 Ft-tól"
    },
    {
      name: "Fazonigazítás",
      description: "A kutyus szőrtípusához és életmódjához igazított nyírás, trimmelés és formázás.",
      price: "8 500 Ft-tól"
    },
    {
      name: "Kölyök első élménye",
      description: "Rövid, játékos ismerkedés a kozmetikával, hogy a későbbi alkalmak természetesek legyenek.",
      price: "5 500 Ft-tól"
    }
  ],

  prices: [
    {
      name: "Mini frissítés",
      description: "Gyors alapápolás két teljes kozmetika között.",
      price: "3 000 Ft-tól",
      features: ["Karomvágás", "Mancsápolás", "Higiéniai igazítás"]
    },
    {
      name: "Teljes kozmetika",
      description: "A teljes szépülés, amit a legtöbb vendég választ.",
      price: "12 500 Ft-tól",
      features: ["Fürdetés & szárítás", "Bontás & fazonigazítás", "Mancs- & fülápolás"],
      featured: true
    },
    {
      name: "Extra Spa",
      description: "Teljes kozmetika egy kis extra kényeztetéssel.",
      price: "16 500 Ft-tól",
      features: ["Prémium kozmetikum", "Ápoló pakolás", "Extra szőrzetápolás"]
    }
  ]
};
