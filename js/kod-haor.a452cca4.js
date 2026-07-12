
var PAY97='https://icom.yaad.net/p/?Amount=9700&Coin=1&FixTash=False&Info=%D7%A7%D7%95%D7%93%20%D7%94%D7%A2%D7%95%D7%A8&Masof=4501400931&MoreData=True&Order=KODHAOR-97&PageLang=HEB&Tash=1&UTF8=True&UTF8out=True&action=pay&sendemail=True&signature=d3c5385be5257ff83b5bc4948f30788c1036a665cc1df9ec3b82f3c65afb56a1';
function goPay(e){
  e.preventDefault();
  try{ var f=e.target;
    localStorage.setItem('kh_lead', JSON.stringify({name:f.name.value,email:f.email.value,phone:f.phone.value}));
    localStorage.setItem('kh_email', f.email.value);
  }catch(err){}
  window.location.href=PAY97;
  return false;
}
