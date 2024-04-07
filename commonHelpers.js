import{i as a,S as m}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="43261093-4c9b6888dd775193ca00ecdb2",f="https://pixabay.com/api/";function h(i){const o=new URLSearchParams({key:d,q:`${i}`,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}?${o}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function p(i){return i.map(({webformatURL:o,largeImageURL:s,tags:r,likes:e,views:t,comments:l,downloads:u})=>`<li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img class="gallery-image" src="${o}" alt="${r}" />
          <ul class="box-list">
            <li>
              <h2 class="box-title">Likes</h2>
              <p class="box-text">${e}</p>
            </li>
            <li>
              <h2 class="box-title">Views</h2>
              <p class="box-text">${t}</p>
            </li>
            <li class="box-item">
              <h2 class="box-title">Comments</h2>
              <p class="box-text">${l}</p>
            </li>
            <li class="box-item">
              <h2 class="box-title">Downloads</h2>
              <p class="box-text">${u}</p>
            </li>
          </ul>
        </a>
      </li>`).join("")}const g=document.querySelector("form"),c=document.querySelector("ul"),n=document.querySelector(".loader");n.style.display="none";g.addEventListener("submit",y);function y(i){i.preventDefault();const o=i.target,s=o.elements.imgname.value;if(s===""){a.show({message:"Field must be filled in!",position:"topRight",backgroundColor:"red",messageColor:"#FFFFFF",transitionIn:"fadeln",timeout:4e3});return}n.style.display="",h(s).then(r=>{if(console.log(r.hits.length),r.hits.length===0){a.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",messageColor:"#FFFFFF",transitionIn:"fadeln",timeout:4e3}),n.style.display="none";return}n.style.display="none",c.innerHTML=p(r.hits),console.log(c),new m(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(r=>alert(r)).finally(()=>o.reset())}
//# sourceMappingURL=commonHelpers.js.map
