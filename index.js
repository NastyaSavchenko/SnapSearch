import{a as y,S as L,i as c}from"./assets/vendor-CRCB-GUD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const b="https://pixabay.com/api/",F="32589447-ffbdd7a8f0a573b29764024b7",m=15;async function g(r){const t=new URLSearchParams({...r,key:F,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:m}),i=`${b}?${t}`,{data:{hits:a,totalHits:e},status:s}=await y.get(i);if(s!==200)throw new Error("An error occurred. Please try again later!");return{hits:a,totalHits:e}}const o={form:document.querySelector(".search-container"),gallery:document.querySelector(".gallery-list"),loader:document.querySelector(".loader"),loadbtnEl:document.querySelector(".load-btn")},{gallery:v}=o;function A(r){const{tags:t,comments:i,downloads:a,largeImageURL:e,likes:s,views:l,webformatURL:h}=r;return`<li class="gallery-item">
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
                <p class="info-value">${l}</p>
              </li>
              <li>
                <p class="info-name">Comments</p>
                <p class="info-value">${i}</p>
              </li>
              <li>
                <p class="info-name">Downloads</p>
                <p class="info-value">${a}</p>
              </li>
            </ul>
          </li>`}const f=r=>{const t=r.map(A).join("");v.insertAdjacentHTML("beforeend",t)},p=new L(".gallery-list a");let n=1,d=null,u=0;async function E(r){r.preventDefault();const t=r.currentTarget,{query:i}=t.elements;if(d=i.value.trim(),n=1,console.log("pages:",u),console.log("page:",n),o.gallery.innerHTML="",o.loader.classList.remove("js-is-hidden"),o.loadbtnEl.classList.add("js-is-hidden"),!d){c.error({position:"topRight",iconColor:"#FAFAFB",message:"Сan not be empty or contain only spaces!",backgroundColor:"#EF4040"}),o.loader.classList.add("js-is-hidden");return}o.loader.classList.remove("js-is-hidden");try{const a={q:d,page:n},{hits:e,totalHits:s}=await g(a);u=Math.ceil(s/m),o.loader.classList.add("js-is-hidden"),o.loadbtnEl.classList.remove("js-is-hidden"),e.length===0?(c.error({position:"topRight",iconColor:"#FAFAFB",message:"Sorry, there are no images matching <br/>your search query. Please try again!",backgroundColor:"#EF4040"}),o.loadbtnEl.classList.add("js-is-hidden"),o.form.reset()):(f(e),p.refresh())}catch(a){c.error({position:"topRight",iconColor:"#FAFAFB",message:"An error occurred. Please try again later!",backgroundColor:"#FF0000"}),o.loader.classList.add("js-is-hidden"),console.log(a)}finally{o.loader.classList.add("js-is-hidden")}o.form.reset()}async function j(){if(n>=u){o.loadbtnEl.classList.add("js-is-hidden"),c.info({position:"topRight",iconColor:"#FAFAFB",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#FF0000"});return}n+=1,o.loader.classList.remove("js-is-hidden");try{const r={q:d,page:n},{hits:t}=await g(r);f(t),p.refresh();const a=o.gallery.lastElementChild.getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}catch(r){c.error({position:"topRight",iconColor:"#FAFAFB",message:"An error occurred. Please try again later!",backgroundColor:"#FF0000"}),o.loader.classList.add("js-is-hidden"),console.log(r)}finally{o.loader.classList.add("js-is-hidden")}}o.form.addEventListener("submit",E);o.loadbtnEl.addEventListener("click",j);
//# sourceMappingURL=index.js.map
