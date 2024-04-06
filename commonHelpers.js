import{S as p,i as d}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g="43236176-8efbdba212834d112cbf0fa21",h="https://pixabay.com/api/?";function m(r){const s=new URLSearchParams({key:g,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${h}${s}`).then(i=>{if(!i.ok)throw new Error(i.statusText);return i.json()})}const y=new p(".gallery-list a",{captionsData:"alt",captionDelay:250});function L(r,s){r.innerHTML=S(s),y.refresh()}function S(r){return r.map(({webformatURL:s,largeImageURL:i,tags:a,likes:e,views:t,comments:o,downloads:f})=>` <li class="gallery-item">
        <a class="gallery-link" href="${i}">
          <figure class="gallery-figure">
            <img
              class="gallery-image"
              src="${s}"
              alt="${a}"
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
      </li>`).join("")}const u=document.querySelector(".js-search-form"),b=document.querySelector(".search-input"),l=document.querySelector(".gallery-list"),n=document.querySelector(".loader-wrapper");u.addEventListener("submit",P);function P(r){r.preventDefault(),l.innerHTML="",n.classList.remove("is-hidden");const s=b.value.trim();if(s===""){c("Please fill out the input field!"),r.currentTarget.reset(),n.classList.add("is-hidden");return}m(s).then(i=>{if(i.hits.length===0){c("Sorry, there are no images matching your search query. Please try again!"),n.classList.add("is-hidden");return}L(l,i.hits),n.classList.add("is-hidden")}).catch(i=>console.log(i)).finally(()=>{u.reset()}),r.currentTarget.reset()}const $={title:"",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff",titleColor:"#fff",timeout:3e3,pauseOnHover:!1};function c(r){d.error({...$,message:`${r}`})}
//# sourceMappingURL=commonHelpers.js.map
