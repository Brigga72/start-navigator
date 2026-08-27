/* Star Navigator v0.7 - interactive Explore + venue details */

const exploreVenues = [
  {id:'diningroom', name:'Main Dining Room', icon:'🍽️', deck:'5', deckLabel:'3–5', area:'Aft · Main Dining', kind:'Dining', included:true, type:'Sit-down dining', food:'Rotating global menu with a full-service meal experience. Royal Caribbean describes it as a new menu every night.', best:'Dinner · Breakfast · Lunch', detail:'Your main sit-down dining option. Great choice when you want a traditional cruise-dining experience instead of a buffet or quick stop.', related:'Main Dining Room', keywords:'dining room global menu breakfast lunch dinner included', routeArea:'Aft · Dining'},
  {id:'sorrentos', name:"Sorrento's Pizza", icon:'🍕', deck:'6', deckLabel:'5–6', area:'Royal Promenade', kind:'Dining', included:true, type:'Pizza by the slice', food:'Pizza and quick casual bites. Royal Caribbean lists Sorrento’s as complimentary.', best:'Late night · Quick meal · Snack', detail:'A dependable quick stop when you want pizza without committing to a full meal.', related:'Royal Promenade', keywords:'sorrentos pizza slice included late night', routeArea:'Midship · Royal Promenade'},
  {id:'pearlcafe', name:'Pearl Café', icon:'☕', deck:'6', deckLabel:'5–6', area:'The Pearl · Royal Promenade', kind:'Dining', included:true, type:'Café / grab-and-go', food:'Paninis, ready-made salads, sweets and coffee.', best:'Breakfast · Coffee · Quick bite', detail:'A bright café around The Pearl. Easy choice for coffee, sandwiches or a quick snack.', related:'The Pearl', keywords:'pearl cafe coffee panini salad sweets included', routeArea:'Midship · Royal Promenade'},
  {id:'starbucks', name:'Starbucks', icon:'☕', deck:'5', deckLabel:'5', area:'Royal Promenade', kind:'Dining', included:false, type:'Coffee kiosk', food:'Starbucks beverages and food items; Starbucks purchases are chargeable.', best:'Coffee · Quick stop', detail:'Convenient when you specifically want Starbucks. It is not part of the complimentary dining list.', related:'Royal Promenade', keywords:'starbucks coffee charge', routeArea:'Midship · Royal Promenade'},
  {id:'parkcafe', name:'Park Café', icon:'🥪', deck:'8', deckLabel:'8', area:'Central Park', kind:'Dining', included:true, type:'Quick-service café', food:'Fast, fresh casual food in Central Park.', best:'Lunch · Quick bite · Casual', detail:'A useful Central Park stop when you want something fast rather than a sit-down meal.', related:'Central Park', keywords:'park cafe quick fresh central park included', routeArea:'Midship · Central Park'},
  {id:'chops', name:'Chops Grille', icon:'🥩', deck:'8', deckLabel:'8', area:'Central Park', kind:'Dining', included:false, type:'Specialty steakhouse', food:'Premium steakhouse classics and hand-cut signature steaks.', best:'Dinner · Special meal', detail:'A specialty steakhouse in Central Park. Plan on an additional charge.', related:'Central Park', keywords:'chops steakhouse steak specialty central park', routeArea:'Midship · Central Park'},
  {id:'izumi', name:'Izumi Hibachi & Sushi', icon:'🍣', deck:'8', deckLabel:'8', area:'Central Park', kind:'Dining', included:false, type:'Japanese / hibachi', food:'Sushi, sashimi and interactive hibachi/teppanyaki dining.', best:'Dinner · Experience meal', detail:'A specialty Japanese option combining sushi with tableside hibachi theatrics.', related:'Central Park', keywords:'izumi sushi sashimi hibachi japanese specialty', routeArea:'Midship · Central Park'},
  {id:'lincoln', name:'Lincoln Park Supper Club', icon:'🎷', deck:'8', deckLabel:'8', area:'Aft · Central Park', kind:'Dining', included:false, type:'Multi-course supper club', food:'Modern takes on traditional American fare with multi-course dining, live jazz and cocktails.', best:'Dinner · Date night · Special occasion', detail:'One of the more elevated dining experiences on Star. Think multi-course meal + live jazz rather than a quick restaurant stop.', related:'Central Park', keywords:'lincoln park supper club american jazz specialty', routeArea:'Aft · Central Park'},
  {id:'windjammer', name:'Windjammer Marketplace', icon:'🍴', deck:'15', deckLabel:'15', area:'Aft · Pool Deck', kind:'Dining', included:true, type:'Buffet', food:'Globally inspired buffet with a very large daily selection; Royal Caribbean says 200+ dishes daily.', best:'Breakfast · Lunch · Dinner', detail:'The big casual buffet. A strong first-day destination because you can sample a lot without committing to one type of food.', related:'Chill Island · Royal Bay Pool', keywords:'windjammer buffet breakfast lunch dinner included', routeArea:'Aft · Dining'},
  {id:'basecamp', name:'Basecamp', icon:'🍔', deck:'16', deckLabel:'16', area:'Aft · Thrill Island', kind:'Dining', included:true, type:'Casual / burgers', food:'Smashburgers, hot dogs and soft pretzel bites with cheese sauce.', best:'Lunch · Casual · Between activities', detail:'Right in the middle of Thrill Island. Perfect pairing with the slides, Adrenaline Peak and Lost Dunes.', related:'Thrill Island', keywords:'basecamp burgers hot dogs pretzel included', routeArea:'Aft · Thrill Island'},
  {id:'aquadomemarket', name:'AquaDome Market', icon:'🍜', deck:'15', deckLabel:'15', area:'Forward · AquaDome', kind:'Dining', included:true, type:'Food hall', food:'Five food stands with global choices including Asian noodles, Mediterranean salads, French crêpes, Latin American arepas/empanadas and BBQ.', best:'Lunch · Casual · Explore', detail:'One of the best “wander and pick something” food areas onboard. The market sits directly in the AquaDome neighborhood.', related:'AquaDome · Rye & Bean', keywords:'aquadome market noodles mediterranean crepes arepas bbq included', routeArea:'Forward · AquaDome'},
  {id:'elloco', name:'El Loco Fresh', icon:'🌮', deck:'15', deckLabel:'15', area:'Midship · Chill Island', kind:'Dining', included:true, type:'Mexican quick service', food:'Self-serve Mexican favorites with a salsa bar.', best:'Lunch · Quick bite · Pool day', detail:'Easy Mexican food near the pool action.', related:'Chill Island', keywords:'el loco fresh mexican tacos salsa included', routeArea:'Midship · Chill Island'},
  {id:'surfsideeatery', name:'Surfside Eatery', icon:'🥗', deck:'7', deckLabel:'7', area:'Aft · Surfside', kind:'Dining', included:true, type:'Family buffet', food:'Family-friendly buffet in Surfside.', best:'Breakfast · Lunch · Family', detail:'Convenient for the Surfside neighborhood, especially when you are already on Deck 7.', related:'Surfside', keywords:'surfside eatery buffet family included', routeArea:'Aft · Surfside'},
  {id:'surfbites', name:'Surfside Bites', icon:'🍟', deck:'7', deckLabel:'7', area:'Aft · Surfside', kind:'Dining', included:true, type:'Grab-and-go snacks', food:'Quick sweet and savory snacks close to the Surfside activity area.', best:'Snack · Pool day · Quick bite', detail:'A grab-and-go stop just steps from the action in Surfside.', related:'Surfside', keywords:'surfside bites snacks included', routeArea:'Aft · Surfside'},
  {id:'pier7', name:'Pier 7', icon:'🌴', deck:'7', deckLabel:'7', area:'Aft · Surfside', kind:'Dining', included:false, type:'Casual California brunch', food:'Baja fish tacos, mango-lime shrimp tostadas and all-day brunch favorites.', best:'Brunch · Lunch · Casual', detail:'Specialty dining in Surfside with casual California flavors.', related:'Surfside', keywords:'pier 7 california brunch tacos shrimp specialty', routeArea:'Aft · Surfside'},
  {id:'hooked', name:'Hooked Seafood', icon:'🦞', deck:'14–15', deckLabel:'14–15', area:'Forward · AquaDome', kind:'Dining', included:false, type:'Seafood', food:'Seafood-focused specialty dining in the AquaDome area.', best:'Dinner · Seafood', detail:'A specialty seafood stop in the AquaDome neighborhood.', related:'AquaDome', keywords:'hooked seafood aquadome specialty', routeArea:'Forward · AquaDome'},
  {id:'giovannis', name:"Giovanni's Italian Kitchen & Wine Bar", icon:'🍝', deck:'6', deckLabel:'5–6', area:'Royal Promenade', kind:'Dining', included:false, type:'Italian specialty', food:'Authentic Italian favorites and housemade pasta dishes.', best:'Dinner · Italian', detail:'Specialty Italian dining on the Royal Promenade.', related:'Royal Promenade', keywords:'giovannis italian pasta wine bar specialty', routeArea:'Midship · Royal Promenade'},
  {id:'playmakers', name:'Playmakers Sports Bar & Arcade', icon:'🏈', deck:'6', deckLabel:'6', area:'Royal Promenade', kind:'Dining', included:false, type:'Sports bar / casual food', food:'Sports-bar favorites such as burgers, wings and nachos alongside arcade games.', best:'Game day · Casual · Late afternoon', detail:'A good “watch sports + eat” destination, especially when you want a casual atmosphere.', related:'Royal Promenade', keywords:'playmakers sports bar wings burgers nachos arcade specialty', routeArea:'Midship · Royal Promenade'},
  {id:'attic', name:'The Attic', icon:'😂', deck:'6', deckLabel:'6', area:'Royal Promenade', kind:'Entertainment', included:true, type:'Adult comedy', food:'Comedy performances in an intimate club setting.', best:'Evening · Adults', detail:'A smaller comedy-club-style venue. Royal Caribbean describes adult comedy shows here as included onboard entertainment.', related:'Royal Promenade', keywords:'attic comedy adult show included', routeArea:'Midship · Royal Promenade'},
  {id:'royaltheater', name:'Royal Theater', icon:'🎭', deck:'5', deckLabel:'3–5', area:'Forward · Main Entertainment', kind:'Entertainment', included:true, type:'Production theater', food:'Shows rather than dining.', best:'Evening · Shows', detail:'The main stage for major production shows, including Back to the Future: The Musical.', related:'Back to the Future', keywords:'royal theater broadway production show', routeArea:'Forward · Royal Theater'},
  {id:'absolutezero', name:'Absolute Zero', icon:'⛸️', deck:'5', deckLabel:'4–5', area:'Forward · Main Entertainment', kind:'Entertainment', included:true, type:'Ice arena', food:'Shows rather than dining.', best:'Evening · Ice shows', detail:'Royal Caribbean’s large ice arena, home to skating productions such as SOL.', related:'SOL', keywords:'absolute zero ice skating sol show', routeArea:'Forward · Absolute Zero'},
  {id:'aquadome', name:'AquaDome / AquaTheater', icon:'🌊', deck:'15', deckLabel:'14–15', area:'Forward · AquaDome', kind:'Entertainment', included:true, type:'Aqua venue / theater', food:'Shows, views, dining and relaxation.', best:'Show night · Ocean views · Explore', detail:'A forward-facing glass-dome neighborhood with the AquaTheater at its heart. The Overlook, Rye & Bean and AquaDome Market are nearby.', related:'Torque · The Overlook · Rye & Bean', keywords:'aquadome aquatheater torque pirates mermaids views', routeArea:'Forward · AquaDome'},
  {id:'overlook', name:'The Overlook Bar & Pods', icon:'🌅', deck:'14', deckLabel:'14', area:'Forward · AquaDome', kind:'Viewpoint', included:true, type:'Panoramic lounge / bar', food:'Drinks and a panoramic place to sit; beverages are chargeable.', best:'Sunrise · Sea views · Relax', detail:'A forward-facing viewpoint inside the AquaDome area. A great “go there just to look out” stop.', related:'AquaDome · Rye & Bean', keywords:'overlook bar pods view panorama aquadome', routeArea:'Forward · AquaDome'},
  {id:'ryebean', name:'Rye & Bean', icon:'☕', deck:'14', deckLabel:'14', area:'Forward · AquaDome', kind:'Dining', included:false, type:'Coffee & cocktails', food:'Coffee and evening drinks, including espresso-based cocktails.', best:'Morning coffee · Evening drinks', detail:'One of the easiest AquaDome pairings: grab something here, then explore the Overlook area.', related:'The Overlook · AquaDome', keywords:'rye bean coffee espresso martini aquadome', routeArea:'Forward · AquaDome'},
  {id:'backfuture', name:'Back to the Future: The Musical', icon:'🚗', deck:'5', deckLabel:'3–5', area:'Forward · Royal Theater', kind:'Show', included:true, type:'Broadway-style musical', food:'Production show in the Royal Theater.', best:'Evening · Show', detail:'A major production show on Star of the Seas. Exact performance times belong to your sailing’s current schedule in the Royal App.', related:'Royal Theater', keywords:'back future musical show royal theater broadway', routeArea:'Forward · Royal Theater'},
  {id:'torque', name:'Torque', icon:'🤸', deck:'15', deckLabel:'14–15', area:'Forward · AquaTheater', kind:'Show', included:true, type:'AquaTheater spectacle', food:'High-energy aquatic performance with diving, aerial and acrobatic elements.', best:'Evening · Show', detail:'An AquaTheater production. Exact performance times belong to your sailing’s current schedule.', related:'AquaDome · AquaTheater', keywords:'torque show aquatheater diving acrobatics', routeArea:'Forward · AquaTheater'},
  {id:'sol', name:'SOL', icon:'⛸️', deck:'5', deckLabel:'4–5', area:'Forward · Absolute Zero', kind:'Show', included:true, type:'Ice skating production', food:'Skating production in Absolute Zero.', best:'Evening · Show', detail:'An ice-skating production in Absolute Zero. Exact performance times belong to your sailing’s schedule.', related:'Absolute Zero', keywords:'sol ice show skating absolute zero', routeArea:'Forward · Absolute Zero'},
  {id:'pirates', name:'Pirates & Mermaids', icon:'🏴‍☠️', deck:'15', deckLabel:'14–15', area:'Forward · AquaTheater', kind:'Show', included:true, type:'AquaTheater performance', food:'Aquatic acrobatics and high-diving show.', best:'Evening · Show', detail:'Another AquaTheater production; check your sailing schedule for performance times.', related:'AquaDome · AquaTheater', keywords:'pirates mermaids aquatheater show high diving', routeArea:'Forward · AquaTheater'},
  {id:'royalpromenade', name:'Royal Promenade', icon:'🛍️', deck:'6', deckLabel:'5–6', area:'Midship · Indoor neighborhood', kind:'Neighborhood', included:true, type:'Dining, shops, bars & entertainment', food:'A mix of complimentary and specialty food plus coffee, bars and entertainment.', best:'Anytime · Explore', detail:'A two-deck social hub built around The Pearl. It is one of the best places to learn the ship because so many venues and routes branch from here.', related:'The Pearl · Sorrento’s · Giovanni’s', keywords:'royal promenade pearl shops bars dining entertainment', routeArea:'Midship · Royal Promenade'},
  {id:'centralpark', name:'Central Park', icon:'🌳', deck:'8', deckLabel:'8', area:'Midship · Outdoor neighborhood', kind:'Neighborhood', included:true, type:'Garden, dining & live music', food:'Park Café, Chops, Izumi, Lou’s, Trellis Bar and other venues.', best:'Daytime · Evening · Relax', detail:'A garden-like open-air neighborhood. It is worth seeing both during the day and after dark.', related:'Lou’s · Park Café · Chops', keywords:'central park garden lou park cafe chops trellis', routeArea:'Midship · Central Park'},
  {id:'basecampbar', name:'Basecamp Bar', icon:'🍹', deck:'16', deckLabel:'16', area:'Aft · Thrill Island', kind:'Bar', included:true, type:'Pool/deck bar', food:'Drinks alongside Basecamp and Thrill Island activities; beverages cost extra.', best:'Afternoon · Thrill Island', detail:'Convenient stop while exploring Thrill Island.', related:'Basecamp · Thrill Island', keywords:'basecamp bar drinks thrill island', routeArea:'Aft · Thrill Island'},
  {id:'royalbay', name:'Royal Bay Pool', icon:'🏊', deck:'15', deckLabel:'15', area:'Midship · Chill Island', kind:'Pool', included:true, type:'Main pool area', food:'Pool rather than dining.', best:'Daytime · Sea day', detail:'The large main pool area in Chill Island, surrounded by whirlpools and casual food/drink options.', related:'Swim & Tonic · El Loco Fresh', keywords:'royal bay pool chill island swim tonic', routeArea:'Midship · Chill Island'},
  {id:'hideaway', name:'The Hideaway', icon:'🌴', deck:'15', deckLabel:'15', area:'Aft · Hideaway', kind:'Viewpoint', included:true, type:'Adults-only pool neighborhood', food:'Ocean views, pool and bar.', best:'Sea day · Relax', detail:'An adults-only area with a suspended infinity pool and ocean views.', related:'Hideaway Bar · Deck 16 entrance', keywords:'hideaway pool adults infinity view aft', routeArea:'Aft · Hideaway'},
  {id:'guestservices', name:'Guest Services', icon:'ℹ️', deck:'5', deckLabel:'5', area:'Midship · Royal Promenade', kind:'Service', included:true, type:'Guest assistance desk', food:'Not dining.', best:'Anytime · Questions · Help', detail:'The main guest-help desk shown on your Deck 5 screenshot. Useful to remember as a fixed landmark.', related:'The Pearl', keywords:'guest services help desk deck 5', routeArea:'Midship · Royal Promenade'}
];

