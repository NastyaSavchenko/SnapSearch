import{a as y,S as L,i as l}from"./assets/vendor-CRCB-GUD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const b="https://pixabay.com/api/",F="32589447-ffbdd7a8f0a573b29764024b7",m=15;async function f(t){const r=new URLSearchParams({...t,key:F,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:m}),a=`${b}?${r}`,{data:{hits:i,totalHits:e},status:o}=await y.get(a);if(o!==200)throw new Error("An error occurred. Please try again later!");return{hits:i,totalHits:e}}const s={form:document.querySelector(".search-container"),gallery:document.querySelector(".gallery-list"),loader:document.querySelector(".loader"),loadbtnEl:document.querySelector(".load-btn")},{gallery:v}=s;function E(t){const{tags:r,comments:a,downloads:i,largeImageURL:e,likes:o,views:n,webformatURL:h}=t;return`<li class="gallery-item">
            <div class="img-container">
             <a href="${e}">
              <img src="${h}" alt="${r}" />
              </a>
            </div>
            <ul class="info-list">
              <li class="info-item">
                <p class="info-name">Likes</p>
                <p class="info-value">${o}</p>
              </li>
              <li>
                <p class="info-name">Views</p>
                <p class="info-value">${n}</p>
              </li>
              <li>
                <p class="info-name">Comments</p>
                <p class="info-value">${a}</p>
              </li>
              <li>
                <p class="info-name">Downloads</p>
                <p class="info-value">${i}</p>
              </li>
            </ul>
          </li>`}const g=t=>{const r=t.map(E).join("");v.insertAdjacentHTML("beforeend",r)},p=new L(".gallery-list a");let c=1,d=null,u=0;async function A(t){t.preventDefault();const r=t.currentTarget,{query:a}=r.elements;if(d=a.value.trim(),c=1,s.gallery.innerHTML="",s.loader.classList.remove("js-is-hidden"),s.loadbtnEl.classList.add("js-is-hidden"),!d){l.error({position:"topRight",iconColor:"#FAFAFB",message:"Сan not be empty or contain only spaces!",backgroundColor:"#EF4040"}),s.loader.classList.add("js-is-hidden");return}s.loader.classList.remove("js-is-hidden");try{const i={q:d,page:c},{hits:e,totalHits:o}=await f(i);u=Math.ceil(o/m),s.loader.classList.add("js-is-hidden"),u<=1?s.loadbtnEl.classList.add("js-is-hidden"):s.loadbtnEl.classList.remove("js-is-hidden"),e.length===0?(l.error({position:"topRight",iconColor:"#FAFAFB",message:"Sorry, there are no images matching <br/>your search query. Please try again!",backgroundColor:"#EF4040"}),s.loadbtnEl.classList.add("js-is-hidden"),s.form.reset()):(g(e),p.refresh())}catch(i){l.error({position:"topRight",iconColor:"#FAFAFB",message:"An error occurred. Please try again later!",backgroundColor:"#FF0000"}),s.loader.classList.add("js-is-hidden"),console.log(i)}finally{s.loader.classList.add("js-is-hidden")}s.form.reset()}async function j(){c+=1,s.loader.classList.remove("js-is-hidden");try{const t={q:d,page:c},{hits:r}=await f(t);if(g(r),p.refresh(),c===u){s.loadbtnEl.classList.add("js-is-hidden"),l.info({position:"topRight",iconColor:"#FAFAFB",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#FF0000"});return}const i=s.gallery.lastElementChild.getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}catch(t){l.error({position:"topRight",iconColor:"#FAFAFB",message:"An error occurred. Please try again later!",backgroundColor:"#FF0000"}),s.loader.classList.add("js-is-hidden"),console.log(t)}finally{s.loader.classList.add("js-is-hidden")}}s.form.addEventListener("submit",A);s.loadbtnEl.addEventListener("click",j);
//# sourceMappingURL=index.js.map
