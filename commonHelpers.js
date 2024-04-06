(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l="43261093-4c9b6888dd775193ca00ecdb2",c="https://pixabay.com/api/";function u(i){const s=new URLSearchParams({key:l,q:`${i}`,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${c}?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function f(i){return i.map(({webformatURL:s,largeImageURL:r,tags:o,likes:e,views:t,comments:n,downloads:a})=>`<li class="gallery-item">
    <a class="gallery-link" href=${r}>
        <img 
            class="gallery-image" 
            src=${s} 
            alt=${o}
        />
        <div class="box-card">
            <h2 class="box-title">Likes</h2>
            <p class="box-text">${e}</p>
            <h2 class="box-title">Views</h2>
            <p class="box-text">${t}</p>
            <h2 class="box-title">Comments</h2>
            <p class="box-text">${n}</p>
            <h2 class="box-title">Downloads</h2>
            <p class="box-text">${a}</p>
        </div>
    </a>
  </li>`).join("")}const d=document.querySelector("form"),m=document.querySelector("ul");d.addEventListener("submit",h);function h(i){i.preventDefault();const s=i.target,r=s.elements.imgname.value;if(r===""){alert("Field must be filled in!");return}u(r).then(o=>{if(!o.hits.flatMap(t=>t.tags.split(",")).includes(r)){alert("Sorry, there are no images matching your search query. Please try again!");return}m.innerHTML=f(o.hits)}).catch(o=>alert(o)).finally(()=>s.reset())}
//# sourceMappingURL=commonHelpers.js.map
