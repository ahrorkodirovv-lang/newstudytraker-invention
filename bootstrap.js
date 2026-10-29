/* loader: fetch b64 parts, gunzip, eval */
(async function(){
  async function get(u){ const r=await fetch(u+'?v=2'); if(!r.ok) throw new Error(u); return r.text(); }
  async function inflate(b64){
    const bin=Uint8Array.from(atob(b64),c=>c.charCodeAt(0));
    const stream=new Blob([bin]).stream().pipeThrough(new DecompressionStream('gzip'));
    return await new Response(stream).text();
  }
  try {
    const cssB64 = await get('css.b64');
    const style=document.createElement('style');
    style.textContent=await inflate(cssB64);
    document.head.appendChild(style);
    let appB64='';
    for (let i=0;i<2;i++) appB64 += await get('app.b64.'+i);
    (0,eval)(await inflate(appB64));
  } catch(e) {
    console.error(e);
    var root=document.getElementById('trRoot');
    if(root) root.innerHTML='<div style="padding:24px;color:#F5EFE6;font-family:monospace">Failed: '+String(e)+'</div>';
  }
})();
