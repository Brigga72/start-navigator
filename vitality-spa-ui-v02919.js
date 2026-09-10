/* Vitality Spa venue hotfix. Star of the Seas spa spans Decks 12 and 14; passenger entrance is on Deck 14. */
(function(){
  if(typeof destinations==='undefined'||!Array.isArray(destinations)) return;

  const spaDestination={
    id:'vitalityspa',
    name:'Vitality Spa',
    deck:'12 & 14',
    area:'Forward · Guest entrance on Deck 14',
    category:'services',
    icon:'🧖',
    keywords:'vitality spa couples salt scrub massage treatment thermal suite salon wellness',
    note:'Vitality Spa spans Decks 12 and 14. Royal Caribbean’s deck plan directs guests to enter through Deck 14, near Vitality Cafe and To Dry For.',
    confidence:'VENUE + DECK 14 GUEST ENTRANCE VERIFIED; DECK 14 WALKING GEOMETRY NOT YET TRACED',
    mapDeck:'14',
    mapNode:null,
    route:[]
  };

  if(!destinations.some(d=>d.id==='vitalityspa')) destinations.push(spaDestination);

  /* Explore has its own venue database and had already initialized before this
     hotfix loads, so add the spa there too without modifying app.js. */
  if(typeof exploreVenues!=='undefined'&&Array.isArray(exploreVenues)&&!exploreVenues.some(v=>v.id==='vitalityspa')){
    exploreVenues.push({
      id:'vitalityspa',
      name:'Vitality Spa',
      icon:'🧖',
      deck:'14',
      deckLabel:'12 & 14',
      area:'Forward · Guest entrance on Deck 14',
      kind:'Service',
      included:false,
      type:'Spa / wellness',
      food:'Spa treatments, thermal-suite facilities, salon and wellness services. Your Couples Salt Scrub is a booked spa treatment.',
      best:'Appointment · Relaxation · Wellness',
      detail:'Vitality Spa is a two-level complex on Decks 12 and 14. Royal Caribbean’s deck plan explicitly directs passenger entry through Deck 14. The app does not invent a Deck 14 corridor trace that has not been mapped.',
      related:'Vitality Cafe · To Dry For',
      keywords:'vitality spa couples salt scrub massage treatment thermal suite salon wellness',
      routeArea:'Forward · Vitality Spa'
    });
  }

  if(typeof syncLocationsFromDestinationsV02813==='function') syncLocationsFromDestinationsV02813();
  if(typeof renderCategories==='function') renderCategories();

  /* Explore currently has no verified Deck 14 map card. Add a direct venue card
     instead of pretending Deck 14 geometry exists. The existing venue-detail
     handler supplies the Navigate action. */
  function addExploreSpaCard(){
    const host=document.getElementById('deckCards');
    if(!host||host.querySelector('[data-venue-v07="vitalityspa"]')) return;
    const card=document.createElement('button');
    card.className='deck-card deck-card-v07 vitality-spa-explore-card';
    card.dataset.venueV07='vitalityspa';
    card.innerHTML='<div class="deck-card-top"><div class="deck-label">DECK 14 ENTRANCE</div><span class="tap-hint">Tap for details ›</span></div><h3>🧖 Vitality Spa</h3><p>Two-level spa on Decks 12 and 14. Passenger entry is through Deck 14 near Vitality Cafe and To Dry For.</p><div class="deck-card-foot"><span>🧖 Spa</span><span>📍 Forward</span><span>🧭 Navigate</span></div>';
    host.prepend(card);
  }
  addExploreSpaCard();

  /* There is no verified Deck 14 walking graph yet. A Deck 14 coordinate anchor
     would therefore create false precision because it has no verified walkable
     node to snap to. For Cabin 7456, keep the verified Deck 7 path to the forward
     elevators, then deliberately switch to orientation/signage guidance for the
     Deck 14 entrance. Other starting locations retain the app's conservative
     fallback routing until Deck 14 is traced. */
  if(typeof routeFor==='function'&&!window.__vitalitySpaRouteWrappedV02919){
    const originalRouteFor=routeFor;
    routeFor=function(fromId,toId){
      if(toId!=='vitalityspa'||fromId!=='cabin7456') return originalRouteFor(fromId,toId);
      try{
        const profile=(typeof productionRouteProfileV0285==='function')?productionRouteProfileV0285():'balanced';
        const p=findWeightedPathV0284('n_cabin7456','n_forward_lobby',VERIFIED_SHIPNET_V026,profile);
        if(p&&Array.isArray(p.ids)&&p.ids.length>1){
          return [
            routeStep('walk','Follow the highlighted verified Deck 7 path from Cabin 7456 to the Forward elevators.','verified','7',{
              v026:{ids:p.ids,deck:'7',panel:'main'},
              routing:{engine:'weighted',profile,cost:p.cost,distance:p.distance}
            }),
            routeStep('elevator','From the Forward elevator lobby, take an elevator to Deck 14. Royal Caribbean’s deck plan identifies Deck 14 as the passenger entrance level for Vitality Spa.','orientation','14'),
            routeStep('orient','On Deck 14, head forward from the elevator lobby and follow signs for Vitality Spa. Vitality Cafe and To Dry For are useful nearby landmarks.','orientation','14'),
            routeStep('arrive','Enter Vitality Spa through the Deck 14 guest entrance. The app stops using traced geometry here because the spa interior and Deck 14 approach have not been mapped.','signage','14')
          ];
        }
      }catch(_){}
      return originalRouteFor(fromId,toId);
    };
    window.__vitalitySpaRouteWrappedV02919=true;
  }

  /* Step 2 and 3 visual hotfix. Orientation confidence should not result in a
     blank placeholder. These visuals communicate deck change and landmark
     orientation only, they do not claim verified Deck 14 walking geometry. */
  if(typeof guidedMapFor==='function'&&!window.__vitalitySpaMapWrappedV02919){
    const originalGuidedMapFor=guidedMapFor;
    guidedMapFor=function(d,idx){
      if(!d||d.id!=='vitalityspa') return originalGuidedMapFor(d,idx);
      const step=d.route&&d.route[idx];
      if(!step) return originalGuidedMapFor(d,idx);

      if(step.kind==='elevator'){
        return `<div class="deck-change-card compact-deck-change">
          <div class="deck-change-main"><div class="deck-change-icon">🛗</div><div class="deck-from">DECK 7</div><div class="deck-arrow">↑</div><div class="deck-to">DECK 14</div></div>
          <div class="deck-change-ship" aria-hidden="true"><div class="mini-deck-label">Forward elevators</div><div class="mini-ship-hull"><span class="mini-aft">AFT</span><span class="mini-elevator">🛗</span><span class="mini-fwd">FWD</span><i class="mini-deck-arrow">↑</i><b>Deck 14</b></div></div>
          <div style="padding:0 18px 16px;text-align:center;color:#66758a;font-weight:700;font-size:13px;line-height:1.35">Deck change reference only. Confirm Deck 14 in the elevator.</div>
        </div>`;
      }

      if(step.kind==='orient'){
        return `<div style="background:#fff;border-radius:24px;padding:14px 14px 16px;box-shadow:0 10px 28px rgba(25,45,70,.10)">
          <div style="display:flex;justify-content:space-between;align-items:center;margin:2px 4px 10px;gap:8px"><strong style="font-size:14px;letter-spacing:.08em;color:#26384d">DECK 14 ORIENTATION</strong><span style="font-size:12px;font-weight:800;color:#3377c8">FORWARD ↑</span></div>
          <svg viewBox="0 0 360 300" role="img" aria-label="Deck 14 landmark orientation showing Forward elevators, Vitality Cafe, To Dry For, and the Vitality Spa guest entrance" style="display:block;width:100%;height:auto;background:#f4f7fb;border:1px solid #d8e2ee;border-radius:18px">
            <defs><filter id="spaShadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity=".12"/></filter></defs>
            <text x="180" y="24" text-anchor="middle" font-size="12" font-weight="800" fill="#3377c8">FORWARD / BOW ↑</text>
            <path d="M180 34 L170 49 H190 Z" fill="#3377c8"/>
            <rect x="66" y="58" width="228" height="82" rx="18" fill="#e9f4ff" stroke="#7fb1e8" stroke-width="2" filter="url(#spaShadow)"/>
            <text x="180" y="86" text-anchor="middle" font-size="13" font-weight="800" fill="#265f9e">🧖 VITALITY SPA</text>
            <text x="180" y="108" text-anchor="middle" font-size="12" font-weight="700" fill="#40556f">Guest entrance, Deck 14</text>
            <text x="180" y="127" text-anchor="middle" font-size="10" fill="#6b7c90">Spa continues across Decks 12 and 14</text>
            <rect x="48" y="158" width="122" height="48" rx="13" fill="#fff" stroke="#c8d5e4"/>
            <text x="109" y="178" text-anchor="middle" font-size="11" font-weight="800" fill="#334960">☕ Vitality Cafe</text>
            <text x="109" y="194" text-anchor="middle" font-size="9" fill="#6b7c90">nearby landmark</text>
            <rect x="190" y="158" width="122" height="48" rx="13" fill="#fff" stroke="#c8d5e4"/>
            <text x="251" y="178" text-anchor="middle" font-size="11" font-weight="800" fill="#334960">💇 To Dry For</text>
            <text x="251" y="194" text-anchor="middle" font-size="9" fill="#6b7c90">nearby landmark</text>
            <line x1="180" y1="219" x2="180" y2="242" stroke="#9aabba" stroke-width="4" stroke-linecap="round" stroke-dasharray="3 7"/>
            <rect x="103" y="242" width="154" height="38" rx="12" fill="#25364a"/>
            <text x="180" y="266" text-anchor="middle" font-size="12" font-weight="800" fill="#fff">🛗 Forward elevators</text>
            <text x="180" y="294" text-anchor="middle" font-size="10" font-weight="700" fill="#6b7c90">LANDMARK ORIENTATION ONLY, NO ROUTE LINE</text>
          </svg>
          <div style="margin:12px 4px 0;color:#5e6f83;font-size:13px;line-height:1.45"><strong style="color:#26384d">What to look for:</strong> after exiting on Deck 14, use signs for Vitality Spa. Vitality Cafe and To Dry For confirm you are in the correct forward spa area.</div>
        </div>`;
      }

      return originalGuidedMapFor(d,idx);
    };
    window.__vitalitySpaMapWrappedV02919=true;
  }
})();
