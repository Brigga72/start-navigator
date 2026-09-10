/* Compact iPhone-friendly Home category picker. Keeps the existing destination filtering logic. */
(function(){
  const CATEGORY_LABELS={
    mustdo:'⭐ Must-Do',
    shows:'🎭 Shows',
    dining:'🍴 Eat & Drink',
    pools:'🏊 Pools & Relaxation',
    activities:'🎢 Activities',
    services:'⚓ Ship Services'
  };

  function compactHomeCategories(){
    const host=document.getElementById('categoryGrid');
    if(!host||!Array.isArray(window.categories)&&typeof categories==='undefined') return;
    const list=(typeof categories!=='undefined'?categories:window.categories)||[];
    host.className='home-category-picker-v02918';
    host.innerHTML=`<label class="home-category-label-v02918"><span>EXPLORE BY CATEGORY</span><select id="homeCategorySelect" aria-label="Explore by category"><option value="">🧭 Choose a category</option>${list.map(c=>`<option value="${c.id}">${CATEGORY_LABELS[c.id]||((c.icon||'')+' '+c.title)}</option>`).join('')}</select></label>`;
  }

  const oldRender=typeof window.renderCategories==='function'?window.renderCategories:null;
  window.renderCategories=function(){ compactHomeCategories(); };

  document.addEventListener('change',e=>{
    if(!e.target||e.target.id!=='homeCategorySelect') return;
    const id=e.target.value;
    if(!id) return;
    const input=document.getElementById('searchInput');
    if(input) input.value='';
    if(id==='mustdo'&&typeof window.showMustDo==='function') window.showMustDo();
    else if(typeof window.renderSearch==='function'&&typeof window.destinations!=='undefined') window.renderSearch(destinations.filter(d=>d.category===id));
    else if(typeof renderSearch==='function'&&typeof destinations!=='undefined') renderSearch(destinations.filter(d=>d.category===id));
  },true);

  const style=document.createElement('style');
  style.textContent=`
    .home-category-picker-v02918{margin:12px 0 4px;display:block}
    .home-category-label-v02918{display:flex;flex-direction:column;gap:6px}
    .home-category-label-v02918>span{font-size:10px;font-weight:900;letter-spacing:.1em;color:#657586;padding-left:2px}
    .home-category-label-v02918 select{width:100%;min-height:48px;border:1px solid #d7e1eb;border-radius:14px;background:#fff;padding:0 42px 0 14px;font:inherit;font-weight:850;color:#213244;box-sizing:border-box}
  `;
  document.head.appendChild(style);

  compactHomeCategories();
})();
