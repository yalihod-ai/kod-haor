
const V=[
 {id:'381411409',t:'חלק 1 — האפידרמיס'},
 {id:'381411435',t:'חלק 2 — הדרמיס'},
 {id:'381411475',t:'חלק 3 — סוגי העור והזדקנות העור'}
];
let cur=0;
function render(){
  document.getElementById('lessons').innerHTML=V.map(function(v,i){
    return '<div class="lesson'+(i===cur?' active':'')+'" onclick="play('+i+')"><span class="num">'+(i+1)+'</span><span class="lt">'+v.t+'</span><span class="play">'+(i===cur?'▶':'○')+'</span></div>';
  }).join('');
}
function play(i){
  cur=i;
  document.getElementById('vplayer').src='https://player.vimeo.com/video/'+V[i].id;
  document.getElementById('nowTitle').textContent=V[i].t;
  render();
}
render();
