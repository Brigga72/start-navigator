/* Vitality Spa post-render visual hotfix. Replaces only the generic orientation placeholder for Vitality Spa Steps 2 and 3. */
(function(){
  function spaStepVisual(step){
    if(!step) return '';
    if(step.kind==='elevator'){
      return `<div class="deck-change-card compact-deck-change vitality-spa-step-visual">
        <div class="deck-change-main"><div class="deck-change-icon">🛗</div><div class="deck-from">DECK 7</div><div class="deck-arrow">↑</div><div class="deck-to">DECK 14</div></div>
        <div class="deck-change-ship" aria-hidden="true"><div class="mini-deck-label">Forward elevators</div><div class="mini-ship-hull"><span class="mini-aft">AFT</span><span class="mini-elevator">🛗</span><span class="mini-fwd">FWD</span><i class="mini-deck-arrow">↑</i><b>Deck 14</b></div></div>
        <div style="padding:0 18px 16px;text-align:center;color:#66758a;font-weight:700;font-size:13px;line-height:1.35">Deck change reference only. Confirm Deck 14 in the elevator.</div>
      </div>`;
    }
    if(step.kind==='orient'){
      return `<div class="vitality-spa-step-visual" style="background:#fff;border-radius:24px;padding:14px 14px 16px;box-shadow:0 10px 28px rgba(25,45,70,.10)">
        <div style="display:flex;justify-content:space-between;align-items:center;margin:2px 4px 10px;gap:8px"><strong style="font-size:14px;letter-spacing:.08em;color:#26384d">DECK 14 ORIENTATION</strong><span style="font-size:12px;font-weight:800;color:#3377c8">FORWARD ↑</span></div>
        <svg viewBox="0 0 360 300" role="img" aria-label="Deck 14 landmark orientation showing Forward elevators, Vitality Cafe, To Dry For, and the Vitality Spa guest entrance" style="display:block;width:100%;height:auto;background:#f4f7fb;border:1px solid #d8e2ee;border-radius:18px">
          <text x="180" y="24" text-anchor="middle" font-size="12" font-weight="800" fill="#3377c8">FORWARD / BOW ↑</text>
          <path d="M180 34 L170 49 H190 Z" fill="#3377c8"/>
          <rect x="66" y="58" width="228" height="82" rx="18" fill="#e9f4ff" stroke="#7fb1e8" stroke-width="2"/>
          <text x="180" y="86" text-anchor="middle" font-size="13" font-weight="800" fill="#265f9e">VITALITY SPA</text>
          <text x="180" y="108" text-anchor="middle" font-size="12" font-weight="700" fill="#40556f">Guest entrance, Deck 14</text>
          <text x="180" y="127" text-anchor="middle" font-size="10" fill="#6b7c90">Spa continues across Decks 12 and 14</text>
          <rect x="48" y="158" width="122" height="48" rx="13" fill="#fff" stroke="#c8d5e4"/>
          <text x="109" y="178" text-anchor="middle" font-size="11" font-weight="800" fill="#334960">Vitality Cafe</text>
          <text x="109" y="194" text-anchor="middle" font-size="9" fill="#6b7c90">nearby landmark</text>
          <rect x="190" y="158" width="122" height="48" rx="13" fill="#fff" stroke="#c8d5e4"/>
          <text x="251" y="178" text-anchor="middle" font-size="11" font-weight="800" fill="#334960">To Dry For</text>
          <text x="251" y="194" text-anchor="middle" font-size="9" fill="#6b7c90">nearby landmark</text>
          <line x1="180" y1="219" x2="180" y2="242" stroke="#9aabba" stroke-width="4" stroke-linecap="round" stroke-dasharray="3 7"/>
          <rect x="103" y="242" width="154" height="38" rx="12" fill="#25364a"/>
          <text x="180" y="266" text-anchor="middle" font-size="12" font-weight="800" fill="#fff">Forward elevators</text>
          <text x="180" y="294" text-anchor="middle" font-size="10" font-weight="700" fill="#6b7c90">LANDMARK ORIENTATION ONLY, NO ROUTE LINE</text>
        </svg>
        <div style="margin:12px 4px 0;color:#5e6f83;font-size:13px;line-height:1.45"><strong style="color:#26384d">What to look for:</strong> after exiting on Deck 14, use signs for Vitality Spa. Vitality Cafe and To Dry For confirm you are in the correct forward spa area.</div>
      </div>`;
    }
    return '';
  }

  function patchVitalityPlaceholder(){
    try{
      if(typeof guidedState==='undefined' || guidedState.destId!=='vitalityspa') return;
      const d=(typeof destinations!=='undefined'&&Array.isArray(destinations))?destinations.find(x=>x.id==='vitalityspa'):null;
      if(!d||!Array.isArray(d.route)) return;
      const idx=Math.max(0,Math.min(Number(guidedState.step)||0,d.route.length-1));
      const step=d.route[idx];
      if(!step || (step.kind!=='elevator'&&step.kind!=='orient')) return;
      const host=document.getElementById('routeContent');
      if(!host) return;
      const placeholder=host.querySelector('.guided-map-placeholder-v027');
      if(!placeholder) return;
      const html=spaStepVisual(step);
      if(!html) return;
      placeholder.outerHTML=html;
    }catch(_){}
  }

  const host=document.getElementById('routeContent');
  if(host&&typeof MutationObserver!=='undefined'){
    new MutationObserver(patchVitalityPlaceholder).observe(host,{childList:true,subtree:true});
  }
  document.addEventListener('click',function(){setTimeout(patchVitalityPlaceholder,0);},true);
  setTimeout(patchVitalityPlaceholder,0);
})();
