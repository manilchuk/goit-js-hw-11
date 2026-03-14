import{a as p,S as f,i}from"./assets/vendor-DQvd0HNi.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function d(o){const s="https://pixabay.com",t="/api/",n=new URLSearchParams({key:"55024332-4e4fe5cdde5981dd2414e779d",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${s}${t}?${n}`;return p.get(e).then(r=>r.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),m=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(o){const s=o.map(t=>`<li class="gallery-item">
  <a href="${t.largeImageURL}">
    <img src="${t.webformatURL}" alt="${t.tags}" class="gallery-image" />
  </a>
  <div class="info">
  <p class="info-item"><b>Likes:</b> <span>${t.likes}</span></p>
  <p class="info-item"><b>Views:</b> <span>${t.views}</span></p>
  <p class="info-item"><b>Comments:</b> <span>${t.comments}</span></p>
  <p class="info-item"><b>Downloads:</b> <span>${t.downloads}</span></p>
</div>
</li>`).join("");l.insertAdjacentHTML("beforeend",s),m.refresh()}function h(){l.innerHTML=""}function y(){c.classList.add("visible")}function b(){c.classList.remove("visible")}const u=document.querySelector(".form");u.addEventListener("submit",L);function L(o){o.preventDefault();const s=o.target.elements["search-text"].value.trim();if(!s){i.warning({message:"Please enter a search query!",position:"topRight"});return}h(),y(),d(s).then(t=>{if(t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits)}).catch(t=>{console.log(t),i.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{b(),u.reset()})}
//# sourceMappingURL=index.js.map