// Keep the navigation database in sync with Explore. These are intentionally conservative venue routes.
function addExploreDestinations(){
  exploreVenues.forEach(v=>{
    if(destinations.some(d=>d.id===v.id)) return;
    let mapDeck=v.deckLabel==='14'?'15':(v.deck.includes('–')?v.deck.split('–').pop():v.deck);
    const route=[];
    const fromDeck='7';
    if(String(mapDeck)!=='7') route.push({kind:'walk',text:'Leave Cabin 7456 and follow the Deck 7 corridor toward the forward elevator bank shown on the deck map.'},{kind:'elevator',text:`Travel from Deck 7 to Deck ${mapDeck}.`});
    else route.push({kind:'walk',text:`From Cabin 7456, stay oriented to the aft/public area and follow the Deck 7 neighborhood signs.`});
    route.push({kind:'orient',text:`On Deck ${mapDeck}, orient ${/Aft/i.test(v.area)?'aft':'forward'} and use the venue signs / landmarks shown on the map.`},{kind:'arrive',text:`Follow signs to ${v.name}.`});
    destinations.push({id:v.id,name:v.name,deck:v.deckLabel,area:v.area,category:v.kind.toLowerCase().includes('show')||v.kind==='Entertainment'?'shows':v.kind==='Dining'?'dining':v.kind==='Pool'?'pools':v.kind==='Service'?'services':v.kind==='Neighborhood'?'dining':'activities',icon:v.icon,keywords:v.keywords,note:v.detail,confidence:'VENUE DETAIL VERIFIED / ROUTE CORE CONSERVATIVE',mapDeck:String(mapDeck),mapNode:mapNodeForExplore(v.id),route});
  });
  // Refresh any location list created by v0.6 so new venues can be used as FROM locations too.
  const existing=new Set(locations.map(x=>x.id));
  destinations.forEach(d=>{if(!existing.has(d.id)) locations.push({id:d.id,name:d.name,deck:String(d.mapDeck),area:d.area,icon:d.icon,mapDeck:String(d.mapDeck),mapNode:d.mapNode,keywords:d.keywords||''})});
}
function mapNodeForExplore(id){
  return ({aquadome:'aquadome',overlook:'aquadome',ryebean:'aquadome',aquadomemarket:'aquadome',hooked:'aquadome',torque:'aquadome',pirates:'aquadome',windjammer:'windjammer',royalbay:'royalbay',hideaway:'royalbay',elloco:'royalbay',basecamp:'basecamp',basecampbar:'basecamp',centralpark:'centralpark',chops:'centralpark',izumi:'centralpark',lincoln:'centralpark',parkcafe:'centralpark',royalpromenade:'promenade',sorrentos:'promenade',pearlcafe:'promenade',giovannis:'promenade',playmakers:'promenade',attic:'promenade',starbucks:'promenade',guestservices:'guestservices',royaltheater:'theater',backfuture:'theater',absolutezero:'absolute',sol:'absolute',surfsideeatery:'surfside',surfbites:'surfside',pier7:'surfside'})[id]||null;
}

