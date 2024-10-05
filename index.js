import{a as y,S as L,i as l}from"./assets/vendor-CRCB-GUD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const b="https://pixabay.com/api/",F="32589447-ffbdd7a8f0a573b29764024b7",u=15;async function m(r){const t=new URLSearchParams({...r,key:F,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:u}),a=`${b}?${t}`,{data:{hits:i,totalHits:e},status:s}=await y.get(a);if(s!==200)throw new Error("An error occurred. Please try again later!");return{hits:i,totalHits:e}}const o={form:document.querySelector(".search-container"),gallery:document.querySelector(".gallery-list"),loader:document.querySelector(".loader"),loadbtnEl:document.querySelector(".load-btn")},{gallery:v}=o;function A(r){const{tags:t,comments:a,downloads:i,largeImageURL:e,likes:s,views:n,webformatURL:h}=r;return`<li class="gallery-item">
            <div class="img-container">
             <a href="${e}">
              <img src="${h}" alt="${t}" />
              </a>
            </div>
            <ul class="info-list">
              <li class="info-item">
                <p class="info-name">Likes</p>
                <p class="info-value">${s}</p>
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
          </li>`}const f=r=>{const t=r.map(A).join("");v.insertAdjacentHTML("beforeend",t)},g=new L(".gallery-list a");let c=1,d=null,p=0;async function E(r){r.preventDefault();const t=r.currentTarget,{query:a}=t.elements;if(d=a.value.trim(),c=1,o.gallery.innerHTML="",o.loader.classList.remove("js-is-hidden"),o.loadbtnEl.classList.add("js-is-hidden"),!d){l.error({position:"topRight",iconColor:"#FAFAFB",message:"Сan not be empty or contain only spaces!",backgroundColor:"#EF4040"}),o.loader.classList.add("js-is-hidden");return}o.loader.classList.remove("js-is-hidden");try{const i={q:d,page:c},{hits:e,totalHits:s}=await m(i);p=Math.ceil(s/u),o.loader.classList.add("js-is-hidden"),o.loadbtnEl.classList.remove("js-is-hidden"),e.length===0?(l.error({position:"topRight",iconColor:"#FAFAFB",message:"Sorry, there are no images matching <br/>your search query. Please try again!",backgroundColor:"#EF4040"}),o.loadbtnEl.classList.add("js-is-hidden"),o.form.reset()):(f(e),g.refresh())}catch(i){l.error({position:"topRight",iconColor:"#FAFAFB",message:"An error occurred. Please try again later!",backgroundColor:"#FF0000"}),o.loader.classList.add("js-is-hidden"),console.log(i)}finally{o.loader.classList.add("js-is-hidden")}o.form.reset()}async function j(){if(c+=1,c>p){o.loadbtnEl.classList.add("js-is-hidden"),l.info({position:"topRight",iconColor:"#FAFAFB",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#FF0000"});return}o.loader.classList.remove("js-is-hidden");try{const r={q:d,page:c},{hits:t}=await m(r);f(t),g.refresh();const i=o.gallery.lastElementChild.getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}catch(r){l.error({position:"topRight",iconColor:"#FAFAFB",message:"An error occurred. Please try again later!",backgroundColor:"#FF0000"}),o.loader.classList.add("js-is-hidden"),console.log(r)}finally{o.loader.classList.add("js-is-hidden")}}o.form.addEventListener("submit",E);o.loadbtnEl.addEventListener("click",j);
//# sourceMappingURL=index.js.map
