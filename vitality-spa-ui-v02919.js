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
})();
