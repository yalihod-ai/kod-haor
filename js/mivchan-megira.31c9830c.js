/* מבחן המגירה — גרסה 2
   שינויים מול v1: מראה תשובות, חיבור פער→מוצר, תוצאה חמישית מוכרת,
   שאלת "חבל לזרוק" הוזזה ל-4, מדידת נטישה, אירוע Lead. הניקוד לא שונה. */

var KH_TRACK = 'https://yalihodschool.co.il/wp-json/kh/v1/megira-track';

function khTrack(step){
  try{
    var k='khm_'+step;
    if(sessionStorage.getItem(k)) return;   // כל שלב נספר פעם אחת לכל גולשת
    sessionStorage.setItem(k,'1');
    var b=new Blob([JSON.stringify({step:step})],{type:'application/json'});
    if(navigator.sendBeacon) navigator.sendBeacon(KH_TRACK,b);
    else fetch(KH_TRACK,{method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({step:step}),keepalive:true}).catch(function(){});
  }catch(e){}
}

var GAPS={
 skin:{name:'את לא יודעת מה מצב העור שלך היום',
   why:'כל עוד אין לך תמונה ברורה של מצב העור, כל בחירת מוצר היא בעצם ניחוש, גם אם היא בחירה יקרה.',
   fix:'הצעד הראשון פשוט: לזהות את מצב העור שלך עכשיו, ולבנות ממנו את כל השאר.',
   product:'האבחון האישי ופרופיל העור שלך'},
 ingredients:{name:'את בוחרת בלי לדעת מה יש בפנים',
   why:'האריזה מספרת סיפור. רשימת הרכיבים מספרת מה באמת נמצא במוצר, ואלה לא תמיד אותו דבר.',
   fix:'רשימת רכיבים מקבלת משמעות רק כשיודעים מה העור שלך צריך. אותו רכיב בדיוק יכול להיות מצוין לאחת ומיותר לשנייה. לכן מתחילים מהעור, לא מהתווית.',
   product:'חומרי הגלם שמתאימים לך, ומפת סינון המגירה'},
 actives:{name:'את משלבת חומרים פעילים בלי מפה',
   why:'חומרים פעילים הם כלי מצוין, אבל בלי לדעת מה מותר לשלב, באיזה סדר ובאיזו תדירות הם עלולים להעמיס על העור במקום לעזור לו.',
   fix:'צריך סדר ברור: מה מתאים לעור שלך, מה משלבים ומה עדיף להפריד.',
   product:'מסלול הטיפוח המותאם לסוג העור שלך'},
 order:{name:'לשגרה שלך אין עדיין סדר ברור',
   why:'כשאין שיטה, קל להוסיף עוד ועוד מוצרים ועדיין לא לדעת מה מהם באמת עובד בשבילך.',
   fix:'שגרה טובה היא לא הרבה מוצרים. היא המוצרים הנכונים, בסדר הנכון.',
   product:'מסלול הטיפוח המותאם לסוג העור שלך'},
 leftover:{name:'יש במגירה מוצרים שנשארו בלי סיבה ברורה',
   why:'מוצרים שממשיכים לשבת שם ליתר ביטחון או כי חבל לזרוק, הם סימן שחסרה נקודת ייחוס שתעזור להחליט.',
   fix:'עם פרופיל עור ברור קל להחליט מה נשאר, מה מושהה ומה פשוט לא בשבילך.',
   product:'מפת סינון המגירה'}
};

/* התוצאה החמישית — כשאין פער מובהק. מוכרת כמו כל האחרות. */
var GOOD={name:'הבסיס שלך כבר בנוי',
  why:'לפי התשובות שלך את מכירה את העור שלך, את יודעת מה את מחפשת, ואת בוחרת מתוך הבנה. זה לא מובן מאליו, ורוב הנשים לא שם.',
  fix:'מכאן העניין הוא דיוק: להתאים את השגרה בדיוק למצב העור שלך היום, ולהתחיל להכין בעצמך במקום לקנות מדף.',
  product:'מסלול הטיפוח והפורמולות להכנה בבית'};

