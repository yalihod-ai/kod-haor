
var tiles = [
  {ic:'🔍', title:'האבחון שלי', desc:'15 שאלות קצרות שמזהות את מצב העור המרכזי שלך. מתחילות כאן.', href:'https://yalihodschool.co.il/kod-haor-diagnosis/', badge:'מתחילות כאן', hot:true},
  {ic:'📋', title:'שגרת הטיפוח והמתכונים שלי', desc:'השגרה, המוצרים שתכיני, הפורמולות המלאות וחומרי הגלם — מותאמים אישית לסוג העור שלך.', href:'https://yalihodschool.co.il/kod-haor-diagnosis/', route:true},
  {ic:'🎬', title:'להבין את העור', desc:'שיעור מתנה ב-3 חלקים: אפידרמיס, דרמיס, וסוגי עור והזדקנות.', href:'https://yalihodschool.co.il/kod-haor-lesson/', badge:'🎁 מתנה'},
  {ic:'📚', title:'ספריית התוכן', desc:'הידע המלא — שמנים, חמאות, חומרי גלם ושגרת טיפוח. לגלישה חופשית.', href:'https://yalihodschool.co.il/kod-haor-library/'},
  {ic:'🧪', title:'בנק המתכונים', desc:'28 מתכונים נוספים מהספר — בונוס לכולן.', href:'https://yalihodschool.co.il/kod-haor-recipes/', badge:'🎁 בונוס'},
  {ic:'🗺️', title:'מפת סינון המגירה', desc:'דף עבודה: עברי על מוצרי הטיפוח שכבר יש לך בבית, וסנני מה מתאים לשגרה שלך.', href:'https://yalihodschool.co.il/kod-haor-diagnosis/', badge:'🎁 בונוס', map:true, blank:true}
];

var _st=null; try{_st=localStorage.getItem('kh_state');}catch(e){}
var _rp={dry:'https://yalihodschool.co.il/kod-haor-dry/',oily:'https://yalihodschool.co.il/kod-haor-oily/',combo:'https://yalihodschool.co.il/kod-haor-combo/',normal:'https://yalihodschool.co.il/kod-haor-normal/',mature:'https://yalihodschool.co.il/kod-haor-mature/'};
var _mp={dry:'יבש',oily:'שמן',combo:'מעורב',normal:'רגיל',mature:'בוגר'};
tiles.forEach(function(t){ if(t.route && _st && _rp[_st]) t.href=_rp[_st]; if(t.map && _st && _mp[_st]) t.href='https://yalihod-ai.github.io/kod-haor/'+encodeURIComponent('מפת-סינון-'+_mp[_st]+'.pdf'); });
document.getElementById('grid').innerHTML = tiles.map(function(t){
  var badge = t.soon ? '<span class="badge">בקרוב</span>'
            : t.locked ? '<span class="badge">🔒 נעול</span>'
            : t.badge ? '<span class="badge'+(t.hot?' hot':'')+'">'+t.badge+'</span>' : '';
  var go = t.soon ? 'בבנייה' : t.locked ? t.lockText : 'כניסה ←';
  var inner = badge + '<div class="ic">'+t.ic+'</div><h3>'+t.title+'</h3><p>'+t.desc+'</p><span class="go">'+go+'</span>';
  if(t.href){ return '<a class="tile" href="'+t.href+'"'+(t.blank?' target="_blank" rel="noopener"':'')+'>'+inner+'</a>'; }
  return '<div class="tile '+(t.soon?'soon':'locked')+'">'+inner+'</div>';
}).join('');