function renderDeckCardsV07(){
  const cards=[
    {deck:'5', title:'Royal Theater + Dining + Guest Services', text:'Royal Theater, The Pearl area, Guest Services, Main Dining Room and Absolute Zero access.'},
    {deck:'6', title:'Royal Promenade', text:'The Pearl, Sorrento’s, Giovanni’s, Boleros, Schooner Bar, Playmakers, Adventure Ocean and more.'},
    {deck:'7', title:'Surfside + Your Cabin', text:'Cabin 7456, Surfside Eatery, Surfside Bites, Pier 7 and the aft/public areas.'},
    {deck:'8', title:'Central Park', text:'Lou’s, Park Café, Chops, Izumi, Trellis Bar, Bubbles and Lincoln Park Supper Club.'},
    {deck:'15', title:'AquaDome + Chill Island', text:'AquaDome Market, AquaTheater access, Windjammer, Royal Bay Pool, El Loco Fresh and The Hideaway.'},
    {deck:'16', title:'Thrill Island', text:'Basecamp, Basecamp Bar, Adrenaline Peak, Crown’s Edge, Lost Dunes and FlowRider.'}
  ];
  el('deckCards').innerHTML=cards.map(c=>`<button class="deck-card deck-card-v07" data-deck-v07="${c.deck}"><div class="deck-card-top"><div class="deck-label">DECK ${c.deck}</div><span class="tap-hint">Tap to explore ›</span></div><h3>${c.title}</h3><p>${c.text}</p><div class="deck-card-foot"><span>🍴 Dining</span><span>🎭 Entertainment</span><span>🧭 Navigate</span></div></button>`).join('');
}

