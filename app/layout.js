import './globals.css';

export const metadata = {
  title: 'JAKWO Meme War Ads Arena',
  description: 'Buy. Place. Block. Repeat. Permanent meme ad battlefield.'
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}
<script dangerouslySetInnerHTML={{__html: `
(function(){
  var PUMP_URL = 'https://pump.fun/coin/EgarvX6JFtcqmjXw5aAvk9yTLa3CnwNmdbwAmwPNpump';
  function ready(fn){ if(document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }
  ready(function(){
    var headers = Array.prototype.slice.call(document.querySelectorAll('.topbar,.top-head,.upload-head,header'));
    headers.forEach(function(header){
      if(!header || header.querySelector('[data-jakwo-pump-direct="1"]')) return;
      var existing = header.querySelector('.pump-link');
      if(existing){
        existing.setAttribute('href', PUMP_URL);
        existing.setAttribute('target','_blank');
        existing.setAttribute('rel','noopener noreferrer');
        existing.setAttribute('data-jakwo-pump-direct','1');
        existing.classList.add('pump-direct-header');
        var img = existing.querySelector('img');
        if(img) img.setAttribute('src','/pill.png');
        return;
      }
      var a = document.createElement('a');
      a.href = PUMP_URL;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.setAttribute('aria-label','Open JAKWO on Pump.fun');
      a.setAttribute('data-jakwo-pump-direct','1');
      a.className = 'pump-direct-header';
      var img = document.createElement('img');
      img.src = '/pill.png';
      img.alt = 'Pump.fun JAKWO';
      a.appendChild(img);
      var brand = header.querySelector('.brand') || header.querySelector('a[href="/"]') || header.firstElementChild;
      if(brand && brand.parentNode === header){ brand.insertAdjacentElement('afterend', a); }
      else {
        var row = header.querySelector('.top-actions') || header.querySelector('nav') || header;
        row.insertBefore(a, row.firstChild);
      }
    });
  });
})();
`}} />
</body></html>;
}