const Q=[
 {t:'כמה מוצרי טיפוח לפנים יש לך כרגע?',o:[
   ['1 עד 3 מוצרים',{},'יש לך מגירה מצומצמת'],
   ['4 עד 6 מוצרים',{order:1},'יש לך כמה מוצרים במגירה'],
   ['7 עד 10 מוצרים',{order:2,leftover:1},'יש לך בין 7 ל-10 מוצרים במגירה'],
   ['יותר מ־10 (או שאני כבר לא בטוחה)',{order:3,leftover:2},'יש לך יותר מ-10 מוצרים במגירה, ואת כבר לא בטוחה בכמה בדיוק']]},
 {t:'בכמה מהם את באמת משתמשת בשבוע רגיל?',o:[
   ['כמעט בכולם',{},'ואת משתמשת כמעט בכולם'],
   ['בערך בחצי',{leftover:2},'ואת משתמשת בערך בחצי מהם'],
   ['רק ב-2 או 3 קבועים',{leftover:1},'אבל בפועל את חוזרת רק לשניים או שלושה קבועים'],
   ['אני קונה יותר ממה שאני באמת משתמשת',{leftover:3,order:1},'ואת יודעת בעצמך שאת קונה יותר ממה שאת מספיקה להשתמש']]},
 {t:'את יודעת מה המטרה של כל מוצר שיש לך?',o:[
   ['כן, ברור לי בדיוק',{},'את יודעת בדיוק למה כל אחד מהם נמצא שם.'],
   ['בערך, אבל לא לגבי כולם',{order:1},'לגבי רובם ברור לך מה התפקיד, אבל לא לגבי כולם.'],
   ['לא ממש',{order:2,ingredients:1},'לא תמיד ברור לך מה בדיוק כל אחד מהם אמור לעשות.'],
   ['יש מוצרים שאני לא יודעת למה קניתי',{order:3,leftover:2},'יש שם כמה שאת כבר לא זוכרת למה קנית.']]},
 /* הוזזה לכאן ממקום 10 — לא לסיים את השאלון ברגע הכי כבד */
 {t:'יש מוצרים שאת ממשיכה איתם למרות שאת לא בטוחה שהם עושים לך טוב?',o:[
   ['לא, אני משתמשת רק במה שמתאים לי',{}],
   ['לפעמים',{leftover:2}],
   ['כן, הם היו יקרים וחבל לי לזרוק',{leftover:3}],
   ['כן, אין לי במה להחליף אותם',{leftover:3,skin:1}]]},
 {t:'מה הכי משפיע עלייך כשאת קונה מוצר?',o:[
   ['רשימת הרכיבים וההתאמה לצרכים שלי',{},'וכשאת בוחרת מוצר חדש, את מסתכלת קודם כל על הרכיבים ועל ההתאמה אלייך.'],
   ['המלצה של מישהי',{ingredients:2},'וכשאת בוחרת מוצר חדש, מה שמכריע זו בדרך כלל המלצה של מישהי.'],
   ['פרסום, משפיענית או מותג מוכר',{ingredients:3},'וכשאת בוחרת מוצר חדש, מה שמכריע זה פרסום, המלצה ברשת או מותג שאת מכירה.'],
   ['מה שכתוב על האריזה',{ingredients:3,skin:1},'וכשאת בוחרת מוצר חדש, מה שמכריע זה מה שכתוב על האריזה.']]},
 {t:'את יודעת מה סוג העור שלך היום?',o:[
   ['כן, ואני בטוחה בזה',{}],
   ['בערך, לפעמים אני מתבלבלת',{skin:2}],
   ['חשבתי שכן, אבל העור שלי השתנה',{skin:3}],
   ['לא ממש',{skin:3,ingredients:1}]]},
 {t:'את יודעת מה העור שלך צריך עכשיו?',o:[
   ['כן, ברור לי מה חסר לו',{}],
   ['בערך, לא תמיד יודעת מה לבחור',{skin:2}],
   ['לא בטוחה, הוא משתנה',{skin:3}],
   ['לא, אני מנסה מוצרים ורואה מה קורה',{skin:3,order:1}]]},
 {t:'את משתמשת בחומרים פעילים (רטינול, חומצות, ויטמין C)?',o:[
   ['לא משתמשת',{}],
   ['באחד־שניים, ואני יודעת למה',{}],
   ['בכמה, אבל לא תמיד יודעת מה כל אחד עושה',{actives:3}],
   ['לא בטוחה מה נחשב חומר פעיל',{actives:2,ingredients:2}]]},
 {t:'את יודעת מה מותר לשלב עם מה?',o:[
   ['כן, אני בונה שילובים בבטחה',{}],
   ['בערך, עדיין מתלבטת',{actives:2}],
   ['לא ממש',{actives:3}],
   ['אני משלבת ולא בטוחה אם זה נכון',{actives:3,order:1}]]},
 {t:'את קוראת את רשימת הרכיבים לפני קנייה?',o:[
   ['כן, תמיד',{}],
   ['לפעמים',{ingredients:2}],
   ['מסתכלת, אבל לא מבינה מה כתוב שם',{ingredients:3}],
   ['לא, אני קוראת את ההבטחות על האריזה',{ingredients:3}]]}
];

