
try{ var e=localStorage.getItem('kh_email'); if(e) document.getElementById('email').value=e; }catch(x){}
function enter(){
  var v=document.getElementById('email').value.trim();
  if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)){ document.getElementById('err').textContent='בבקשה הכניסי כתובת מייל תקינה.'; return; }
  try{ localStorage.setItem('kh_email',v); localStorage.setItem('kh_paid','1'); }catch(x){}
  window.location.href='https://yalihodschool.co.il/kod-haor-diagnosis/';
}
