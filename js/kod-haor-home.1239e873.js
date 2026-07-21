
var tiles = [
  {ic:'🔍', title:'האבחון שלי', desc:'15 שאלות קצרות שמזהות את מצב העור המרכזי שלך. מתחילות כאן.', href:'https://yalihodschool.co.il/kod-haor-diagnosis/', badge:'מתחילות כאן', hot:true},
  {ic:'📋', title:'שגרת הטיפוח והמתכונים שלי', desc:'השגרה, המוצרים שתכיני, הפורמולות המלאות וחומרי הגלם — מותאמים אישית לסוג העור שלך.', href:'https://yalihodschool.co.il/kod-haor-diagnosis/', route:true},
  {ic:'🎬', title:'להבין את העור', desc:'שיעור מתנה ב-3 חלקים: אפידרמיס, דרמיס, וסוגי עור והזדקנות.', href:'https://yalihodschool.co.il/kod-haor-lesson/', badge:'🎁 מתנה'},
  {ic:'📚', title:'ספריית התוכן', desc:'הידע המלא — שמנים, חמאות, חומרי גלם ושגרת טיפוח. לגלישה חופשית.', href:'https://yalihodschool.co.il/kod-haor-library/', need:'library', buy:'https://secure.cardcom.solutions/EA/EA5/Qf2AMPReh0OlXDJRwCJltA/PaymentSP'},
  {ic:'🧪', title:'בנק המתכונים', desc:'28 מתכונים נוספים מהספר.', href:'https://yalihodschool.co.il/kod-haor-recipes/', need:'recipes', buy:'https://secure.cardcom.solutions/EA/EA5/pjs2vZDJN0iGXaci7MbvWA/PaymentSP'},
  {ic:'🗺️', title:'מפת סינון המגירה', desc:'דף עבודה אינטראקטיבי: עברי על המוצרים שכבר יש לך בבית, סנני מה מתאים לשגרה שלך — עם אפשרות להורדת PDF.', href:'https://yalihodschool.co.il/kod-haor-drawer/', badge:'🎁 בונוס'}
];

var _st=null; try{_st=localStorage.getItem('kh_state');}catch(e){}
var _rp={dry:'https://yalihodschool.co.il/kod-haor-dry/',oily:'https://yalihodschool.co.il/kod-haor-oily/',combo:'https://yalihodschool.co.il/kod-haor-combo/',normal:'https://yalihodschool.co.il/kod-haor-normal/',mature:'https://yalihodschool.co.il/kod-haor-mature/'};
tiles.forEach(function(t){ if(t.route && _st && _rp[_st]) t.href=_rp[_st]; });

var _own=[]; try{ _own=(window.KH_PRODUCTS)||((window.KH&&window.KH.products)||[]); }catch(e){}
tiles.forEach(function(t){
  if(t.need && _own.indexOf(t.need)===-1){
    if(t.buy){ t.href='#buy-'+t.need; t.upgrade=true; t.badge='🔓 פתיחת גישה'; t.buyurl=t.buy; }
    else { t.locked=true; t.href=null; t.lockText='🔒 זמין בשדרוג'; }
  }
});
document.getElementById('grid').innerHTML = tiles.map(function(t){
  var badge = t.soon ? '<span class="badge">בקרוב</span>'
            : t.locked ? '<span class="badge">🔒 נעול</span>'
            : t.badge ? '<span class="badge'+(t.hot?' hot':'')+'">'+t.badge+'</span>' : '';
  var go = t.soon ? 'בבנייה' : t.locked ? t.lockText : (t.upgrade ? 'לרכישה ולפתיחת גישה ←' : 'כניסה ←');
  var inner = badge + '<div class="ic">'+t.ic+'</div><h3>'+t.title+'</h3><p>'+t.desc+'</p><span class="go">'+go+'</span>';
  if(t.href){ return '<a class="tile" href="'+t.href+'"'+(t.blank?' target="_blank" rel="noopener"':'')+'>'+inner+'</a>'; }
  return '<div class="tile '+(t.soon?'soon':'locked')+'">'+inner+'</div>';
}).join('');

window.KH_EMAIL = (window.KH && window.KH.email) ? window.KH.email : '';
document.addEventListener('click', function(ev){
  var a = ev.target.closest ? ev.target.closest('a.tile') : null;
  if(!a || a.getAttribute('href').indexOf('#buy-') !== 0) return;
  ev.preventDefault();
  var need = a.getAttribute('href').replace('#buy-','');
  var t = tiles.filter(function(x){return x.need===need;})[0];
  if(!t || !t.buyurl) return;
  var em = window.KH_EMAIL || '';
  var box = document.createElement('div');
  box.setAttribute('style','position:fixed;inset:0;background:rgba(44,36,25,.55);display:flex;align-items:center;justify-content:center;z-index:9999;padding:20px');
  box.innerHTML = '<div style="background:#fff;border-radius:20px;max-width:440px;padding:30px 26px;text-align:center;font-family:Heebo,sans-serif;color:#6c5336;box-shadow:0 20px 60px rgba(0,0,0,.3)">'
    + '<div style="font-size:2rem;margin-bottom:10px">📧</div>'
    + '<h3 style="font-size:1.25rem;font-weight:800;margin-bottom:12px">חשוב לפני התשלום</h3>'
    + '<p style="line-height:1.7;margin-bottom:8px">בדף התשלום הקפידי להזין <b>בדיוק את אותה כתובת מייל</b> שאיתה נכנסת לקוד העור,<br>אחרת הגישה לא תיפתח כאן.</p>'
    + (em ? '<div style="background:#faf7f0;border:1px solid #e5dfce;border-radius:12px;padding:12px;margin:14px 0;font-weight:800;direction:ltr;word-break:break-all">'+em+'</div>' : '')
    + '<a href="'+t.buyurl+'" style="display:block;background:#a98c50;color:#fff;font-weight:800;padding:15px;border-radius:99px;text-decoration:none;margin-top:8px">הבנתי, למעבר לתשלום ←</a>'
    + '<button style="background:none;border:0;color:#8a7154;font-family:Heebo;font-weight:700;margin-top:12px;cursor:pointer;font-size:.9rem">ביטול</button>'
    + '</div>';
  box.querySelector('button').onclick = function(){ box.remove(); };
  box.onclick = function(e){ if(e.target===box) box.remove(); };
  document.body.appendChild(box);
});
