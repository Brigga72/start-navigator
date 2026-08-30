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
  {id:'guestservices', name:'Guest Services', deck:'5', area:'Midship · Services', category:'services', icon:'🧑‍💼', keywords:'guest services reception help desk', note:'Guest Services is on Deck 5.', confidence:'SERVICE LOCATION VERIFIED; ROUTE CONSERVATIVE', mapDeck:'5', mapNode:'guestservices', route:[{kind:'walk',text:'Leave Cabin 7456 and follow the corridor toward the forward elevator bank shown on the Deck 7 map.'},{kind:'elevator',text:'Go down to Deck 5.'},{kind:'orient',text:'Orient toward Guest Services.'},{kind:'arrive',text:'Follow the Guest Services signs.'}]},
  {id:'spotlight', name:'Spotlight Karaoke', deck:'5', area:'Royal Promenade · Entertainment', category:'shows', icon:'🎤', keywords:'spotlight karaoke trivia name that tune', note:'Cruise Compass reference places Spotlight Karaoke on Deck 5.', confidence:'VENUE + DECK VERIFIED FROM CRUISE COMPASS; EXACT CORRIDOR ROUTE NOT TRACED', mapDeck:'5', mapNode:'promenade', route:[]},
  {id:'schooner', name:'Schooner Bar', deck:'6', area:'Royal Promenade · Bar', category:'dining', icon:'🎹', keywords:'schooner bar trivia piano', note:'Cruise Compass reference places Schooner Bar on Deck 6.', confidence:'VENUE + DECK VERIFIED FROM CRUISE COMPASS; EXACT CORRIDOR ROUTE NOT TRACED', mapDeck:'6', mapNode:'promenade', route:[]},
  {id:'dueling', name:'Dueling Pianos', deck:'6', area:'Royal Promenade · Entertainment', category:'shows', icon:'🎹', keywords:'dueling pianos trivia music', note:'Cruise Compass reference places Dueling Pianos on Deck 6.', confidence:'VENUE + DECK VERIFIED FROM CRUISE COMPASS; EXACT CORRIDOR ROUTE NOT TRACED', mapDeck:'6', mapNode:'promenade', route:[]},
  {id:'musichall', name:'Music Hall', deck:'3–4', area:'Entertainment · Music Hall', category:'shows', icon:'🎸', keywords:'music hall game show concert nightlife', note:'Cruise Compass reference places Music Hall on Decks 3 and 4.', confidence:'VENUE + DECK VERIFIED FROM CRUISE COMPASS; EXACT CORRIDOR ROUTE NOT TRACED', mapDeck:'5', mapNode:'theater', route:[]},
  {id:'boleros', name:'Boleros', deck:'6', area:'Royal Promenade · Bar', category:'dining', icon:'💃', keywords:'boleros latin dance music', note:'Cruise Compass reference places Boleros on Deck 6.', confidence:'VENUE + DECK VERIFIED FROM CRUISE COMPASS; EXACT CORRIDOR ROUTE NOT TRACED', mapDeck:'6', mapNode:'promenade', route:[]},
  {id:'thorn', name:'Thorn & Thistle', deck:'5', area:'Royal Promenade · Pub', category:'dining', icon:'🍺', keywords:'thorn thistle pub trivia', note:'Cruise Compass reference places Thorn & Thistle on Deck 5.', confidence:'VENUE + DECK VERIFIED FROM CRUISE COMPASS; EXACT CORRIDOR ROUTE NOT TRACED', mapDeck:'5', mapNode:'promenade', route:[]},
  {id:'aotheater', name:'AO Theater', deck:'6', area:'Adventure Ocean · Theater', category:'shows', icon:'🎭', keywords:'ao theater family puppet movie', note:'Cruise Compass reference places AO Theater on Deck 6.', confidence:'VENUE + DECK VERIFIED FROM CRUISE COMPASS; EXACT CORRIDOR ROUTE NOT TRACED', mapDeck:'6', mapNode:'promenade', route:[]},
  {id:'sportscourt', name:'Sports Court', deck:'17', area:'Upper Deck · Sports', category:'activities', icon:'🏀', keywords:'sports court basketball pickleball competition', note:'Cruise Compass reference places Sports Court on Deck 17.', confidence:'VENUE + DECK VERIFIED FROM CRUISE COMPASS; EXACT CORRIDOR ROUTE NOT TRACED', mapDeck:'16', mapNode:'category6', route:[]}
];



/* v0.11 Detailed Navigation Foundation
   Navigation knowledge is split into three confidence levels:
   verified     = deck / venue / neighborhood relationship supported by supplied source material
   orientation  = useful forward/aft or transition guidance without exact turn geometry
   signage      = exact corridor geometry is not yet encoded, so posted ship signage must finish the segment
   Coordinates below are schematic map anchors only, never claimed as measured ship coordinates. */
const NAV_ACCURACY={
  verified:{label:'VERIFIED',detail:'Supported location or deck relationship.'},
  orientation:{label:'ORIENTATION',detail:'Direction is useful, exact corridor turns are not yet encoded.'},
  signage:{label:'SIGNAGE',detail:'Use posted ship signs for this untraced segment.'}
};

const navigationFoundation={
  home:{id:'cabin7456',name:'Cabin 7456',deck:'7',role:'home',accuracy:'verified'},
  decks:{
    '5':{orientation:'mixed',anchors:['theater','guestservices','mdr','absolute'],transitions:['elevator/stair lobby']},
    '6':{orientation:'mixed',anchors:['promenade'],transitions:['elevator/stair lobby','Surfside stairs']},
    '7':{orientation:'home',anchors:['cabin7456','surfside'],transitions:['elevator/stair lobby']},
    '8':{orientation:'mixed',anchors:['centralpark'],transitions:['elevator/stair lobby','stairs to Deck 7']},
    '15':{orientation:'forward-to-aft',anchors:['aquadome','royalbay','windjammer'],transitions:['elevator/stair lobby']},
    '16':{orientation:'aft-activities',anchors:['basecamp','category6'],transitions:['elevator/stair lobby','Hideaway entrance']}
  }
};

function routeAccuracyMeta(level){return NAV_ACCURACY[level]||NAV_ACCURACY.signage}
function routeStep(kind,text,accuracy='orientation',deck=null){return {kind,text,accuracy,deck}}
function destinationOrientation(to){
  if(/Forward/i.test(to.area))return 'FORWARD / BOW';
  if(/Aft/i.test(to.area))return 'AFT / STERN';
  return null;
}
function routeAccuracySummary(route){
  if(route.some(s=>s.accuracy==='signage'))return {level:'orientation',label:'ORIENTATION ROUTE',text:'Deck and neighborhood guidance is available. One or more corridor segments still rely on ship signage.'};
  if(route.some(s=>s.accuracy==='orientation'))return {level:'orientation',label:'ORIENTATION ROUTE',text:'The route is useful for deck and forward/aft orientation, but is not yet exact turn-by-turn geometry.'};
  return {level:'verified',label:'VERIFIED ROUTE',text:'All encoded route segments are supported by the current navigation dataset.'};
}

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

/* v0.12 Personal Cruise Profile
   Confirmed from Royal Caribbean sailing documents and order confirmations.
   This data is intentionally sailing-specific and is not inferred from generic cruise information. */
const CRUISE_PROFILE = {
  ship:'Star of the Seas',
  sailingName:'7 Night Eastern Caribbean & Perfect Day',
  startDate:'2026-09-13',
  endDate:'2026-09-20',
  home:'Cabin 7456',
  homeDeck:7,
  dining:'My Time',
  embarkation:{port:'Port Canaveral',terminal:'Cruise Terminal 1',sailTime:'16:30'},
  purchases:{
    hideaway:true,
    beverage:true,
    guests:2
  },
  itinerary:[
    {day:1,date:'2026-09-13',short:'Port Canaveral',title:'Port Canaveral',detail:'Embarkation',depart:'16:30'},
    {day:2,date:'2026-09-14',short:'CocoCay',title:'Perfect Day at CocoCay',detail:'Bahamas',arrive:'07:00',depart:'17:00'},
    {day:3,date:'2026-09-15',short:'Sea Day',title:'Cruising',detail:'Sea day'},
    {day:4,date:'2026-09-16',short:'San Juan',title:'San Juan',detail:'Puerto Rico',arrive:'11:00',depart:'20:00'},
    {day:5,date:'2026-09-17',short:'St. Maarten',title:'Philipsburg',detail:'St. Maarten',arrive:'08:00',depart:'17:00'},
    {day:6,date:'2026-09-18',short:'Sea Day',title:'Cruising',detail:'Sea day'},
    {day:7,date:'2026-09-19',short:'Sea Day',title:'Cruising',detail:'Sea day'},
    {day:8,date:'2026-09-20',short:'Port Canaveral',title:'Port Canaveral',detail:'Disembarkation',arrive:'06:00'}
  ]
};
const CONFIRMED_SCHEDULE_V012 = [
  {id:'rc-hideaway-20260914',type:'activity',day:2,time:'08:00',name:'Hideaway Beach Day Pass',venueName:'Hideaway Beach',venueId:'',routeId:'',early:0,notes:'Confirmed Royal Caribbean purchase for both guests. Access day is Perfect Day at CocoCay.',confirmed:true,source:'Royal Caribbean order confirmation'},
  {id:'rc-pigs-stingray-20260914',type:'excursion',day:2,time:'10:30',name:'Swimming Pigs & Stingray Tour',venueName:'Perfect Day at CocoCay',venueId:'',routeId:'',early:30,notes:'Confirmed Royal Caribbean shore excursion for both guests. Meeting location is not encoded because the confirmation does not specify it.',confirmed:true,source:'Royal Caribbean order confirmation'},
  {id:'rc-backfuture-20260915',type:'show',day:3,time:'20:30',name:'Back to the Future: The Musical',venueName:'Royal Theater',venueId:'backfuture',routeId:'backfuture',early:20,notes:'Confirmed Royal Caribbean reservation for both guests.',confirmed:true,source:'Royal Caribbean order confirmation'},
  {id:'rc-campo-rico-20260916',type:'excursion',day:4,time:'14:00',name:'Campo Rico ATV Adventure',venueName:'San Juan, Puerto Rico',venueId:'',routeId:'',early:30,notes:'Confirmed Royal Caribbean shore excursion for both guests. Meeting location is not encoded because the confirmation does not specify it.',confirmed:true,source:'Royal Caribbean order confirmation'},
  {id:'rc-torque-20260916',type:'show',day:4,time:'22:00',name:'Torque',venueName:'AquaTheater',venueId:'torque',routeId:'torque',early:20,notes:'Confirmed Royal Caribbean reservation for both guests.',confirmed:true,source:'Royal Caribbean order confirmation'},
  {id:'rc-kayak-snorkel-20260917',type:'excursion',day:5,time:'08:30',name:'Kayak and Snorkel Adventure',venueName:'Philipsburg, St. Maarten',venueId:'',routeId:'',early:30,notes:'Confirmed Royal Caribbean shore excursion for both guests. Meeting location is not encoded because the confirmation does not specify it.',confirmed:true,source:'Royal Caribbean order confirmation'}
];
const PROFILE_SEED_KEY='cruise-nav-profile-seeded-v012';

