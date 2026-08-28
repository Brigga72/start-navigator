const categories = [
  {id:'mustdo', icon:'⭐', title:'My Must-Do List', note:'Your personal cruise shortlist'},
  {id:'shows', icon:'🎭', title:'Shows', note:'Productions & show venues'},
  {id:'dining', icon:'🍴', title:'Eat & Drink', note:'Restaurants, cafes & bars'},
  {id:'pools', icon:'🏊', title:'Pools & Relaxation', note:'Pools, water & chill zones'},
  {id:'activities', icon:'🎢', title:'Activities', note:'Waterpark & attractions'},
  {id:'services', icon:'⚓', title:'Ship Services', note:'Guest Services & essentials'}
];

const destinations = [
  {id:'basecamp', name:'Basecamp', deck:'16', area:'Aft · Thrill Island', category:'dining', mustdo:true, icon:'🍔', keywords:'base camp basecamp burger hot dog thrill island', note:'Your saved recommendation. Basecamp is on Deck 16 in Thrill Island.', confidence:'VENUE + DECK VERIFIED; CABIN-TO-CORE TURN DETAILS IN PROGRESS', mapDeck:'16', mapNode:'basecamp', route:[{kind:'walk',text:'Leave Cabin 7456 and follow the cabin corridor toward the forward elevator bank shown on the Deck 7 map.'},{kind:'elevator',text:'Go up to Deck 16.'},{kind:'orient',text:'On Deck 16, orient toward the aft / Thrill Island area.'},{kind:'arrive',text:'Follow the Thrill Island signs to Basecamp.'}]},
  {id:'aquadome', name:'AquaDome / AquaTheater', deck:'14–15', area:'Forward · AquaDome', category:'shows', mustdo:true, icon:'🌊', keywords:'aquadome aquatheater dome torque pirates mermaids', note:'Your saved recommendation. AquaDome is at the forward end of the ship; AquaTheater is inside the dome.', confidence:'VENUE LOCATION VERIFIED; CABIN-TO-CORE TURN DETAILS IN PROGRESS', mapDeck:'15', mapNode:'aquadome', route:[{kind:'walk',text:'Leave Cabin 7456 and follow the corridor toward the forward elevator bank shown on the Deck 7 map.'},{kind:'elevator',text:'Go up to Deck 15.'},{kind:'orient',text:'On Deck 15, orient forward toward the AquaDome.'},{kind:'arrive',text:'AquaTheater is inside the AquaDome neighborhood.'}]},
  {id:'backfuture', name:'Back to the Future: The Musical', deck:'3–5', area:'Forward · Royal Theater', category:'shows', mustdo:true, icon:'🚗', keywords:'back future musical broadway royal theater show', note:'Royal Caribbean currently lists Back to the Future: The Musical on Star of the Seas. Performance time belongs to your sailing schedule.', confidence:'SHOW + VENUE VERIFIED; PERFORMANCE TIME COMES FROM YOUR SAILING', mapDeck:'5', mapNode:'theater', route:[{kind:'walk',text:'Leave Cabin 7456 and follow the corridor toward the forward elevator bank shown on the Deck 7 map.'},{kind:'elevator',text:'Go down to the Royal Theater access level.'},{kind:'orient',text:'Orient forward toward the Royal Theater.'},{kind:'arrive',text:'Follow Royal Theater signage to the entrance.'}]},
  {id:'torque', name:'Torque', deck:'14–15', area:'Forward · AquaTheater', category:'shows', mustdo:true, icon:'🤸', keywords:'torque aqua show aquatheater diving', note:'Torque is Royal Caribbean’s AquaTheater production on Star of the Seas.', confidence:'SHOW + VENUE VERIFIED; PERFORMANCE TIME COMES FROM YOUR SAILING', mapDeck:'15', mapNode:'aquadome', route:[{kind:'walk',text:'Leave Cabin 7456 and follow the corridor toward the forward elevator bank shown on the Deck 7 map.'},{kind:'elevator',text:'Go up to Deck 15.'},{kind:'orient',text:'Orient forward toward the AquaDome.'},{kind:'arrive',text:'Continue into the AquaTheater area for Torque.'}]},
  {id:'sol', name:'SOL', deck:'4–5', area:'Forward · Absolute Zero', category:'shows', mustdo:true, icon:'⛸️', keywords:'sol ice show absolute zero skating', note:'SOL is one of the entertainment productions currently listed by Royal Caribbean for Star of the Seas.', confidence:'SHOW + VENUE VERIFIED; PERFORMANCE TIME COMES FROM YOUR SAILING', mapDeck:'5', mapNode:'absolute', route:[{kind:'walk',text:'Leave Cabin 7456 and follow the corridor toward the forward elevator bank shown on the Deck 7 map.'},{kind:'elevator',text:'Go down to Deck 5.'},{kind:'orient',text:'Orient toward the Absolute Zero entertainment area.'},{kind:'arrive',text:'Follow signs to Absolute Zero.'}]},
  {id:'windjammer', name:'Windjammer Marketplace', deck:'15', area:'Aft · Dining', category:'dining', icon:'🥐', keywords:'buffet breakfast lunch dinner aft', note:'Windjammer is on the aft portion of Deck 15.', confidence:'VENUE LOCATION VERIFIED; CORRIDOR ROUTE CONSERVATIVE', mapDeck:'15', mapNode:'windjammer', route:[{kind:'walk',text:'Leave Cabin 7456 and follow the corridor toward the forward elevator bank shown on the Deck 7 map.'},{kind:'elevator',text:'Go up to Deck 15.'},{kind:'orient',text:'Orient aft toward the Windjammer dining area.'},{kind:'arrive',text:'Follow the dining signs to Windjammer Marketplace.'}]},
  {id:'mdr', name:'Main Dining Room', deck:'3–5', area:'Aft · Dining', category:'dining', icon:'🍽️', keywords:'main dining dinner breakfast lunch', note:'The Main Dining Room occupies the aft area across Decks 3–5.', confidence:'VENUE LOCATION VERIFIED; CORRIDOR ROUTE CONSERVATIVE', mapDeck:'5', mapNode:'mdr', route:[{kind:'walk',text:'Leave Cabin 7456 and follow the corridor toward the forward elevator bank shown on the Deck 7 map.'},{kind:'elevator',text:'Go down to Deck 5 for the upper level of the dining room.'},{kind:'orient',text:'Orient aft toward the Main Dining Room.'},{kind:'arrive',text:'Follow dining-room signs to the entrance.'}]},
  {id:'theater', name:'Royal Theater', deck:'3–5', area:'Forward · Entertainment', category:'shows', icon:'🎭', keywords:'show theater performance broadway', note:'Royal Theater is the home of major stage productions including Back to the Future.', confidence:'VENUE AREA VERIFIED; EXACT CABIN-TO-CORE ROUTE TO BE REFINED', mapDeck:'5', mapNode:'theater', route:[{kind:'walk',text:'Leave Cabin 7456 and follow the corridor toward the forward elevator bank shown on the Deck 7 map.'},{kind:'elevator',text:'Go down to the Royal Theater access level.'},{kind:'orient',text:'Orient forward toward Royal Theater.'},{kind:'arrive',text:'Follow Royal Theater signs to the entrance.'}]},
  {id:'absolute', name:'Absolute Zero', deck:'4–5', area:'Entertainment · Ice arena', category:'shows', icon:'🧊', keywords:'ice skating ice show laser tag sol', note:'Absolute Zero is the ship’s ice arena in the lower entertainment decks.', confidence:'VENUE AREA VERIFIED; EXACT ENTRANCE TO BE REFINED', mapDeck:'5', mapNode:'absolute', route:[{kind:'walk',text:'Leave Cabin 7456 and follow the corridor toward the forward elevator bank shown on the Deck 7 map.'},{kind:'elevator',text:'Go down to Deck 5.'},{kind:'orient',text:'Orient toward the Absolute Zero arena.'},{kind:'arrive',text:'Follow signs to Absolute Zero.'}]},
  {id:'promenade', name:'Royal Promenade', deck:'5–6', area:'Midship · Shopping & Dining', category:'dining', icon:'🛍️', keywords:'royal promenade shops sorrentos pearl cafe', note:'The Royal Promenade is the ship’s central indoor public neighborhood on Decks 5–6.', confidence:'NEIGHBORHOOD LOCATION VERIFIED; ROUTE CONSERVATIVE', mapDeck:'6', mapNode:'promenade', route:[{kind:'walk',text:'Leave Cabin 7456 and follow the corridor toward the forward elevator bank shown on the Deck 7 map.'},{kind:'elevator',text:'Go down to Deck 6.'},{kind:'orient',text:'Orient toward the Royal Promenade.'},{kind:'arrive',text:'Enter the Promenade and use landmarks such as The Pearl to stay oriented.'}]},
  {id:'centralpark', name:'Central Park', deck:'8', area:'Midship · Neighborhood', category:'dining', icon:'🌳', keywords:'central park chops park cafe izumi', note:'Central Park occupies Deck 8.', confidence:'NEIGHBORHOOD LOCATION VERIFIED; ROUTE CONSERVATIVE', mapDeck:'8', mapNode:'centralpark', route:[{kind:'walk',text:'Leave Cabin 7456 and follow the corridor toward the forward elevator bank shown on the Deck 7 map.'},{kind:'elevator',text:'Go up to Deck 8.'},{kind:'orient',text:'Orient toward the Central Park neighborhood.'},{kind:'arrive',text:'Follow signs into Central Park.'}]},
  {id:'category6', name:'Category 6 Waterpark', deck:'16 & 20', area:'Aft · Thrill Island', category:'activities', icon:'🎢', keywords:'waterpark slides category 6 thrill island', note:'Category 6 is concentrated in the Thrill Island area on the upper decks; follow slide-specific signage.', confidence:'ATTRACTION LOCATION VERIFIED; ROUTE CONSERVATIVE', mapDeck:'16', mapNode:'category6', route:[{kind:'walk',text:'Leave Cabin 7456 and follow the corridor toward the forward elevator bank shown on the Deck 7 map.'},{kind:'elevator',text:'Go up to Deck 16.'},{kind:'orient',text:'Orient aft toward Thrill Island / Category 6.'},{kind:'arrive',text:'Follow the specific slide signs; some access points continue to higher decks.'}]},
  {id:'royalbay', name:'Royal Bay Pool', deck:'15', area:'Midship · Chill Island', category:'pools', icon:'🏖️', keywords:'royal bay pool swim tonic chill island', note:'Royal Bay Pool is on Deck 15 in Chill Island.', confidence:'POOL LOCATION VERIFIED; ROUTE CONSERVATIVE', mapDeck:'15', mapNode:'royalbay', route:[{kind:'walk',text:'Leave Cabin 7456 and follow the corridor toward the forward elevator bank shown on the Deck 7 map.'},{kind:'elevator',text:'Go up to Deck 15.'},{kind:'orient',text:'Orient toward Chill Island / Royal Bay.'},{kind:'arrive',text:'Follow the pool deck signs to Royal Bay Pool.'}]},
  {id:'guestservices', name:'Guest Services', deck:'5', area:'Midship · Services', category:'services', icon:'🧑‍💼', keywords:'guest services reception help desk', note:'Guest Services is on Deck 5.', confidence:'SERVICE LOCATION VERIFIED; ROUTE CONSERVATIVE', mapDeck:'5', mapNode:'guestservices', route:[{kind:'walk',text:'Leave Cabin 7456 and follow the corridor toward the forward elevator bank shown on the Deck 7 map.'},{kind:'elevator',text:'Go down to Deck 5.'},{kind:'orient',text:'Orient toward Guest Services.'},{kind:'arrive',text:'Follow the Guest Services signs.'}]}
];

