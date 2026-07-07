
var tiles = [
  {ic:'🔍', title:'האבחון שלי', desc:'15 שאלות קצרות שמזהות את מצב העור המרכזי שלך. מתחילות כאן.', href:'https://yalihodschool.co.il/kod-haor-diagnosis/', badge:'מתחילות כאן', hot:true},
  {ic:'📋', title:'המסלול שלי', desc:'שגרת טיפוח, המוצרים שתכיני, חומרי הגלם והמדריך שלך — לפי סוג העור.', href:'https://yalihodschool.co.il/kod-haor-dry/'},
  {ic:'🎬', title:'להבין את העור', desc:'שיעור מתנה ב-3 חלקים: אפידרמיס, דרמיס, וסוגי עור והזדקנות.', href:'https://yalihodschool.co.il/kod-haor-lesson/', badge:'🎁 מתנה'},
  {ic:'📚', title:'ספריית התוכן', desc:'הידע המלא — שמנים, חמאות, חומרי גלם ושגרת טיפוח. לגלישה חופשית.', href:'https://yalihodschool.co.il/kod-haor-library/'},
  {ic:'🧪', title:'בנק המתכונים', desc:'28 מתכונים נוספים מהספר — בונוס לכולן.', href:'https://yalihodschool.co.il/kod-haor-recipes/', badge:'🎁 בונוס'}
];

document.getElementById('grid').innerHTML = tiles.map(function(t){
  var badge = t.soon ? '<span class="badge">בקרוב</span>'
            : t.locked ? '<span class="badge">🔒 נעול</span>'
            : t.badge ? '<span class="badge'+(t.hot?' hot':'')+'">'+t.badge+'</span>' : '';
  var go = t.soon ? 'בבנייה' : t.locked ? t.lockText : 'כניסה ←';
  var inner = badge + '<div class="ic">'+t.ic+'</div><h3>'+t.title+'</h3><p>'+t.desc+'</p><span class="go">'+go+'</span>';
  if(t.href){ return '<a class="tile" href="'+t.href+'">'+inner+'</a>'; }
  return '<div class="tile '+(t.soon?'soon':'locked')+'">'+inner+'</div>';
}).join('');