/* השאלות שמרכיבות את מראה התשובות */
var MIRROR_Q=[0,1,2,4];

let step=0; const ans={};
function selected(i){const a=ans[step];return Array.isArray(a)?a.includes(i):a===i;}
function canNext(){const a=ans[step];return Array.isArray(a)?a.length>0:a!=null;}
function startQuiz(){document.getElementById('landing').classList.add('hidden');document.getElementById('quiz').classList.remove('hidden');step=0;render();window.scrollTo(0,0);return false;}
function render(){
  const q=Q[step];
  khTrack('q'+(step+1));
  document.getElementById('barFill').style.width=Math.round(step/Q.length*100)+'%';
  document.getElementById('barLbl').textContent='שאלה '+(step+1)+' מתוך '+Q.length;
  document.getElementById('qcard').innerHTML='<div class="qtext">'+q.t+'</div>'+
    '<div class="qhint">'+(q.multi?'אפשר לבחור כמה תשובות':'בחרי תשובה אחת')+'</div><div class="opts">'+
    q.o.map(function(o,i){return '<div class="opt'+(q.multi?' multi':'')+(selected(i)?' sel':'')+'" onclick="pick('+i+')"><span class="dot">'+(selected(i)?(q.multi?'✓':'●'):'')+'</span>'+o[0]+'</div>'}).join('')+
    '</div><div class="err" id="qErr"></div><div class="qnav"><button class="btn btn-ghost" '+(step===0?'style="visibility:hidden"':'')+' onclick="prev()">→ חזרה</button>'+
    '<button class="btn btn-primary" '+(canNext()?'':'disabled')+' onclick="next()">'+(step===Q.length-1?'לסיום ✦':'הבא')+'</button></div>';
}
function pick(i){const q=Q[step];
  if(q.multi){let a=Array.isArray(ans[step])?ans[step]:[];a.includes(i)?a=a.filter(function(x){return x!==i}):a.push(i);ans[step]=a;}
  else ans[step]=i;
  render();
}
function next(){ if(!canNext()){document.getElementById('qErr').textContent=Q[step].multi?'בחרי לפחות אפשרות אחת כדי להמשיך.':'בחרי תשובה אחת כדי להמשיך.';return;}
  if(step<Q.length-1){step++;render();window.scrollTo(0,0);} else showLead(); }
