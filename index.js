import{S as f,i as m}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",d="32589447-ffbdd7a8f0a573b29764024b7";function g(o="pug"){return fetch(`${p}?key=${d}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error("error");return t.json()})}const y=document.querySelector(".gallery-list");function h(o){const{tags:t,comments:s,downloads:n,largeImageURL:e,likes:r,views:i,webformatURL:u}=o;return`<li class="gallery-item">
            <div class="img-container">
             <a href="${e}">
              <img src="${u}" alt="${t}" />
              </a>
            </div>
            <ul class="info-list">
              <li class="info-item">
                <p class="info-name">Likes</p>
                <p class="info-value">${r}</p>
              </li>
              <li>
                <p class="info-name">Views</p>
                <p class="info-value">${i}</p>
              </li>
              <li>
                <p class="info-name">Comments</p>
                <p class="info-value">${s}</p>
              </li>
              <li>
                <p class="info-name">Downloads</p>
                <p class="info-value">${n}</p>
              </li>
            </ul>
          </li>`}const b=o=>{const t=o.map(h).join("");y.insertAdjacentHTML("beforeend",t)},l=document.querySelector(".search-container"),a=document.querySelector(".gallery-list"),L=new f(".gallery-list a"),c=document.querySelector(".loader");function v(o){o.preventDefault();const t=o.currentTarget,{query:s}=t.elements;a.innerHTML="",c.style.display="block",g(s.value.trim()).then(n=>{const e=n.hits;e.length===0?(m.error({position:"topRight",iconColor:"#FAFAFB",message:"Sorry, there are no images matching <br/>your search query. Please try again!",backgroundColor:"#EF4040"}),l.reset()):(a.innerHTML="",b(e),L.refresh())}).catch(n=>{console.error(n)}).finally(()=>{c.style.display="none"}),l.reset()}l.addEventListener("submit",v);
//# sourceMappingURL=index.js.map
