import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "JAKWO Meme War Ads",
  description: "Clickable Solana meme ad war wall",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}<script dangerouslySetInnerHTML={{__html: `(function(){
  var URL='https://pump.fun/coin/EgarvX6JFtcqmjXw5aAvk9yTLa3CnwNmdbwAmwPNpump';
  function addPump(){
    if(document.getElementById('jakwo-pump-direct')) return;
    var header=document.querySelector('header.topbar')||document.querySelector('header')||document.querySelector('.topbar')||document.querySelector('.top-head')||document.querySelector('.upload-head');
    if(!header) return;
    var wrap=header.querySelector('.top-actions')||header.querySelector('nav')||header.querySelector('div:last-child')||header;
    var a=document.createElement('a');
    a.id='jakwo-pump-direct';
    a.className='pump-link jakwo-pump-direct';
    a.href=URL;
    a.target='_blank';
    a.rel='noopener noreferrer';
    a.setAttribute('aria-label','Open JAKWO on Pump.fun');
    a.innerHTML='<img src="/pump-pill.jpg" alt="Pump.fun JAKWO" />';
    var kids=Array.prototype.slice.call(wrap.children || []);
    var firstWallet=kids.find(function(el){return /connect|phantom|wallet|4tu|bliu/i.test((el.textContent||'') + ' ' + (el.className||''));});
    if(firstWallet) wrap.insertBefore(a, firstWallet); else wrap.insertBefore(a, wrap.firstChild);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',addPump); else addPump();
  setTimeout(addPump,300); setTimeout(addPump,1200); setTimeout(addPump,2500);
})();`}} /></body></html>
}
