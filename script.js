var STORE = "siteSettings2";

var FONTS = [
  ["تاهوما", "Tahoma, Arial, sans-serif"],
  ["آریال", "Arial, sans-serif"],
  ["سگوی", "'Segoe UI', Tahoma, sans-serif"],
  ["جورجیا", "Georgia, serif"],
  ["کوریر", "'Courier New', monospace"]
];

var FIELDS = [
  ["text", "title", "تیتر اصلی", "کون کیارش"],
  ["text", "subtitle", "متن زیر تیتر", "کیفیت بالا، قیمت مناسب و ارسال سریع به سراسر کشور"],
  ["text", "btn1", "متن دکمه بالا", "همین حالا بکن"],
  ["text", "whyTitle", "تیتر بخش کارت‌ها", "چرا ما؟"],
  ["text", "c1t", "کارت ۱: تیتر", "کیفیت عالی"],
  ["text", "c1p", "کارت ۱: متن", "محصولات ما با بهترین هستند."],
  ["text", "c2t", "کارت ۲: تیتر", "قیمت مناسب"],
  ["text", "c2p", "کارت ۲: متن", "بهترین قیمت را با ضمانت بازگشت وجه دریافت کنید."],
  ["text", "c3t", "کارت ۳: تیتر", "ارسال سریع"],
  ["text", "c3p", "کارت ۳: متن", "کیارش شما در بهتریت زمان ممکن به دست شما میرسد."],
  ["text", "contactTitle", "تیتر بخش تماس", "همین حالا تماس بگیرید"],
  ["text", "phone", "شماره تماس", "0912-000-0000"],
  ["text", "btn2", "متن دکمه پایین", "تماس بگیرید"],
  ["text", "footer", "متن پایین صفحه", "تمامی حقوق محفوظ است."],
  ["color", "heroColor", "رنگ بالای صفحه", "#2f6bff"],
  ["color", "btnColor", "رنگ دکمه‌ها", "#ffb400"],
  ["color", "btnText", "رنگ متن دکمه‌ها", "#222222"],
  ["color", "bgColor", "رنگ پس‌زمینه صفحه", "#f5f5f5"],
  ["color", "textColor", "رنگ متن‌ها", "#222222"],
  ["color", "cardColor", "رنگ کارت‌ها", "#ffffff"],
  ["color", "cardTitleColor", "رنگ تیتر کارت‌ها", "#2f6bff"],
  ["color", "contactColor", "رنگ بخش تماس", "#222222"],
  ["color", "footerColor", "رنگ پایین صفحه", "#111111"],
  ["font", "font", "فونت", FONTS[0][1]],
  ["image", "heroImage", "عکس پس‌زمینه بالای صفحه", ""]
];

function getDefaults() {
  var d = {};
  FIELDS.forEach(function (f) { d[f[1]] = f[3]; });
  return d;
}

function getSettings() {
  var d = getDefaults();
  try {
    var s = JSON.parse(localStorage.getItem(STORE) || "{}");
    for (var k in s) d[k] = s[k];
  } catch (e) {}
  return d;
}

function setStyle(sel, prop, val) {
  document.querySelectorAll(sel).forEach(function (el) { el.style[prop] = val; });
}

function applySettings() {
  if (document.body.id !== "site") return;
  var s = getSettings();

  FIELDS.forEach(function (f) {
    if (f[0] === "text") {
      var el = document.getElementById(f[1]);
      if (el) el.innerText = s[f[1]];
    }
  });

  setStyle("#hero", "backgroundColor", s.heroColor);
  setStyle("#hero", "backgroundImage", s.heroImage ? "url(" + s.heroImage + ")" : "none");
  setStyle("#hero", "backgroundSize", "cover");
  setStyle("#hero", "backgroundPosition", "center");
  setStyle(".btn", "backgroundColor", s.btnColor);
  setStyle(".btn", "color", s.btnText);
  setStyle("body", "backgroundColor", s.bgColor);
  setStyle("body", "color", s.textColor);
  setStyle("body", "fontFamily", s.font);
  setStyle(".card", "backgroundColor", s.cardColor);
  setStyle(".card h3", "color", s.cardTitleColor);
  setStyle("#contact", "backgroundColor", s.contactColor);
  setStyle("footer", "backgroundColor", s.footerColor);
}

applySettings();