function itineraryDay(day){return CRUISE_PROFILE.itinerary.find(x=>Number(x.day)===Number(day))||null}
function tripDayFromToday(){
  const now=new Date(); const local=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
  const match=CRUISE_PROFILE.itinerary.find(x=>x.date===local); return match?match.day:null;
}
function profileDateLabel(iso){const d=new Date(`${iso}T12:00:00`);return d.toLocaleDateString(undefined,{month:'short',day:'numeric'})}
function cruiseCountdown(){
  const today=new Date(); today.setHours(0,0,0,0); const sail=new Date(`${CRUISE_PROFILE.startDate}T00:00:00`); const end=new Date(`${CRUISE_PROFILE.endDate}T23:59:59`);
  if(today<sail)return {label:'UNTIL SAILING',value:String(Math.ceil((sail-today)/86400000)),unit:'days'};
  if(today<=end){const d=tripDayFromToday();return {label:'CRUISE MODE',value:d?`Day ${d}`:'Onboard',unit:''};}
  return {label:'SAILING',value:'Complete',unit:''};
}
function renderCruiseProfile(){
  const host=el('cruiseProfileHome'); if(!host)return; const c=cruiseCountdown();
  const ports=CRUISE_PROFILE.itinerary.filter(x=>x.day>1&&x.day<8&&x.title!=='Cruising').map(x=>`${profileDateLabel(x.date)} · ${x.short}`).join('  •  ');
  host.innerHTML=`<button class="profile-card" data-view="schedule"><div class="profile-count"><span>${esc(c.label)}</span><strong>${esc(c.value)}</strong><small>${esc(c.unit)}</small></div><div class="profile-main"><div class="profile-kicker">YOUR 2026 SAILING</div><h3>${esc(CRUISE_PROFILE.sailingName)}</h3><p>Sep 13–20 · ${esc(CRUISE_PROFILE.ship)}</p><small>${esc(ports)}</small><div class="profile-benefits"><b>✓ Deluxe Beverage Package</b><b>✓ Hideaway Beach</b><b>✓ 3 excursions</b><b>✓ 2 shows</b></div></div><span class="profile-arrow">›</span></button>`;
}

/* v0.10 My Schedule: persistent personal cruise itinerary */
const SCHEDULE_KEY = 'cruise-nav-schedule-v1';
const TRIP_DAY_KEY = 'cruise-nav-trip-day-v1';
const SAILING_DAY_COUNT = CRUISE_PROFILE.itinerary.length;
const SCHEDULE_EARLY_DEFAULT = {show:20,dining:10,excursion:30,activity:15,other:15};
let scheduleEntries = [];
let selectedTripDay = 1;
let scheduleFormState = null;

