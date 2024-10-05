import{a as f,S as p,i as l}from"./assets/vendor-CRCB-GUD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const m="https://pixabay.com/api/",g="32589447-ffbdd7a8f0a573b29764024b7",y=15;async function h(t){console.log(t);const r=new URLSearchParams({...t,key:g,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:y}),a=`${m}?${r}`,{data:{hits:s,totalHits:e},status:o}=await f.get(a);if(o!==200)throw new Error("An error occurred. Please try again later!");return{hits:s,totalHits:e}}const n={form:document.querySelector(".search-container"),gallery:document.querySelector(".gallery-list"),loader:document.querySelector(".loader"),loadbtnEl:document.querySelector('[data-load="load-btn"]')},{gallery:b}=n;function L(t){const{tags:r,comments:a,downloads:s,largeImageURL:e,likes:o,views:i,webformatURL:d}=t;return`<li class="gallery-item">
            <div class="img-container">
             <a href="${e}">
              <img src="${d}" alt="${r}" />
              </a>
            </div>
            <ul class="info-list">
              <li class="info-item">
                <p class="info-name">Likes</p>
                <p class="info-value">${o}</p>
              </li>
              <li>
                <p class="info-name">Views</p>
                <p class="info-value">${i}</p>
              </li>
              <li>
                <p class="info-name">Comments</p>
                <p class="info-value">${a}</p>
              </li>
              <li>
                <p class="info-name">Downloads</p>
                <p class="info-value">${s}</p>
              </li>
            </ul>
          </li>`}const F=t=>{const r=t.map(L).join("");b.insertAdjacentHTML("beforeend",r)},v=new p(".gallery-list a");let u=1,c=null;function w(){u+=1}async function A(t){t.preventDefault();const r=t.currentTarget,{query:a}=r.elements;n.gallery.innerHTML="",n.loader.style.display="block",c=a.value.trim();const s={q:c,page:u};if(!c){l.error({position:"topRight",iconColor:"#FAFAFB",message:"Сan not be empty or contain only spaces!",backgroundColor:"#EF4040"}),n.loader.style.display="none";return}try{const{hits:e,totalHits:o}=await h(s);n.loader.style.display="none",e.length===0?(l.error({position:"topRight",iconColor:"#FAFAFB",message:"Sorry, there are no images matching <br/>your search query. Please try again!",backgroundColor:"#EF4040"}),n.form.reset()):(n.gallery.innerHTML="",F(e),v.refresh())}catch(e){l.error({position:"topRight",iconColor:"#FAFAFB",message:"An error occurred. Please try again later!",backgroundColor:"#FF0000"}),console.log(e)}n.form.reset()}n.form.addEventListener("submit",A);n.loadbtnEl.addEventListener("click",w);
//# sourceMappingURL=index.js.map