function venueMatchesDeck(v,deck){
  const d=String(deck);
  if(d==='5') return ['5','3–5','4–5','5–6'].includes(String(v.deckLabel));
  if(d==='6') return ['6','5–6'].includes(String(v.deckLabel));
  if(d==='7') return String(v.deckLabel)==='7';
  if(d==='8') return String(v.deckLabel)==='8';
  if(d==='15') return ['15','14–15'].includes(String(v.deckLabel));
  if(d==='16') return String(v.deckLabel)==='16';
  return String(v.deckLabel).includes(d);
}

function venueCardV07(v){
  const cost=v.included?'✓ Included':'$ Specialty / purchase';
  const kindLabel=v.kind==='Show'?'SHOW':v.kind.toUpperCase();
  return `<button class="venue-card-v07" data-venue-v07="${v.id}"><span class="venue-icon-v07">${v.icon}</span><span class="venue-body-v07"><span class="venue-top-v07"><strong>${v.name}</strong><span class="venue-cost ${v.included?'free':'paid'}">${cost}</span></span><span class="venue-meta-v07">${kindLabel} · ${v.area}</span><span class="venue-food-v07">${v.food}</span></span><span class="venue-arrow-v07">›</span></button>`;
}

function openDeckExplorerV07(deck){
  const vs=exploreVenues.filter(v=>venueMatchesDeck(v,deck));
  const dining=vs.filter(v=>v.kind==='Dining' || v.kind==='Bar');
  const entertainment=vs.filter(v=>v.kind==='Entertainment' || v.kind==='Show');
  const places=vs.filter(v=>!dining.includes(v)&&!entertainment.includes(v));
  el('overlayTitle').textContent=`Deck ${deck} · Explore`;
  el('overlayMap').innerHTML=`<div class="deck-explorer-v07"><div class="deck-explorer-head"><div><div class="eyebrow">DECK ${esc(deck)}</div><h2>${deckTitleV07(deck)}</h2><p>${deckSubtitleV07(deck)}</p></div><button class="map-open" data-deckmap-v07="${deck}">Map</button></div>
    ${exploreSectionV07('🍴 Dining & Drinks',dining)}
    ${exploreSectionV07('🎭 Entertainment',entertainment)}
    ${places.length?exploreSectionV07('⭐ Other places to know',places):''}
    <div class="explore-source-v07">Venue descriptions checked against current Royal Caribbean Star of the Seas information. Availability and pricing can change; verify your sailing details in the Royal App.</div>
  </div>`;
  el('mapOverlay').classList.add('show');el('mapOverlay').setAttribute('aria-hidden','false');
}
function exploreSectionV07(title,vs){return vs.length?`<div class="explore-section-v07"><h3>${title}</h3><div class="venue-list-v07">${vs.map(venueCardV07).join('')}</div></div>`:''}
function deckTitleV07(d){return ({'5':'Main Entertainment + Dining','6':'Royal Promenade','7':'Surfside + Cabin 7456','8':'Central Park','15':'AquaDome + Chill Island','16':'Thrill Island'})[d]||'Explore this deck'}
function deckSubtitleV07(d){return ({'5':'Forward entertainment plus dining and guest-service landmarks.','6':'The central indoor neighborhood built around The Pearl.','7':'Your home deck plus the Surfside neighborhood.','8':'Outdoor Central Park with dining, bars and live-music spots.','15':'Forward AquaDome, midship Chill Island and aft Windjammer.','16':'Thrill Island action, food and attractions.'})[d]||''}