function prev(){ if(step>0){step--;render();window.scrollTo(0,0);} }

function showLead(){khTrack('form');document.getElementById('quiz').classList.add('hidden');document.getElementById('leadform').classList.remove('hidden');window.scrollTo(0,0);}

function submitLead(){
  const name=document.getElementById('fName').value.trim();
  const email=document.getElementById('fEmail').value.trim();
  const consent=document.getElementById('fConsent').checked;
  const err=document.getElementById('leadErr');
  if(!name){err.textContent='בבקשה מלאי שם.';return;}
  if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){err.textContent='נראה שהמייל לא תקין. בדקי שוב ונסי מחדש.';return;}
  if(!consent){err.textContent='כדי להמשיך, יש לאשר קבלת מיילים.';return;}
  err.textContent='';
  try{
    var _payload = {
      name: name,
      email: email,
      phone: (document.getElementById('fPhone')||{}).value || '',
      consent: consent ? '1' : '0'
    };
    fetch('https://yalihodschool.co.il/wp-json/kh/v1/megira-lead', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify(_payload), keepalive:true
    }).catch(function(){});
  }catch(e){}
  try{ if(window.fbq) fbq('track','Lead',{content_name:'מבחן המגירה'}); }catch(e){}
  khTrack('done');

  document.getElementById('leadform').classList.add('hidden');
  document.getElementById('loading').classList.remove('hidden');
  window.scrollTo(0,0);
  setTimeout(showResult,1400);
}

function compute(){
  var s={skin:0,ingredients:0,actives:0,order:0,leftover:0};
  Q.forEach(function(q,i){
    var a=ans[i]; if(a===undefined||a===null) return;
    var idxs=Array.isArray(a)?a:[a];
    idxs.forEach(function(ix){
      var sc=q.o[ix] && q.o[ix][1]; if(!sc) return;
      for(var k in sc){ if(s[k]!==undefined) s[k]+=sc[k]; }
    });
  });
  return s;
}
function topGap(){
  var s=compute();
  var order=['skin','ingredients','actives','order','leftover'];
  var arr=order.map(function(k){return {k:k,score:s[k]};});
  arr.sort(function(x,y){ return (y.score-x.score) || (order.indexOf(x.k)-order.indexOf(y.k)); });
  return arr[0].score>=4 ? arr[0].k : null;
}

/* מראה התשובות — נבנית מהתשובות עצמן */
function buildMirror(){
  var frag=MIRROR_Q.map(function(qi){
    var a=ans[qi]; if(a===undefined||a===null) return '';
    var o=Q[qi].o[Array.isArray(a)?a[0]:a];
    return (o && o[2]) ? o[2] : '';
  }).filter(Boolean);
  if(frag.length<2) return '';
  var s1=frag[0]+(frag[1]?', '+frag[1]+'.':'.');
  return s1+(frag[2]?' '+frag[2]:'')+(frag[3]?' '+frag[3]:'');
}

