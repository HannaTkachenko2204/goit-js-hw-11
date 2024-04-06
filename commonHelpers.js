(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();const a=document.querySelector("form"),u=document.querySelector("ul"),f="43261093-4c9b6888dd775193ca00ecdb2",d="https://pixabay.com/api/";a.addEventListener("submit",i=>{i.preventDefault();const r=i.target,n=r.elements.imgname.value;if(n===""){alert("Field must be filled in!");return}const s=new URLSearchParams({key:f,q:`${n}`,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`${d}?${s}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{console.log(e),u.insertAdjacentHTML("beforeend",t(e.hits))}).catch(e=>alert(e));function t(e){return e.map(({previewURL:o,largeImageURL:c,tags:l})=>`<li class="gallery-item">
    <a class="gallery-link" href=${c}>
        <img 
            class="gallery-image" 
            src=${o} 
            alt=${l}
        />
    </a>
</li>`).join("")}r.reset()});
//# sourceMappingURL=commonHelpers.js.map
