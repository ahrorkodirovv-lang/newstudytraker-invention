/* Study Tracker full-page loader v6 */
(async function(){
  async function get(u){
    const r = await fetch(u + '?v=6');
    if (!r.ok) throw new Error(u + ' ' + r.status);
    return r.text();
  }
  async function inflate(b64){
    const bin = Uint8Array.from(atob(b64), c => c.charCodeAt(0));
    const stream = new Blob([bin]).stream().pipeThrough(new DecompressionStream('gzip'));
    return await new Response(stream).text();
  }
  const root = document.getElementById('trRoot') || document.body;
  try {
    let b64 = '';
    for (let i = 0; i < 6; i++) b64 += await get('./app.b64.' + i);
    const html = await inflate(b64);
    document.open();
    document.write(html);
    document.close();
  } catch (e) {
    console.error(e);
    root.innerHTML = '<pre style="color:#F5EFE6;padding:24px;font-family:monospace;white-space:pre-wrap">Failed to load Study Tracker:\n' + String(e) + '\n\nHard refresh (Ctrl+Shift+R) after redeploy.</pre>';
  }
})();