function openVenueV07(id){
  const v=exploreVenues.find(x=>x.id===id); if(!v)return;
  const related=exploreVenues.filter(x=>x.id!==id && x.area===v.area).slice(0,4);
  el('overlayTitle').textContent=v.name;
  el('overlayMap').innerHTML=`<div class="venue-detail-v07"><div class="venue-detail-title"><div class="venue-detail-icon">${v.icon}</div><div><div class="eyebrow">${v.kind.toUpperCase()} · DECK ${esc(v.deckLabel)}</div><h2>${esc(v.name)}</h2><div class="venue-detail-area">${esc(v.area)}</div></div></div><div class="detail-chips"><span>${v.included?'✓ Included':'$ Specialty / purchase'}</span><span>📍 Deck ${esc(v.deckLabel)}</span><span>🧭 ${esc(v.best)}</span></div><div class="detail-block"><h3>What is it?</h3><p>${esc(v.detail)}</p></div><div class="detail-block"><h3>Food / experience</h3><p>${esc(v.food)}</p></div><div class="detail-block"><h3>Why remember it</h3><p>${esc(v.related)}</p></div><div class="venue-actions-v07"><button class="primary-venue-btn" data-venue-route="${v.id}">🧭 Take Me There</button><button class="secondary-venue-btn" data-add-mustdo="${v.id}">⭐ Add to Must-Do</button></div><div class="nearby-v07"><h3>Also nearby</h3>${related.length?related.map(r=>`<button class="nearby-item-v07" data-venue-v07="${r.id}">${r.icon} ${r.name}<span>›</span></button>`).join(''):'<p>No mapped nearby suggestions yet.</p>'}</div><div class="explore-source-v07">For current hours, reservations, showtimes and sailing-specific availability, check the Royal App.</div></div>`;
  el('mapOverlay').classList.add('show');el('mapOverlay').setAttribute('aria-hidden','false');
}

