import{S as p,i as d}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g="43236176-8efbdba212834d112cbf0fa21",h="https://pixabay.com/api/?";function m(s){const r=new URLSearchParams({key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${h}${r}`).then(i=>{if(!i.ok)throw new Error(i.statusText);return i.json()})}const y=new p(".gallery-list a",{captionsData:"alt",captionDelay:250});function L(s,r){s.innerHTML=S(r),y.refresh()}function S(s){return s.map(({webformatURL:r,largeImageURL:i,tags:n,likes:e,views:t,comments:o,downloads:f})=>` <li class="gallery-item">
        <a class="gallery-link" href="${i}">
          <figure class="gallery-figure">
            <img
              class="gallery-image"
              src="${r}"
              alt="${n}"
              width="360"
            />
            <figcaption class="gallery-figcaption">
              <ul class="gallery-text">
                <li>
                  <span>Likes</span>
                  <p>${e}</p>
                </li>
                <li>
                  <span>Views</span>
                  <p>${t}</p>
                </li>
                <li>
                  <span>Comments</span>
                  <p>${o}</p>
                </li>
                <li>
                  <span>Downloads</span>
                  <p>${f}</p>
                </li>
              </ul>
            </figcaption>
          </figure>
        </a>
      </li>`).join("")}const l=document.querySelector(".js-search-form"),b=document.querySelector(".search-input"),c=document.querySelector(".gallery-list"),a=document.querySelector(".loader-wrapper");l.addEventListener("submit",P);function P(s){s.preventDefault(),c.innerHTML="",a.classList.remove("is-hidden");const r=b.value.trim();if(r===""){u("Please fill out the input field!"),l.reset(),a.classList.add("is-hidden");return}m(r).then(i=>{if(i.hits.length===0){u("Sorry, there are no images matching your search query. Please try again!");return}L(c,i.hits)}).catch(i=>console.log(i)).finally(()=>{a.classList.add("is-hidden"),l.reset()})}const $={title:"",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff",titleColor:"#fff",timeout:3e3,pauseOnHover:!1};function u(s){d.error({...$,message:`${s}`})}
//# sourceMappingURL=commonHelpers.js.map