function loadSchedule(){
  try{
    const raw=JSON.parse(localStorage.getItem(SCHEDULE_KEY)||'[]');
    scheduleEntries=Array.isArray(raw)?raw:[];
  }catch(_){scheduleEntries=[]}
  try{
    if(!localStorage.getItem(PROFILE_SEED_KEY)){
      const ids=new Set(scheduleEntries.map(x=>x.id));
      CONFIRMED_SCHEDULE_V012.forEach(item=>{if(!ids.has(item.id))scheduleEntries.push({...item})});
      localStorage.setItem(PROFILE_SEED_KEY,'1'); saveSchedule();
    }
  }catch(_){}
  try{
    const stored=localStorage.getItem(TRIP_DAY_KEY); const liveDay=tripDayFromToday();
    selectedTripDay=Math.max(1,Math.min(SAILING_DAY_COUNT,Number(stored||liveDay||1)));
  }catch(_){selectedTripDay=1}
}
function saveSchedule(){try{localStorage.setItem(SCHEDULE_KEY,JSON.stringify(scheduleEntries));}catch(_) {}}
function saveTripDay(){try{localStorage.setItem(TRIP_DAY_KEY,String(selectedTripDay));}catch(_) {}}
function scheduleShowOptions(){
  return exploreVenues.filter(v=>v.kind==='Show'||v.kind==='Entertainment').filter((v,i,a)=>a.findIndex(x=>x.id===v.id)===i)
    .map(v=>({id:v.id,name:v.name,icon:v.icon,venueName:v.kind==='Show'?({backfuture:'Royal Theater',torque:'AquaTheater',sol:'Absolute Zero',pirates:'AquaTheater'}[v.id]||v.area):v.name,deck:v.deckLabel||v.deck}));
}
function scheduleKnownPlaces(){
  const map=new Map();
  exploreVenues.forEach(v=>map.set(v.id,{id:v.id,name:v.name,icon:v.icon,venueName:v.name,deck:v.deckLabel||v.deck,routeId:v.id}));
  destinations.forEach(d=>{if(!map.has(d.id))map.set(d.id,{id:d.id,name:d.name,icon:d.icon,venueName:d.name,deck:d.deck,routeId:d.id})});
  return [...map.values()];
}
function scheduleSort(a,b){
  const ad=Number(a.day)||99,bd=Number(b.day)||99;
  if(ad!==bd)return ad-bd;
  return String(a.time||'99:99').localeCompare(String(b.time||'99:99'));
}
function scheduleTimeLabel(t){
  if(!t)return 'Time not set';
  const [hh,mm]=String(t).split(':').map(Number); if(Number.isNaN(hh)||Number.isNaN(mm))return t;
  const suffix=hh>=12?'PM':'AM'; const h=hh%12||12; return `${h}:${String(mm).padStart(2,'0')} ${suffix}`;
}
function scheduleDayLabel(day){const i=itineraryDay(day);return i?`Day ${Number(day)} · ${i.short}`:`Day ${Number(day)}`}
function scheduleLeaveBy(entry){
  if(!entry.time)return '';
  const [h,m]=entry.time.split(':').map(Number); if(Number.isNaN(h)||Number.isNaN(m))return '';
  const mins=Math.max(0,Number(entry.early)||15); const d=new Date(2020,0,1,h,m); d.setMinutes(d.getMinutes()-mins);
  return d.toTimeString().slice(0,5);
}
function scheduleEventIcon(type){return ({show:'🎭',dining:'🍴',excursion:'🚌',activity:'🎢',other:'📌'})[type]||'📌'}
function scheduleTypeLabel(type){return ({show:'SHOW',dining:'DINING',excursion:'EXCURSION',activity:'ACTIVITY',other:'OTHER'})[type]||'EVENT'}
function scheduleEntryHtml(entry,{compact=false}={}){
  const leave=scheduleLeaveBy(entry);
  const routeText=entry.routeId?'🧭 Take Me There':'';
  return `<div class="schedule-item ${entry.attended?'attended':''}">
    <div class="schedule-icon">${scheduleEventIcon(entry.type)}</div>
    <div class="schedule-main">
      <div class="schedule-top"><div><span class="schedule-type">${scheduleTypeLabel(entry.type)} · ${scheduleDayLabel(entry.day)}</span><h3>${esc(entry.name)}</h3></div><button class="schedule-menu" data-schedule-edit="${esc(entry.id)}" aria-label="Edit ${esc(entry.name)}">•••</button></div>
      <div class="schedule-time">${scheduleTimeLabel(entry.time)}${entry.venueName?` · 📍 ${esc(entry.venueName)}`:''}</div>${entry.confirmed?`<div class="schedule-confirmed">✓ CONFIRMED BY ROYAL CARIBBEAN</div>`:''}
      ${leave?`<div class="schedule-leave">Leave about <strong>${scheduleTimeLabel(leave)}</strong> <span>(${Number(entry.early)||15} min early)</span></div>`:''}
      ${entry.notes&&!compact?`<div class="schedule-notes">${esc(entry.notes)}</div>`:''}
      <div class="schedule-actions">
        ${entry.routeId?`<button class="schedule-action primary" data-schedule-route="${esc(entry.routeId)}">${routeText}</button>`:''}
        <button class="schedule-action" data-schedule-attend="${esc(entry.id)}">${entry.attended?'✓ Attended':'Mark Attended'}</button>
      </div>
    </div>
  </div>`;
}
function renderSchedulePreview(){
  const host=el('schedulePreview'); if(!host)return;
  const entries=[...scheduleEntries].sort(scheduleSort);
  if(!entries.length){
    host.innerHTML=`<button class="schedule-preview-empty" data-view="schedule"><span class="schedule-preview-icon">📅</span><span><strong>My Schedule</strong><small>Add your show reservations and other plans here.</small></span><span>›</span></button>`;
    return;
  }
  const next=entries.find(x=>!x.attended && Number(x.day)>=Number(selectedTripDay))||entries[0];
  host.innerHTML=`<div class="schedule-preview-card"><div class="schedule-preview-head"><div><div class="eyebrow">UP NEXT · ${scheduleDayLabel(next.day)}</div><h3>${esc(next.name)}</h3><p>${scheduleTimeLabel(next.time)}${next.venueName?' · '+esc(next.venueName):''}</p></div><button class="small-link-btn" data-view="schedule">View all</button></div>${scheduleLeaveBy(next)?`<div class="schedule-preview-leave">Leave around <strong>${scheduleTimeLabel(scheduleLeaveBy(next))}</strong></div>`:''}<button class="schedule-preview-route" data-schedule-route="${esc(next.routeId||'')}" ${next.routeId?'':'disabled'}>${next.routeId?'🧭 Take Me There':'📍 No mapped route yet'}</button></div>`;
}
function renderSchedule(){
  const host=el('scheduleContent'); if(!host)return;
  const sorted=[...scheduleEntries].sort(scheduleSort);
  const byDay=new Map();
  sorted.forEach(e=>{if(!byDay.has(Number(e.day)))byDay.set(Number(e.day),[]);byDay.get(Number(e.day)).push(e)});
  const dayOptions=Array.from({length:SAILING_DAY_COUNT},(_,i)=>{const info=itineraryDay(i+1);return `<option value="${i+1}" ${i+1===selectedTripDay?'selected':''}>Day ${i+1}${info?' · '+profileDateLabel(info.date)+' · '+info.short:''}</option>`}).join('');
  const days=Array.from({length:SAILING_DAY_COUNT},(_,i)=>i+1).filter(d=>byDay.has(d));
  const showEmpty=`<div class="schedule-empty"><div class="schedule-empty-icon">📅</div><h3>Your schedule is empty</h3><p>Add a show reservation to start building your personal cruise timeline.</p><button class="next-action" data-schedule-add="show">+ Add Show Reservation</button><button class="secondary-action" data-schedule-add="other">+ Add Other Event</button></div>`;
  host.innerHTML=`<div class="schedule-toolbar"><label><span>CURRENT TRIP DAY</span><select id="tripDaySelect">${dayOptions}</select></label><div class="schedule-toolbar-actions"><button class="schedule-add-btn" data-schedule-add="show">🎭 Add Show</button><button class="schedule-add-btn alt" data-schedule-add="other">+ Add Event</button></div></div>${!sorted.length?showEmpty:`<div class="schedule-next-card"><div><div class="eyebrow">NEXT UP</div><strong>${esc((sorted.find(x=>!x.attended&&Number(x.day)>=selectedTripDay)||sorted[0]).name)}</strong><span>${scheduleDayLabel((sorted.find(x=>!x.attended&&Number(x.day)>=selectedTripDay)||sorted[0]).day)} · ${scheduleTimeLabel((sorted.find(x=>!x.attended&&Number(x.day)>=selectedTripDay)||sorted[0]).time)}</span></div><button class="schedule-jump" data-schedule-current>Jump to Day ${selectedTripDay}</button></div>${days.map(day=>{const info=itineraryDay(day);return `<section class="schedule-day"><div class="schedule-day-head"><div><h3>${scheduleDayLabel(day)}</h3>${info?`<small class="schedule-day-meta">${profileDateLabel(info.date)}${info.arrive?' · Arrive '+scheduleTimeLabel(info.arrive):''}${info.depart?' · Depart '+scheduleTimeLabel(info.depart):''}</small>`:''}</div><button class="schedule-add-inline" data-schedule-add-day="${day}">+ Add</button></div>${byDay.get(day).map(e=>scheduleEntryHtml(e)).join('')}</section>`}).join('')}`}`;
  const sel=el('tripDaySelect'); if(sel)sel.onchange=()=>{selectedTripDay=Number(sel.value);saveTripDay();renderSchedule();renderSchedulePreview()};
}
function scheduleVenueOptions(selected=''){
  const places=scheduleKnownPlaces();
  return [`<option value="">Choose a mapped venue…</option>`, ...places.map(p=>`<option value="${esc(p.id)}" ${p.id===selected?'selected':''}>${esc(p.icon||'📍')} ${esc(p.name)} · Deck ${esc(p.deck||'?')}</option>`)].join('');
}
function openScheduleEditor(mode='other', id=null, dayOverride=null){
  const existing=id?scheduleEntries.find(x=>x.id===id):null;
  const type=existing?.type || (mode==='show'?'show':'other');
  const defaults=SCHEDULE_EARLY_DEFAULT[type]||15;
  const showOpts=scheduleShowOptions();
  const nameDefault=existing?.name||'';
  const selectedVenue=existing?.venueId||'';
  el('overlayTitle').textContent=existing?'Edit Schedule Item':'Add to My Schedule';
  el('overlayMap').innerHTML=`<form id="scheduleForm" class="schedule-form">
    <div class="schedule-form-grid two"><label><span>TYPE</span><select id="sfType"><option value="show" ${type==='show'?'selected':''}>🎭 Show</option><option value="dining" ${type==='dining'?'selected':''}>🍴 Dining</option><option value="excursion" ${type==='excursion'?'selected':''}>🚌 Excursion</option><option value="activity" ${type==='activity'?'selected':''}>🎢 Activity</option><option value="other" ${type==='other'?'selected':''}>📌 Other</option></select></label><label><span>DAY</span><select id="sfDay">${Array.from({length:SAILING_DAY_COUNT},(_,i)=>`<option value="${i+1}" ${(Number(existing?.day||dayOverride||selectedTripDay)===i+1)?'selected':''}>Day ${i+1}</option>`).join('')}</select></label></div>
    <label id="showPickerWrap"><span>SHOW</span><select id="sfShow"><option value="">Choose a show…</option>${showOpts.map(v=>`<option value="${esc(v.id)}" ${existing?.routeId===v.id?'selected':''}>${esc(v.icon)} ${esc(v.name)}</option>`).join('')}</select></label>
    <label><span>EVENT / RESERVATION NAME</span><input id="sfName" type="text" maxlength="80" placeholder="Example: Back to the Future" value="${esc(nameDefault)}" required></label>
    <label><span>VENUE / LOCATION</span><select id="sfVenue">${scheduleVenueOptions(selectedVenue)}</select></label>
    <div class="schedule-form-grid two"><label><span>TIME</span><input id="sfTime" type="time" value="${esc(existing?.time||'')}" required></label><label><span>ARRIVE EARLY</span><select id="sfEarly">${[5,10,15,20,30,45,60].map(n=>`<option value="${n}" ${(Number(existing?.early||defaults)===n)?'selected':''}>${n} min</option>`).join('')}</select></label></div>
    <label><span>NOTES</span><textarea id="sfNotes" rows="3" maxlength="220" placeholder="Reservation details, seat notes, who you are meeting, etc.">${esc(existing?.notes||'')}</textarea></label>
    <div class="schedule-form-actions"><button type="button" class="secondary-venue-btn" id="scheduleCancel">Cancel</button><button type="submit" class="primary-venue-btn">${existing?'Save Changes':'Add to Schedule'}</button></div>
    ${existing?`<button type="button" class="danger-btn" id="scheduleDelete">Delete this item</button>`:''}
  </form>`;
  el('mapOverlay').classList.add('show');el('mapOverlay').setAttribute('aria-hidden','false');
  const typeSel=el('sfType'),showWrap=el('showPickerWrap'),showSel=el('sfShow'),nameInput=el('sfName'),venueSel=el('sfVenue');
  function syncShow(){
    const isShow=typeSel.value==='show'; showWrap.style.display=isShow?'block':'none';
    if(isShow && showSel.value){
      const v=showOpts.find(x=>x.id===showSel.value); if(v){nameInput.value=v.name; const match=[...venueSel.options].find(o=>o.textContent.includes(v.venueName)); if(match)venueSel.value=match.value;}
    }
  }
  typeSel.onchange=()=>{syncShow();if(typeSel.value!=='show'&&!existing){el('sfEarly').value=SCHEDULE_EARLY_DEFAULT[typeSel.value]||15}};
  showSel.onchange=syncShow;
  el('scheduleCancel').onclick=closeMap;
  syncShow();
  el('scheduleForm').onsubmit=(evt)=>{evt.preventDefault();
    const venue=locationById(venueSel.value) || scheduleKnownPlaces().find(x=>x.id===venueSel.value);
    const knownVenue=scheduleKnownPlaces().find(x=>x.id===venueSel.value);
    const selectedShow=showOpts.find(x=>x.id===showSel.value);
    const routeId=selectedShow?selectedShow.id:(knownVenue?.routeId||'');
    const venueName=selectedShow?selectedShow.venueName:(knownVenue?.name||'');
    const entry={id:existing?.id||('sched-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,7)),type:typeSel.value,day:Number(el('sfDay').value),name:nameInput.value.trim(),venueId:venueSel.value,time:el('sfTime').value,early:Number(el('sfEarly').value),notes:el('sfNotes').value.trim(),routeId,venueName,attended:existing?.attended||false};
    if(!entry.name){nameInput.focus();return;}
    if(existing) scheduleEntries=scheduleEntries.map(x=>x.id===existing.id?entry:x); else scheduleEntries.push(entry);
    saveSchedule();closeMap();renderSchedule();renderSchedulePreview();navigate('schedule');
  };
  if(existing)el('scheduleDelete').onclick=()=>{if(confirm('Delete this schedule item?')){scheduleEntries=scheduleEntries.filter(x=>x.id!==existing.id);saveSchedule();closeMap();renderSchedule();renderSchedulePreview();}};
}
function jumpToScheduleDay(){
  const host=el('scheduleContent');const section=[...host.querySelectorAll('.schedule-day')].find(x=>x.querySelector('h3')?.textContent===`Day ${selectedTripDay}`);
  if(section)section.scrollIntoView({behavior:'smooth',block:'start'});
}

loadSchedule();
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
    v=`<rect x="129" y="38" width="132" height="73" rx="11" class="map-zone"/><text x="195" y="56" text-anchor="middle" class="map-muted">INTERIOR CABINS</text><text x="195" y="75" text-anchor="middle" class="map-zone-text">7456</text><rect x="67" y="164" width="256" height="45" rx="12" class="map-zone destzone"/><text x="195" y="184" text-anchor="middle" class="map-zone-text">SURFSIDE / PUBLIC AREA</text><text x="195" y="200" text-anchor="middle" class="map-muted">second elevator core farther aft</text>`;
    cores=core(118,'LIFT / STAIR CORE')+core(211,'LIFT / STAIR CORE'); home=`<circle cx="195" cy="76" r="11" class="map-you"/><text x="214" y="80" class="map-label">HOME</text>`;
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

// v0.18 scalable navigation graph.
// Maps are clean deck-plan images. Route geometry is stored as reusable nodes/edges,
// so the same walkway segments can support many future destinations.
const NAV_MAPS_V018={
  d7f:{deck:'7',name:'Deck 7 · Forward',src:'./assets/deck7-forward.png',w:475,h:1193},
  d16f:{deck:'16',name:'Deck 16 · Forward / Chill Island',src:'./assets/deck16-forward.png',w:518,h:1178},
  d16t:{deck:'16',name:'Deck 16 · Thrill Island',src:'./assets/deck16-thrill.png',w:441,h:821}
};
const NAV_NODES_V018={
  cabin7456:{map:'d7f',x:214,y:433,label:'Cabin 7456',kind:'start'},
  d7_cross_port:{map:'d7f',x:126,y:439,label:'Interior cross-corridor'},
  d7_port_corridor:{map:'d7f',x:126,y:685,label:'Port-side corridor'},
  d7_elevator_entry:{map:'d7f',x:172,y:699,label:'Forward elevator lobby'},
  d7_forward_elevator:{map:'d7f',x:228,y:684,label:'Forward elevators',kind:'elevator'},

  d16_forward_elevator:{map:'d16f',x:223,y:487,label:'Forward elevators',kind:'elevator'},
  d16_port_exit:{map:'d16f',x:188,y:537,label:'Port-side lobby exit'},
  d16_swimtonic:{map:'d16f',x:116,y:625,label:'Swim & Tonic'},
  d16_limecoconut:{map:'d16f',x:103,y:714,label:'Lime & Coconut'},
  d16_dryslide:{map:'d16f',x:112,y:805,label:'Dry Slide'},
  d16_chill_mid:{map:'d16f',x:98,y:929,label:'Chill Island walkway'},
  d16_crown_forward:{map:'d16f',x:91,y:1130,label:"Crown's Edge"},

  d16_crown_thrill:{map:'d16t',x:104,y:72,label:"Crown's Edge"},
  d16_mid_elevator:{map:'d16t',x:211,y:215,label:'Midship elevator lobby',kind:'elevator'},
  d16_adrenaline:{map:'d16t',x:83,y:319,label:'Adrenaline Peak'},
  basecamp:{map:'d16t',x:113,y:397,label:'Basecamp',kind:'destination'}
};
const NAV_EDGES_V018=[
  ['cabin7456','d7_cross_port'],['d7_cross_port','d7_port_corridor'],['d7_port_corridor','d7_elevator_entry'],['d7_elevator_entry','d7_forward_elevator'],
  ['d7_forward_elevator','d16_forward_elevator','elevator'],
  ['d16_forward_elevator','d16_port_exit'],['d16_port_exit','d16_swimtonic'],['d16_swimtonic','d16_limecoconut'],['d16_limecoconut','d16_dryslide'],['d16_dryslide','d16_chill_mid'],['d16_chill_mid','d16_crown_forward'],
  ['d16_crown_forward','d16_crown_thrill','continuation'],
  ['d16_crown_thrill','d16_mid_elevator'],['d16_mid_elevator','d16_adrenaline'],['d16_adrenaline','basecamp']
];
function navAdjV018(){
  const a={}; Object.keys(NAV_NODES_V018).forEach(k=>a[k]=[]);
  NAV_EDGES_V018.forEach(([u,v,type='walk'])=>{a[u].push({to:v,type});a[v].push({to:u,type})});
  return a;
}
function navFindPathV018(start,end){
  const a=navAdjV018(),q=[start],prev={[start]:null},edgeType={};
  while(q.length){const u=q.shift();if(u===end)break;(a[u]||[]).forEach(e=>{if(!(e.to in prev)){prev[e.to]=u;edgeType[e.to]=e.type;q.push(e.to)}})}
  if(!(end in prev))return [];
  const out=[];let cur=end;while(cur){out.push(cur);cur=prev[cur]}out.reverse();return out;
}
function navPathGroupsV018(path){
  const groups=[];let g=null;
  path.forEach(id=>{const n=NAV_NODES_V018[id];if(!n)return;if(!g||g.map!==n.map){g={map:n.map,nodes:[]};groups.push(g)}g.nodes.push(id)});
  return groups;
}
function navSvgOverlayV018(mapKey,nodeIds,{focusId=null}={}){
  const m=NAV_MAPS_V018[mapKey]; const pts=nodeIds.map(id=>NAV_NODES_V018[id]).filter(Boolean);
  const poly=pts.map(p=>`${p.x},${p.y}`).join(' ');
  const marks=pts.map((p,i)=>{
    const id=nodeIds[i]; const cls=p.kind==='start'?'nav-start':p.kind==='destination'?'nav-dest':p.kind==='elevator'?'nav-elevator':'nav-node';
    const label=(p.kind==='start'||p.kind==='destination'||id===focusId)?`<g class="nav-pin-label"><rect x="${Math.min(p.x+12,m.w-145)}" y="${Math.max(8,p.y-25)}" width="132" height="36" rx="8"/><text x="${Math.min(p.x+20,m.w-137)}" y="${Math.max(31,p.y-2)}">${esc(p.label)}</text></g>`:'';
    return `<circle cx="${p.x}" cy="${p.y}" r="${p.kind?9:5}" class="${cls}"/>${label}`;
  }).join('');
  return `<svg class="nav-overlay-v018" viewBox="0 0 ${m.w} ${m.h}" preserveAspectRatio="none" aria-hidden="true"><polyline points="${poly}" class="nav-route-line-v018"/>${marks}</svg>`;
}
function navMapPanelV018(mapKey,nodeIds,opts={}){
  const m=NAV_MAPS_V018[mapKey];
  return `<div class="nav-real-map-v018"><img src="${m.src}" alt="${esc(m.name)} clean deck plan">${navSvgOverlayV018(mapKey,nodeIds,opts)}</div>`;
}
function navOverviewV018(start='cabin7456',end='basecamp'){
  const path=navFindPathV018(start,end),groups=navPathGroupsV018(path);
  return `<div class="route-overview-v018">
    <div class="route-overview-tabs"><button class="active" type="button">ROUTE OVERVIEW</button><button type="button" id="overviewNextStep">NEXT STEP</button></div>
    <div class="route-summary-strip"><span>🏠 Cabin 7456</span><b>→</b><span>🛗 Deck 7 → 16</span><b>→</b><span>📍 Basecamp</span></div>
    <div class="verified-source-note"><strong>✓ GRAPH-BASED VERIFIED ROUTE</strong><span>The route is now generated from reusable nodes and connections over clean deck plans. Your marked screenshots were used only to verify the geometry.</span></div>
    ${groups.map((g,i)=>{
      const m=NAV_MAPS_V018[g.map];
      const continuation=i<groups.length-1 ? `<div class="graph-continuation-v018">${m.deck==='7'?'🛗 TAKE FORWARD ELEVATOR TO DECK 16':'↓ CONTINUE ON DECK 16 ↓'}</div>`:'';
      return `<section class="route-deck-card"><div class="route-deck-head"><b>DECK ${m.deck}</b><span>${esc(NAV_NODES_V018[g.nodes[0]].label)} → ${esc(NAV_NODES_V018[g.nodes[g.nodes.length-1]].label)}</span></div>${navMapPanelV018(g.map,g.nodes)}<div class="route-caption">Dynamic route overlay · clean map · reusable graph segment</div></section>${continuation}`;
    }).join('')}
    <div class="verified-route-footer"><span class="verified-dot"></span><b>Scalable route engine active</b><small>Future destinations can reuse any encoded segment instead of requiring a new screenshot route.</small></div>
  </div>`;
}
function guidedGraphMapV018(idx){
  const path=navFindPathV018('cabin7456','basecamp');
  const byStep=[
    {map:'d7f',nodes:['cabin7456','d7_cross_port','d7_port_corridor','d7_elevator_entry','d7_forward_elevator'],focus:'cabin7456',label:'DECK 7 · CABIN TO ELEVATORS'},
    null,
    {map:'d16f',nodes:['d16_forward_elevator','d16_port_exit','d16_swimtonic'],focus:'d16_forward_elevator',label:'DECK 16 · EXIT ELEVATOR LOBBY'},
    {map:'d16f',nodes:['d16_swimtonic','d16_limecoconut','d16_dryslide','d16_chill_mid','d16_crown_forward'],focus:'d16_limecoconut',label:'DECK 16 · CHILL ISLAND'},
    {map:'d16t',nodes:['d16_crown_thrill','d16_mid_elevator','d16_adrenaline','basecamp'],focus:'d16_adrenaline',label:'DECK 16 · THRILL ISLAND'},
    {map:'d16t',nodes:['d16_adrenaline','basecamp'],focus:'basecamp',label:'DECK 16 · BASECAMP'}
  ];
  const s=byStep[idx];
  if(!s)return null;
  return `<div class="guided-map-label">${s.label}</div>${navMapPanelV018(s.map,s.nodes,{focusId:s.focus})}`;
}
function routeFor(fromId,toId){
  const from=locationById(fromId); const to=destinations.find(x=>x.id===toId); if(!to)return [];

  // v0.16 first traced route, derived from the user-supplied Deck 7 and Deck 16 plans.
  if(from.id==='cabin7456' && to.id==='basecamp'){
    return [
      routeStep('walk','Leave Cabin 7456 and follow the interior cabin corridor across to the port-side corridor. Continue aft along the port-side corridor to the forward elevator lobby on Deck 7.','verified','7'),
      routeStep('elevator','Take the forward elevator from Deck 7 to Deck 16. Confirm Deck 16 before exiting.','verified','16'),
      routeStep('orient','Exit toward the port side of the Deck 16 lobby, then follow the public walkway around the Whirlpool and Swim & Tonic area.','verified','16'),
      routeStep('walk','Continue aft past The Lime and Coconut Frozen Bar and the Dry Slide, following the Chill Island walkway toward Crown’s Edge.','verified','16'),
      routeStep('walk','Continue through Crown’s Edge, pass the next elevator lobby and Adrenaline Peak, then follow the walkway to Basecamp.','verified','16'),
      routeStep('arrive','Arrive at Basecamp on Deck 16.','verified','16')
    ];
  }

  const sameDeck=String(from.mapDeck)===String(to.mapDeck);
  const orient=destinationOrientation(to);
  const route=[];

  if(from.id==='cabin7456'){
    route.push(routeStep('walk','Leave Cabin 7456. Use cabin-number and deck signage to reach an elevator or stair lobby on Deck 7.','signage','7'));
  }else{
    route.push(routeStep('walk',`Start at ${from.name}. Use the nearest clearly signed elevator, stair lobby, or major neighborhood landmark as your next navigation anchor.`,'signage',from.mapDeck));
  }

  if(!sameDeck){
    route.push(routeStep('elevator',`Use an elevator or stair connection that serves Deck ${to.mapDeck}. Confirm Deck ${to.mapDeck} on the lobby signage before continuing.`,'orientation',to.mapDeck));
  }

  if(orient){
    route.push(routeStep('orient',`On Deck ${to.mapDeck}, use the ship's FORWARD / AFT signs and head ${orient} toward the ${to.area.replace(/^[^·]*·\s*/,'')} area.`,'verified',to.mapDeck));
  }else{
    route.push(routeStep('orient',`On Deck ${to.mapDeck}, orient toward the signed ${to.area} area.`,'orientation',to.mapDeck));
  }

  route.push(routeStep('arrive',`Use posted venue and neighborhood signs for the final approach to ${to.name}. Exact final corridor turns will be added only after they are traced from the supplied deck plans.`,'signage',to.mapDeck));
  return route;
}
function routeAreaLabel(fromId,to){const from=locationById(fromId);return `${from.name} → ${to.name}`;}
function guidedMapFor(d,idx){
  const from=locationById(currentLocationId);
  if(from.id==='cabin7456' && d.id==='basecamp'){
    const gm=guidedGraphMapV018(idx);
    if(gm)return gm;
  }
  const step=d.route[idx]||d.route[0];
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
  const accuracy=routeAccuracyMeta(s.accuracy);
  const routeSummary=routeAccuracySummary(d.route);
  el('routeContent').innerHTML=`<div class="route-accuracy ${esc(routeSummary.level)}"><div><span>${esc(routeSummary.label)}</span><strong>${esc(routeSummary.text)}</strong></div><button class="accuracy-help" id="accuracyHelp" aria-label="Navigation accuracy information">?</button></div><div class="location-picker"><button class="location-field" id="fromLocationBtn"><span>📍 FROM</span><strong>${esc(from.name)}</strong><small>Deck ${esc(from.mapDeck)} · change</small></button><div class="location-arrow">→</div><button class="location-field" id="toLocationBtn"><span>🎯 TO</span><strong>${esc(d.name)}</strong><small>Deck ${esc(d.mapDeck)}</small></button></div><div class="guided-top"><button class="back-btn" onclick="navigate('home')">‹ Exit</button><div class="guided-progress"><span>${progressText}</span><div><i style="width:${pct}%"></i></div></div></div><div class="route-hero guided-hero"><div class="eyebrow">${esc(routeAreaLabel(currentLocationId,d))}</div><h2>${type}</h2><div class="route-tag">Deck ${idx<2?esc(from.mapDeck):esc(d.mapDeck)} · ${esc(d.area)}</div></div><div class="guided-map">${guidedMapFor(d,idx)}<button class="map-open guided-full" data-openmap="${d.id}">Expand map</button></div><div class="instruction-card"><div class="step-num big">${idx+1}</div><div><div class="step-type">${type} <span class="step-accuracy ${esc(s.accuracy)}">${esc(accuracy.label)}</span></div><div class="instruction-text">${esc(s.text)}</div></div></div>${idx===d.route.length-1?nearby:''}<div class="guided-actions">${idx>0?'<button class="secondary-action" id="prevGuide">← Previous</button>':''}<button class="confused-action" id="confusedBtn">? I'm confused</button>${idx<d.route.length-1?'<button class="next-action" id="nextGuide">NEXT →</button>':'<button class="next-action" id="finishGuide">✓ ARRIVED</button>'}</div>`;
  el('accuracyHelp').onclick=()=>{el('overlayTitle').textContent='Navigation accuracy';el('overlayMap').innerHTML=`<div class="accuracy-sheet"><h3>How Cruise Navigator treats route accuracy</h3><p><b>Verified</b> means the deck, venue, or forward/aft relationship is supported by the current source material.</p><p><b>Orientation</b> means the guidance is useful for choosing a deck or ship direction, but exact corridor turns are not yet traced.</p><p><b>Signage</b> means Navigator intentionally stops short of inventing a turn. Use posted ship signs for that segment.</p><div class="recovery-tip"><strong>v0.11 foundation:</strong> future deck-plan tracing can upgrade individual segments from Signage or Orientation to Verified without changing the rest of the route engine.</div></div>`;el('mapOverlay').classList.add('show');el('mapOverlay').setAttribute('aria-hidden','false');};
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
  const landmarks=d.mapDeck==='15'?['AquaDome / AquaTheater','Royal Bay Pool','Windjammer Marketplace','Elevator lobby']:d.mapDeck==='16'?['Basecamp','Slide entrances','Lost Dunes / FlowRider','Elevator lobby']:d.mapDeck==='5'?['Royal Theater','The Pearl','Dining Room','Absolute Zero','Elevator lobby']:d.mapDeck==='8'?['Central Park','Park Café','Lou’s','Elevator lobby']:['Cabin-number signs','Elevator / stair lobby','Surfside','Another elevator / stair lobby'];
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

function tracedBasecampOverview(){ return navOverviewV018('cabin7456','basecamp'); }

function openMapFor(id){
  const d=destinations.find(x=>x.id===id);if(!d)return;
  const from=locationById(currentLocationId);
  el('overlayTitle').textContent=`${from.name} → ${d.name}`;
  if(from.id==='cabin7456' && d.id==='basecamp'){
    el('overlayMap').innerHTML=tracedBasecampOverview();
    const next=el('overviewNextStep');
    if(next)next.onclick=()=>{closeMap();renderGuidedRoute();};
  }else{
    el('overlayMap').innerHTML=`<div class="overlay-section"><div class="overlay-label">DECK ${esc(from.mapDeck)} · CURRENT LOCATION</div>${shipMapSVG(from.mapDeck,from.mapNode,'route')}</div><div class="overlay-connector">↓ ${String(from.mapDeck)===String(d.mapDeck)?'ROUTE ON SAME DECK':'DECK TRANSITION · CONFIRM ON SIGNAGE'} ↓</div><div class="overlay-section"><div class="overlay-label">DECK ${esc(d.mapDeck)} · DESTINATION</div>${shipMapSVG(d.mapDeck,d.mapNode,'route')}</div>`;
  }
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
  const hf=e.target.closest('[data-happening-filter]');if(hf){happeningFilter=hf.dataset.happeningFilter;localStorage.setItem(HAPPENING_FILTER_KEY,happeningFilter);renderHappening();return}
  const ha=e.target.closest('[data-happening-add]');if(ha){addReferenceEventToSchedule(ha.dataset.happeningAdd);return}
  const hr=e.target.closest('[data-happening-route]');if(hr){closeMap();showRoute(hr.dataset.happeningRoute);return}
  const dp=e.target.closest('[data-drink-profile]');if(dp){setDrinkProfile(dp.dataset.drinkProfile);return}
  const df=e.target.closest('[data-drink-filter]');if(df){drinkFilter=df.dataset.drinkFilter;localStorage.setItem(DRINK_FILTER_KEY,drinkFilter);renderDrinks();return}
  const ds=e.target.closest('[data-drink-state]');if(ds){if(activeDrinkProfile==='both')return;const id=ds.dataset.drinkId,key=ds.dataset.drinkState;const st=drinkStatus(id);st[key]=!st[key];if(key==='dislike'&&st.dislike){st.favorite=false;}drinkProfiles[activeDrinkProfile][id]=st;saveDrinkState();renderDrinks();renderDrinkHome();return}
  const dr=e.target.closest('[data-drink-route]');if(dr){showRoute(dr.dataset.drinkRoute);return}
  if(e.target.closest('[data-drink-surprise]')){surpriseDrink();return}
  const go=e.target.closest('[data-go]');if(go){navigate(go.dataset.go);return}
  const open=e.target.closest('[data-openmap]');if(open){openMapFor(open.dataset.openmap);return}
});

document.addEventListener('click',e=>{
  const add=e.target.closest('[data-schedule-add]'); if(add){closeMap();openScheduleEditor(add.dataset.scheduleAdd);return;}
  const addDay=e.target.closest('[data-schedule-add-day]'); if(addDay){openScheduleEditor('other',null,Number(addDay.dataset.scheduleAddDay));return;}
  const edit=e.target.closest('[data-schedule-edit]'); if(edit){openScheduleEditor('other',edit.dataset.scheduleEdit);return;}
  const route=e.target.closest('[data-schedule-route]'); if(route && route.dataset.scheduleRoute){closeMap();showRoute(route.dataset.scheduleRoute);return;}
  const attend=e.target.closest('[data-schedule-attend]'); if(attend){const item=scheduleEntries.find(x=>x.id===attend.dataset.scheduleAttend);if(item){item.attended=!item.attended;saveSchedule();renderSchedule();renderSchedulePreview();}return;}
  if(e.target.closest('[data-schedule-current]')){jumpToScheduleDay();return;}
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

/* v0.13 What's Happening
   Reference events are transcribed from the user-supplied Star of the Seas
   Cruise Compass for the July 5-12, 2026 sailing. They are intentionally
   labeled REFERENCE, not confirmed for the September 13 sailing. */
const COMPASS_REFERENCE={
  sailing:'July 5–12, 2026',
  source:'Star of the Seas Cruise Compass supplied by user',
  events:[
    {day:1,time:'14:00',end:'14:45',name:'Basketball Hot Shots Competition',venue:'Sports Court',deck:'17',category:'Games',routeId:'sportscourt'},
    {day:1,time:'16:15',end:'17:15',name:'Star Sailaway Poolside Party',venue:'Pool Deck',deck:'15–17',category:'Party'},
    {day:1,time:'19:30',end:'20:15',name:'Family Karaoke',venue:'Spotlight Karaoke',deck:'5',category:'Karaoke',routeId:'spotlight'},
    {day:1,time:'20:30',end:'21:15',name:'If You Know It, Sing It!',venue:'Music Hall',deck:'3–4',category:'Games',routeId:'musichall'},
    {day:1,time:'20:30',end:'21:15',name:'Karaoke: Teens',venue:'Spotlight Karaoke',deck:'5',category:'Karaoke',routeId:'spotlight'},
    {day:1,time:'21:30',end:'22:15',name:'Adult Karaoke (18+)',venue:'Spotlight Karaoke',deck:'5',category:'Karaoke',routeId:'spotlight'},
    {day:2,time:'14:30',end:'15:00',name:"Name That Tune: '80s Hits",venue:'Spotlight Karaoke',deck:'5',category:'Trivia',routeId:'spotlight'},
    {day:2,time:'17:30',end:'18:15',name:'Name That Tune: Taylor Swift',venue:'AquaTheater',deck:'15',category:'Trivia',routeId:'aquadome'},
    {day:2,time:'21:30',end:'22:15',name:'Finish That Lyric',venue:'AquaTheater',deck:'15',category:'Games',routeId:'aquadome'},
    {day:3,time:'10:00',end:'10:30',name:'Royal Trivia LIVE! (Your Phone, Your Power!)',venue:'Spotlight Karaoke',deck:'5',category:'Trivia',routeId:'spotlight'},
    {day:3,time:'15:45',end:'16:15',name:'Blacklight Puppet Show: Away In Time!',venue:'AO Theater',deck:'6',category:'Family',routeId:'aotheater'},
    {day:3,time:'16:45',end:'17:15',name:'Blacklight Puppet Show: Away In Time!',venue:'AO Theater',deck:'6',category:'Family',routeId:'aotheater'},
    {day:3,time:'17:30',end:'18:00',name:'Royal Trivia LIVE! (Your Phone, Your Power!)',venue:'Spotlight Karaoke',deck:'5',category:'Trivia',routeId:'spotlight'},
    {day:3,time:'22:00',end:'23:00',name:'SHUSH! Silent Party',venue:'Royal Promenade',deck:'5',category:'Party',routeId:'promenade'},
    {day:3,time:'23:15',end:'23:59',name:'Adult Game Show: Blankety Blank (18+)',venue:'Music Hall',deck:'3–4',category:'Games',routeId:'musichall'},
    {day:4,time:'10:00',end:'10:30',name:'Royal Trivia LIVE! (Your Phone, Your Power!)',venue:'Spotlight Karaoke',deck:'5',category:'Trivia',routeId:'spotlight'},
    {day:4,time:'11:00',end:'11:30',name:'Who in the World Am I Trivia?',venue:'Schooner Bar',deck:'6',category:'Trivia',routeId:'schooner'},
    {day:4,time:'13:30',end:'14:00',name:'Karaoke Power Hour',venue:'Spotlight Karaoke',deck:'5',category:'Karaoke',routeId:'spotlight'},
    {day:4,time:'14:00',end:'14:30',name:'Name That Tune: Divas',venue:'Dueling Pianos',deck:'6',category:'Trivia',routeId:'dueling'},
    {day:4,time:'14:30',end:'15:00',name:'Bachata Dance Class (Beginners)',venue:'Boleros',deck:'6',category:'Dance',routeId:'boleros'},
    {day:4,time:'17:00',end:'17:30',name:'Royal Trivia LIVE! (Your Phone, Your Power!)',venue:'Spotlight Karaoke',deck:'5',category:'Trivia',routeId:'spotlight'},
    {day:4,time:'22:30',end:'23:15',name:'Adult Karaoke (18+)',venue:'Spotlight Karaoke',deck:'5',category:'Karaoke',routeId:'spotlight'},
    {day:5,time:'19:30',end:'20:15',name:"The Price Is Right: Everyone's A Contestant!",venue:'Royal Theater',deck:'3–5',category:'Games',routeId:'theater'},
    {day:5,time:'21:30',end:'22:15',name:"The Price Is Right: Everyone's A Contestant!",venue:'Royal Theater',deck:'3–5',category:'Games',routeId:'theater'},
    {day:5,time:'22:45',end:'23:30',name:'The Crazy Quest (18+)',venue:'Absolute Zero',deck:'6',category:'Games',routeId:'absolute'},
    {day:6,time:'10:00',end:'10:30',name:'Morning Trivia',venue:'Schooner Bar',deck:'6',category:'Trivia',routeId:'schooner'},
    {day:6,time:'11:00',end:'11:30',name:"Captain's & Rivers Challenge",venue:'Schooner Bar',deck:'6',category:'Trivia',routeId:'schooner'},
    {day:6,time:'14:00',end:'14:30',name:'Movie Quotes Challenge',venue:'Spotlight Karaoke',deck:'5',category:'Trivia',routeId:'spotlight'},
    {day:6,time:'14:45',end:'15:15',name:'Themed Trivia: Broadway Musicals',venue:'Spotlight Karaoke',deck:'5',category:'Trivia',routeId:'spotlight'},
    {day:6,time:'15:30',end:'16:00',name:'Visual Trivia: Movie Posters',venue:'Spotlight Karaoke',deck:'5',category:'Trivia',routeId:'spotlight'},
    {day:6,time:'15:45',end:'16:05',name:'Ocean Odyssey Parade',venue:'Royal Promenade',deck:'5',category:'Party',routeId:'promenade'},
    {day:6,time:'17:30',end:'18:00',name:'Royal Trivia LIVE! (Your Phone, Your Power!)',venue:'Spotlight Karaoke',deck:'5',category:'Trivia',routeId:'spotlight'},
    {day:6,time:'18:15',end:'18:45',name:"Name That Tune: '80s",venue:'Schooner Bar',deck:'6',category:'Trivia',routeId:'schooner'},
    {day:6,time:'19:30',end:'20:15',name:'Family Karaoke',venue:'Spotlight Karaoke',deck:'5',category:'Karaoke',routeId:'spotlight'},
    {day:6,time:'20:30',end:'21:15',name:'Karaoke: Teens',venue:'Spotlight Karaoke',deck:'5',category:'Karaoke',routeId:'spotlight'},
    {day:6,time:'22:30',end:'23:59',name:'Adult Karaoke (18+)',venue:'Spotlight Karaoke',deck:'5',category:'Karaoke',routeId:'spotlight'},
    {day:7,time:'10:30',end:'11:00',name:'Royal Trivia LIVE! (Your Phone, Your Power!)',venue:'Spotlight Karaoke',deck:'5',category:'Trivia',routeId:'spotlight'},
    {day:7,time:'11:00',end:'11:30',name:'Jedi Chronicles Trivia',venue:'Spotlight Karaoke',deck:'5',category:'Trivia',routeId:'spotlight'},
    {day:7,time:'11:30',end:'12:00',name:'Guess the Romance Movie',venue:'Spotlight Karaoke',deck:'5',category:'Trivia',routeId:'spotlight'},
    {day:7,time:'12:15',end:'12:45',name:'Charades Challenge',venue:'Spotlight Karaoke',deck:'5',category:'Games',routeId:'spotlight'},
    {day:7,time:'13:00',end:'13:30',name:'Name That Tune: Cartoons',venue:'Dueling Pianos',deck:'6',category:'Trivia',routeId:'dueling'},
    {day:7,time:'13:30',end:'14:00',name:'Tri-Bond Trivia',venue:'Thorn & Thistle',deck:'5',category:'Trivia',routeId:'thorn'},
    {day:7,time:'14:30',end:'15:00',name:"Name That Tune: '2000s Hits",venue:'Dueling Pianos',deck:'6',category:'Trivia',routeId:'dueling'},
    {day:7,time:'17:00',end:'17:30',name:'Trivia @ 5',venue:'Dueling Pianos',deck:'6',category:'Trivia',routeId:'dueling'},
    {day:7,time:'18:15',end:'18:45',name:"Visual Trivia: All About '80s",venue:'Spotlight Karaoke',deck:'5',category:'Trivia',routeId:'spotlight'},
    {day:7,time:'18:45',end:'19:15',name:'Name That Tune: Millennium Hits',venue:'Spotlight Karaoke',deck:'5',category:'Trivia',routeId:'spotlight'},
    {day:7,time:'19:30',end:'20:15',name:'Family Karaoke',venue:'Spotlight Karaoke',deck:'5',category:'Karaoke',routeId:'spotlight'},
    {day:7,time:'20:30',end:'21:15',name:'Karaoke: Teens',venue:'Spotlight Karaoke',deck:'5',category:'Karaoke',routeId:'spotlight'},
    {day:7,time:'21:30',end:'22:15',name:'Karaoke Superstar Competition: Finals (18+)',venue:'Spotlight Karaoke',deck:'5',category:'Karaoke',routeId:'spotlight'},
    {day:7,time:'23:15',end:'23:59',name:'Adult Karaoke (18+)',venue:'Spotlight Karaoke',deck:'5',category:'Karaoke',routeId:'spotlight'}
  ]
};
const HAPPENING_DAY_KEY='cruise-nav-happening-day-v013';
const HAPPENING_FILTER_KEY='cruise-nav-happening-filter-v013';
let happeningDay=Number(localStorage.getItem(HAPPENING_DAY_KEY)||1);
let happeningFilter=localStorage.getItem(HAPPENING_FILTER_KEY)||'All';
function compassDayName(day){const names={1:'Port Canaveral',2:'Perfect Day at CocoCay',3:'At Sea',4:'St. Thomas',5:'St. Kitts & Nevis',6:'At Sea',7:'At Sea'};return names[day]||''}
function happeningEventHtml(e){
  return `<article class="happening-event"><div class="happening-time"><strong>${scheduleTimeLabel(e.time)}</strong><small>${e.end?scheduleTimeLabel(e.end):''}</small></div><div class="happening-main"><div class="happening-row"><span class="happening-category">${esc(e.category)}</span><span class="happening-reference">REFERENCE</span></div><h3>${esc(e.name)}</h3><p>📍 ${esc(e.venue)} · Deck ${esc(e.deck)}</p><div class="happening-actions">${e.routeId?`<button data-happening-route="${esc(e.routeId)}">🧭 Take Me There</button>`:''}<button data-happening-add="${COMPASS_REFERENCE.events.indexOf(e)}">+ Add to My Schedule</button></div></div></article>`;
}
function renderHappeningHome(){const host=el('happeningHome');if(!host)return;const trivia=COMPASS_REFERENCE.events.filter(e=>e.category==='Trivia').length;host.innerHTML=`<button class="happening-home-card" data-view="happening"><span class="happening-home-icon">✨</span><span><strong>What’s Happening</strong><small>${COMPASS_REFERENCE.events.length} reference events · ${trivia} trivia sessions from a recent Star sailing</small></span><span>›</span></button>`}
function renderHappening(){const host=el('happeningContent');if(!host)return;const cats=['All',...new Set(COMPASS_REFERENCE.events.map(e=>e.category))];const events=COMPASS_REFERENCE.events.filter(e=>e.day===happeningDay&&(happeningFilter==='All'||e.category===happeningFilter));host.innerHTML=`<div class="happening-warning"><strong>RECENT SAILING REFERENCE</strong><p>These times come from the July 5–12, 2026 Star of the Seas Cruise Compass you supplied. They are useful for learning recurring programming, but they are not confirmed for your September sailing.</p></div><div class="happening-controls"><label><span>REFERENCE DAY</span><select id="happeningDaySelect">${Array.from({length:7},(_,i)=>`<option value="${i+1}" ${happeningDay===i+1?'selected':''}>Day ${i+1} · ${compassDayName(i+1)}</option>`).join('')}</select></label><div class="happening-filters">${cats.map(c=>`<button class="${happeningFilter===c?'active':''}" data-happening-filter="${esc(c)}">${esc(c)}</button>`).join('')}</div></div><div class="happening-source"><b>Source:</b> ${esc(COMPASS_REFERENCE.sailing)} Star of the Seas Cruise Compass</div><div class="happening-list">${events.length?events.map(happeningEventHtml).join(''):`<div class="schedule-empty"><h3>No ${esc(happeningFilter)} events transcribed for this reference day yet.</h3></div>`}</div>`;const sel=el('happeningDaySelect');if(sel)sel.onchange=()=>{happeningDay=Number(sel.value);localStorage.setItem(HAPPENING_DAY_KEY,happeningDay);renderHappening()}}
function addReferenceEventToSchedule(index){const e=COMPASS_REFERENCE.events[Number(index)];if(!e)return;const id='compass-ref-'+e.day+'-'+e.time.replace(':','')+'-'+Number(index);if(scheduleEntries.some(x=>x.id===id)){navigate('schedule');return;}scheduleEntries.push({id,type:'activity',day:e.day,time:e.time,name:e.name,venueName:e.venue,venueId:e.routeId||'',routeId:e.routeId||'',early:15,notes:`REFERENCE ONLY: ${COMPASS_REFERENCE.sailing} Cruise Compass. Verify the actual time in the Royal Caribbean app for your September sailing.`,confirmed:false,source:COMPASS_REFERENCE.source});saveSchedule();renderSchedule();renderSchedulePreview();navigate('schedule')}



/* v0.15 I Need a Drink
   Two-person Drink Passport. Existing v0.14 ratings migrate to Daniel on first load.
   Daniel and Wife remain independent. Both mode combines recommendations without merging preferences. */
const DRINK_STATE_KEY='cruise-nav-drink-passport-v015';
const DRINK_STATE_OLD_KEY='cruise-nav-drink-passport-v014';
const DRINK_FILTER_KEY='cruise-nav-drink-filter-v014';
const DRINK_PROFILE_KEY='cruise-nav-drink-profile-v015';
const DRINK_PROFILES={daniel:'Daniel',wife:'Wife',both:'Both'};
const DRINKS=[
 {id:'marshmallow-old-fashioned',name:'Toasted Marshmallow Old Fashioned',emoji:'🥃',style:'Whiskey',venue:'Schooner Bar',routeId:'schooner',sweet:'Rich & sweet',why:'One of the most repeatedly recommended Royal Caribbean cocktails, especially at Schooner Bar.',community:'CRUISER FAVORITE',verifiedVenue:true},
 {id:'lavender-daiquiri',name:'Lavender Daiquiri',emoji:'💜',style:'Rum',venue:'Schooner Bar',routeId:'schooner',sweet:'Floral & bright',why:'A recurring Schooner Bar favorite in Royal Caribbean cruiser discussions.',community:'CRUISER FAVORITE',verifiedVenue:true},
 {id:'desert-pear-margarita',name:'Desert Pear Margarita',emoji:'🌵',style:'Tequila',venue:'Schooner Bar',routeId:'schooner',sweet:'Fruity & tart',why:'Frequently praised by Royal Caribbean cruisers as a Schooner Bar must-try.',community:'HIGHLY RECOMMENDED',verifiedVenue:true},
 {id:'lavender-martini',name:'Lavender Martini',emoji:'🍸',style:'Martini',venue:'Ask at Schooner Bar',routeId:'schooner',sweet:'Floral',why:'Cruisers repeatedly mention the lavender martini alongside Schooner’s lavender daiquiri.',community:'COMMUNITY PICK'},
 {id:'goombay-smash',name:'Goombay Smash',emoji:'🍍',style:'Tropical',venue:'Ask at a full-service bar',routeId:'',sweet:'Pineapple & rum',why:'A popular first-cruise-drink recommendation for people who want something unmistakably tropical.',community:'COMMUNITY PICK'},
 {id:'miami-vice',name:'Miami Vice',emoji:'🍓',style:'Frozen',venue:'Ask at a blender bar',routeId:'',sweet:'Sweet & frozen',why:'Half strawberry daiquiri and half piña colada, a long-running cruise favorite that also works alcohol-free.',community:'CLASSIC CRUISE PICK'},
 {id:'frozen-mojito',name:'Frozen Mojito',emoji:'🌿',style:'Frozen',venue:'Ask at a blender bar',routeId:'',sweet:'Minty & refreshing',why:'Often recommended as a sailaway drink by Royal Caribbean cruisers.',community:'COMMUNITY PICK'},
 {id:'caribbean-mule',name:'Caribbean Mule',emoji:'🫚',style:'Tropical',venue:'Ask at a full-service bar',routeId:'',sweet:'Ginger & citrus',why:'A recurring Royal Caribbean menu favorite for something refreshing without going fully frozen.',community:'COMMUNITY PICK'},
 {id:'espresso-martini',name:'Espresso Martini',emoji:'☕',style:'Coffee',venue:'Rye & Bean is worth checking',routeId:'ryebean',sweet:'Coffee & cocktail',why:'Espresso martinis are a frequent cruiser recommendation, and Royal Caribbean highlights Rye & Bean for coffee by day and cocktails by night.',community:'TRY ON STAR'},
 {id:'french-75-lavender',name:'French 75 + Lavender',emoji:'🥂',style:'Sparkling',venue:'Ask the bartender',routeId:'',sweet:'Crisp & floral',why:'A cruiser-recommended customization: ask whether they can add lavender syrup to a French 75.',community:'BARTENDER REQUEST'},
 {id:'blueberry-nojito',name:'Blueberry Nojito',emoji:'🫐',style:'No Alcohol',venue:'Ask the bartender',routeId:'',sweet:'Berry & mint',why:'A repeatedly mentioned alcohol-free Royal Caribbean recommendation.',community:'ZERO-PROOF PICK'},
 {id:'bartenders-choice',name:"Bartender's Choice",emoji:'🎲',style:'Surprise',venue:'Schooner Bar',routeId:'schooner',sweet:'You decide the direction',why:'Royal Caribbean itself suggests telling the Schooner bartender your favorite spirit and asking for a surprise.',community:'ROYAL CARIBBEAN PRO TIP',verifiedVenue:true}
];
let drinkFilter=localStorage.getItem(DRINK_FILTER_KEY)||'All';
let activeDrinkProfile=localStorage.getItem(DRINK_PROFILE_KEY)||'daniel';
if(!DRINK_PROFILES[activeDrinkProfile])activeDrinkProfile='daniel';
let drinkProfiles={daniel:{},wife:{}};
try{
  const saved=JSON.parse(localStorage.getItem(DRINK_STATE_KEY)||'null');
  if(saved&&saved.daniel&&saved.wife) drinkProfiles=saved;
  else {
    const old=JSON.parse(localStorage.getItem(DRINK_STATE_OLD_KEY)||'{}')||{};
    drinkProfiles={daniel:old,wife:{}};
    localStorage.setItem(DRINK_STATE_KEY,JSON.stringify(drinkProfiles));
  }
}catch(_){drinkProfiles={daniel:{},wife:{}}}
function setDrinkProfile(profile){if(!DRINK_PROFILES[profile])return;activeDrinkProfile=profile;localStorage.setItem(DRINK_PROFILE_KEY,profile);renderDrinks();renderDrinkHome()}
function personDrinkStatus(profile,id){return (drinkProfiles[profile]&&drinkProfiles[profile][id])||{favorite:false,tried:false,dislike:false}}
function drinkStatus(id){return activeDrinkProfile==='both'?combinedDrinkStatus(id):personDrinkStatus(activeDrinkProfile,id)}
function combinedDrinkStatus(id){const d=personDrinkStatus('daniel',id),w=personDrinkStatus('wife',id);return {favorite:d.favorite&&w.favorite,tried:d.tried&&w.tried,dislike:d.dislike||w.dislike,daniel:d,wife:w}}
function saveDrinkState(){try{localStorage.setItem(DRINK_STATE_KEY,JSON.stringify(drinkProfiles))}catch(_){}}
function profileStats(profile){const vals=Object.values(drinkProfiles[profile]||{});return {tried:vals.filter(x=>x.tried).length,favorites:vals.filter(x=>x.favorite).length,dislikes:vals.filter(x=>x.dislike).length}}
function drinkStats(){if(activeDrinkProfile!=='both')return profileStats(activeDrinkProfile);const allowed=DRINKS.filter(d=>!combinedDrinkStatus(d.id).dislike);const mutualFav=DRINKS.filter(d=>{const s=combinedDrinkStatus(d.id);return s.favorite&&!s.dislike}).length;const bothTried=DRINKS.filter(d=>combinedDrinkStatus(d.id).tried).length;return {tried:bothTried,favorites:mutualFav,dislikes:DRINKS.length-allowed.length}}
function profileSelector(){return `<div class="drink-profile-wrap"><div class="drink-profile-label">WHO'S DRINKING?</div><div class="drink-profile-row">${Object.entries(DRINK_PROFILES).map(([id,name])=>`<button class="${activeDrinkProfile===id?'active':''}" data-drink-profile="${id}">${id==='both'?'👥':id==='daniel'?'👤':'👩'} ${esc(name)}</button>`).join('')}</div><small>${activeDrinkProfile==='both'?'Both mode hides anything either person marked Not for Me and looks for shared options. Ratings stay separate.':`Favorites, Tried and Not for Me are saved only to ${esc(DRINK_PROFILES[activeDrinkProfile])}.`}</small></div>`}
function individualActions(d,s){return `${d.routeId?`<button class="drink-route" data-drink-route="${esc(d.routeId)}">🧭 Take Me There</button>`:''}<button class="${s.favorite?'on':''}" data-drink-state="favorite" data-drink-id="${d.id}">${s.favorite?'♥ Favorite':'♡ Favorite'}</button><button class="${s.tried?'on':''}" data-drink-state="tried" data-drink-id="${d.id}">${s.tried?'✓ Tried':'○ Tried it'}</button><button class="${s.dislike?'nope':''}" data-drink-state="dislike" data-drink-id="${d.id}">👎</button>`}
function bothActions(d,s){const dS=s.daniel,wS=s.wife;return `${d.routeId?`<button class="drink-route" data-drink-route="${esc(d.routeId)}">🧭 Take Me There</button>`:''}<span class="drink-person-state">Daniel ${dS.favorite?'♥':dS.dislike?'👎':dS.tried?'✓':'○'}</span><span class="drink-person-state">Wife ${wS.favorite?'♥':wS.dislike?'👎':wS.tried?'✓':'○'}</span>`}
function drinkCard(d){const s=drinkStatus(d.id);return `<article class="drink-card ${s.dislike?'drink-muted':''}"><div class="drink-card-top"><span class="drink-emoji">${d.emoji}</span><div><div class="drink-badges"><span>${esc(d.community)}</span><span>${esc(d.style)}</span></div><h3>${esc(d.name)}</h3><p class="drink-taste">${esc(d.sweet)}</p></div></div><p class="drink-why">${esc(d.why)}</p><div class="drink-venue">📍 ${esc(d.venue)}${d.verifiedVenue?' · <b>venue match supported</b>':''}</div><div class="drink-actions">${activeDrinkProfile==='both'?bothActions(d,s):individualActions(d,s)}</div></article>`}
function filteredDrinks(){let a=DRINKS.filter(d=>!drinkStatus(d.id).dislike);if(drinkFilter==='Favorites')a=a.filter(d=>drinkStatus(d.id).favorite);else if(drinkFilter!=='All')a=a.filter(d=>d.style===drinkFilter);return a}
function renderDrinkHome(){const h=el('drinkHome');if(!h)return;const s=drinkStats(),who=DRINK_PROFILES[activeDrinkProfile];h.innerHTML=`<button class="drink-home-card" data-view="drinks"><span class="drink-home-icon">🍹</span><span><strong>I Need a Drink</strong><small>${esc(who)} · ${s.tried} tried · ${s.favorites} favorites · separate passports</small></span><span>›</span></button>`}
function renderDrinks(){const h=el('drinksContent');if(!h)return;const s=drinkStats(),filters=['All','Tropical','Frozen','Whiskey','Rum','Martini','Coffee','No Alcohol','Favorites'];const list=filteredDrinks();h.innerHTML=`${profileSelector()}<div class="drink-hero"><div><span>YOUR PACKAGE</span><strong>✓ Deluxe Beverage Package</strong><small>Drink availability and package coverage can vary. Confirm any price/package exception with the bartender.</small></div><button data-drink-surprise>🎲 SURPRISE ME</button></div><div class="drink-passport"><div><span>${activeDrinkProfile==='both'?'BOTH TRIED':'TRIED'}</span><strong>${s.tried}</strong></div><div><span>${activeDrinkProfile==='both'?'MUTUAL FAVORITES':'FAVORITES'}</span><strong>${s.favorites}</strong></div><div><span>${activeDrinkProfile==='both'?'BLOCKED BY EITHER':'SKIPPED'}</span><strong>${s.dislikes}</strong></div></div><div class="drink-filter-row">${filters.map(f=>`<button class="${drinkFilter===f?'active':''}" data-drink-filter="${esc(f)}">${esc(f)}</button>`).join('')}</div><div class="drink-source-note"><b>How recommendations work:</b> these are recurring favorites found in Royal Caribbean cruiser discussions, plus Royal Caribbean’s own Schooner Bar guidance. They are recommendations, not a guarantee that every bartender or venue will have every drink.</div><div class="drink-list">${list.length?list.map(drinkCard).join(''):'<div class="schedule-empty"><h3>No drinks in this filter yet.</h3><p>Try another category or switch profiles.</p></div>'}</div>`}
function surpriseDrink(){let pool=DRINKS.filter(d=>!drinkStatus(d.id).dislike);if(activeDrinkProfile==='both'){const mutualFav=pool.filter(d=>combinedDrinkStatus(d.id).favorite);const neitherTried=pool.filter(d=>{const s=combinedDrinkStatus(d.id);return !s.daniel.tried&&!s.wife.tried});if(mutualFav.length)pool=mutualFav;else if(neitherTried.length)pool=neitherTried;}else{const untried=pool.filter(d=>!drinkStatus(d.id).tried);if(untried.length)pool=untried;}if(!pool.length)return;const d=pool[Math.floor(Math.random()*pool.length)];const h=el('drinksContent');renderDrinks();const top=document.createElement('div');top.className='drink-surprise';top.innerHTML=`<span>🎲 ${activeDrinkProfile==='both'?'PICK FOR BOTH':esc(DRINK_PROFILES[activeDrinkProfile]).toUpperCase()+' PICK'}</span><strong>${d.emoji} ${esc(d.name)}</strong><small>${esc(d.why)}</small>`;h.prepend(top);window.scrollTo({top:0,behavior:'smooth'})}

const BUILD_VERSION = '0.18.0';
const BUILD_URL = './version.json';
const MUSTDO_KEY = 'star-nav-mustdo-v095';
const LOCATION_KEY = 'star-nav-location-v095';

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
  if(h) h.innerHTML = `Cruise Navigator <span>v${BUILD_VERSION}</span>`;
}
async function hardRefreshToLatest(){
  const btn=document.getElementById('updateNowBtn');
  if(btn){ btn.disabled=true; btn.textContent='UPDATING...'; }
  // Use a dedicated migration page so updates work even when an older
  // service worker is still controlling this page.
  const url=new URL('./migrate.html', location.href);
  url.searchParams.set('target', BUILD_VERSION);
  url.searchParams.set('t', String(Date.now()));
  window.location.replace(url.href);
}
function ensureUpdateBanner(){
  if(document.getElementById('updateBanner')) return;
  const b=document.createElement('div');
  b.id='updateBanner'; b.className='update-banner'; b.hidden=true; b.style.display='none'; b.style.display='none';
  b.innerHTML='<div><strong>🔄 Cruise Navigator update ready</strong><span id="updateBannerText">A newer version is available.</span></div><button id="updateNowBtn" type="button">UPDATE</button>';
  document.body.prepend(b);
  document.getElementById('updateNowBtn').onclick=hardRefreshToLatest;
}
function normalizeVersion(v){
  const m=String(v||'').trim().replace(/^v/i,'').match(/^(\d+)(?:\.(\d+))?(?:\.(\d+))?(?:[-+].*)?$/);
  return m ? [Number(m[1]||0),Number(m[2]||0),Number(m[3]||0)] : null;
}
function compareVersions(a,b){
  const A=normalizeVersion(a), B=normalizeVersion(b);
  if(!A || !B) return null;
  for(let i=0;i<3;i++){ if(A[i]!==B[i]) return A[i]>B[i] ? 1 : -1; }
  return 0;
}
function hideUpdateBanner(){
  const b=document.getElementById('updateBanner');
  if(b) b.hidden=true; b.style.display='none';
}
function showUpdateBanner(latest){
  const cmp=compareVersions(latest, BUILD_VERSION);
  if(cmp===null || cmp<=0){ hideUpdateBanner(); return; }
  ensureUpdateBanner();
  const b=document.getElementById('updateBanner');
  document.getElementById('updateBannerText').textContent=`Version ${latest} is ready. Tap UPDATE to reload.`;
  b.hidden=false; b.style.display='flex';
}
async function checkForUpdate(){
  try{
    const r=await fetch(BUILD_URL+'?client='+encodeURIComponent(BUILD_VERSION)+'&t='+Date.now(), {cache:'no-store', headers:{'Cache-Control':'no-cache'}});
    if(!r.ok) return;
    const data=await r.json();
    if(data.version){ showUpdateBanner(data.version); }
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
const COCO_STATE_KEY='cruise-nav-coco-state-v2';
const cocoState={hideaway:true,thrill:false,cocobeach:false,beverage:true,current:'arrivals'};
try{const saved=JSON.parse(localStorage.getItem(COCO_STATE_KEY)||'{}');Object.assign(cocoState,saved,{hideaway:CRUISE_PROFILE.purchases.hideaway,beverage:CRUISE_PROFILE.purchases.beverage});}catch(_){}
function saveCocoState(){try{localStorage.setItem(COCO_STATE_KEY,JSON.stringify({thrill:cocoState.thrill,cocobeach:cocoState.cocobeach}))}catch(_){}}
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
 el('cococayContent').innerHTML=`<div class="island-hero"><div class="eyebrow">ISLAND MODE</div><h2>Perfect Day at CocoCay</h2><p>Explore the island, see what your cruise fare or purchased access includes, and use a simplified theme-park-style map to get oriented.</p></div><div class="access-card"><span class="access-badge">✓ ROYAL CARIBBEAN CONFIRMED</span><h3>Hideaway Beach + Deluxe Beverage Package</h3><p>Your June 15 Royal Caribbean order confirms both for the two guests on this sailing. Hideaway access and included dining are unlocked, and eligible drinks are personalized as covered by your Deluxe Beverage Package.</p></div><div class="island-actions"><button class="island-action" data-coco-action="pass"><strong>✨ Make the Most of My Pass</strong><small>A suggested Hideaway Beach day</small></button><button class="island-action" data-coco-action="purchases"><strong>🎟️ My Purchases</strong><small>Tell Navigator what you already bought</small></button></div><div class="island-map-card"><h3>General island map</h3>${cocoMapSVG()}<div class="island-legend"><span><i class="cost-dot free"></i>Included</span><span><i class="cost-dot unlocked"></i>Your access</span><span><i class="cost-dot paid"></i>Extra</span></div></div><div class="island-section"><div class="island-section-head"><h3>💜 Your Hideaway Beach access</h3><small>Tap for details + map</small></div><div class="island-list">${hide.map(cocoPlaceCard).join('')}</div></div><div class="island-section"><div class="island-section-head"><h3>✓ Included around CocoCay</h3><small>No separate island admission</small></div><div class="island-list">${free.map(cocoPlaceCard).join('')}</div></div><div class="island-section"><div class="island-section-head"><h3>$ Extra / separate access</h3><small>Unless purchased</small></div><div class="island-list">${extra.map(cocoPlaceCard).join('')}</div></div><div class="explore-source-v07">CocoCay information is based on Royal Caribbean’s current official wayfinding map and Hideaway Beach information. Hours, availability and charges can change; verify sailing-specific details in the Royal Caribbean app.</div>`;
}
function openCocoPlace(id){
 const p=cocoPlaces.find(x=>x.id===id);if(!p)return; const [cls,label]=cocoStatus(p);
 el('overlayTitle').textContent=p.name;
 el('overlayMap').innerHTML=`<div class="venue-detail-v07"><div class="venue-detail-title"><div class="venue-detail-icon">${p.icon}</div><div><div class="eyebrow">COCOCAY · ${esc(p.zone.toUpperCase())}</div><h2>${esc(p.name)}</h2><div class="venue-detail-area">${esc(p.type)}</div></div></div><div class="detail-chips"><span class="island-detail-cost ${cls}">${label}</span><span>📍 ${esc(p.zone)}</span></div><div class="island-map-card">${cocoMapSVG(p.zone==='Hideaway Beach'?'hideaway':p.id)}</div><div class="detail-block"><h3>What is it?</h3><p>${esc(p.desc)}</p></div>${p.food?`<div class="detail-block"><h3>Food / cost notes</h3><p>${esc(p.food)}</p></div>`:''}<div class="detail-block"><h3>Best for</h3><p>${esc(p.best)}</p></div><div class="venue-actions-v07"><button class="primary-venue-btn" data-coco-route="${p.id}">🧭 Show Me the Route</button><button class="secondary-venue-btn" data-coco-back>🏝️ Island Home</button></div></div>`;
 el('mapOverlay').classList.add('show');el('mapOverlay').setAttribute('aria-hidden','false');
}
function openCocoRoute(id){const p=cocoPlaces.find(x=>x.id===id);if(!p)return;el('overlayTitle').textContent=`Route to ${p.name}`;el('overlayMap').innerHTML=`<div class="deck-explorer-v07"><div class="deck-explorer-head"><div><div class="eyebrow">ISLAND NAVIGATION</div><h2>Arrivals → ${esc(p.name)}</h2><p>Use this as an orientation aid; follow posted CocoCay signs and tram information on the island.</p></div></div><div class="island-map-card">${cocoMapSVG(p.zone==='Hideaway Beach'?'hideaway':p.id)}</div><div class="pass-itinerary"><div class="pass-step"><div><strong>Start at Arrivals Plaza</strong><small>After leaving the ship, orient yourself using the main island signage.</small></div></div><div class="pass-step"><div><strong>${p.id==='hideaway'||p.zone==='Hideaway Beach'?'Head toward Hideaway Beach':'Follow signs toward '+esc(p.name)}</strong><small>${p.id==='hideaway'||p.zone==='Hideaway Beach'?'Royal Caribbean’s official map lists Hideaway Beach about a 5-minute walk from Arrivals and also shows tram service.':'Use the highlighted general direction and island signs.'}</small></div></div><div class="pass-step"><div><strong>Confirm at the neighborhood entrance</strong><small>${p.zone==='Hideaway Beach'?'Scan/tap your SeaPass at Hideaway Beach access. Your pass allows re-entry.':'Look for the venue or neighborhood sign before continuing.'}</small></div></div></div></div>`;}
function openCocoPurchases(){el('overlayTitle').textContent='My Purchases';const rows=[['hideaway','Hideaway Beach Day Pass','Confirmed for both guests · Day 2','confirmed'],['beverage','Deluxe Beverage Package','Confirmed for both guests','confirmed'],['thrill','Thrill Waterpark','Separate admission','optional'],['cocobeach','Coco Beach Club','Separate admission','optional']];el('overlayMap').innerHTML=`<div><p class="deck-overview-note">Confirmed purchases come from your Royal Caribbean order. Optional items can still be tracked locally if you add them later.</p>${rows.map(([k,n,d,status])=>`<div class="purchase-row"><span><strong>${n}</strong><small>${d}</small></span>${status==='confirmed'?`<span class="purchase-confirmed">✓ CONFIRMED</span>`:`<button class="purchase-toggle ${cocoState[k]?'on':''}" data-purchase="${k}">${cocoState[k]?'✓ SAVED':'NOT ADDED'}</button>`}</div>`).join('')}</div>`;el('mapOverlay').classList.add('show');el('mapOverlay').setAttribute('aria-hidden','false');}
function openPassPlan(){el('overlayTitle').textContent='Make the Most of My Pass';el('overlayMap').innerHTML=`<div class="access-card"><span class="access-badge">HIDEAWAY BEACH</span><h3>A flexible day, not a schedule</h3><p>Use this as a suggested flow and change it however you like.</p></div><div class="pass-itinerary"><div class="pass-step"><div><strong>Enter + get oriented</strong><small>Scan your SeaPass, find lockers/towel exchange if needed, then choose your chairs or beach base.</small></div></div><div class="pass-step"><div><strong>Hideaway Pool + swim-up bar</strong><small>See the infinity pool and DJ area early. Drinks are separate unless covered by your beverage package.</small></div></div><div class="pass-step"><div><strong>Lunch at Hideaway Hut</strong><small>Included with your pass. Coconut shrimp, burgers, chicken sandwiches, salads and more.</small></div></div><div class="pass-step"><div><strong>Beach + in-water hammocks</strong><small>Use the included loungers, umbrellas and in-water relaxation areas.</small></div></div><div class="pass-step"><div><strong>On the Rocks</strong><small>Stop for the sweeping view and live-music atmosphere. Beverage charges depend on your package.</small></div></div><div class="pass-step"><div><strong>Slice of Paradise</strong><small>Grab an included pizza before you leave or whenever you want another bite.</small></div></div></div><div class="island-map-card">${cocoMapSVG('hideaway')}</div>`;el('mapOverlay').classList.add('show');el('mapOverlay').setAttribute('aria-hidden','false');}
renderCocoCay();
renderCruiseProfile();
renderSchedule();
renderSchedulePreview();
renderHappeningHome();
renderHappening();
renderDrinkHome();
renderDrinks();
el('cocoCayHome').onclick=()=>navigate('cococay');
document.addEventListener('click',e=>{const p=e.target.closest('[data-coco-place]');if(p){openCocoPlace(p.dataset.cocoPlace);return}const r=e.target.closest('[data-coco-route]');if(r){openCocoRoute(r.dataset.cocoRoute);return}const a=e.target.closest('[data-coco-action]');if(a){a.dataset.cocoAction==='pass'?openPassPlan():openCocoPurchases();return}const t=e.target.closest('[data-purchase]');if(t){const k=t.dataset.purchase;if(k==='hideaway'||k==='beverage')return;cocoState[k]=!cocoState[k];saveCocoState();openCocoPurchases();renderCocoCay();return}if(e.target.closest('[data-coco-back]')){closeMap();navigate('cococay');}});