function showResult(){
  var k=topGap();
  var g=k?GAPS[k]:GOOD;
  var mirror=buildMirror();
  document.getElementById('loading').classList.add('hidden');
  var el=document.getElementById('result'); el.classList.remove('hidden');

  el.innerHTML=
    '<div class="rtop">תוצאת מבחן המגירה</div>'+
    '<div class="rtitle">מה שהמבחן גילה עלייך</div>'+
    (mirror?'<div class="rcard youare"><div class="youare-t">ככה נראית המגירה שלך היום, לפי מה שסיפרת:</div><div class="rtext">'+mirror+'</div></div>':'')+
    '<div class="lead">זה לא עניין של איזו צרכנית את. זה עניין של <b>כמה את מכירה את העור שלך</b>, וזה בדיוק מה שאפשר לשנות.</div>'+
    '<div class="lead" style="font-weight:700">'+(k?'לפי התשובות שלך, זה הפער הבולט:':'ומה שעלה אצלך:')+'</div>'+
    '<div class="rcard"><div class="gaptitle">'+g.name+'</div>'+
      '<div class="rtext">'+g.why+'</div>'+
      '<div class="mirror">'+g.fix+'</div></div>'+
    '<div class="closing"><h3>מה עכשיו?</h3>'+
      '<p>'+(k?'<b>הפער הזה הוא לא בעיית אופי. הוא פער ידע</b>, והוא נסגר בדבר אחד: מפה ברורה של העור שלך.':'גם כשיש בסיס טוב, מה שעושה את ההבדל הוא <b>מפה מדויקת של העור שלך</b>.')+'</p>'+
      '<p>מבחן המגירה לא נועד להגיד לך לזרוק הכול, וגם לא לתת אבחון עור מלא. הוא נועד להראות לך למה המגירה מתמלאת בדברים שלא בטוח משרתים אותך: כי הבחירה נעשית בלי מפה.</p>'+
      '<p>ברגע שיש מפה, את יודעת בעצמך מה להשאיר, מה מיותר ומה חסר, בלי לנחש.</p>'+
      '<div class="offer">'+
        '<h3 style="margin-bottom:10px">בדיוק בשביל זה יצרתי את קוד העור</h3>'+
        '<p>תהליך דיגיטלי קצר שמתחיל באבחון אישי, מזהה את מצב העור שלך, ונותן לך מסלול טיפוח שנבנה סביב התוצאה שלך.</p>'+
        '<div class="bridge">מה שסוגר בדיוק את הפער שעלה אצלך:<b>'+g.product+'</b></div>'+
        '<div style="text-align:right;max-width:440px;margin:0 auto 18px">'+
          '<div style="font-weight:800;margin-bottom:8px">מה מחכה לך בפנים:</div>'+
          '<ul style="list-style:none;display:flex;flex-direction:column;gap:7px">'+
          ['האבחון האישי ופרופיל העור שלך','מסלול טיפוח מותאם לסוג העור שקיבלת','הפורמולות המלאות להכנה בבית','חומרי הגלם שמתאימים לך','המדריך האישי שלך להורדה','מפת סינון המגירה','שיעור וידאו להבין את העור']
            .map(function(x){return '<li style="display:flex;gap:9px"><span style="color:var(--gold-deep);font-weight:800">✓</span>'+x+'</li>';}).join('')+
          '</ul></div>'+
        '<p style="font-weight:600">כדי שתפסיקי לבחור לפי ניחוש, ותתחילי לבחור מתוך הבנה.</p>'+
        '<button class="btn btn-primary" onclick="openFront()">אני רוצה את קוד העור שלי ←</button></div>'+
    '</div>';
  window.scrollTo(0,0);
}

function openFront(){ window.location.href='https://yalihodschool.co.il/kod-haor/'; }

khTrack('landing');

(function(){var st=document.createElement('style');st.textContent=
 '.gaptitle{font-size:1.12rem;font-weight:800;color:var(--gold-deep);margin-bottom:8px}'+
 '.lead{max-width:620px;margin:0 auto 16px;font-size:1.06rem;line-height:1.75}'+
 '.youare{background:linear-gradient(160deg,var(--white),var(--cream));border:1px solid var(--cream-deep)}'+
 '.youare-t{font-size:.92rem;font-weight:800;color:var(--gold-deep);letter-spacing:.3px;margin-bottom:10px}'+
 '.youare .rtext{margin-bottom:0;font-size:1.12rem;line-height:1.85}'+
 '.bridge{background:var(--white);border:1px solid var(--gold);border-radius:12px;padding:14px 18px;margin:0 auto 18px;max-width:440px;font-size:1.02rem;color:var(--brown-soft)}'+
 '.bridge b{display:block;margin-top:4px;color:var(--brown);font-size:1.08rem}';
 document.head.appendChild(st);})();
