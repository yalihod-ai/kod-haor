
/* טיפוסים: h=hoarder a=automatic p=promiseBuyer o=overloader */
var GAPS={
 skin:{name:'את לא יודעת מה מצב העור שלך היום',
   why:'כל עוד אין לך תמונה ברורה של מצב העור, כל בחירת מוצר היא בעצם ניחוש — גם אם היא בחירה יקרה.',
   fix:'הצעד הראשון הוא פשוט: לזהות את מצב העור שלך עכשיו, ולבנות ממנו את כל השאר.'},
 ingredients:{name:'את בוחרת בלי לדעת מה יש בפנים',
   why:'האריזה מספרת סיפור. רשימת הרכיבים מספרת מה באמת נמצא במוצר — ואלה לא תמיד אותו דבר.',
   fix:'ברגע שיודעים מה לחפש ברשימת הרכיבים, קל הרבה יותר לבחור נכון ולחסוך כסף.'},
 actives:{name:'את משלבת חומרים פעילים בלי מפה',
   why:'חומרים פעילים הם כלי מצוין — אבל בלי לדעת מה מותר לשלב, באיזה סדר ובאיזו תדירות, הם עלולים להעמיס על העור במקום לעזור לו.',
   fix:'צריך סדר ברור: מה מתאים לעור שלך, מה משלבים ומה מפרידים.'},
 order:{name:'לשגרה שלך אין עדיין סדר ברור',
   why:'כשאין שיטה, קל להוסיף עוד ועוד מוצרים — ועדיין לא לדעת מה מהם באמת עובד בשבילך.',
   fix:'שגרה טובה היא לא הרבה מוצרים. היא המוצרים הנכונים, בסדר הנכון.'},
 leftover:{name:'יש במגירה מוצרים שנשארו בלי סיבה ברורה',
   why:'מוצרים שממשיכים לשבת שם "ליתר ביטחון" או כי חבל לזרוק — הם סימן שחסרה נקודת ייחוס שתעזור להחליט.',
   fix:'עם פרופיל עור ברור קל להחליט מה נשאר, מה מושהה ומה פשוט לא בשבילך.'}
};
,
   sec:'יכול להיות שיש אצלך גם לא מעט מוצרים שנשארו במגירה בלי תפקיד ברור. שווה לבדוק מה באמת בשימוש, מה כפול, ומה נשאר רק כי חבל לזרוק.'},
 a:{name:'המשתמשת האוטומטית',
   full:'יש לך שגרת טיפוח יחסית קבועה, אבל לא בטוח שהיא עדיין מתאימה לעור שלך עכשיו.\nיכול להיות שאת משתמשת באותם מוצרים כבר חודשים או שנים, כי התרגלת אליהם, כי הם זמינים, כי הם פעם עבדו לך, או כי פשוט לא עצרת לבדוק אם הם עדיין נכונים לך.\nאבל העור משתנה עם גיל, עונות, הורמונים, סטרס, שינה, תזונה ואורח חיים.\nמוצר שהתאים לך בעבר לא בהכרח נותן לעור שלך את מה שהוא צריך היום.',
   mirror:'זה שמוצר עבד לך פעם לא אומר שהוא הבחירה המדויקת עבורך עכשיו.',
   u:['שיכול להיות שהשגרה שלך יציבה, אבל לא מספיק מעודכנת למצב העור הנוכחי','שכדי לבחור נכון צריך להבין מה העור שלך צריך עכשיו — לא רק מה עבד בעבר','שיכול להיות שחסרה לך לחות, הזנה, שיקום, איזון או תמיכה אחרת לגמרי','שהשלב הבא הוא אבחון קצר שמתרגם את מצב העור למסלול טיפוח ברור','שקוד העור יכול לעזור לך לעבור משגרה אוטומטית לשגרה מותאמת'],
   sec:'יכול להיות שאת ממשיכה עם חלק מהמוצרים מתוך הרגל, גם אם את כבר לא בטוחה שהם מתאימים למה שהעור שלך צריך עכשיו.'},
 p:{name:'הקונה לפי הבטחה',
   full:'את כנראה מושפעת לא מעט מהבטחות של מוצרים: אנטי־אייג׳ינג, זוהר, מיצוק, לחות, עור חלק, עור קורן, מוצר יוקרתי או המלצה שנשמעה משכנעת.\nוזה טבעי. עולם הטיפוח בנוי בדיוק על זה.\nאבל הבעיה היא שהאריזה מספרת סיפור — ולא תמיד הסיפור הזה באמת מחובר למה שהעור שלך צריך עכשיו.\nיכול להיות שיש לך מוצרים טובים. יכול להיות שחלקם איכותיים ויקרים. אבל בלי להבין מה מצב העור שלך, מה הוא צריך ומה המסלול הנכון עבורו — גם מוצר טוב יכול להפוך לעוד ניחוש במגירה.',
   mirror:'לא כל מוצר שנראה מקצועי באמת מתאים לעור שלך.',
   u:['שאת לא צריכה עוד הבטחה יפה על אריזה — את צריכה להבין מה העור שלך צריך באמת','שכדי לדעת אם מוצר מתאים לך, צריך להתחיל מתמונת מצב של העור ולא רק מהבטחות המוצר','שגם מוצר יקר, טבעי או מומלץ יכול להיות לא מדויק עבורך אם הוא לא מתאים לפרופיל העור שלך','שהשלב הבא הוא אבחון אישי שמראה מה מצב העור המרכזי שלך','שמשם אפשר לבנות מסלול ברור: שגרה, חומרי גלם ומתכונים שמתאימים לך'],
   sec:'יכול להיות שחלק מהבחירות שלך מושפעות מהמלצות, מותגים, מחיר, אריזה או מילים יפות — יותר מאשר מהבנה ברורה של מצב העור שלך.'},
 o:{name:'המעמיסה החרוצה',
   full:'את לא מזניחה את העור שלך. להפך — את משקיעה, מתעניינת, מנסה, מוסיפה מוצרים ורוצה לראות תוצאה.\nיכול להיות שאת משתמשת בכמה סרומים, חומרים פעילים, מסכות, חומצות, ויטמין C, ניאצינאמיד, רטינול או מוצרים אחרים שמבטיחים שיפור.\nאבל בלי להבין מה העור שלך באמת צריך עכשיו, קל מאוד להפוך שגרה טובה לעומס.\nלפעמים עוד מוצר לא פותר את הבעיה. לפעמים הוא פשוט מוסיף עוד שכבה של בלבול.',
   mirror:'העור שלך לא תמיד צריך יותר. לפעמים הוא צריך מדויק יותר.',
   u:['שאת משקיעה בעור, אבל אולי חסר לך סדר ברור במה באמת נחוץ כרגע','שכדי לדעת מה לשלב ומה להוריד, צריך להתחיל מהבנת מצב העור','שלא כל חומר פעיל מתאים לכל עור, ולא בכל שלב','שהשלב הבא הוא מסלול שמראה במה להתמקד: לחות, הזנה, שיקום, איזון, הרגעה או תמיכה בעור בוגר','שקוד העור יכול לעזור לך להפוך השקעה קטנה לשגרה פשוטה, מדויקת וברורה יותר'],
   sec:'יכול להיות שאת משקיעה הרבה בעור, אבל לא תמיד בטוחה מה באמת נחוץ, מה אפשר לשלב, ומה כבר מתחיל להיות יותר מדי.'}
};