const unavailableRecommendations=[{name:'Johnny Rockets', icon:'🍔', text:'Current Star of the Seas venue lists do not show Johnny Rockets. Kept here as a CHECK item so we don’t route you to the wrong venue.'}];

const deckInfo = [
  {deck:'3–5', title:'Main Entertainment + Dining', text:'Royal Theater is forward, Main Dining Room is aft, and Absolute Zero occupies the lower entertainment area.'},
  {deck:'5–6', title:'Royal Promenade', text:'The central indoor public neighborhood with dining, bars, shops and major circulation.'},
  {deck:'7', title:'Your Home', text:'Cabin 7456 is your home base on Deck 7. The mini-map uses it as the starting point.'},
  {deck:'8', title:'Central Park', text:'Outdoor garden neighborhood with restaurants and bars.'},
  {deck:'14–15', title:'AquaDome', text:'Forward end of the ship. AquaDome combines entertainment, dining and relaxation.'},
  {deck:'15', title:'Pools + Windjammer', text:'Royal Bay Pool, Chill Island, Windjammer and AquaDome access are major Deck 15 landmarks.'},
  {deck:'16+', title:'Thrill Island', text:'Basecamp, Category 6 and other high-energy attractions are concentrated on the upper aft decks.'}
];

let currentView='home'; let lessonIndex=0; let currentMapState=null;
const lessons=[
  {q:'You want Basecamp. Which deck should you remember?', a:['Deck 6','Deck 8','Deck 16'], correct:2, why:'Basecamp is on Deck 16 in Thrill Island.'},
  {q:'Which end of the ship should you associate with AquaDome?', a:['Forward','Midship','Aft'], correct:0, why:'AquaDome is a major forward landmark on Decks 14–15.'},
  {q:'Where should you head for Back to the Future: The Musical?', a:['AquaTheater','Royal Theater','Absolute Zero'], correct:1, why:'Back to the Future is staged in the Royal Theater.'}
];

function el(id){return document.getElementById(id)}
function renderCategories(){el('categoryGrid').innerHTML=categories.map(c=>`<button class="cat" data-cat="${c.id}"><strong>${c.icon} ${c.title}</strong><span>${c.note}</span></button>`).join('')}
function row(d){return `<button class="dest-row" data-dest="${d.id}"><span class="dest-icon">${d.icon}</span><span class="dest-main"><span class="dest-name">${d.name}${d.mustdo?' <b class="must-pill">MUST-DO</b>':''}</span><span class="dest-meta">Deck ${d.deck} · ${d.area}</span></span><span class="dest-arrow">›</span></button>`}
function renderSearch(list, extra=''){el('destinationList').innerHTML=list.map(row).join('')+extra; el('destinationList').classList.toggle('hidden',list.length===0&&!extra)}
function navigate(view){currentView=view;document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));el(view+'View').classList.add('active');document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active',t.dataset.view===view));window.scrollTo({top:0,behavior:'smooth'})}