function addMustDoV07(id){
  const v=exploreVenues.find(x=>x.id===id); if(!v)return;
  const d=destinations.find(x=>x.id===id); if(d)d.mustdo=true;
  closeMap();
}

addExploreDestinations();
renderDeckCardsV07();

document.addEventListener('click',e=>{
  const dc=e.target.closest('[data-deck-v07]'); if(dc){openDeckExplorerV07(dc.dataset.deck);return;}
  const vc=e.target.closest('[data-venue-v07]'); if(vc){openVenueV07(vc.dataset.venueV07);return;}
  const vr=e.target.closest('[data-venue-route]'); if(vr){closeMap();showRoute(vr.dataset.venueRoute);return;}
  const md=e.target.closest('[data-add-mustdo]'); if(md){addMustDoV07(md.dataset.addMustdo);return;}
  if(e.target.closest('[data-deckmap-v07="5"]')){closeMap();openMapFor('royaltheater');return;}
  if(e.target.closest('[data-deckmap-v07="6"]')){closeMap();openMapFor('royalpromenade');return;}
  if(e.target.closest('[data-deckmap-v07="7"]')){closeMap();openMapFor('surfsideeatery');return;}
  if(e.target.closest('[data-deckmap-v07="8"]')){closeMap();openMapFor('centralpark');return;}
  if(e.target.closest('[data-deckmap-v07="15"]')){closeMap();openMapFor('aquadome');return;}
  if(e.target.closest('[data-deckmap-v07="16"]')){closeMap();openMapFor('basecamp');return;}
});