var Q=[
 {t:'כמה מוצרי טיפוח לפנים יש לך כרגע?',o:[
   ['1–3 מוצרים',{}],
   ['4–6 מוצרים',{order:1}],
   ['7–10 מוצרים',{order:2,leftover:1}],
   ['יותר מ־10 (או שאני כבר לא בטוחה)',{order:3,leftover:2}]]},
 {t:'בכמה מהם את באמת משתמשת בשבוע רגיל?',o:[
   ['כמעט בכולם',{}],
   ['בערך בחצי',{leftover:2}],
   ['רק ב־2–3 קבועים',{leftover:1}],
   ['אני קונה יותר ממה שאני באמת משתמשת',{leftover:3,order:1}]]},
 {t:'את יודעת מה המטרה של כל מוצר שיש לך?',o:[
   ['כן, ברור לי בדיוק',{}],
   ['בערך, אבל לא לגבי כולם',{order:1}],
   ['לא ממש',{order:2,ingredients:1}],
   ['יש מוצרים שאני לא יודעת למה קניתי',{order:3,leftover:2}]]},
 {t:'מה הכי משפיע עלייך כשאת קונה מוצר?',o:[
   ['רשימת הרכיבים וההתאמה לצרכים שלי',{}],
   ['המלצה של מישהי',{ingredients:2}],
   ['פרסום, משפיענית או מותג מוכר',{ingredients:3}],
   ['מה שכתוב על האריזה',{ingredients:3,skin:1}]]},
 {t:'את יודעת מה סוג העור שלך היום?',o:[
   ['כן, ואני בטוחה בזה',{}],
   ['בערך, לפעמים אני מתבלבלת',{skin:2}],
   ['חשבתי שכן — אבל העור שלי השתנה',{skin:3}],
   ['לא ממש',{skin:3,ingredients:1}]]},
 {t:'את יודעת מה העור שלך צריך עכשיו?',o:[
   ['כן, ברור לי מה חסר לו',{}],
   ['בערך, לא תמיד יודעת מה לבחור',{skin:2}],
   ['לא בטוחה — הוא משתנה',{skin:3}],
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
   ['לא, אני קוראת את ההבטחות על האריזה',{ingredients:3}]]},
 {t:'יש מוצרים שאת ממשיכה איתם למרות שאת לא בטוחה שהם עושים לך טוב?',o:[
   ['לא, אני משתמשת רק במה שמתאים לי',{}],
   ['לפעמים',{leftover:2}],
   ['כן — הם היו יקרים, חבל לי לזרוק',{leftover:3}],
   ['כן — אין לי במה להחליף אותם',{leftover:3,skin:1}]]}
];
let step=0; const ans={};
function selected(i){const a=ans[step];return Array.isArray(a)?a.includes(i):a===i;}
function canNext(){const a=ans[step];return Array.isArray(a)?a.length>0:a!=null;}
function startQuiz(){document.getElementById('landing').classList.add('hidden');document.getElementById('quiz').classList.remove('hidden');step=0;render();window.scrollTo(0,0);return false;}
function render(){
  const q=Q[step];
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

function showLead(){document.getElementById('quiz').classList.add('hidden');document.getElementById('leadform').classList.remove('hidden');window.scrollTo(0,0);}
function submitLead(){
  const name=document.getElementById('fName').value.trim();
  const email=document.getElementById('fEmail').value.trim();
  const consent=document.getElementById('fConsent').checked;
  const err=document.getElementById('leadErr');
  if(!name){err.textContent='בבקשה מלאי שם.';return;}
  if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){err.textContent='נראה שהמייל לא תקין. בדקי שוב ונסי מחדש.';return;}
  if(!consent){err.textContent='כדי לקבל את התוצאה, יש לאשר קבלת מיילים.';return;}
  err.textContent='';
  try{
    var _s = compute();
    var _order = ['o','p','a','h'];
    var _arr = Object.keys(TYPES).map(function(k){return {k:k, score:_s[k]};});
    _arr.sort(function(x,y){ return (y.score-x.score) || (_order.indexOf(x.k)-_order.indexOf(y.k)); });
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
function topGaps(){
  var s=compute();
  var order=['skin','ingredients','actives','order','leftover'];
  var arr=order.map(function(k){return {k:k,score:s[k]};});
  arr.sort(function(x,y){ return (y.score-x.score) || (order.indexOf(x.k)-order.indexOf(y.k)); });
  var hits=arr.filter(function(x){return x.score>0;}).slice(0,3);
  if(hits.length===0) hits=[arr[0]];
  return hits;
}

function showResult(forceK){
  var hits=topGaps();
  document.getElementById('loading').classList.add('hidden');
  var el=document.getElementById('result'); el.classList.remove('hidden');
  var gapsHtml=hits.map(function(h){
    var g=GAPS[h.k];
    return '<div class="rcard"><div class="gaptitle">🔹 '+g.name+'</div>'+
           '<div class="rtext">'+g.why+'</div>'+
           '<div class="mirror">'+g.fix+'</div></div>';
  }).join('');
  el.innerHTML=
    '<div class="rtop">✦ תוצאת מבחן המגירה</div>'+
    '<div class="rtitle">מה שהמבחן גילה עלייך</div>'+
    '<div class="lead">זה לא עניין של איזו צרכנית את. זה עניין של <b>כמה את מכירה את העור שלך</b> — וזה בדיוק מה שאפשר לשנות.</div>'+
    '<div class="lead" style="font-weight:700">לפי התשובות שלך, אלה הפערים הבולטים:</div>'+
    gapsHtml+
    '<div class="closing"><h3>מה עכשיו?</h3>'+
      '<p><b>הפערים האלה הם לא בעיות אופי. הם פערי ידע</b> — וכולם נסגרים בדבר אחד: מפה ברורה של העור שלך.</p>'+
      '<p>מבחן המגירה לא נועד להגיד לך לזרוק הכול, וגם לא לתת אבחון עור מלא. הוא נועד להראות לך למה המגירה מתמלאת בדברים שלא בטוח משרתים אותך: כי הבחירה נעשית בלי מפה.</p>'+
      '<p>ברגע שיש מפה, את יודעת בעצמך מה להשאיר, מה מיותר ומה חסר — בלי לנחש.</p>'+
      '<div class="offer">'+
        '<h3 style="margin-bottom:10px">בדיוק בשביל זה יצרתי את קוד העור</h3>'+
        '<p>תהליך דיגיטלי קצר שמתחיל באבחון אישי, מזהה את מצב העור שלך, ונותן לך מסלול טיפוח שנבנה סביב התוצאה שלך.</p>'+
        '<div style="text-align:right;max-width:440px;margin:0 auto 18px">'+
          '<div style="font-weight:800;margin-bottom:8px">מה מחכה לך בפנים:</div>'+
          '<ul style="list-style:none;display:flex;flex-direction:column;gap:7px">'+
          ['האבחון האישי ופרופיל העור שלך','מסלול טיפוח מותאם לסוג העור שקיבלת','הפורמולות המלאות להכנה בבית','חומרי הגלם שמתאימים לך','המדריך האישי שלך להורדה','מפת סינון המגירה','שיעור וידאו "להבין את העור"']
            .map(function(x){return '<li style="display:flex;gap:9px"><span style="color:var(--gold-deep);font-weight:800">✓</span>'+x+'</li>';}).join('')+
          '</ul></div>'+
        '<p style="font-weight:600">כדי שתפסיקי לבחור לפי ניחוש — ותתחילי לבחור מתוך הבנה.</p>'+
        '<button class="btn btn-primary" onclick="openFront()">אני רוצה את קוד העור שלי ←</button></div>'+
    '</div>';
  window.scrollTo(0,0);
}

function openFront(){ window.location.href='https://yalihodschool.co.il/kod-haor/'; }
/* תצוגת תוצאה ישירה לכל טיפוס: ?type=h / a / p / o */
(function(){var t=new URLSearchParams(location.search).get('type');
  if(['h','a','p','o'].indexOf(t)>-1){document.getElementById('landing').classList.add('hidden');showResult(t);}
})();

(function(){var st=document.createElement('style');st.textContent='.gaptitle{font-size:1.12rem;font-weight:800;color:var(--gold-deep);margin-bottom:8px}.lead{max-width:620px;margin:0 auto 16px;font-size:1.06rem;line-height:1.75}';document.head.appendChild(st);})();