function esc(s){return String(s).replace(/[&<>\"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','\\':'&#92;','"':'&quot;'}[m]))}

function shipMapSVG(deck, destinationNode=null, mode='route'){
  const d=String(deck);
  const shell=`<svg class="shipmap" viewBox="0 0 390 250" role="img" aria-label="Simplified Deck ${esc(d)} navigation map"><rect width="390" height="250" rx="18" fill="#f7f9fb"/><path d="M195 15 C145 18 92 33 65 61 L49 211 Q62 232 92 235 H298 Q328 232 341 211 L325 61 C298 33 245 18 195 15Z" fill="#fff" stroke="#cfd8e1" stroke-width="2"/><text x="195" y="12" text-anchor="middle" class="map-dir">▲ FORWARD / BOW</text><text x="195" y="248" text-anchor="middle" class="map-dir">AFT / STERN ▼</text>`;
  const core=(y,label)=>`<g><rect x="154" y="${y}" width="82" height="27" rx="11" class="map-core"/><text x="195" y="${y+17}" text-anchor="middle" class="map-core-text">${label}</text></g>`;
  let v='', cores='', home='', path='';
  const pts={};
  if(d==='7'){
    v=`<rect x="129" y="38" width="132" height="73" rx="11" class="map-zone"/><text x="195" y="56" text-anchor="middle" class="map-muted">INTERIOR CABINS</text><text x="195" y="75" text-anchor="middle" class="map-zone-text">7456</text><path d="M195 82 L195 126" class="route-line"/><rect x="67" y="164" width="256" height="45" rx="12" class="map-zone destzone"/><text x="195" y="184" text-anchor="middle" class="map-zone-text">SURFSIDE / PUBLIC AREA</text><text x="195" y="200" text-anchor="middle" class="map-muted">second elevator core farther aft</text>`;
    cores=core(118,'FORWARD LIFTS')+core(211,'AFT LIFTS'); home=`<circle cx="195" cy="76" r="11" class="map-you"/><text x="214" y="80" class="map-label">HOME</text>`;
  } else if(d==='5'){
    v=`<rect x="92" y="34" width="206" height="35" rx="10" class="map-zone destzone"/><text x="195" y="56" text-anchor="middle" class="map-zone-text">ROYAL THEATER</text><rect x="72" y="98" width="246" height="35" rx="10" class="map-zone"/><text x="195" y="120" text-anchor="middle" class="map-zone-text">THE PEARL / GUEST SERVICES</text><rect x="76" y="176" width="110" height="36" rx="10" class="map-zone destzone"/><text x="131" y="198" text-anchor="middle" class="map-zone-text">DINING ROOM</text><rect x="204" y="176" width="110" height="36" rx="10" class="map-zone destzone"/><text x="259" y="198" text-anchor="middle" class="map-zone-text">ABSOLUTE ZERO</text>`;
    cores=core(72,'FORWARD LIFTS')+core(139,'AFT LIFTS'); Object.assign(pts,{theater:[195,51],guestservices:[132,115],mdr:[131,194],absolute:[259,194]});
  } else if(d==='6'){
    v=`<rect x="75" y="40" width="240" height="72" rx="14" class="map-zone destzone"/><text x="195" y="70" text-anchor="middle" class="map-zone-text big">ROYAL PROMENADE</text><text x="195" y="91" text-anchor="middle" class="map-muted">Pearl · Boleros · Schooner Bar</text><rect x="75" y="157" width="240" height="52" rx="12" class="map-zone"/><text x="195" y="180" text-anchor="middle" class="map-zone-text">PLAYMAKERS / ADVENTURE OCEAN</text><text x="195" y="198" text-anchor="middle" class="map-muted">stairs connect toward Surfside</text>`;
    cores=core(119,'ELEVATORS'); Object.assign(pts,{promenade:[195,75]});
  } else if(d==='8'){
    v=`<path d="M126 37 Q195 25 264 37 L264 157 Q195 181 126 157Z" class="map-zone destzone"/><text x="195" y="70" text-anchor="middle" class="map-zone-text big">CENTRAL PARK</text><text x="195" y="91" text-anchor="middle" class="map-muted">Park Café · Lou's · Bubbles</text><text x="195" y="109" text-anchor="middle" class="map-muted">Izumi · Chops · Trellis Bar</text><rect x="116" y="192" width="158" height="25" rx="9" class="map-zone"/><text x="195" y="208" text-anchor="middle" class="map-core-text">STAIRS DOWN TO DECK 7</text>`;
    cores=core(158,'ELEVATORS'); Object.assign(pts,{centralpark:[195,77]});
  } else if(d==='15'){
    v=`<path d="M88 30 Q195 9 302 30 L290 92 H100Z" class="map-zone destzone"/><text x="195" y="52" text-anchor="middle" class="map-zone-text big">AQUADOME</text><text x="195" y="70" text-anchor="middle" class="map-muted">Overlook · AquaTheater · Rye &amp; Bean</text><rect x="66" y="116" width="112" height="35" rx="10" class="map-zone destzone"/><text x="122" y="138" text-anchor="middle" class="map-zone-text">ROYAL BAY POOL</text><rect x="212" y="116" width="112" height="35" rx="10" class="map-zone"/><text x="268" y="138" text-anchor="middle" class="map-zone-text">CHILL ISLAND</text><rect x="91" y="193" width="208" height="35" rx="10" class="map-zone destzone"/><text x="195" y="215" text-anchor="middle" class="map-zone-text">WINDJAMMER MARKETPLACE</text>`;
    cores=core(82,'FORWARD LIFTS')+core(157,'AFT LIFTS'); Object.assign(pts,{aquadome:[195,52],royalbay:[122,134],windjammer:[195,210]});
  } else if(d==='16'){
    v=`<rect x="76" y="41" width="238" height="37" rx="10" class="map-zone"/><text x="195" y="64" text-anchor="middle" class="map-zone-text">COASTAL KITCHEN / SUITE AREA</text><rect x="69" y="129" width="122" height="52" rx="12" class="map-zone destzone"/><text x="130" y="151" text-anchor="middle" class="map-zone-text">BASECAMP</text><text x="130" y="168" text-anchor="middle" class="map-muted">Adrenaline Peak</text><rect x="207" y="129" width="114" height="52" rx="12" class="map-zone destzone"/><text x="264" y="151" text-anchor="middle" class="map-zone-text">SLIDES</text><text x="264" y="168" text-anchor="middle" class="map-muted">Thrill Island</text><text x="195" y="216" text-anchor="middle" class="map-zone-text">LOST DUNES · FLOWRIDER</text>`;
    cores=core(88,'ELEVATORS'); Object.assign(pts,{basecamp:[130,151],category6:[264,151]});
  }
  if(destinationNode && pts[destinationNode]){const p=pts[destinationNode];v+=`<circle cx="${p[0]}" cy="${p[1]}" r="13" class="map-dest"/><circle cx="${p[0]}" cy="${p[1]}" r="4" fill="#fff"/>`;}
  return shell+v+cores+home+path+`</svg>`;
}
function routeMapPanel(d){
  const map = shipMapSVG('7', null, 'route');
  const destMap = shipMapSVG(d.mapDeck, d.mapNode, 'route');
  return `<div class="map-card"><div class="map-head"><div><div class="confidence">VISUAL ROUTE</div><h3>See the journey</h3><p>Mini-map shows your home deck and destination deck.</p></div><button class="map-open" data-openmap="${d.id}">Full map</button></div><div class="map-steps"><div class="map-stage"><div class="stage-title"><span>1</span> DEPART</div>${map}</div><div class="route-bridge"><div class="bridge-line"></div><div class="bridge-copy">🛗 ${d.mapDeck==='7'?'Same deck':'Change decks'}<br><small>${d.mapDeck==='7'?'Follow the highlighted route':'Use elevator / stairs'}</small></div></div><div class="map-stage"><div class="stage-title"><span>2</span> ARRIVE · DECK ${esc(d.mapDeck)}</div>${destMap}</div></div><div class="map-disclaimer">Schematic · not to scale · exact corridor geometry is still being refined.</div></div>`;
}

let currentLocationId='cabin7456';
let guidedState={destId:null,step:0};

const locations=[
  {id:'cabin7456',name:'Cabin 7456',deck:'7',area:'Forward / center',icon:'🏠',mapDeck:'7',mapNode:null,keywords:'cabin 7456 home'},
  ...destinations.map(d=>({id:d.id,name:d.name,deck:String(d.mapDeck),area:d.area,icon:d.icon,mapDeck:String(d.mapDeck),mapNode:d.mapNode,keywords:d.keywords}))
];
function locationById(id){return locations.find(x=>x.id===id)||locations[0]}
function routeFor(fromId,toId){
  const from=locationById(fromId); const to=destinations.find(x=>x.id===toId); if(!to)return [];
  if(from.id==='cabin7456') return to.route;
  const sameDeck=String(from.mapDeck)===String(to.mapDeck);
  const areaForward=/Forward/i.test(to.area);
  const areaAft=/Aft/i.test(to.area);
  const homeLike=from.name.toLowerCase().includes('cabin');
  const departText=homeLike
    ? `Start at ${from.name} and use the cabin corridor toward the most useful elevator/stair connection shown on the deck map.`
    : `Start at ${from.name}. Use the nearby ship landmarks and signs to reach the next navigation point.`;
  if(sameDeck){
    return [
      {kind:'walk',text:departText},
      {kind:'orient',text:`Stay on Deck ${from.mapDeck} and orient ${areaForward?'forward':areaAft?'aft':'toward the destination area'} toward ${to.name}.`},
      {kind:'arrive',text:`Follow signs and nearby landmarks to ${to.name}.`}
    ];
  }
  return [
    {kind:'walk',text:departText},
    {kind:'elevator',text:`Take the appropriate elevator or stair connection from Deck ${from.mapDeck} to Deck ${to.mapDeck}.`},
    {kind:'orient',text:`On Deck ${to.mapDeck}, orient ${areaForward?'forward':areaAft?'aft':'toward the destination area'} toward ${to.name}.`},
    {kind:'arrive',text:`Follow signs and nearby landmarks to ${to.name}.`}
  ];
}
function routeAreaLabel(fromId,to){const from=locationById(fromId);return `${from.name} → ${to.name}`;}
function guidedMapFor(d,idx){
  const step=d.route[idx]||d.route[0];
  const from=locationById(currentLocationId);
  if(step.kind==='walk') return `<div class="guided-map-label">DECK ${esc(from.mapDeck)} · ${esc(from.name)}</div>${shipMapSVG(from.mapDeck,from.mapNode,'route')}`;
  if(step.kind==='elevator'){
    const fromDeck=String(from.mapDeck), toDeck=String(d.mapDeck);
    const direction=Number(toDeck.match(/\d+/)?.[0]||0)>=Number(fromDeck.match(/\d+/)?.[0]||0)?'↑':'↓';
    return `<div class="deck-change-card"><div class="deck-change-icon">🛗</div><div class="deck-from">DECK ${esc(fromDeck)}</div><div class="deck-arrow">${direction}</div><div class="deck-to">DECK ${esc(toDeck)}</div><small>Use ship signage to confirm the deck before exiting.</small></div>`;
  }
  return `<div class="guided-map-label">DECK ${esc(d.mapDeck)} · ${esc(d.name)}</div>${shipMapSVG(d.mapDeck,d.mapNode,'route')}`;
}
function renderGuidedRoute(){
  const d=destinations.find(x=>x.id===guidedState.destId);if(!d)return;
  d.route=routeFor(currentLocationId,d.id);
  const idx=Math.max(0,Math.min(guidedState.step,d.route.length-1)); const s=d.route[idx];
  const type=s.kind==='elevator'?'DECK CHANGE':s.kind==='arrive'?'ARRIVE':s.kind==='orient'?'ORIENT':'WALK';
  const pct=Math.round(((idx+1)/d.route.length)*100);
  const from=locationById(currentLocationId);
  const nearby=d.id==='aquadome'||d.id==='torque'?`<div class="nearby-card"><div class="confidence">WHILE YOU'RE HERE</div><h3>Nearby in AquaDome</h3><div class="nearby-chips"><span>💎 The Overlook</span><span>☕ Rye & Bean</span><span>🍴 AquaDome Market</span></div></div>`:d.id==='basecamp'?`<div class="nearby-card"><div class="confidence">WHILE YOU'RE HERE</div><h3>Nearby in Thrill Island</h3><div class="nearby-chips"><span>🧗 Adrenaline Peak</span><span>⛳ Lost Dunes</span><span>🏄 FlowRider</span></div></div>`:'';
  const progressText=`STEP ${idx+1} OF ${d.route.length}`;
  el('routeContent').innerHTML=`<div class="location-picker"><button class="location-field" id="fromLocationBtn"><span>📍 FROM</span><strong>${esc(from.name)}</strong><small>Deck ${esc(from.mapDeck)} · change</small></button><div class="location-arrow">→</div><button class="location-field" id="toLocationBtn"><span>🎯 TO</span><strong>${esc(d.name)}</strong><small>Deck ${esc(d.mapDeck)}</small></button></div><div class="guided-top"><button class="back-btn" onclick="navigate('home')">‹ Exit</button><div class="guided-progress"><span>${progressText}</span><div><i style="width:${pct}%"></i></div></div></div><div class="route-hero guided-hero"><div class="eyebrow">${esc(routeAreaLabel(currentLocationId,d))}</div><h2>${type}</h2><div class="route-tag">Deck ${idx<2?esc(from.mapDeck):esc(d.mapDeck)} · ${esc(d.area)}</div></div><div class="guided-map">${guidedMapFor(d,idx)}<button class="map-open guided-full" data-openmap="${d.id}">Expand map</button></div><div class="instruction-card"><div class="step-num big">${idx+1}</div><div><div class="step-type">${type}</div><div class="instruction-text">${esc(s.text)}</div></div></div>${idx===d.route.length-1?nearby:''}<div class="guided-actions">${idx>0?'<button class="secondary-action" id="prevGuide">← Previous</button>':''}<button class="confused-action" id="confusedBtn">? I'm confused</button>${idx<d.route.length-1?'<button class="next-action" id="nextGuide">NEXT →</button>':'<button class="next-action" id="finishGuide">✓ ARRIVED</button>'}</div>`;
  el('fromLocationBtn').onclick=()=>openLocationPicker('from');
  el('toLocationBtn').onclick=()=>openLocationPicker('to');
  if(el('nextGuide'))el('nextGuide').onclick=()=>{guidedState.step++;renderGuidedRoute()};
  if(el('prevGuide'))el('prevGuide').onclick=()=>{guidedState.step--;renderGuidedRoute()};
  if(el('finishGuide'))el('finishGuide').onclick=()=>navigate('home');
  if(el('confusedBtn'))el('confusedBtn').onclick=()=>showRecovery(d,idx);
}
function openLocationPicker(mode){
  const current=mode==='from'?currentLocationId:guidedState.destId;
  el('overlayTitle').textContent=mode==='from'?'Where are you starting?':'Where do you want to go?';
  const list=locations.filter(x=>mode==='from'||x.id!=='cabin7456');
  el('overlayMap').innerHTML=`<div class="location-picker-sheet"><p>${mode==='from'?'Choose your current location. Route will recalculate immediately.':'Choose a new destination while keeping your current location.'}</p><input id="locationSearch" class="location-search" placeholder="Search locations..." autocomplete="off"><div id="locationChoices">${renderLocationChoices(list,current)}</div><div class="recovery-tip"><strong>Tip:</strong> you can change this again at any time during the route.</div></div>`;
  el('mapOverlay').classList.add('show');el('mapOverlay').setAttribute('aria-hidden','false');
  const search=el('locationSearch');
  search.oninput=()=>{const q=search.value.toLowerCase().trim();const filtered=list.filter(x=>(x.name+' '+x.area+' '+x.keywords).toLowerCase().includes(q));el('locationChoices').innerHTML=renderLocationChoices(filtered,current)};
  el('locationChoices').onclick=(e)=>{
    const b=e.target.closest('[data-location-choice]'); if(!b)return;
    const id=b.dataset.locationChoice;
    closeMap();
    if(mode==='from'){currentLocationId=id;persistCurrentLocation();guidedState.step=0;} else {guidedState.destId=id;guidedState.step=0;}
    const d=destinations.find(x=>x.id===guidedState.destId);
    if(d){document.body.classList.toggle('route-aft',/Aft/i.test(d.area));renderGuidedRoute();}
  };
}
function renderLocationChoices(list,current){return list.map(x=>`<button class="location-choice ${x.id===current?'selected':''}" data-location-choice="${x.id}"><span>${x.icon||'📍'}</span><span><strong>${esc(x.name)}</strong><small>Deck ${esc(x.mapDeck)} · ${esc(x.area)}</small></span>${x.id===current?'<b>✓</b>':''}</button>`).join('')||'<div class="empty-choice">No matching locations.</div>'}
function showRecovery(d,idx){
  const landmarks=d.mapDeck==='15'?['AquaDome / AquaTheater','Royal Bay Pool','Windjammer Marketplace','Elevator lobby']:d.mapDeck==='16'?['Basecamp','Slide entrances','Lost Dunes / FlowRider','Elevator lobby']:d.mapDeck==='5'?['Royal Theater','The Pearl','Dining Room','Absolute Zero','Elevator lobby']:d.mapDeck==='8'?['Central Park','Park Café','Lou’s','Elevator lobby']:['Cabin-number signs','Forward elevator lobby','Surfside','Another elevator lobby'];
  el('overlayTitle').textContent='Where are you now?';
  el('overlayMap').innerHTML=`<div class="recovery"><p>Select a landmark you can see. This does not use GPS; it helps you re-orient from a known place.</p>${landmarks.map(x=>`<button class="recovery-place">📍 ${esc(x)}</button>`).join('')}<div class="recovery-tip"><strong>Ship compass:</strong> keep the pointed bow toward <b>FORWARD</b>. Check nearby wall/elevator signage for deck and venue names.</div></div><div class="overlay-section">${shipMapSVG(idx<2?'7':d.mapDeck,idx<2?null:d.mapNode,'route')}</div>`;
  el('mapOverlay').classList.add('show');el('mapOverlay').setAttribute('aria-hidden','false');
  el('overlayMap').querySelectorAll('.recovery-place').forEach(b=>b.onclick=()=>{closeMap();});
}
function showRoute(id){
  const d=destinations.find(x=>x.id===id);if(!d)return; currentMapState=d.id; guidedState={destId:id,step:0};
  const towardAft=/Aft/i.test(d.area); const arrow=el('compassArrow'), hint=el('compassHint'); if(arrow) arrow.textContent=towardAft?'↓':'↑'; if(hint) hint.textContent=towardAft?'Route trends AFT':'Route trends FORWARD'; document.body.classList.toggle('route-aft',towardAft);
  navigate('route'); renderGuidedRoute();
}

function openMapFor(id){
  const d=destinations.find(x=>x.id===id);if(!d)return;
  const from=locationById(currentLocationId);
  el('overlayTitle').textContent=`${from.name} → ${d.name}`;
  el('overlayMap').innerHTML=`<div class="overlay-section"><div class="overlay-label">DECK ${esc(from.mapDeck)} · CURRENT LOCATION</div>${shipMapSVG(from.mapDeck,from.mapNode,'route')}</div><div class="overlay-connector">↓ ${String(from.mapDeck)===String(d.mapDeck)?'ROUTE ON SAME DECK':'ELEVATOR / STAIR TRANSITION'} ↓</div><div class="overlay-section"><div class="overlay-label">DECK ${esc(d.mapDeck)} · DESTINATION</div>${shipMapSVG(d.mapDeck,d.mapNode,'route')}</div>`;
  el('mapOverlay').classList.add('show');el('mapOverlay').setAttribute('aria-hidden','false');
}
function closeMap(){el('mapOverlay').classList.remove('show');el('mapOverlay').setAttribute('aria-hidden','true')}

function renderDecks(){el('deckCards').innerHTML=deckInfo.map(x=>`<button class="deck-card" data-deck="${esc(x.deck)}"><div class="deck-label">DECK ${esc(x.deck)}</div><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></button>`).join('')}
function renderLesson(){const l=lessons[lessonIndex];el('lessonCard').innerHTML=`<div class="confidence">CHALLENGE ${lessonIndex+1} OF ${lessons.length}</div><div class="lesson-q">${l.q}</div><div class="answers">${l.a.map((x,i)=>`<button class="answer" data-answer="${i}">${x}</button>`).join('')}</div><div id="lessonFeedback" class="lesson-feedback"></div>`;el('lessonCard').querySelectorAll('.answer').forEach(b=>b.addEventListener('click',()=>{const chosen=Number(b.dataset.answer),all=el('lessonCard').querySelectorAll('.answer');all.forEach(a=>a.disabled=true);b.classList.add(chosen===l.correct?'correct':'wrong');if(chosen!==l.correct)all[l.correct].classList.add('correct');el('lessonFeedback').innerHTML=(chosen===l.correct?'✅ Correct. ':'Not quite. ')+l.why+(lessonIndex<lessons.length-1?' <button id="nextLesson" class="answer next">Next challenge →</button>':' <button id="finishLesson" class="answer next">Back to navigator</button>');if(el('nextLesson'))el('nextLesson').onclick=()=>{lessonIndex++;renderLesson()};if(el('finishLesson'))el('finishLesson').onclick=()=>navigate('home')}))}
function showMustDo(){const extra=unavailableRecommendations.map(x=>`<div class="unavailable"><strong>${x.icon} ${x.name} · CHECK</strong><span>${esc(x.text)}</span></div>`).join('');renderSearch(destinations.filter(d=>d.mustdo),extra)}

renderCategories();renderSearch([]);renderDecks();renderLesson();
document.addEventListener('click',e=>{
  const cat=e.target.closest('[data-cat]');if(cat){if(cat.dataset.cat==='mustdo')showMustDo();else renderSearch(destinations.filter(d=>d.category===cat.dataset.cat));el('searchInput').value='';return}
  const dest=e.target.closest('[data-dest]');if(dest){showRoute(dest.dataset.dest);return}
  const view=e.target.closest('[data-view]');if(view){navigate(view.dataset.view);return}
  const go=e.target.closest('[data-go]');if(go){navigate(go.dataset.go);return}
  const open=e.target.closest('[data-openmap]');if(open){openMapFor(open.dataset.openmap);return}
});
el('searchInput').addEventListener('input',e=>{const q=e.target.value.toLowerCase().trim();if(!q){renderSearch([]);return}renderSearch(destinations.filter(d=>(d.name+' '+d.area+' '+d.keywords).toLowerCase().includes(q)))});
function renderHomeRoute(){
  const from=locationById(currentLocationId);
  const r=window.__homeRoute;
  if(!r)return;
  const idx=Math.max(0,Math.min(guidedState.step,r.route.length-1));
  const step=r.route[idx];
  const type=step.kind==='elevator'?'DECK CHANGE':step.kind==='arrive'?'ARRIVE':step.kind==='orient'?'ORIENT':'WALK';
  const pct=Math.round(((idx+1)/r.route.length)*100);
  const mapHtml=step.kind==='elevator'
    ? '<div class="deck-change-card"><div class="deck-change-icon">🛗</div><div class="deck-from">DECK '+esc(from.mapDeck)+'</div><div class="deck-arrow">↓</div><div class="deck-to">DECK 7</div><small>Use ship signage to confirm the deck before exiting.</small></div>'
    : shipMapSVG(step.kind==='arrive'?'7':from.mapDeck,null,'route');
  const nextHtml=idx<r.route.length-1
    ? '<button class="next-action" id="nextHome">NEXT →</button>'
    : '<button class="next-action" id="finishHome">✓ ARRIVED</button>';
  const prevHtml=idx>0 ? '<button class="secondary-action" id="prevHome">← Previous</button>' : '';
  el('routeContent').innerHTML = [
    '<div class="location-picker">',
      '<button class="location-field" id="fromLocationBtn"><span>📍 FROM</span><strong>'+esc(from.name)+'</strong><small>Deck '+esc(from.mapDeck)+' · change</small></button>',
      '<div class="location-arrow">→</div>',
      '<button class="location-field" id="homeToField"><span>🎯 TO</span><strong>Cabin 7456</strong><small>Deck 7</small></button>',
    '</div>',
    '<div class="guided-top"><button class="back-btn" onclick="navigate(\'home\')">‹ Exit</button><div class="guided-progress"><span>STEP '+(idx+1)+' OF '+r.route.length+'</span><div><i style="width:'+pct+'%"></i></div></div></div>',
    '<div class="route-hero guided-hero"><div class="eyebrow">'+esc(from.name)+' → CABIN 7456</div><h2>'+type+'</h2><div class="route-tag">Deck '+esc(from.mapDeck)+' · Home</div></div>',
    '<div class="guided-map"><div class="guided-map-label">DECK '+esc(from.mapDeck)+'</div>'+mapHtml+'</div>',
    '<div class="instruction-card"><div class="step-num big">'+(idx+1)+'</div><div><div class="step-type">'+type+'</div><div class="instruction-text">'+esc(step.text)+'</div></div></div>',
    '<div class="guided-actions">'+prevHtml+'<button class="confused-action" id="confusedHome">? I\'m confused</button>'+nextHtml+'</div>'
  ].join('');
  el('fromLocationBtn').onclick=()=>openLocationPicker('from');
  if(el('nextHome'))el('nextHome').onclick=()=>{guidedState.step++;renderHomeRoute()};
  if(el('prevHome'))el('prevHome').onclick=()=>{guidedState.step--;renderHomeRoute()};
  if(el('finishHome'))el('finishHome').onclick=()=>navigate('home');
  if(el('confusedHome'))el('confusedHome').onclick=()=>openLocationPicker('from');
}

guidedState={destId:null,step:0};

el('takeHome').addEventListener('click',()=>{
  if(currentLocationId==='cabin7456'){
    guidedState={destId:null,step:0};
    window.__homeRoute={id:'cabin7456',name:'Cabin 7456',mapDeck:'7',route:[{kind:'arrive',text:'You are already at Cabin 7456.'}]};
  } else {
    const from=locationById(currentLocationId);
    const steps=String(from.mapDeck)==='7'
      ? [{kind:'walk',text:`From ${from.name}, stay on Deck 7 and use cabin-number signage toward Cabin 7456.`},{kind:'arrive',text:'Use the cabin-number signs to find Cabin 7456.'}]
      : [{kind:'walk',text:`From ${from.name}, use the nearest elevator or stair connection.`},{kind:'elevator',text:`Travel from Deck ${from.mapDeck} to Deck 7.`},{kind:'orient',text:'On Deck 7, orient toward the forward / center cabin corridor.'},{kind:'arrive',text:'Use cabin-number signage to find Cabin 7456.'}];
    window.__homeRoute={id:'cabin7456',name:'Cabin 7456',mapDeck:'7',route:steps};
    guidedState={destId:null,step:0};
  }
  navigate('route');
  renderHomeRoute();
});
el('infoBtn').onclick=()=>navigate('info');

// v0.8: persistent local state + update detection
const BUILD_VERSION = '0.9.1';
const BUILD_URL = './version.json';
const MUSTDO_KEY = 'star-nav-mustdo-v091';
const LOCATION_KEY = 'star-nav-location-v091';

function persistMustDoState(){
  try { localStorage.setItem(MUSTDO_KEY, JSON.stringify(destinations.filter(d=>d.mustdo).map(d=>d.id))); } catch(_) {}
}
function restoreMustDoState(){
  try {
    const ids = JSON.parse(localStorage.getItem(MUSTDO_KEY) || '[]');
    const set = new Set(ids);
    destinations.forEach(d => { if(set.has(d.id)) d.mustdo = true; });
  } catch(_) {}
}
function restoreCurrentLocation(){
  try {
    const id = localStorage.getItem(LOCATION_KEY);
    if(id && locationById(id)) currentLocationId = id;
  } catch(_) {}
}
function persistCurrentLocation(){ try { localStorage.setItem(LOCATION_KEY, currentLocationId); } catch(_) {} }

function updateHeaderVersion(){
  const h = document.querySelector('.topbar h1');
  if(h) h.innerHTML = `Star Navigator <span>v${BUILD_VERSION}</span>`;
}
function ensureUpdateBanner(){
  if(document.getElementById('updateBanner')) return;
  const b=document.createElement('div');
  b.id='updateBanner'; b.className='update-banner'; b.hidden=true;
  b.innerHTML='<div><strong>🔄 Star Navigator update ready</strong><span id="updateBannerText">A newer version is available.</span></div><button id="updateNowBtn">UPDATE</button>';
  document.body.prepend(b);
  document.getElementById('updateNowBtn').onclick=async()=>{
    const btn=document.getElementById('updateNowBtn');
    btn.disabled=true;
    btn.textContent='UPDATING...';
    try {
      const reg = await navigator.serviceWorker?.getRegistration();
      if(!reg){ location.reload(); return; }
      let target = reg.waiting || reg.installing;
      try { await reg.update(); } catch(_) {}
      target = reg.waiting || reg.installing;
      if(target){
        if(reg.waiting){
          reg.waiting.postMessage({type:'SKIP_WAITING'});
        } else {
          await new Promise(resolve=>{
            const done=()=>{ target.removeEventListener('statechange', done); resolve(); };
            target.addEventListener('statechange', ()=>{
              if(target.state === 'installed') done();
            });
            setTimeout(resolve, 12000);
          });
          if(reg.waiting) reg.waiting.postMessage({type:'SKIP_WAITING'});
        }
      }
      setTimeout(()=>location.reload(), 500);
    } catch(_) {
      location.reload();
    }
  };
}
function showUpdateBanner(latest){
  ensureUpdateBanner();
  const b=document.getElementById('updateBanner');
  document.getElementById('updateBannerText').textContent=`Version ${latest} is ready. Tap UPDATE to reload.`;
  b.hidden=false;
}
async function checkForUpdate(){
  try{
    const r=await fetch(BUILD_URL+'?t='+Date.now(), {cache:'no-store'});
    if(!r.ok) return;
    const data=await r.json();
    if(data.version && data.version !== BUILD_VERSION) showUpdateBanner(data.version);
  }catch(_){}
}

restoreMustDoState();
restoreCurrentLocation();
updateHeaderVersion();
ensureUpdateBanner();

el('closeMap').onclick=closeMap;
el('mapOverlay').addEventListener('click',e=>{if(e.target===el('mapOverlay'))closeMap()});
if('serviceWorker' in navigator){
  window.addEventListener('load', async ()=>{
    try {
      const reg = await navigator.serviceWorker.register('sw.js');
      // Ask the browser to check for a fresh worker each page launch.
      reg.update().catch(()=>{});
      checkForUpdate();
      navigator.serviceWorker.addEventListener('controllerchange',()=>location.reload());
    } catch(_) {
      checkForUpdate();
    }
  });
} else {
  window.addEventListener('load', checkForUpdate);
}
window.openMapFor=openMapFor;

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
  const anchorId = ({'5':'royaltheater','6':'royalpromenade','7':'surfsideeatery','8':'centralpark','15':'aquadome','16':'basecamp'})[String(deck)] || 'royalpromenade';
  const anchor = destinations.find(d=>d.id===anchorId);
  const mapNode = anchor ? anchor.mapNode : null;
  const mapSvg = shipMapSVG(String(deck), mapNode, 'explore');
  const quickFacts = {
    '5':'Forward entertainment, dining and Guest Services around the Royal Promenade / Pearl area.',
    '6':'Royal Promenade with shops, bars, restaurants and major entertainment landmarks.',
    '7':'Your home deck, cabin 7456, plus the Surfside neighborhood toward the aft/public end.',
    '8':'Central Park with greenery, dining, bars and the stair connection back to Deck 7.',
    '15':'AquaDome forward, Chill Island and Royal Bay through the middle, Windjammer toward the aft.',
    '16':'Thrill Island with Basecamp, slides, Lost Dunes, Crown\'s Edge and FlowRider.'
  };
  el('overlayMap').innerHTML=`<div class="deck-explorer-v07">
    <div class="deck-explorer-head"><div><div class="eyebrow">DECK ${esc(deck)}</div><h2>${deckTitleV07(deck)}</h2><p>${deckSubtitleV07(deck)}</p></div><button class="map-open" data-deckmap-v07="${deck}">Open larger map</button></div>
    <div class="deck-overview-map"><div class="deck-overview-label"><span>🗺 GENERAL LOCATION</span><span>🚢 FORWARD ↑ &nbsp; AFT ↓</span></div>${mapSvg}<p class="deck-overview-note">${quickFacts[String(deck)] || ''}</p></div>
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
  const d=destinations.find(x=>x.id===id); if(d){d.mustdo=true;persistMustDoState();}
  closeMap();
}

addExploreDestinations();
renderDeckCardsV07();

document.addEventListener('click',e=>{
  const dc=e.target.closest('[data-deck-v07]'); if(dc){openDeckExplorerV07(dc.dataset.deckV07);return;}
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


/* v0.9 CocoCay Island Mode + personalized access */
const cocoState={hideaway:true,thrill:false,cocobeach:false,beverage:false,current:'arrivals'};
const cocoPlaces=[
 {id:'arrivals',name:'Arrivals Plaza / Ship',icon:'🚢',zone:'Arrival',status:'free',type:'Navigation',desc:'Your island starting point after walking off the ship. Use this as Home for CocoCay navigation.',food:'',best:'Start / return to ship'},
 {id:'hideaway',name:'Hideaway Beach',icon:'🏖️',zone:'Hideaway Beach',status:'hideaway',type:'Beach neighborhood',desc:'Adults-only beach neighborhood with Hideaway Pool, DJ entertainment, five bars, loungers, umbrellas and in-water hammocks.',food:'Two dining venues are included with your Hideaway Beach pass.',best:'Adults-only beach day'},
 {id:'hideawaypool',name:'Hideaway Pool',icon:'🏊',zone:'Hideaway Beach',status:'hideaway',type:'Infinity pool',desc:'The main Hideaway pool with ocean views, DJ beats and the swim-up Hideaway Bar.',food:'Drinks are separate unless covered by a beverage package.',best:'Pool · DJ · Swim-up bar'},
 {id:'hideawayhut',name:'Hideaway Hut',icon:'🍤',zone:'Hideaway Beach',status:'hideaway',type:'Beachside dining',desc:'Quick-service all-American and island-inspired food.',food:'Coconut shrimp, ceviche, burgers, crispy chicken sandwiches, salads and funnel cake.',best:'Lunch · Beach bites'},
 {id:'slice',name:'Slice of Paradise',icon:'🍕',zone:'Hideaway Beach',status:'hideaway',type:'Pizza',desc:'Rustic pizza spot inside Hideaway Beach with tropical views.',food:'Complimentary pizzas with island-inspired options such as guava barbecue chicken; cocktails are separate.',best:'Pizza · Quick lunch'},
 {id:'ontherocks',name:'On the Rocks',icon:'🍹',zone:'Hideaway Beach',status:'drinks',type:'Bar / viewpoint',desc:'Hideaway bar with sweeping ocean views and live music atmosphere.',food:'Beverages are charged unless covered by your applicable beverage package.',best:'Views · Drinks · Live music'},
 {id:'hideawaybar',name:'Hideaway Bar',icon:'🍹',zone:'Hideaway Beach',status:'drinks',type:'Swim-up bar',desc:'Swim-up bar in Hideaway Pool with the main party atmosphere.',food:'Beverages are charged unless covered by your applicable beverage package.',best:'Pool · Drinks · DJ'},
 {id:'hammocks',name:'In-water Hammocks',icon:'😌',zone:'Hideaway Beach',status:'hideaway',type:'Relaxation',desc:'Shaded in-water hammocks along Hideaway Beach.',food:'',best:'Relax · Water'},
 {id:'oasis',name:'Oasis Lagoon',icon:'🏊',zone:'Island',status:'free',type:'Pool',desc:'Large freshwater pool with swim-up islands and a swim-up bar. Royal Caribbean lists it about an 8-minute walk from Arrivals.',food:'',best:'Pool day'},
 {id:'chill',name:'Chill Island',icon:'🌴',zone:'Island',status:'free',type:'Beach',desc:'Complimentary beach area with chairs and umbrellas; roughly 5–10 minutes from Arrivals on Royal Caribbean’s map.',food:'Chill Grill nearby is complimentary.',best:'Beach · Relax'},
 {id:'harbor',name:'Harbor Beach',icon:'🏝️',zone:'Island',status:'free',type:'Beach',desc:'Complimentary sandy beach around Harbor Lagoon, about a 5-minute walk from Arrivals.',food:'',best:'Easy beach stop'},
 {id:'south',name:'South Beach',icon:'🏐',zone:'Island',status:'free',type:'Beach / sports',desc:'Beach and sports area roughly 12 minutes from Arrivals. Some rentals cost extra.',food:'',best:'Beach · Sports'},
 {id:'cove',name:'Cove Beach',icon:'🌊',zone:'Island',status:'free',type:'Quiet beach',desc:'A more tucked-away beach area connected to South Beach by a nature trail.',food:'',best:'Quieter beach · Walk'},
 {id:'splashaway',name:'Splashaway Bay',icon:'💦',zone:'Island',status:'free',type:'Water play',desc:'Complimentary aqua park with slides, fountains, pools and drench buckets.',food:'',best:'Water play'},
 {id:'thrill',name:'Thrill Waterpark',icon:'🛝',zone:'Island',status:'thrill',type:'Paid attraction',desc:'Separate-admission waterpark. Royal Caribbean’s map places the entrance about a 3-minute walk from Arrivals.',food:'',best:'Slides · Thrills'},
 {id:'cocobeach',name:'Coco Beach Club',icon:'✨',zone:'Island',status:'cocobeach',type:'Paid beach club',desc:'Separate-admission beach club with private beach, infinity pool and restaurant. Hideaway Beach admission does not include access.',food:'Dining is included with a Coco Beach Club day pass.',best:'Premium beach club'},
 {id:'snackshack',name:'Snack Shack',icon:'🍗',zone:'Island',status:'free',type:'Quick-service dining',desc:'Complimentary grab-and-go island food.',food:'Known for crispy chicken sandwiches plus casual snacks.',best:'Quick lunch'},
 {id:'chillgrill',name:'Chill Grill',icon:'🌮',zone:'Chill Island',status:'free',type:'Buffet dining',desc:'Complimentary buffet-style dining at Chill Island.',food:'Includes a build-your-own taco bar and casual island favorites.',best:'Lunch'},
 {id:'skippers',name:"Skipper's Grill",icon:'🍽️',zone:'Island',status:'free',type:'Buffet dining',desc:'Complimentary buffet-style island dining near Thrill Waterpark.',food:'Casual buffet choices and soft serve.',best:'Lunch'},
 {id:'captainjacks',name:"Captain Jack's",icon:'🍗',zone:'Harbor',status:'paid',type:'À la carte dining',desc:'Water-view casual dining with live music.',food:'Chicken wings and fries are à la carte.',best:'Wings · Live music'},
 {id:'tram',name:'Island Tram',icon:'🚋',zone:'Island',status:'free',type:'Transportation',desc:'Royal Caribbean’s official map shows a main tram route with seven stops and service about every 15 minutes.',food:'',best:'Reduce walking'}
];
function cocoStatus(p){
 if(p.status==='hideaway') return cocoState.hideaway?['unlocked','✓ INCLUDED WITH YOUR HIDEAWAY PASS']:['paid','$ HIDEAWAY PASS REQUIRED'];
 if(p.status==='drinks') return cocoState.beverage?['unlocked','✓ COVERED BY YOUR BEVERAGE PACKAGE']:['paid','$ DRINKS EXTRA'];
 if(p.status==='thrill') return cocoState.thrill?['unlocked','✓ YOU HAVE ACCESS']:['paid','$ EXTRA ADMISSION'];
 if(p.status==='cocobeach') return cocoState.cocobeach?['unlocked','✓ YOU HAVE ACCESS']:['paid','$ SEPARATE DAY PASS'];
 if(p.status==='paid') return ['paid','$ EXTRA'];
 return ['free','✓ INCLUDED'];
}
function cocoMapSVG(dest=null){
 const pins={arrivals:[58,180],thrill:[110,125],harbor:[132,174],oasis:[175,130],chill:[214,84],south:[276,174],cove:[326,155],hideaway:[316,72],cocobeach:[348,112]};
 const dp=pins[dest];
 return `<svg class="cococay-map" viewBox="0 0 390 230" role="img" aria-label="Simplified Perfect Day at CocoCay map"><rect class="island-water" width="390" height="230" rx="18"/><path class="island-land" d="M35 172 Q55 115 115 105 Q153 56 225 64 Q280 37 346 66 Q373 94 355 132 Q347 178 300 190 Q242 210 185 190 Q118 207 65 193Z"/><path class="island-path" d="M58 180 Q120 160 175 130 Q235 112 316 72"/><path class="island-tram" d="M58 188 Q118 184 160 151 Q223 125 280 151 Q314 132 332 92"/><rect class="island-zone" x="86" y="105" width="63" height="32" rx="9"/><text class="island-zone-text" x="117" y="118" text-anchor="middle">THRILL</text><text class="island-small" x="117" y="128" text-anchor="middle">WATERPARK</text><rect class="island-zone" x="150" y="115" width="57" height="32" rx="9"/><text class="island-zone-text" x="178" y="128" text-anchor="middle">OASIS</text><text class="island-small" x="178" y="138" text-anchor="middle">LAGOON</text><rect class="island-zone" x="191" y="65" width="62" height="32" rx="9"/><text class="island-zone-text" x="222" y="78" text-anchor="middle">CHILL</text><text class="island-small" x="222" y="88" text-anchor="middle">ISLAND</text><rect class="island-zone hideaway" x="284" y="51" width="75" height="42" rx="10"/><text class="island-zone-text" x="321" y="68" text-anchor="middle">HIDEAWAY</text><text class="island-small" x="321" y="80" text-anchor="middle">YOUR PASS ✓</text><rect class="island-zone" x="253" y="160" width="57" height="28" rx="9"/><text class="island-zone-text" x="281" y="177" text-anchor="middle">SOUTH</text><rect class="island-zone" x="309" y="139" width="52" height="27" rx="9"/><text class="island-zone-text" x="335" y="156" text-anchor="middle">COVE</text><circle class="island-pin" cx="58" cy="180" r="7"/><text class="island-small" x="58" y="202" text-anchor="middle">ARRIVALS / SHIP</text>${dp?`<path class="island-route" d="M58 180 Q${(58+dp[0])/2} ${(180+dp[1])/2-20} ${dp[0]} ${dp[1]}"/><circle class="island-pin unlocked" cx="${dp[0]}" cy="${dp[1]}" r="9"/>`:''}<text class="island-small" x="185" y="220" text-anchor="middle">Schematic orientation map · tram route shown dashed</text></svg>`;
}
function cocoPlaceCard(p){const [cls,label]=cocoStatus(p);return `<button class="island-place" data-coco-place="${p.id}"><span class="island-place-icon">${p.icon}</span><span><strong>${esc(p.name)}</strong><small>${esc(p.type)} · ${esc(p.zone)}</small><span class="access-chip ${cls}">${label}</span></span><span class="island-place-arrow">›</span></button>`}
function renderCocoCay(){
 const hide=cocoPlaces.filter(p=>['hideaway','hideawaypool','hideawayhut','slice','ontherocks','hideawaybar','hammocks'].includes(p.id));
 const free=cocoPlaces.filter(p=>['oasis','chill','harbor','south','cove','splashaway','snackshack','chillgrill','skippers','tram'].includes(p.id));
 const extra=cocoPlaces.filter(p=>['thrill','cocobeach','captainjacks'].includes(p.id));
 el('cococayContent').innerHTML=`<div class="island-hero"><div class="eyebrow">ISLAND MODE</div><h2>Perfect Day at CocoCay</h2><p>Explore the island, see what your cruise fare or purchased access includes, and use a simplified theme-park-style map to get oriented.</p></div><div class="access-card"><span class="access-badge">✓ PURCHASE SAVED</span><h3>Hideaway Beach Day Pass</h3><p>Your app treats Hideaway Beach as unlocked. Hideaway Hut and Slice of Paradise are included with your pass; five bars are accessible, while drinks depend on your beverage package or individual purchase.</p></div><div class="island-actions"><button class="island-action" data-coco-action="pass"><strong>✨ Make the Most of My Pass</strong><small>A suggested Hideaway Beach day</small></button><button class="island-action" data-coco-action="purchases"><strong>🎟️ My Purchases</strong><small>Tell Navigator what you already bought</small></button></div><div class="island-map-card"><h3>General island map</h3>${cocoMapSVG()}<div class="island-legend"><span><i class="cost-dot free"></i>Included</span><span><i class="cost-dot unlocked"></i>Your access</span><span><i class="cost-dot paid"></i>Extra</span></div></div><div class="island-section"><div class="island-section-head"><h3>💜 Your Hideaway Beach access</h3><small>Tap for details + map</small></div><div class="island-list">${hide.map(cocoPlaceCard).join('')}</div></div><div class="island-section"><div class="island-section-head"><h3>✓ Included around CocoCay</h3><small>No separate island admission</small></div><div class="island-list">${free.map(cocoPlaceCard).join('')}</div></div><div class="island-section"><div class="island-section-head"><h3>$ Extra / separate access</h3><small>Unless purchased</small></div><div class="island-list">${extra.map(cocoPlaceCard).join('')}</div></div><div class="explore-source-v07">CocoCay information is based on Royal Caribbean’s current official wayfinding map and Hideaway Beach information. Hours, availability and charges can change; verify sailing-specific details in the Royal Caribbean app.</div>`;
}
function openCocoPlace(id){
 const p=cocoPlaces.find(x=>x.id===id);if(!p)return; const [cls,label]=cocoStatus(p);
 el('overlayTitle').textContent=p.name;
 el('overlayMap').innerHTML=`<div class="venue-detail-v07"><div class="venue-detail-title"><div class="venue-detail-icon">${p.icon}</div><div><div class="eyebrow">COCOCAY · ${esc(p.zone.toUpperCase())}</div><h2>${esc(p.name)}</h2><div class="venue-detail-area">${esc(p.type)}</div></div></div><div class="detail-chips"><span class="island-detail-cost ${cls}">${label}</span><span>📍 ${esc(p.zone)}</span></div><div class="island-map-card">${cocoMapSVG(p.zone==='Hideaway Beach'?'hideaway':p.id)}</div><div class="detail-block"><h3>What is it?</h3><p>${esc(p.desc)}</p></div>${p.food?`<div class="detail-block"><h3>Food / cost notes</h3><p>${esc(p.food)}</p></div>`:''}<div class="detail-block"><h3>Best for</h3><p>${esc(p.best)}</p></div><div class="venue-actions-v07"><button class="primary-venue-btn" data-coco-route="${p.id}">🧭 Show Me the Route</button><button class="secondary-venue-btn" data-coco-back>🏝️ Island Home</button></div></div>`;
 el('mapOverlay').classList.add('show');el('mapOverlay').setAttribute('aria-hidden','false');
}
function openCocoRoute(id){const p=cocoPlaces.find(x=>x.id===id);if(!p)return;el('overlayTitle').textContent=`Route to ${p.name}`;el('overlayMap').innerHTML=`<div class="deck-explorer-v07"><div class="deck-explorer-head"><div><div class="eyebrow">ISLAND NAVIGATION</div><h2>Arrivals → ${esc(p.name)}</h2><p>Use this as an orientation aid; follow posted CocoCay signs and tram information on the island.</p></div></div><div class="island-map-card">${cocoMapSVG(p.zone==='Hideaway Beach'?'hideaway':p.id)}</div><div class="pass-itinerary"><div class="pass-step"><div><strong>Start at Arrivals Plaza</strong><small>After leaving the ship, orient yourself using the main island signage.</small></div></div><div class="pass-step"><div><strong>${p.id==='hideaway'||p.zone==='Hideaway Beach'?'Head toward Hideaway Beach':'Follow signs toward '+esc(p.name)}</strong><small>${p.id==='hideaway'||p.zone==='Hideaway Beach'?'Royal Caribbean’s official map lists Hideaway Beach about a 5-minute walk from Arrivals and also shows tram service.':'Use the highlighted general direction and island signs.'}</small></div></div><div class="pass-step"><div><strong>Confirm at the neighborhood entrance</strong><small>${p.zone==='Hideaway Beach'?'Scan/tap your SeaPass at Hideaway Beach access. Your pass allows re-entry.':'Look for the venue or neighborhood sign before continuing.'}</small></div></div></div></div>`;}
function openCocoPurchases(){el('overlayTitle').textContent='My Purchases';const rows=[['hideaway','Hideaway Beach Day Pass','Adults-only neighborhood + included dining'],['thrill','Thrill Waterpark','Separate admission'],['cocobeach','Coco Beach Club','Separate admission'],['beverage','Beverage Package','Applies at CocoCay bars when eligible']];el('overlayMap').innerHTML=`<div><p class="deck-overview-note">Turn on anything you purchase later. Cost labels throughout Island Mode will update for you.</p>${rows.map(([k,n,d])=>`<div class="purchase-row"><span><strong>${n}</strong><small>${d}</small></span><button class="purchase-toggle ${cocoState[k]?'on':''}" data-purchase="${k}">${cocoState[k]?'✓ SAVED':'NOT ADDED'}</button></div>`).join('')}</div>`;el('mapOverlay').classList.add('show');el('mapOverlay').setAttribute('aria-hidden','false');}
function openPassPlan(){el('overlayTitle').textContent='Make the Most of My Pass';el('overlayMap').innerHTML=`<div class="access-card"><span class="access-badge">HIDEAWAY BEACH</span><h3>A flexible day, not a schedule</h3><p>Use this as a suggested flow and change it however you like.</p></div><div class="pass-itinerary"><div class="pass-step"><div><strong>Enter + get oriented</strong><small>Scan your SeaPass, find lockers/towel exchange if needed, then choose your chairs or beach base.</small></div></div><div class="pass-step"><div><strong>Hideaway Pool + swim-up bar</strong><small>See the infinity pool and DJ area early. Drinks are separate unless covered by your beverage package.</small></div></div><div class="pass-step"><div><strong>Lunch at Hideaway Hut</strong><small>Included with your pass. Coconut shrimp, burgers, chicken sandwiches, salads and more.</small></div></div><div class="pass-step"><div><strong>Beach + in-water hammocks</strong><small>Use the included loungers, umbrellas and in-water relaxation areas.</small></div></div><div class="pass-step"><div><strong>On the Rocks</strong><small>Stop for the sweeping view and live-music atmosphere. Beverage charges depend on your package.</small></div></div><div class="pass-step"><div><strong>Slice of Paradise</strong><small>Grab an included pizza before you leave or whenever you want another bite.</small></div></div></div><div class="island-map-card">${cocoMapSVG('hideaway')}</div>`;el('mapOverlay').classList.add('show');el('mapOverlay').setAttribute('aria-hidden','false');}
renderCocoCay();
el('cocoCayHome').onclick=()=>navigate('cococay');
document.addEventListener('click',e=>{const p=e.target.closest('[data-coco-place]');if(p){openCocoPlace(p.dataset.cocoPlace);return}const r=e.target.closest('[data-coco-route]');if(r){openCocoRoute(r.dataset.cocoRoute);return}const a=e.target.closest('[data-coco-action]');if(a){a.dataset.cocoAction==='pass'?openPassPlan():openCocoPurchases();return}const t=e.target.closest('[data-purchase]');if(t){const k=t.dataset.purchase;if(k==='hideaway')return;cocoState[k]=!cocoState[k];openCocoPurchases();renderCocoCay();return}if(e.target.closest('[data-coco-back]')){closeMap();navigate('cococay');}});
