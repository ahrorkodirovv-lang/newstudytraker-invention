// app.js loader — loads split parts in order
(async function(){
  async function load(url){
    const r = await fetch(url + '?v=1');
    if(!r.ok) throw new Error('Failed to load '+url);
    return r.text();
  }
  try {
    const a = await load('app.part1.js');
    const b = await load('app.part2.js');
    (0, eval)(a + b);
  } catch (e) {
    console.error(e);
    var root = document.getElementById('trRoot');
    if(root) root.innerHTML = '<div class="tr-loading" style="padding:24px">Failed to load app.js<br><pre style="font-size:11px;color:#7A6F60">'+String(e)+'</pre></div>';
  }
})();
