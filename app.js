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
    if(mode==='from'){currentLocationId=id;guidedState.step=0;} else {guidedState.destId=id;guidedState.step=0;}
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
el('closeMap').onclick=closeMap;
el('mapOverlay').addEventListener('click',e=>{if(e.target===el('mapOverlay'))closeMap()});
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}))}
window.openMapFor=openMapFor;
