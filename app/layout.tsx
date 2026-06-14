import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "JAKWO Meme War Ads",
  description: "Clickable Solana meme ad war wall",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}<script dangerouslySetInnerHTML={{__html: `(function(){
  var URL='https://pump.fun/coin/EgarvX6JFtcqmjXw5aAvk9yTLa3CnwNmdbwAmwPNpump';
  function ensurePump(){
    var existing=document.querySelector('.jakwo-pump-exact');
    if(existing){ existing.href=URL; existing.target='_blank'; existing.rel='noopener noreferrer'; return; }
    var actions=document.querySelector('.top-actions') || document.querySelector('.upload-head > div') || document.querySelector('header .flex.items-center.gap-3') || document.querySelector('header nav') || document.querySelector('header');
    if(!actions) return;
    var a=document.createElement('a');
    a.href=URL; a.target='_blank'; a.rel='noopener noreferrer';
    a.className='jakwo-pump-exact';
    a.setAttribute('aria-label','Open JAKWO on Pump.fun');
    a.innerHTML='<img src="/pump-pill.jpg" alt="Pump.fun JAKWO">';
    actions.insertBefore(a, actions.firstChild);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', ensurePump); else ensurePump();
  setTimeout(ensurePump,500); setTimeout(ensurePump,1500);
})();`}} /><script dangerouslySetInnerHTML={{__html: `(function(){
  var URL='https://pump.fun/coin/EgarvX6JFtcqmjXw5aAvk9yTLa3CnwNmdbwAmwPNpump';
  function installPump(){
    var existing=document.querySelector('a[data-jakwo-pump], a.pump-link');
    if(existing){
      existing.href=URL;
      existing.target='_blank';
      existing.rel='noopener noreferrer';
      existing.style.pointerEvents='auto';
      existing.style.display='inline-flex';
      if(!existing.querySelector('img')) existing.innerHTML='<img src="/pump-pill.jpg" alt="Pump.fun JAKWO">';
      return;
    }
    var header=document.querySelector('header.topbar, .topbar, .top-head, .upload-head, header');
    if(!header) return;
    var a=document.createElement('a');
    a.href=URL;
    a.target='_blank';
    a.rel='noopener noreferrer';
    a.setAttribute('data-jakwo-pump','true');
    a.className='pump-direct-link';
    a.setAttribute('aria-label','Open JAKWO on Pump.fun');
    a.innerHTML='<img src="/pump-pill.jpg" alt="Pump.fun JAKWO">';
    var actions=header.querySelector('.top-actions, .actions, nav') || header.lastElementChild;
    if(actions && actions.appendChild){ actions.insertBefore(a, actions.firstChild); }
    else { header.appendChild(a); }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', installPump); else installPump();
  setTimeout(installPump,500);
  setTimeout(installPump,1500);
})();`}} /></body></html>
}
