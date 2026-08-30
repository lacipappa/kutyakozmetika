WHITE LABEL KUTYAKOZMETIKA SABLON
=================================

Ez a verzió ugyanazt a weboldalt tartja meg, de az üzleti adatok és az
árlista/szolgáltatások a config.js fájlból töltődnek be.

GYORS BRANDCSERE – kb. 5 perc
-----------------------------
1. Nyisd meg a config.js fájlt.
2. Írd át ezt a 9 fő beállítást:
   - brandName
   - phone
   - email
   - address
   - instagram
   - primaryColor
   - heroImage
   - services
   - prices
3. Mentsd el.
4. Töltsd fel ugyanazokat a fájlokat az új weboldalhoz.

A HTML-t és a script.js-t normál esetben nem kell módosítani.

FÁJLOK
------
config.js   ← ezt kell személyre szabni
index.html  ← közös White Label sablon
styles.css  ← közös dizájn
script.js   ← közös működés + config betöltése

SZOLGÁLTATÁSOK
--------------
A services tömb minden eleménél:
{
  name: "Szolgáltatás neve",
  description: "Rövid leírás",
  price: "12 500 Ft-tól"
}

Az ár automatikusan megjelenik a szolgáltatás kártyáján és a foglalási
űrlap lenyíló listájában.

ÁRAK
----
A prices tömb minden eleménél:
{
  name: "Csomag neve",
  description: "Rövid leírás",
  price: "12 500 Ft-tól",
  features: ["Tétel 1", "Tétel 2", "Tétel 3"],
  featured: true
}

A featured: true opcionális; ez jelöli a kiemelt árkártyát.

SZÍN
----
A primaryColor a fő márkaszínt állítja át a gombokon, kiemeléseken,
árakon és tipográfiai akcentusokon.

PÉLDA
-----
Ha új ügyfél:
  brandName: "Happy Paws"
  phone: "+34 600 123 456"
  email: "hola@happypaws.es"
  address: "Calle Ejemplo 10, Alicante"
  instagram: "https://instagram.com/happypaws"
  primaryColor: "#7A5AF8"
  heroImage: "https://.../sajat-kep.jpg"

akkor ugyanaz a sablon automatikusan az új márkával jelenik meg.

FONTOS
------
- A heroImage közvetlenül egy publikus kép URL-je legyen.
- Az instagram mezőbe teljes Instagram URL ajánlott.
- A booking űrlap jelenleg DEMÓ: nem küld valódi e-mailt. Élesítéskor
  a form beköthető e-mailhez, CRM-hez vagy időpontfoglaló rendszerhez.
- A galéria és a többi szerkezeti szöveg közös sablontartalom; ha ügyfelenként
  teljesen egyedi galéria/szöveg is kell, ezek később ugyanebbe a config.js
  rendszerbe emelhetők.

LANGUAGES / I18N
----------------
The template includes three language files:
  lang/en.js
  lang/es.js
  lang/hu.js

Language is selected automatically from the browser, with English as fallback.
A saved selection in localStorage takes priority. To switch manually from your
own UI, call: setLanguage("en"), setLanguage("es"), or setLanguage("hu").

Static text can be translated by adding data-i18n="KEY" to an HTML element.
For placeholders use data-i18n-placeholder="KEY".

Brand-specific content remains in config.js; language-specific UI text is in
the three language files.
