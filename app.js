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
function routeStep(kind,text,accuracy='orientation',deck=null,extra=null){return Object.assign({kind,text,accuracy,deck},extra||{})}
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

function renderCurrentLocationHome(){
  const host=el('currentLocationHome');
  if(!host)return;
  const from=locationById(currentLocationId);
  if(!from)return;
  const isHome=from.id==='cabin7456';
  host.innerHTML=`<div class="current-location-card"><div class="current-location-icon">${isHome?'⌂':'📍'}</div><div class="current-location-main"><div class="current-location-kicker">CURRENT LOCATION</div><strong>${esc(from.name)}</strong><small>Deck ${esc(from.mapDeck)} · ${esc(from.area)}${isHome?' · Your Home':''}</small></div><button type="button" class="current-location-change" id="changeCurrentLocationHome">Change</button></div>`;
  const b=el('changeCurrentLocationHome');
  if(b)b.onclick=()=>{
    window.__LOCATION_CLICK_DIAG__={tapReceived:true,tapCount:(window.__LOCATION_CLICK_DIAG__?.tapCount||0)+1};
    b.textContent='Opening...';
    b.setAttribute('aria-busy','true');
    try{
      openLocationPicker('from');
    }catch(err){
      b.textContent='Change';
      b.removeAttribute('aria-busy');
      window.__LOCATION_CLICK_DIAG__.error=String(err&&err.message||err);
      console.error('Current location picker error:',err);
    }
  };
}
function navigate(view){currentView=view;document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));el(view+'View').classList.add('active');document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active',t.dataset.view===view));if(view==='network')renderNetworkEditorV019();window.scrollTo({top:0,behavior:'smooth'})}

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
function openMapFor(id){
  const d=destinations.find(x=>x.id===id);
  if(!d)return;
  const deck=String(d.mapDeck||d.deck||'7');
  const node=d.mapNode||null;
  el('overlayTitle').textContent=`${d.name} · Map`;
  el('overlayMap').innerHTML=`<div class="deck-explorer-v07"><div class="deck-explorer-head"><div><div class="eyebrow">SHIP MAP</div><h2>${esc(d.name)}</h2><p>General location for Deck ${esc(deck)}. Use ship signage for exact onboard turns.</p></div></div><div class="deck-overview-map">${shipMapSVG(deck,node,'explore')}</div></div>`;
  el('mapOverlay').classList.add('show');
  el('mapOverlay').setAttribute('aria-hidden','false');
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

// v0.26 production routing graph, sourced from the user's verified ship-wide export.
const VERIFIED_SHIPNET_V026={"version":2,"nodes":[{"id":"n_cabin7456","x":214,"y":397,"type":"cabin","label":"Cabin 7456","deck":"7","panel":"main"},{"id":"n_cross_port","x":119,"y":408,"type":"junction","label":"Cross corridor","deck":"7","panel":"main"},{"id":"n_port_corridor","x":119,"y":691,"type":"junction","label":"Port corridor","deck":"7","panel":"main"},{"id":"n_forward_lobby","x":229,"y":697,"type":"elevator","label":"Forward elevators","deck":"7","panel":"main","verticalGroup":"forward"},{"id":"n_mtg86pyq_6gz7","deck":"5","panel":"forward","x":223,"y":698,"type":"elevator","label":"Forward elevators","verticalGroup":"forward"},{"id":"n_mtg86r73_bg7n","deck":"5","panel":"forward","x":108,"y":695,"type":"corridor","label":""},{"id":"n_mtg86uh6_ssvg","deck":"5","panel":"forward","x":345,"y":692,"type":"corridor","label":""},{"id":"n_mtg86vyd_ld0d","deck":"5","panel":"forward","x":223,"y":581,"type":"corridor","label":""},{"id":"n_mtg8709p_j1yu","deck":"5","panel":"forward","x":223,"y":773,"type":"corridor","label":""},{"id":"n_mtg871cw_97hb","deck":"5","panel":"forward","x":271,"y":829,"type":"corridor","label":""},{"id":"n_mtg873kl_ftjh","deck":"5","panel":"forward","x":262,"y":966,"type":"corridor","label":""},{"id":"n_mtg874at_atel","deck":"5","panel":"forward","x":263,"y":1051,"type":"corridor","label":""},{"id":"n_mtg876dy_t8xk","deck":"5","panel":"forward","x":296,"y":1133,"type":"corridor","label":""},{"id":"n_mtg87lcj_7qjh","deck":"5","panel":"forward","x":206,"y":946,"type":"corridor","label":""},{"id":"n_mtg87s16_dd0y","deck":"5","panel":"forward","x":186,"y":1072,"type":"corridor","label":""},{"id":"n_mtg8djsn_pk5l","deck":"6","panel":"forward","x":235,"y":666,"type":"elevator","label":"Forward elevators","verticalGroup":"forward"},{"id":"n_mtg8dkil_fk8o","deck":"6","panel":"forward","x":115,"y":666,"type":"corridor","label":""},{"id":"n_mtg8dola_z4lt","deck":"6","panel":"forward","x":350,"y":664,"type":"corridor","label":""},{"id":"n_mtg8dx01_apwb","deck":"6","panel":"forward","x":244,"y":759,"type":"stairs","label":"Stairs to Royal Promenade"},{"id":"n_mtg8dyhq_qz14","deck":"6","panel":"forward","x":287,"y":785,"type":"corridor","label":""},{"id":"n_mtg8dzb8_nj7u","deck":"6","panel":"forward","x":291,"y":887,"type":"corridor","label":""},{"id":"n_mtg8e2dz_62c6","deck":"6","panel":"forward","x":284,"y":966,"type":"corridor","label":""},{"id":"n_mtg8e3w3_vvce","deck":"6","panel":"forward","x":254,"y":1062,"type":"corridor","label":""},{"id":"n_mtg8e4fu_ylwd","deck":"6","panel":"forward","x":253,"y":1143,"type":"corridor","label":""},{"id":"n_mtg8edcg_nyxm","deck":"6","panel":"forward","x":195,"y":802,"type":"corridor","label":""},{"id":"n_mtg8efa0_xawl","deck":"6","panel":"forward","x":188,"y":926,"type":"stairs","label":"Stairs to Central Park"},{"id":"n_mtg8ijzy_ckbn","deck":"8","panel":"forward","x":232,"y":635,"type":"elevator","label":"Forward elevators","verticalGroup":"forward"},{"id":"n_mtg8iklk_ty8n","deck":"8","panel":"forward","x":231,"y":594,"type":"corridor","label":""},{"id":"n_mtg8in7i_34b0","deck":"8","panel":"forward","x":114,"y":640,"type":"corridor","label":""},{"id":"n_mtg8ioz9_5xie","deck":"8","panel":"forward","x":357,"y":638,"type":"corridor","label":""},{"id":"n_mtg8iroj_lvj4","deck":"8","panel":"forward","x":234,"y":734,"type":"corridor","label":""},{"id":"n_mtg8iscl_7cp6","deck":"8","panel":"forward","x":248,"y":793,"type":"corridor","label":""},{"id":"n_mtg8isxm_1ct0","deck":"8","panel":"forward","x":253,"y":837,"type":"corridor","label":""},{"id":"n_mtg8itth_it1x","deck":"8","panel":"forward","x":219,"y":895,"type":"corridor","label":""},{"id":"n_mtg8iv4r_12js","deck":"8","panel":"forward","x":219,"y":960,"type":"stairs","label":"Stairs to Royal Promenade"},{"id":"n_mtg8ixac_cazu","deck":"8","panel":"forward","x":261,"y":1051,"type":"corridor","label":""},{"id":"n_mtg8iy6u_lids","deck":"8","panel":"forward","x":235,"y":1135,"type":"corridor","label":""},{"id":"n_mtg8iyy4_3rh6","deck":"8","panel":"forward","x":223,"y":1179,"type":"corridor","label":""},{"id":"n_mtg8k04f_1sy6","deck":"15","panel":"forward","x":183,"y":499,"type":"elevator","label":"Forward elevators","verticalGroup":"forward"},{"id":"n_mtg8k3r9_yae0","deck":"15","panel":"forward","x":77,"y":499,"type":"corridor","label":""},{"id":"n_mtg8k55h_t5wr","deck":"15","panel":"forward","x":63,"y":463,"type":"corridor","label":""},{"id":"n_mtg8k8ky_mmy1","deck":"15","panel":"forward","x":88,"y":558,"type":"corridor","label":""},{"id":"n_mtg8k93j_pkxz","deck":"15","panel":"forward","x":72,"y":615,"type":"corridor","label":""},{"id":"n_mtg8ka6x_fwf3","deck":"15","panel":"forward","x":64,"y":662,"type":"corridor","label":""},{"id":"n_mtg8kbll_50c2","deck":"15","panel":"forward","x":58,"y":704,"type":"corridor","label":""},{"id":"n_mtg8kcec_nj2p","deck":"15","panel":"forward","x":68,"y":747,"type":"corridor","label":""},{"id":"n_mtg8kd0i_uvam","deck":"15","panel":"forward","x":74,"y":799,"type":"corridor","label":""},{"id":"n_mtg8kh05_bi76","deck":"15","panel":"forward","x":93,"y":829,"type":"corridor","label":""},{"id":"n_mtg8kifs_w59m","deck":"15","panel":"forward","x":116,"y":883,"type":"corridor","label":""},{"id":"n_mtg8kizc_fp9w","deck":"15","panel":"forward","x":120,"y":971,"type":"corridor","label":""},{"id":"n_mtg8kjwk_d1zg","deck":"15","panel":"forward","x":95,"y":1006,"type":"corridor","label":""},{"id":"n_mtg8klrl_505e","deck":"15","panel":"forward","x":76,"y":1035,"type":"corridor","label":""},{"id":"n_mtg8knqa_muxd","deck":"15","panel":"forward","x":87,"y":1076,"type":"corridor","label":""},{"id":"n_mtg8kt6f_joj3","deck":"15","panel":"forward","x":99,"y":1119,"type":"corridor","label":""},{"id":"n_mtg8kts4_e55k","deck":"15","panel":"forward","x":76,"y":1154,"type":"corridor","label":""},{"id":"n_mtg8l2ic_9kwd","deck":"15","panel":"forward","x":282,"y":497,"type":"corridor","label":""},{"id":"n_mtg8l6vn_tmsz","deck":"15","panel":"forward","x":190,"y":561,"type":"corridor","label":""},{"id":"n_mtg8l7x9_ld68","deck":"15","panel":"forward","x":257,"y":568,"type":"corridor","label":""},{"id":"n_mtg8l8g3_vamc","deck":"15","panel":"forward","x":293,"y":608,"type":"corridor","label":""},{"id":"n_mtg8l9t4_yjva","deck":"15","panel":"forward","x":301,"y":676,"type":"corridor","label":""},{"id":"n_mtg8le2z_pa9m","deck":"15","panel":"forward","x":217,"y":717,"type":"corridor","label":""},{"id":"n_mtg8lesr_vd7c","deck":"15","panel":"forward","x":188,"y":761,"type":"corridor","label":""},{"id":"n_mtg8lfmd_jpfx","deck":"15","panel":"forward","x":184,"y":804,"type":"corridor","label":""},{"id":"n_mtg8lock_kjrt","deck":"15","panel":"forward","x":315,"y":724,"type":"corridor","label":""},{"id":"n_mtg8lqqd_u48k","deck":"15","panel":"forward","x":323,"y":772,"type":"corridor","label":""},{"id":"n_mtg8ls49_tq1m","deck":"15","panel":"forward","x":316,"y":822,"type":"corridor","label":""},{"id":"n_mtg8lsnb_7aiq","deck":"15","panel":"forward","x":317,"y":854,"type":"corridor","label":""},{"id":"n_mtg8lu6c_xfvq","deck":"15","panel":"forward","x":351,"y":925,"type":"corridor","label":""},{"id":"n_mtg8lyju_ymvm","deck":"15","panel":"forward","x":367,"y":1010,"type":"corridor","label":""},{"id":"n_mtg8lzro_e1pt","deck":"15","panel":"forward","x":360,"y":1081,"type":"corridor","label":""},{"id":"n_mtg8m0x4_jp60","deck":"15","panel":"forward","x":328,"y":1145,"type":"corridor","label":""},{"id":"n_mtg8m4gy_l3ac","deck":"15","panel":"forward","x":316,"y":1170,"type":"corridor","label":""},{"id":"n_mtg8m4wn_gg19","deck":"15","panel":"forward","x":337,"y":1194,"type":"corridor","label":""},{"id":"n_mtg8m6s5_n8zh","deck":"15","panel":"forward","x":265,"y":1150,"type":"corridor","label":""},{"id":"n_mtg8m7c2_px7p","deck":"15","panel":"forward","x":227,"y":1157,"type":"corridor","label":""},{"id":"n_mtg8m84s_9hb2","deck":"15","panel":"forward","x":198,"y":1202,"type":"corridor","label":""},{"id":"n_mtg8miu5_sor5","deck":"15","panel":"forward","x":133,"y":1147,"type":"corridor","label":""},{"id":"n_mtg8mlf7_wv5p","deck":"15","panel":"forward","x":160,"y":1167,"type":"corridor","label":""},{"id":"n_mtg8n11u_kyza","deck":"16","panel":"forward","x":222,"y":471,"type":"elevator","label":"Forward elevators","verticalGroup":"forward"},{"id":"n_mtg8n3fo_660f","deck":"16","panel":"forward","x":141,"y":471,"type":"stairs","label":"Stairs"},{"id":"n_mtg8n4y7_zxd8","deck":"16","panel":"forward","x":304,"y":471,"type":"stairs","label":"Stairs"},{"id":"n_mtg8n618_91m4","deck":"16","panel":"forward","x":219,"y":437,"type":"corridor","label":""},{"id":"n_mtg8ncwj_qqx1","deck":"16","panel":"forward","x":219,"y":535,"type":"corridor","label":""},{"id":"n_mtg8negw_fprt","deck":"16","panel":"forward","x":171,"y":560,"type":"corridor","label":""},{"id":"n_mtg8nggs_io5v","deck":"16","panel":"forward","x":122,"y":569,"type":"corridor","label":""},{"id":"n_mtg8nh35_95mp","deck":"16","panel":"forward","x":88,"y":597,"type":"corridor","label":""},{"id":"n_mtg8nhkp_j3gt","deck":"16","panel":"forward","x":81,"y":641,"type":"corridor","label":""},{"id":"n_mtg8ni5o_0de8","deck":"16","panel":"forward","x":97,"y":686,"type":"corridor","label":""},{"id":"n_mtg8niqo_seug","deck":"16","panel":"forward","x":99,"y":740,"type":"corridor","label":""},{"id":"n_mtg8njpq_iyft","deck":"16","panel":"forward","x":103,"y":776,"type":"corridor","label":""},{"id":"n_mtg8nk5u_oqqp","deck":"16","panel":"forward","x":127,"y":816,"type":"corridor","label":""},{"id":"n_mtg8nmsc_rg82","deck":"16","panel":"forward","x":148,"y":868,"type":"corridor","label":""},{"id":"n_mtg8nncl_mntk","deck":"16","panel":"forward","x":146,"y":901,"type":"corridor","label":""},{"id":"n_mtg8no66_esjg","deck":"16","panel":"forward","x":139,"y":941,"type":"corridor","label":""},{"id":"n_mtg8npde_nlhu","deck":"16","panel":"forward","x":115,"y":992,"type":"corridor","label":""},{"id":"n_mtg8npts_ejek","deck":"16","panel":"forward","x":115,"y":1031,"type":"corridor","label":""},{"id":"n_mtg8nr8q_cy02","deck":"16","panel":"forward","x":119,"y":1103,"type":"corridor","label":""},{"id":"n_mtg8ns9j_nxny","deck":"16","panel":"forward","x":120,"y":1130,"type":"corridor","label":""},{"id":"n_mtg8nvr5_rcr2","deck":"16","panel":"forward","x":157,"y":1122,"type":"corridor","label":""},{"id":"n_mtg8nw8z_lccw","deck":"16","panel":"forward","x":188,"y":1131,"type":"corridor","label":""},{"id":"n_mtg8nx9v_6rp3","deck":"16","panel":"forward","x":203,"y":1166,"type":"corridor","label":""},{"id":"n_mtg8odaz_0ix9","deck":"16","panel":"forward","x":193,"y":788,"type":"corridor","label":""},{"id":"n_mtg8oemx_79nh","deck":"16","panel":"forward","x":222,"y":767,"type":"corridor","label":""},{"id":"n_mtg8v6kk_uwf9","deck":"7","panel":"main","x":147,"y":693,"type":"stairs","label":"Stairs"},{"id":"n_mtg8wi0z_i4qf","deck":"5","panel":"forward","x":151,"y":696,"type":"stairs","label":""},{"id":"n_mtg8wtei_b5wq","deck":"5","panel":"forward","x":304,"y":694,"type":"stairs","label":""},{"id":"n_mtg8xd17_enr5","deck":"5","panel":"forward","x":251,"y":805,"type":"stairs","label":"Stairs to Deck 6"},{"id":"n_mtg8xs1h_mnhb","deck":"6","panel":"forward","x":161,"y":666,"type":"stairs","label":""},{"id":"n_mtg8xzsw_a5ni","deck":"6","panel":"forward","x":320,"y":665,"type":"stairs","label":""},{"id":"n_mtg8zapp_9pt7","deck":"8","panel":"forward","x":157,"y":638,"type":"stairs","label":""},{"id":"n_mtg8zhtg_vyxn","deck":"8","panel":"forward","x":320,"y":637,"type":"stairs","label":""},{"id":"n_mtg90jan_9hta","deck":"15","panel":"forward","x":129,"y":499,"type":"stairs","label":"Stairs"},{"id":"n_mtg9109c_pe92","deck":"15","panel":"forward","x":256,"y":498,"type":"stairs","label":"Stairs"},{"id":"n_mtga2knf_r04p","deck":"7","panel":"main","x":228,"y":745,"type":"corridor","label":""},{"id":"n_mtga2psk_ay2a","deck":"7","panel":"main","x":228,"y":871,"type":"corridor","label":""},{"id":"n_mtga2qap_skw5","deck":"7","panel":"main","x":228,"y":1051,"type":"corridor","label":""},{"id":"n_mtga2rdx_19qs","deck":"7","panel":"main","x":187,"y":1100,"type":"corridor","label":""},{"id":"n_mtga2v8e_z1nb","deck":"7","panel":"main","x":187,"y":1100,"type":"junction","label":""},{"id":"n_mtga2v8e_71o7","deck":"7","panel":"main","x":137,"y":1126,"type":"venue","label":"The Pearl"},{"id":"n_mtga42po_obpn","deck":"5","panel":"forward","x":223,"y":581,"type":"junction","label":""},{"id":"n_mtga42po_fxw6","deck":"5","panel":"forward","x":224,"y":516,"type":"venue","label":"Royal Theater"},{"id":"n_mtga4j9s_z2my","deck":"5","panel":"forward","x":269,"y":863,"type":"junction","label":""},{"id":"n_mtga4j9s_2zod","deck":"5","panel":"forward","x":309,"y":865,"type":"venue","label":"Spotlight Karaoke"},{"id":"n_mtga4pys_s9q9","deck":"5","panel":"forward","x":270,"y":1069,"type":"junction","label":""},{"id":"n_mtga4pys_ai7w","deck":"5","panel":"forward","x":309,"y":1054,"type":"venue","label":"Starbucks"},{"id":"n_mtga4xwe_s6u6","deck":"5","panel":"forward","x":296,"y":1133,"type":"junction","label":""},{"id":"n_mtga4xwe_q7lp","deck":"5","panel":"forward","x":322,"y":1135,"type":"venue","label":"1400 Lobby Bar"},{"id":"n_mtga5bwh_kph1","deck":"5","panel":"forward","x":210,"y":908,"type":"junction","label":""},{"id":"n_mtga5bwh_8sec","deck":"5","panel":"forward","x":138,"y":901,"type":"venue","label":"Sorrento's"},{"id":"n_mtga5not_5o86","deck":"6","panel":"forward","x":195,"y":808,"type":"junction","label":""},{"id":"n_mtga5not_hwyd","deck":"6","panel":"forward","x":143,"y":805,"type":"venue","label":"The Attic"},{"id":"n_mtga5utg_5r8t","deck":"6","panel":"forward","x":287,"y":796,"type":"junction","label":""},{"id":"n_mtga5utg_70hr","deck":"6","panel":"forward","x":340,"y":794,"type":"venue","label":"Dueling Pianos"},{"id":"n_mtga61tk_zher","deck":"6","panel":"forward","x":253,"y":1104,"type":"junction","label":""},{"id":"n_mtga61tk_yuor","deck":"6","panel":"forward","x":196,"y":1103,"type":"venue","label":"Pearl Cafe"},{"id":"n_mtga6l8b_yp6j","deck":"8","panel":"forward","x":234,"y":730,"type":"junction","label":""},{"id":"n_mtga6l8b_edxh","deck":"8","panel":"forward","x":170,"y":731,"type":"venue","label":"Izumi"},{"id":"n_mtga6su5_ylib","deck":"8","panel":"forward","x":248,"y":794,"type":"junction","label":""},{"id":"n_mtga6su5_lnoy","deck":"8","panel":"forward","x":283,"y":790,"type":"venue","label":"Chops Grille"},{"id":"n_mtga6y7w_y20n","deck":"8","panel":"forward","x":261,"y":1051,"type":"junction","label":""},{"id":"n_mtga6y7w_05dl","deck":"8","panel":"forward","x":307,"y":1042,"type":"venue","label":"Park Cafe"},{"id":"n_mtga78y5_muf0","deck":"8","panel":"forward","x":238,"y":862,"type":"junction","label":""},{"id":"n_mtga78y5_h50c","deck":"8","panel":"forward","x":271,"y":881,"type":"venue","label":"Trellis Bar"},{"id":"n_mtga7isl_0clv","deck":"15","panel":"forward","x":189,"y":341,"type":"corridor","label":""},{"id":"n_mtga7y2h_w9ei","deck":"15","panel":"forward","x":189,"y":341,"type":"junction","label":""},{"id":"n_mtga7y2h_vz2z","deck":"15","panel":"forward","x":190,"y":281,"type":"venue","label":"Aqua Theater"},{"id":"n_mtga89pk_dvpi","deck":"15","panel":"forward","x":63,"y":463,"type":"junction","label":""},{"id":"n_mtga89pk_8t3e","deck":"15","panel":"forward","x":63,"y":381,"type":"venue","label":"Hook Seafood"},{"id":"n_mtga8kg4_lksc","deck":"15","panel":"forward","x":63,"y":463,"type":"junction","label":""},{"id":"n_mtga8kg4_w1o5","deck":"15","panel":"forward","x":102,"y":435,"type":"venue","label":"Celebration Table"},{"id":"n_mtga8v1z_bxtz","deck":"15","panel":"forward","x":69,"y":754,"type":"junction","label":""},{"id":"n_mtga8v1z_05ao","deck":"15","panel":"forward","x":103,"y":750,"type":"venue","label":"The Lime and Cocunut"},{"id":"n_mtga90sj_kc6r","deck":"15","panel":"forward","x":87,"y":820,"type":"junction","label":""},{"id":"n_mtga90sj_vy5d","deck":"15","panel":"forward","x":130,"y":792,"type":"venue","label":"Sprinkles"},{"id":"n_mtga9ght_dm9q","deck":"15","panel":"forward","x":113,"y":1130,"type":"junction","label":""},{"id":"n_mtga9ght_mr9e","deck":"15","panel":"forward","x":123,"y":1118,"type":"venue","label":"Cantina Fresca"},{"id":"n_mtga9mqe_k2tg","deck":"15","panel":"forward","x":55,"y":1156,"type":"venue","label":"El Loco Fresh"},{"id":"n_mtga9ybn_cib5","deck":"16","panel":"forward","x":219,"y":437,"type":"junction","label":""},{"id":"n_mtga9ybn_da7w","deck":"16","panel":"forward","x":219,"y":390,"type":"venue","label":"Coastal Kitchen"},{"id":"n_mtgaa5w4_vtlk","deck":"16","panel":"forward","x":84,"y":624,"type":"junction","label":""},{"id":"n_mtgaa5w4_w06f","deck":"16","panel":"forward","x":133,"y":632,"type":"venue","label":"Swim and Tonic"},{"id":"n_mtgaal3h_ds7u","deck":"16","panel":"forward","x":186,"y":791,"type":"junction","label":""},{"id":"n_mtgaal3h_zodn","deck":"16","panel":"forward","x":171,"y":755,"type":"venue","label":"Lime and Coconut Frozen Bar"}],"edges":[{"a":"n_cabin7456","b":"n_cross_port"},{"a":"n_cross_port","b":"n_port_corridor"},{"a":"n_mtg86pyq_6gz7","b":"n_mtg8709p_j1yu","kind":"walk"},{"a":"n_mtg873kl_ftjh","b":"n_mtg874at_atel","kind":"walk"},{"a":"n_mtg87lcj_7qjh","b":"n_mtg87s16_dd0y","kind":"walk"},{"a":"n_mtg8djsn_pk5l","b":"n_mtg8dx01_apwb","kind":"walk"},{"a":"n_mtg8dx01_apwb","b":"n_mtg8dyhq_qz14","kind":"walk"},{"a":"n_mtg8dzb8_nj7u","b":"n_mtg8e2dz_62c6","kind":"walk"},{"a":"n_mtg8e2dz_62c6","b":"n_mtg8e3w3_vvce","kind":"walk"},{"a":"n_mtg8edcg_nyxm","b":"n_mtg8dx01_apwb","kind":"walk"},{"a":"n_mtg8ijzy_ckbn","b":"n_mtg8iklk_ty8n","kind":"walk"},{"a":"n_mtg8iroj_lvj4","b":"n_mtg8iscl_7cp6","kind":"walk"},{"a":"n_mtg8itth_it1x","b":"n_mtg8iv4r_12js","kind":"walk"},{"a":"n_mtg8ixac_cazu","b":"n_mtg8iy6u_lids","kind":"walk"},{"a":"n_mtg8iy6u_lids","b":"n_mtg8iyy4_3rh6","kind":"walk"},{"a":"n_mtg8k3r9_yae0","b":"n_mtg8k8ky_mmy1","kind":"walk"},{"a":"n_mtg8k8ky_mmy1","b":"n_mtg8k93j_pkxz","kind":"walk"},{"a":"n_mtg8k93j_pkxz","b":"n_mtg8ka6x_fwf3","kind":"walk"},{"a":"n_mtg8ka6x_fwf3","b":"n_mtg8kbll_50c2","kind":"walk"},{"a":"n_mtg8kbll_50c2","b":"n_mtg8kcec_nj2p","kind":"walk"},{"a":"n_mtg8kh05_bi76","b":"n_mtg8kifs_w59m","kind":"walk"},{"a":"n_mtg8kifs_w59m","b":"n_mtg8kizc_fp9w","kind":"walk"},{"a":"n_mtg8kizc_fp9w","b":"n_mtg8kjwk_d1zg","kind":"walk"},{"a":"n_mtg8kjwk_d1zg","b":"n_mtg8klrl_505e","kind":"walk"},{"a":"n_mtg8klrl_505e","b":"n_mtg8knqa_muxd","kind":"walk"},{"a":"n_mtg8knqa_muxd","b":"n_mtg8kt6f_joj3","kind":"walk"},{"a":"n_mtg8kt6f_joj3","b":"n_mtg8kts4_e55k","kind":"walk"},{"a":"n_mtg8k04f_1sy6","b":"n_mtg8l6vn_tmsz","kind":"walk"},{"a":"n_mtg8l6vn_tmsz","b":"n_mtg8l7x9_ld68","kind":"walk"},{"a":"n_mtg8l7x9_ld68","b":"n_mtg8l8g3_vamc","kind":"walk"},{"a":"n_mtg8l8g3_vamc","b":"n_mtg8l9t4_yjva","kind":"walk"},{"a":"n_mtg8l9t4_yjva","b":"n_mtg8le2z_pa9m","kind":"walk"},{"a":"n_mtg8le2z_pa9m","b":"n_mtg8lesr_vd7c","kind":"walk"},{"a":"n_mtg8lesr_vd7c","b":"n_mtg8lfmd_jpfx","kind":"walk"},{"a":"n_mtg8lock_kjrt","b":"n_mtg8l9t4_yjva","kind":"walk"},{"a":"n_mtg8lock_kjrt","b":"n_mtg8lqqd_u48k","kind":"walk"},{"a":"n_mtg8lqqd_u48k","b":"n_mtg8ls49_tq1m","kind":"walk"},{"a":"n_mtg8ls49_tq1m","b":"n_mtg8lsnb_7aiq","kind":"walk"},{"a":"n_mtg8lsnb_7aiq","b":"n_mtg8lu6c_xfvq","kind":"walk"},{"a":"n_mtg8lu6c_xfvq","b":"n_mtg8lyju_ymvm","kind":"walk"},{"a":"n_mtg8lyju_ymvm","b":"n_mtg8lzro_e1pt","kind":"walk"},{"a":"n_mtg8lzro_e1pt","b":"n_mtg8m0x4_jp60","kind":"walk"},{"a":"n_mtg8m0x4_jp60","b":"n_mtg8m4gy_l3ac","kind":"walk"},{"a":"n_mtg8m4gy_l3ac","b":"n_mtg8m4wn_gg19","kind":"walk"},{"a":"n_mtg8m4gy_l3ac","b":"n_mtg8m6s5_n8zh","kind":"walk"},{"a":"n_mtg8m6s5_n8zh","b":"n_mtg8m7c2_px7p","kind":"walk"},{"a":"n_mtg8m7c2_px7p","b":"n_mtg8m84s_9hb2","kind":"walk"},{"a":"n_mtg8miu5_sor5","b":"n_mtg8mlf7_wv5p","kind":"walk"},{"a":"n_mtg8mlf7_wv5p","b":"n_mtg8m84s_9hb2","kind":"walk"},{"a":"n_mtg8n11u_kyza","b":"n_mtg8n3fo_660f","kind":"walk"},{"a":"n_mtg8n11u_kyza","b":"n_mtg8n4y7_zxd8","kind":"walk"},{"a":"n_mtg8n11u_kyza","b":"n_mtg8ncwj_qqx1","kind":"walk"},{"a":"n_mtg8ncwj_qqx1","b":"n_mtg8negw_fprt","kind":"walk"},{"a":"n_mtg8negw_fprt","b":"n_mtg8nggs_io5v","kind":"walk"},{"a":"n_mtg8nggs_io5v","b":"n_mtg8nh35_95mp","kind":"walk"},{"a":"n_mtg8nhkp_j3gt","b":"n_mtg8ni5o_0de8","kind":"walk"},{"a":"n_mtg8ni5o_0de8","b":"n_mtg8niqo_seug","kind":"walk"},{"a":"n_mtg8niqo_seug","b":"n_mtg8njpq_iyft","kind":"walk"},{"a":"n_mtg8njpq_iyft","b":"n_mtg8nk5u_oqqp","kind":"walk"},{"a":"n_mtg8nk5u_oqqp","b":"n_mtg8nmsc_rg82","kind":"walk"},{"a":"n_mtg8nmsc_rg82","b":"n_mtg8nncl_mntk","kind":"walk"},{"a":"n_mtg8nncl_mntk","b":"n_mtg8no66_esjg","kind":"walk"},{"a":"n_mtg8no66_esjg","b":"n_mtg8npde_nlhu","kind":"walk"},{"a":"n_mtg8npde_nlhu","b":"n_mtg8npts_ejek","kind":"walk"},{"a":"n_mtg8npts_ejek","b":"n_mtg8nr8q_cy02","kind":"walk"},{"a":"n_mtg8nr8q_cy02","b":"n_mtg8ns9j_nxny","kind":"walk"},{"a":"n_mtg8ns9j_nxny","b":"n_mtg8nvr5_rcr2","kind":"walk"},{"a":"n_mtg8nvr5_rcr2","b":"n_mtg8nw8z_lccw","kind":"walk"},{"a":"n_mtg8nw8z_lccw","b":"n_mtg8nx9v_6rp3","kind":"walk"},{"a":"n_mtg8odaz_0ix9","b":"n_mtg8oemx_79nh","kind":"walk"},{"a":"n_port_corridor","b":"n_mtg8v6kk_uwf9","kind":"walk"},{"a":"n_mtg8v6kk_uwf9","b":"n_forward_lobby","kind":"walk"},{"a":"n_mtg86pyq_6gz7","b":"n_mtg8wi0z_i4qf","kind":"walk"},{"a":"n_mtg8wi0z_i4qf","b":"n_mtg86r73_bg7n","kind":"walk"},{"a":"n_mtg86pyq_6gz7","b":"n_mtg8wtei_b5wq","kind":"walk"},{"a":"n_mtg8wtei_b5wq","b":"n_mtg86uh6_ssvg","kind":"walk"},{"a":"n_mtg8709p_j1yu","b":"n_mtg8xd17_enr5","kind":"walk"},{"a":"n_mtg8xd17_enr5","b":"n_mtg871cw_97hb","kind":"walk"},{"a":"n_mtg8djsn_pk5l","b":"n_mtg8xs1h_mnhb","kind":"walk"},{"a":"n_mtg8xs1h_mnhb","b":"n_mtg8dkil_fk8o","kind":"walk"},{"a":"n_mtg8djsn_pk5l","b":"n_mtg8xzsw_a5ni","kind":"walk"},{"a":"n_mtg8xzsw_a5ni","b":"n_mtg8dola_z4lt","kind":"walk"},{"a":"n_mtg8ijzy_ckbn","b":"n_mtg8zapp_9pt7","kind":"walk"},{"a":"n_mtg8zapp_9pt7","b":"n_mtg8in7i_34b0","kind":"walk"},{"a":"n_mtg8ijzy_ckbn","b":"n_mtg8zhtg_vyxn","kind":"walk"},{"a":"n_mtg8zhtg_vyxn","b":"n_mtg8ioz9_5xie","kind":"walk"},{"a":"n_mtg8k04f_1sy6","b":"n_mtg90jan_9hta","kind":"walk"},{"a":"n_mtg90jan_9hta","b":"n_mtg8k3r9_yae0","kind":"walk"},{"a":"n_mtg8l2ic_9kwd","b":"n_mtg9109c_pe92","kind":"walk"},{"a":"n_mtg9109c_pe92","b":"n_mtg8k04f_1sy6","kind":"walk"},{"a":"n_mtg8wi0z_i4qf","b":"n_mtg8xs1h_mnhb","kind":"stairs","label":"Forward port stairs, Deck 5 to Deck 6"},{"a":"n_mtg8xs1h_mnhb","b":"n_mtg8v6kk_uwf9","kind":"stairs","label":"Forward port stairs, Deck 6 to Deck 7"},{"a":"n_mtg8v6kk_uwf9","b":"n_mtg8zapp_9pt7","kind":"stairs","label":"Forward port stairs, Deck 7 to Deck 8"},{"a":"n_mtg90jan_9hta","b":"n_mtg8n3fo_660f","kind":"stairs","label":"Forward port stairs, Deck 15 to Deck 16"},{"a":"n_mtg8wtei_b5wq","b":"n_mtg8xzsw_a5ni","kind":"stairs","label":"Forward starboard stairs, Deck 5 to Deck 6"},{"a":"n_mtg9109c_pe92","b":"n_mtg8n4y7_zxd8","kind":"stairs","label":"Forward starboard stairs, Deck 15 to Deck 16"},{"a":"n_mtg8xd17_enr5","b":"n_mtg8dx01_apwb","kind":"stairs","label":"Royal Promenade stairs, Deck 5 to Deck 6"},{"a":"n_mtg8efa0_xawl","b":"n_mtg8iv4r_12js","kind":"stairs","label":"Royal Promenade to Central Park stairs, Deck 6 to Deck 8"},{"a":"n_mtg8v6kk_uwf9","b":"n_mtg8efa0_xawl","kind":"stairs","label":"Stairs, Deck 7 to Deck 6"},{"a":"n_forward_lobby","b":"n_mtga2knf_r04p","kind":"walk"},{"a":"n_mtga2knf_r04p","b":"n_mtga2psk_ay2a","kind":"walk"},{"a":"n_mtga2psk_ay2a","b":"n_mtga2qap_skw5","kind":"walk"},{"a":"n_mtga2qap_skw5","b":"n_mtga2v8e_z1nb","kind":"walk"},{"a":"n_mtga2v8e_z1nb","b":"n_mtga2rdx_19qs","kind":"walk"},{"a":"n_mtga2v8e_z1nb","b":"n_mtga2v8e_71o7","kind":"destination","label":"Entrance to The Pearl"},{"a":"n_mtg86pyq_6gz7","b":"n_mtga42po_obpn","kind":"walk"},{"a":"n_mtga42po_obpn","b":"n_mtg86vyd_ld0d","kind":"walk"},{"a":"n_mtga42po_obpn","b":"n_mtga42po_fxw6","kind":"destination","label":"Entrance to Royal Theater"},{"a":"n_mtg871cw_97hb","b":"n_mtga4j9s_z2my","kind":"walk"},{"a":"n_mtga4j9s_z2my","b":"n_mtg873kl_ftjh","kind":"walk"},{"a":"n_mtga4j9s_z2my","b":"n_mtga4j9s_2zod","kind":"destination","label":"Entrance to Spotlight Karaoke"},{"a":"n_mtg874at_atel","b":"n_mtga4pys_s9q9","kind":"walk"},{"a":"n_mtga4pys_s9q9","b":"n_mtga4pys_ai7w","kind":"destination","label":"Entrance to Starbucks"},{"a":"n_mtga4pys_s9q9","b":"n_mtga4xwe_s6u6","kind":"walk"},{"a":"n_mtga4xwe_s6u6","b":"n_mtg876dy_t8xk","kind":"walk"},{"a":"n_mtga4xwe_s6u6","b":"n_mtga4xwe_q7lp","kind":"destination","label":"Entrance to 1400 Lobby Bar"},{"a":"n_mtg87lcj_7qjh","b":"n_mtga5bwh_kph1","kind":"bridge"},{"a":"n_mtga5bwh_kph1","b":"n_mtg8709p_j1yu","kind":"bridge"},{"a":"n_mtga5bwh_kph1","b":"n_mtga5bwh_8sec","kind":"destination","label":"Entrance to Sorrento's"},{"a":"n_mtg8edcg_nyxm","b":"n_mtga5not_5o86","kind":"walk"},{"a":"n_mtga5not_5o86","b":"n_mtg8efa0_xawl","kind":"walk"},{"a":"n_mtga5not_5o86","b":"n_mtga5not_hwyd","kind":"destination","label":"Entrance to The Attic"},{"a":"n_mtg8dyhq_qz14","b":"n_mtga5utg_5r8t","kind":"walk"},{"a":"n_mtga5utg_5r8t","b":"n_mtg8dzb8_nj7u","kind":"walk"},{"a":"n_mtga5utg_5r8t","b":"n_mtga5utg_70hr","kind":"destination","label":"Entrance to Dueling Pianos"},{"a":"n_mtg8e3w3_vvce","b":"n_mtga61tk_zher","kind":"walk"},{"a":"n_mtga61tk_zher","b":"n_mtg8e4fu_ylwd","kind":"walk"},{"a":"n_mtga61tk_zher","b":"n_mtga61tk_yuor","kind":"destination","label":"Entrance to Pearl Cafe"},{"a":"n_mtg8ijzy_ckbn","b":"n_mtga6l8b_yp6j","kind":"walk"},{"a":"n_mtga6l8b_yp6j","b":"n_mtg8iroj_lvj4","kind":"walk"},{"a":"n_mtga6l8b_yp6j","b":"n_mtga6l8b_edxh","kind":"destination","label":"Entrance to Izumi"},{"a":"n_mtg8iscl_7cp6","b":"n_mtga6su5_ylib","kind":"walk"},{"a":"n_mtga6su5_ylib","b":"n_mtg8isxm_1ct0","kind":"walk"},{"a":"n_mtga6su5_ylib","b":"n_mtga6su5_lnoy","kind":"destination","label":"Entrance to Chops Grille"},{"a":"n_mtg8iv4r_12js","b":"n_mtga6y7w_y20n","kind":"walk"},{"a":"n_mtga6y7w_y20n","b":"n_mtg8ixac_cazu","kind":"walk"},{"a":"n_mtga6y7w_y20n","b":"n_mtga6y7w_05dl","kind":"destination","label":"Entrance to Park Cafe"},{"a":"n_mtg8isxm_1ct0","b":"n_mtga78y5_muf0","kind":"walk"},{"a":"n_mtga78y5_muf0","b":"n_mtg8itth_it1x","kind":"walk"},{"a":"n_mtga78y5_muf0","b":"n_mtga78y5_h50c","kind":"destination","label":"Entrance to Trellis Bar"},{"a":"n_mtg8k04f_1sy6","b":"n_mtga7y2h_w9ei","kind":"walk"},{"a":"n_mtga7y2h_w9ei","b":"n_mtga7isl_0clv","kind":"walk"},{"a":"n_mtga7y2h_w9ei","b":"n_mtga7y2h_vz2z","kind":"destination","label":"Entrance to Aqua Theater"},{"a":"n_mtga89pk_dvpi","b":"n_mtg8k55h_t5wr","kind":"walk"},{"a":"n_mtga89pk_dvpi","b":"n_mtga89pk_8t3e","kind":"destination","label":"Entrance to Hook Seafood"},{"a":"n_mtg8k3r9_yae0","b":"n_mtga8kg4_lksc","kind":"walk"},{"a":"n_mtga8kg4_lksc","b":"n_mtga89pk_dvpi","kind":"walk"},{"a":"n_mtga8kg4_lksc","b":"n_mtga8kg4_w1o5","kind":"destination","label":"Entrance to Celebration Table"},{"a":"n_mtg8kcec_nj2p","b":"n_mtga8v1z_bxtz","kind":"walk"},{"a":"n_mtga8v1z_bxtz","b":"n_mtg8kd0i_uvam","kind":"walk"},{"a":"n_mtga8v1z_bxtz","b":"n_mtga8v1z_05ao","kind":"destination","label":"Entrance to The Lime and Cocunut"},{"a":"n_mtg8kd0i_uvam","b":"n_mtga90sj_kc6r","kind":"walk"},{"a":"n_mtga90sj_kc6r","b":"n_mtg8kh05_bi76","kind":"walk"},{"a":"n_mtga90sj_kc6r","b":"n_mtga90sj_vy5d","kind":"destination","label":"Entrance to Sprinkles"},{"a":"n_mtg8miu5_sor5","b":"n_mtga9ght_dm9q","kind":"walk"},{"a":"n_mtga9ght_dm9q","b":"n_mtg8kt6f_joj3","kind":"walk"},{"a":"n_mtga9ght_dm9q","b":"n_mtga9ght_mr9e","kind":"destination","label":"Entrance to Cantina Fresca"},{"a":"n_mtg8kts4_e55k","b":"n_mtga9mqe_k2tg","kind":"destination","label":"Entrance to El Loco Fresh"},{"a":"n_mtg8n11u_kyza","b":"n_mtga9ybn_cib5","kind":"walk"},{"a":"n_mtga9ybn_cib5","b":"n_mtg8n618_91m4","kind":"walk"},{"a":"n_mtga9ybn_cib5","b":"n_mtga9ybn_da7w","kind":"destination","label":"Entrance to Coastal Kitchen"},{"a":"n_mtg8nh35_95mp","b":"n_mtgaa5w4_vtlk","kind":"walk"},{"a":"n_mtgaa5w4_vtlk","b":"n_mtg8nhkp_j3gt","kind":"walk"},{"a":"n_mtgaa5w4_vtlk","b":"n_mtgaa5w4_w06f","kind":"destination","label":"Entrance to Swim and Tonic"},{"a":"n_mtg8nk5u_oqqp","b":"n_mtgaal3h_ds7u","kind":"walk"},{"a":"n_mtgaal3h_ds7u","b":"n_mtg8odaz_0ix9","kind":"walk"},{"a":"n_mtgaal3h_ds7u","b":"n_mtgaal3h_zodn","kind":"destination","label":"Entrance to Lime and Coconut Frozen Bar"}]};
const PROD_DEST_ALIASES_V026={
  theater:'Royal Theater',backfuture:'Royal Theater',
  spotlight:'Spotlight Karaoke',dueling:'Dueling Pianos',
  aquadome:'Aqua Theater',torque:'Aqua Theater',
  centralpark:'Park Cafe'
};

const NAV_DEBUG_KEY_V0272='cruise-nav-debug-log-v0272';
let NAV_DEBUG_V0272=[];
function debugResetV0272(meta={}){
  NAV_DEBUG_V0272=[{
    ts:new Date().toISOString(),
    type:'route_start',
    build:BUILD_VERSION,
    meta
  }];
  debugSaveV0272();
}
function debugPushV0272(type,data={}){
  NAV_DEBUG_V0272.push({ts:new Date().toISOString(),type,...data});
  debugSaveV0272();
}
function debugSaveV0272(){
  try{localStorage.setItem(NAV_DEBUG_KEY_V0272,JSON.stringify(NAV_DEBUG_V0272))}catch(e){}
}
function debugLoadV0272(){
  try{
    const x=JSON.parse(localStorage.getItem(NAV_DEBUG_KEY_V0272)||'[]');
    if(Array.isArray(x))NAV_DEBUG_V0272=x;
  }catch(e){}
}
function debugTextV0272(){
  const lines=[];
  for(const e of NAV_DEBUG_V0272){
    lines.push(`[${e.ts}] ${e.type}`);
    for(const [k,v] of Object.entries(e)){
      if(k==='ts'||k==='type')continue;
      lines.push(`  ${k}: ${typeof v==='string'?v:JSON.stringify(v)}`);
    }
  }
  return lines.join('\n');
}
function downloadDebugV0272(){
  const blob=new Blob([JSON.stringify({build:BUILD_VERSION,log:NAV_DEBUG_V0272},null,2)],{type:'application/json'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download=`cruise-navigator-route-debug-${Date.now()}.json`;
  document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(a.href);
}
async function copyDebugV0272(){
  const txt=debugTextV0272();
  try{await navigator.clipboard.writeText(txt);alert('Route debug log copied.')}
  catch(e){prompt('Copy route debug log:',txt)}
}
function normV026(s){return String(s||'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim()}
function prodNodeByDestinationV026(d){
  const wanted=PROD_DEST_ALIASES_V026[d.id]||d.name;
  const wn=normV026(wanted);
  let n=VERIFIED_SHIPNET_V026.nodes.find(x=>['venue','landmark','cabin'].includes(x.type)&&normV026(x.label)===wn);
  if(n)return n;
  const aliases={
    'aquadome aquatheater':['aqua theater'],
    'aqua theater':['aquadome aquatheater'],
    'chops grille':['chops'],
    'hook seafood':['hooked seafood','hooked'],
    'the lime and cocunut':['the lime and coconut'],
    'lime and coconut frozen bar':['the lime and coconut frozen bar']
  };
  const candidates=[wn,...(aliases[wn]||[])];
  return VERIFIED_SHIPNET_V026.nodes.find(x=>['venue','landmark','cabin'].includes(x.type)&&candidates.includes(normV026(x.label)))||null;
}
function prodAdjV026(){
  const a={},nodes=VERIFIED_SHIPNET_V026.nodes;
  nodes.forEach(n=>a[n.id]=[]);
  VERIFIED_SHIPNET_V026.edges.forEach(e=>{if(a[e.a]&&a[e.b]){a[e.a].push({id:e.b,kind:e.kind||'walk'});a[e.b].push({id:e.a,kind:e.kind||'walk'})}});
  const elevators={};
  nodes.filter(n=>n.type==='elevator'&&n.verticalGroup).forEach(n=>(elevators[n.verticalGroup]??=[]).push(n));
  Object.values(elevators).forEach(group=>group.forEach((n,i)=>group.forEach((m,j)=>{if(i!==j)a[n.id].push({id:m.id,kind:'elevator'})})));
  return a;
}
function prodFindPathV026(start,end){
  const adj=prodAdjV026(),q=[start],prev={[start]:null},pk={};
  debugPushV0272('bfs_start',{start,end});
  while(q.length){
    const cur=q.shift();
    if(cur===end)break;
    for(const e of (adj[cur]||[])){
      if(e.id in prev)continue;
      prev[e.id]=cur;pk[e.id]=e.kind;q.push(e.id);
    }
  }
  if(!(end in prev)){debugPushV0272('bfs_no_path',{start,end});return null}
  const ids=[];let cur=end;while(cur!==null){ids.push(cur);cur=prev[cur]}ids.reverse();
  const kinds=ids.slice(1).map(id=>pk[id]||'walk');
  debugPushV0272('bfs_path',{ids,kinds});
  return {ids,kinds};
}
function prodRouteV026(fromId,d){
  debugResetV0272({fromId,toId:d&&d.id,toName:d&&d.name});
  if(fromId!=='cabin7456'){debugPushV0272('unsupported_start',{fromId});return null;}
  const start=VERIFIED_SHIPNET_V026.nodes.find(n=>n.id==='n_cabin7456'||(n.type==='cabin'&&normV026(n.label)==='cabin 7456'));
  let end=prodNodeByDestinationV026(d);
  let hybridBasecamp=false;

  // Basecamp is not present in the user's current exported v0.25 network.
  // Route only through verified geometry to the end of the mapped Deck 16 Forward panel,
  // then switch to orientation/signage guidance instead of drawing the old fake diagonal.
  if(!end&&d.id==='basecamp'){
    end=VERIFIED_SHIPNET_V026.nodes
      .filter(n=>String(n.deck)==='16'&&n.panel==='forward'&&!isDestinationTypeV025(n.type))
      .sort((a,b)=>b.y-a.y)[0]||null;
    hybridBasecamp=!!end;
  }

  debugPushV0272('matched_nodes',{
    start:start?{id:start.id,label:start.label,deck:start.deck,panel:start.panel,x:start.x,y:start.y}:null,
    end:end?{id:end.id,label:end.label,deck:end.deck,panel:end.panel,x:end.x,y:end.y}:null,
    hybridBasecamp
  });
  if(!start||!end){debugPushV0272('route_abort',{reason:'missing start or end'});return null}
  const p=prodFindPathV026(start.id,end.id);if(!p)return null;
  const by=Object.fromEntries(VERIFIED_SHIPNET_V026.nodes.map(n=>[n.id,n]));
  const steps=[];
  let seg=[p.ids[0]],deck=String(by[p.ids[0]].deck),panel=by[p.ids[0]].panel;

  const flush=()=>{
    if(seg.length<2)return;
    const first=by[seg[0]],last=by[seg[seg.length-1]];
    const step=routeStep(
      'walk',
      `Follow the highlighted verified walking path on Deck ${deck}.`,
      'verified',
      deck,
      {v026:{ids:[...seg],deck,panel:panel||first.panel||last.panel}}
    );
    steps.push(step);
    debugPushV0272('step_created',{kind:'walk',deck,panel:step.v026&&step.v026.panel,ids:[...seg]});
  };

  for(let i=1;i<p.ids.length;i++){
    const kind=p.kinds[i-1],n=by[p.ids[i]],prev=by[p.ids[i-1]];
    const nextDeck=String(n.deck),nextPanel=n.panel;

    if((kind==='elevator'||kind==='stairs')&&nextDeck!==String(prev.deck)){
      flush();seg=[];
      const transitionKind=kind==='stairs'?'stairs':'elevator';
      const transitionText=transitionKind==='stairs'
        ? `Take the stairs from Deck ${prev.deck} to Deck ${n.deck}. Confirm Deck ${n.deck} before continuing.`
        : `Take the Forward elevators from Deck ${prev.deck} to Deck ${n.deck}. Confirm Deck ${n.deck} before exiting.`;
      const step=routeStep(
        transitionKind,
        transitionText,
        'verified',
        nextDeck,
        {v026:{ids:[prev.id,n.id],deck:nextDeck,panel:nextPanel,kind:transitionKind}}
      );
      steps.push(step);
      debugPushV0272('step_created',{kind:transitionKind,from:prev.id,to:n.id,fromDeck:String(prev.deck),toDeck:nextDeck,panel:nextPanel});
      deck=nextDeck;panel=nextPanel;seg=[n.id];
      continue;
    }

    // Any unexpected cross-deck edge is also treated as a transition so a
    // walking polyline is never allowed to mix coordinate systems.
    if(nextDeck!==String(prev.deck)){
      flush();seg=[];
      const transitionText=`Continue from Deck ${prev.deck} to Deck ${n.deck} using the mapped ship connection. Confirm Deck ${n.deck} before continuing.`;
      const step=routeStep(
        'orient',
        transitionText,
        'verified',
        nextDeck,
        {v026:{ids:[prev.id,n.id],deck:nextDeck,panel:nextPanel,kind:'deck-transition'}}
      );
      steps.push(step);
      debugPushV0272('step_created',{kind:'deck-transition',from:prev.id,to:n.id,fromDeck:String(prev.deck),toDeck:nextDeck,panel:nextPanel,edgeKind:kind});
      deck=nextDeck;panel=nextPanel;seg=[n.id];
      continue;
    }

    // Never draw a single polyline across two different screenshot coordinate systems.
    if(nextDeck===deck && nextPanel!==panel){
      flush();
      const step=routeStep(
        'orient',
        `Continue on Deck ${deck} into the next mapped section.`,
        'verified',
        deck,
        {v026:{ids:[prev.id],deck,panel:panel,kind:'panel-transition'}}
      );
      steps.push(step);
      debugPushV0272('step_created',{kind:'panel-transition',deck,panel,from:prev.id,to:n.id,nextPanel});
      panel=nextPanel;
      seg=[n.id];
      continue;
    }

    if(!seg.length)seg=[p.ids[i-1]];
    seg.push(n.id);
    deck=nextDeck;
    panel=nextPanel;
  }
  flush();

  if(hybridBasecamp){
    const orientStep=routeStep(
      'orient',
      `Verified map coverage ends near Crown's Edge. From here, continue into Thrill Island and follow posted signs toward Adrenaline Peak and Basecamp. The app will not draw an exact line through this unmapped section.`,
      'orientation',
      '16'
    );
    steps.push(orientStep);
    debugPushV0272('step_created',{kind:'orientation',deck:'16',text:orientStep.text});
    const arriveStep=routeStep(
      'arrive',
      `Continue following Basecamp signage on Deck 16 until you reach Basecamp. This final approach is signage guidance, not a verified corridor trace.`,
      'signage',
      '16'
    );
    steps.push(arriveStep);
    debugPushV0272('step_created',{kind:'signage',deck:'16',text:arriveStep.text});
  }else{
    steps.push(routeStep('arrive',`Arrive at ${d.name}.`,'verified',end.deck,{v026:{ids:[end.id],deck:String(end.deck),panel:end.panel,kind:'arrive'}}));
  }
  debugPushV0272('route_complete',{steps:steps.map((s,i)=>({index:i+1,kind:s.kind,accuracy:s.accuracy,deck:s.deck,v026:s.v026||null,text:s.text}))});
  return steps;
}
function prodMapPanelV026(step){
  const meta=step&&step.v026;
  if(!meta||!meta.ids||!meta.ids.length){debugPushV0272('render_no_meta',{kind:step&&step.kind,deck:step&&step.deck});return null;}
  const by=Object.fromEntries(VERIFIED_SHIPNET_V026.nodes.map(n=>[n.id,n]));
  const nodes=meta.ids.map(id=>by[id]).filter(Boolean);if(!nodes.length)return null;
  const first=nodes.find(n=>n.panel)||nodes[0],deck=String(meta.deck||first.deck),panel=meta.panel||first.panel;
  const cfg=SHIPNET_DECKS_V020[deck];if(!cfg)return null;
  const pcfg=cfg.panels.find(p=>p.id===panel);if(!pcfg)return null;
  const pts=nodes.filter(n=>String(n.deck)===deck&&n.panel===panel);
  debugPushV0272('render_segment',{kind:step.kind,deck,panel,ids:meta.ids,points:pts.map(n=>({id:n.id,x:n.x,y:n.y,label:n.label,type:n.type}))});
  if(!pts.length)return null;
  const poly=pts.map(n=>`${n.x},${n.y}`).join(' ');
  const start=pts[0],end=pts[pts.length-1];
  const markers=pts.map((n,i)=>`<g class="prod-debug-node-v0273"><circle cx="${n.x}" cy="${n.y}" r="7"/><text x="${n.x}" y="${n.y+2.5}" text-anchor="middle">${i+1}</text></g>`).join('');
  const endpointCallout=(deck==='16'&&panel==='forward'&&end.id===DECK16_REGISTRATION_V0274.forward.nodeId)
    ? `<g class="verified-endpoint-v0274"><circle cx="${end.x}" cy="${end.y}" r="13"/><line x1="${end.x}" y1="${end.y-13}" x2="${Math.min(pcfg.w-82,end.x+42)}" y2="${Math.max(24,end.y-42)}"/><rect x="${Math.min(pcfg.w-170,end.x+38)}" y="${Math.max(8,end.y-64)}" width="155" height="38" rx="7"/><text x="${Math.min(pcfg.w-162,end.x+46)}" y="${Math.max(31,end.y-40)}">VERIFIED PATH ENDS HERE</text></g>`:'';
  return `<div class="guided-map-label">DECK ${esc(deck)} · VERIFIED NETWORK</div><div class="nav-real-map-v018 prod-map-v026" style="aspect-ratio:${pcfg.w}/${pcfg.h}"><img src="${pcfg.src}" alt="Deck ${esc(deck)} map"><svg viewBox="0 0 ${pcfg.w} ${pcfg.h}" preserveAspectRatio="none"><polyline points="${poly}" class="prod-route-line-v026"/>${markers}<circle cx="${start.x}" cy="${start.y}" r="8" class="prod-start-v026"/><circle cx="${end.x}" cy="${end.y}" r="8" class="prod-end-v026"/>${endpointCallout}</svg></div>`;
}

function expandedMapForV026(d,idx){return guidedMapForStepV027(d&&d.route&&d.route[idx]);}

function stepConfidenceV027(step){
  const a=String(step&&step.accuracy||'orientation').toLowerCase();
  if(a==='verified')return {level:'verified',label:'VERIFIED'};
  if(a==='signage')return {level:'signage',label:'SIGNAGE'};
  return {level:'orientation',label:'ORIENTATION'};
}
function tripConfidenceV027(route){
  const levels=(route||[]).map(s=>stepConfidenceV027(s).level);
  if(levels.length&&levels.every(x=>x==='verified'))return {level:'verified',label:'VERIFIED ROUTE',text:'All route segments are supported by the current navigation dataset.'};
  if(levels.includes('orientation')||levels.includes('signage'))return {level:'mixed',label:'VERIFIED + ORIENTATION',text:'Mapped portions use verified geometry. Unmapped portions switch to orientation or ship signage without drawing unsupported route lines.'};
  return {level:'location',label:'LOCATION GUIDANCE',text:'Detailed walking geometry is not available for this route.'};
}

const DECK16_REGISTRATION_V0274={
  forward:{deck:'16',panel:'forward',nodeId:'n_mtg8nx9v_6rp3',label:'Verified path endpoint'},
  thrill:{deck:'16',panel:'thrill',x:104,y:72,label:"Candidate continuation anchor near Crown's Edge"}
};
function deck16RegistrationPanelV0274(){
  const cfg=SHIPNET_DECKS_V020['16'];
  const pcfg=cfg&&cfg.panels.find(p=>p.id==='thrill');
  if(!pcfg)return '';
  const a=DECK16_REGISTRATION_V0274.thrill;
  debugPushV0272('panel_registration_candidate',{deck:'16',panel:'thrill',x:a.x,y:a.y,label:a.label,status:'candidate_not_verified'});
  return `<div class="deck16-registration-v0274">
    <div class="guided-map-label">DECK 16 · THRILL ISLAND · PANEL REGISTRATION</div>
    <div class="registration-note-v0274"><strong>Candidate continuation point</strong><span>This marker is for aligning the Forward and Thrill Island screenshots. It is not yet a verified walking route.</span></div>
    <div class="nav-real-map-v018 prod-map-v026 registration-map-v0274" style="aspect-ratio:${pcfg.w}/${pcfg.h}">
      <img src="${pcfg.src}" alt="Deck 16 Thrill Island map">
      <svg viewBox="0 0 ${pcfg.w} ${pcfg.h}" preserveAspectRatio="none">
        <g class="registration-anchor-v0274"><circle cx="${a.x}" cy="${a.y}" r="10"/><text x="${a.x}" y="${a.y+3}" text-anchor="middle">A</text></g>
      </svg>
    </div>
    <div class="registration-caption-v0274">Anchor A is positioned near Crown's Edge so we can visually register this panel against the exact verified endpoint on the Forward panel.</div>
  </div>`;
}
function guidedMapForStepV027(step){
  if(!step)return '';
  if(stepConfidenceV027(step).level==='verified'){
    return prodMapPanelV026(step)||'';
  }
  if(stepConfidenceV027(step).level==='signage'){
    return `<div class="guided-map-placeholder-v027"><strong>Follow ship signage</strong><span>This section is not mapped precisely enough to draw a trustworthy route line.</span></div>`;
  }
  if(String(step.deck)==='16'&&/Crown's Edge|Thrill Island|Basecamp/i.test(step.text||'')){
    return deck16RegistrationPanelV0274();
  }
  return `<div class="guided-map-placeholder-v027"><strong>Orientation guidance</strong><span>Verified map coverage ends before this section. No unsupported route line is drawn.</span></div>`;
}
function prodConfidenceV026(d){
  if(prodNodeByDestinationV026(d))return 'verified';
  if(d.mapDeck&&SHIPNET_DECKS_V020[String(d.mapDeck)])return 'orientation';
  return 'location';
}
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

/* v0.28.5 production weighted routing
   The verified ship graph is now the production routing source. The existing
   v0.28.4 profiles are reused so the same preference selected in the editor
   can drive real Take Me There navigation. */
const PROD_ROUTE_ALIASES_V0285={
  sorrentos:"Sorrento's",
  parkcafe:'Park Cafe',
  chops:'Chops Grille',
  pearl:'The Pearl',
  royalpromenade:'Royal Promenade',
  centralpark:'Central Park',
  aotheater:'AO Theater',
  basecamp:'Basecamp'
};
function productionRouteProfileV0285(){
  const p=localStorage.getItem('cruise-nav-route-profile-v0284')||shipnetRouteProfileV0284||'balanced';
  return ROUTE_PROFILES_V0284[p]?p:'balanced';
}
function prodNodeByLocationV0285(loc){
  if(!loc)return null;
  const alias=PROD_ROUTE_ALIASES_V0285[loc.id];
  const wanted=alias||PROD_DEST_ALIASES_V026[loc.id]||loc.name||'';
  const wn=normV026(wanted);
  let n=VERIFIED_SHIPNET_V026.nodes.find(x=>['venue','landmark','cabin'].includes(x.type)&&normV026(x.label)===wn);
  if(n)return n;
  // Useful fallbacks for names such as "Sorrento's Pizza" -> "Sorrento's".
  n=VERIFIED_SHIPNET_V026.nodes.find(x=>['venue','landmark','cabin'].includes(x.type)&&(
    normV026(x.label).includes(wn)||wn.includes(normV026(x.label))
  ));
  return n||null;
}
function prodRouteV0285(fromId,d){
  const from=locationById(fromId);
  const profileKey=productionRouteProfileV0285();
  const start=prodNodeByLocationV0285(from);
  const end=prodNodeByLocationV0285(d);
  debugResetV0272({fromId,toId:d&&d.id,toName:d&&d.name,engine:'weighted-production-v0285',profile:profileKey});

  // Basecamp is still only partially mapped, so route to the end of the verified
  // Deck 16 Forward coverage and then switch to orientation/signage guidance.
  let weightedEnd=end;
  let hybridBasecamp=false;
  if(!weightedEnd&&d&&d.id==='basecamp'){
    weightedEnd=VERIFIED_SHIPNET_V026.nodes
      .filter(n=>String(n.deck)==='16'&&n.panel==='forward'&&!isDestinationTypeV025(n.type))
      .sort((a,b)=>b.y-a.y)[0]||null;
    hybridBasecamp=!!weightedEnd;
  }

  debugPushV0272('production_weighted_match',{
    profile:profileKey,
    start:start?{id:start.id,label:start.label,deck:start.deck,panel:start.panel}:null,
    end:weightedEnd?{id:weightedEnd.id,label:weightedEnd.label,deck:weightedEnd.deck,panel:weightedEnd.panel}:null,
    hybridBasecamp
  });
  if(!start||!weightedEnd){debugPushV0272('production_weighted_abort',{reason:'missing graph endpoint'});return null;}

  const p=findWeightedPathV0284(start.id,weightedEnd.id,VERIFIED_SHIPNET_V026,profileKey);
  if(!p){debugPushV0272('production_weighted_no_path',{profile:profileKey,start:start.id,end:weightedEnd.id});return null;}

  const by=Object.fromEntries(VERIFIED_SHIPNET_V026.nodes.map(n=>[n.id,n]));
  const steps=[];
  let seg=[p.ids[0]],deck=String(by[p.ids[0]].deck),panel=by[p.ids[0]].panel;
  const flush=()=>{
    if(seg.length<2)return;
    const first=by[seg[0]],last=by[seg[seg.length-1]];
    steps.push(routeStep('walk',`Follow the highlighted verified walking path on Deck ${deck}.`,'verified',deck,
      {v026:{ids:[...seg],deck,panel:panel||first.panel||last.panel},routing:{engine:'weighted',profile:profileKey,cost:p.cost,distance:p.distance}}));
    debugPushV0272('production_step_created',{kind:'walk',deck,panel,ids:[...seg]});
  };

  for(let i=1;i<p.ids.length;i++){
    const kind=p.kinds[i-1],n=by[p.ids[i]],prev=by[p.ids[i-1]];
    const nextDeck=String(n.deck),nextPanel=n.panel;

    if((kind==='elevator'||kind==='stairs')&&nextDeck!==String(prev.deck)){
      flush();seg=[];
      const transitionKind=kind==='stairs'?'stairs':'elevator';
      const transitionLabel=transitionKind==='stairs'
        ? `Take the stairs from Deck ${prev.deck} to Deck ${n.deck}.`
        : `Take ${prev.label||n.label||'the elevator'} from Deck ${prev.deck} to Deck ${n.deck}.`;
      const transitionText=transitionLabel+` Confirm Deck ${n.deck} before continuing.`;
      steps.push(routeStep(transitionKind,transitionText,'verified',nextDeck,
        {v026:{ids:[prev.id,n.id],deck:nextDeck,panel:nextPanel,kind:transitionKind},routing:{engine:'weighted',profile:profileKey,cost:p.cost,distance:p.distance}}));
      debugPushV0272('production_step_created',{kind:transitionKind,from:prev.id,to:n.id,fromDeck:String(prev.deck),toDeck:nextDeck});
      deck=nextDeck;panel=nextPanel;seg=[n.id];
      continue;
    }

    if(nextDeck!==String(prev.deck)){
      flush();seg=[];
      steps.push(routeStep('orient',`Continue from Deck ${prev.deck} to Deck ${n.deck} using the mapped ship connection. Confirm Deck ${n.deck} before continuing.`,'verified',nextDeck,
        {v026:{ids:[prev.id,n.id],deck:nextDeck,panel:nextPanel,kind:'deck-transition'},routing:{engine:'weighted',profile:profileKey,cost:p.cost,distance:p.distance}}));
      deck=nextDeck;panel=nextPanel;seg=[n.id];
      continue;
    }

    if(nextDeck===deck&&nextPanel!==panel){
      flush();
      steps.push(routeStep('orient',`Continue on Deck ${deck} into the next mapped section.`,'verified',deck,
        {v026:{ids:[prev.id],deck,panel,kind:'panel-transition'},routing:{engine:'weighted',profile:profileKey,cost:p.cost,distance:p.distance}}));
      panel=nextPanel;seg=[n.id];
      continue;
    }
    if(!seg.length)seg=[p.ids[i-1]];
    seg.push(n.id);deck=nextDeck;panel=nextPanel;
  }
  flush();

  if(hybridBasecamp){
    steps.push(routeStep('orient',`Verified map coverage ends near Crown's Edge. From here, continue into Thrill Island and follow posted signs toward Adrenaline Peak and Basecamp. The app will not draw an exact line through this unmapped section.`,'orientation','16',
      {routing:{engine:'weighted',profile:profileKey,cost:p.cost,distance:p.distance}}));
    steps.push(routeStep('arrive',`Continue following Basecamp signage on Deck 16 until you reach Basecamp. This final approach is signage guidance, not a verified corridor trace.`,'signage','16',
      {routing:{engine:'weighted',profile:profileKey,cost:p.cost,distance:p.distance}}));
  }else{
    steps.push(routeStep('arrive',`Arrive at ${d.name}.`,'verified',weightedEnd.deck,
      {v026:{ids:[weightedEnd.id],deck:String(weightedEnd.deck),panel:weightedEnd.panel,kind:'arrive'},routing:{engine:'weighted',profile:profileKey,cost:p.cost,distance:p.distance}}));
  }
  debugPushV0272('production_weighted_complete',{profile:profileKey,ids:p.ids,kinds:p.kinds,cost:p.cost,distance:p.distance,steps:steps.length});
  return steps;
}

function routeFor(fromId,toId){
  const from=locationById(fromId); const to=destinations.find(x=>x.id===toId); if(!to)return [];
  const prod=prodRouteV0285(fromId,to);if(prod)return prod;

  // Legacy v0.18 Cabin 7456 to Basecamp route intentionally retired in v0.26.1.
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
  const step=d.route[idx]||d.route[0];
  const confidence=stepConfidenceV027(step);

  if(confidence.level==='verified'){
    if(step.kind==='elevator'||step.kind==='stairs'){
      const fromDeck=idx>0?String(d.route[idx-1].deck||from.mapDeck):String(from.mapDeck);
      const toDeck=String(step.deck||d.mapDeck);
      const direction=Number(toDeck.match(/\d+/)?.[0]||0)>=Number(fromDeck.match(/\d+/)?.[0]||0)?'↑':'↓';
      const isStairs=step.kind==='stairs';
      return `<div class="deck-change-card"><div class="deck-change-icon">${isStairs?'🪜':'🛗'}</div><div class="deck-from">DECK ${esc(fromDeck)}</div><div class="deck-arrow">${direction}</div><div class="deck-to">DECK ${esc(toDeck)}</div><small>${isStairs?'Use the stairs and confirm the destination deck before continuing.':'Use the elevator and confirm the destination deck before exiting.'}</small></div>`;
    }
    const map=prodMapPanelV026(step);
    if(map)return map;
    return `<div class="guided-map-placeholder-v027 renderer-warning-v0271"><strong>Verified route data is missing its map segment</strong><span>No schematic fallback is shown because that could imply geometry the verified graph did not provide.</span></div>`;
  }

  return guidedMapForStepV027(step);
}
function renderGuidedRoute(){
  const d=destinations.find(x=>x.id===guidedState.destId);if(!d)return;
  d.route=routeFor(currentLocationId,d.id);
  const idx=Math.max(0,Math.min(guidedState.step,d.route.length-1)); const s=d.route[idx];
  const type=s.kind==='elevator'?'ELEVATOR':s.kind==='stairs'?'STAIRS':s.kind==='arrive'?'ARRIVE':s.kind==='orient'?'ORIENT':'WALK';
  const pct=Math.round(((idx+1)/d.route.length)*100);
  const from=locationById(currentLocationId);
  const nearby=d.id==='aquadome'||d.id==='torque'?`<div class="nearby-card"><div class="confidence">WHILE YOU'RE HERE</div><h3>Nearby in AquaDome</h3><div class="nearby-chips"><span>💎 The Overlook</span><span>☕ Rye & Bean</span><span>🍴 AquaDome Market</span></div></div>`:d.id==='basecamp'?`<div class="nearby-card"><div class="confidence">WHILE YOU'RE HERE</div><h3>Nearby in Thrill Island</h3><div class="nearby-chips"><span>🧗 Adrenaline Peak</span><span>⛳ Lost Dunes</span><span>🏄 FlowRider</span></div></div>`:'';
  const progressText=`STEP ${idx+1} OF ${d.route.length}`;
  const accuracy=routeAccuracyMeta(s.accuracy);
  let routeSummary=routeAccuracySummary(d.route);routeSummary=tripConfidenceV027(d.route);
  el('routeContent').innerHTML=`<div class="route-accuracy ${esc(routeSummary.level)}"><div><span>${esc(routeSummary.label)}</span><strong>${esc(routeSummary.text)}</strong></div><button class="accuracy-help" id="accuracyHelp" aria-label="Navigation accuracy information">?</button></div><div class="location-picker"><button class="location-field" id="fromLocationBtn"><span>📍 FROM</span><strong>${esc(from.name)}</strong><small>Deck ${esc(from.mapDeck)} · change</small></button><div class="location-arrow">→</div><button class="location-field" id="toLocationBtn"><span>🎯 TO</span><strong>${esc(d.name)}</strong><small>Deck ${esc(d.mapDeck)}</small></button></div><div class="route-profile-control"><label><span>ROUTING PREFERENCE</span><select id="routeProfileSelect">${Object.entries(ROUTE_PROFILES_V0284).map(([k,v])=>`<option value="${k}" ${k===productionRouteProfileV0285()?'selected':''}>${v.label}</option>`).join('')}</select></label><small>${esc((ROUTE_PROFILES_V0284[productionRouteProfileV0285()]||ROUTE_PROFILES_V0284.balanced).desc)}</small></div><div class="guided-top"><button class="back-btn" onclick="navigate('home')">‹ Exit</button><div class="guided-progress"><span>${progressText}</span><div><i style="width:${pct}%"></i></div></div></div><div class="route-hero guided-hero"><div class="eyebrow">${esc(routeAreaLabel(currentLocationId,d))}</div><h2>${type}</h2><div class="route-tag">Deck ${esc(s.deck||d.mapDeck)} · ${esc(d.area)}</div><div class="prod-confidence-v026 ${esc(stepConfidenceV027(s).level)}">${esc(stepConfidenceV027(s).label)}</div></div><div class="guided-map">${guidedMapFor(d,idx)}</div><div class="instruction-card"><div class="step-num big">${idx+1}</div><div><div class="step-type">${type} <span class="step-accuracy ${esc(stepConfidenceV027(s).level)}">${esc(stepConfidenceV027(s).label)}</span></div><div class="instruction-text">${esc(s.text)}</div></div></div>${idx===d.route.length-1?nearby:''}<div class="route-debug-v0272">
  <details>
    <summary>Route Debug</summary>
    <div class="route-debug-actions-v0272">
      <button id="copyRouteDebugV0272" class="secondary-action">Copy Log</button>
      <button id="exportRouteDebugV0272" class="secondary-action">Export Log JSON</button>
    </div>
    <pre id="routeDebugPreviewV0272">${esc(debugTextV0272())}</pre>
  </details>
</div>
<div class="guided-actions">${idx>0?'<button class="secondary-action" id="prevGuide">← Previous</button>':''}<button class="confused-action" id="confusedBtn">? I'm confused</button>${idx<d.route.length-1?'<button class="next-action" id="nextGuide">NEXT →</button>':'<button class="next-action" id="finishGuide">✓ ARRIVED</button>'}</div>`;
  el('accuracyHelp').onclick=()=>{el('overlayTitle').textContent='Navigation accuracy';el('overlayMap').innerHTML=`<div class="accuracy-sheet"><h3>How Cruise Navigator treats route accuracy</h3><p><b>Verified</b> means this step is backed by the mapped walking graph or a verified deck transition. Exact route lines are shown only when graph geometry exists.</p><p><b>Orientation</b> means the app can guide you to the correct deck or area, but it does not have continuous verified walking geometry for that segment.</p><p><b>Signage</b> means Navigator intentionally stops short of inventing a turn. Use posted ship signs for that segment.</p><div class="recovery-tip"><strong>Navigation rule:</strong> show exactly what is mapped. Never draw an exact route through geometry that has not been verified.</div></div>`;el('mapOverlay').classList.add('show');el('mapOverlay').setAttribute('aria-hidden','false');};
  el('fromLocationBtn').onclick=()=>openLocationPicker('from');
  el('toLocationBtn').onclick=()=>openLocationPicker('to');
  if(el('routeProfileSelect'))el('routeProfileSelect').onchange=e=>{
    shipnetRouteProfileV0284=ROUTE_PROFILES_V0284[e.target.value]?e.target.value:'balanced';
    localStorage.setItem('cruise-nav-route-profile-v0284',shipnetRouteProfileV0284);
    guidedState.step=0;
    renderGuidedRoute();
  };
  if(el('nextGuide'))el('nextGuide').onclick=()=>{guidedState.step++;renderGuidedRoute()};
  if(el('prevGuide'))el('prevGuide').onclick=()=>{guidedState.step--;renderGuidedRoute()};
  if(el('finishGuide'))el('finishGuide').onclick=()=>navigate('home');
  if(el('copyRouteDebugV0272'))el('copyRouteDebugV0272').onclick=copyDebugV0272;
  if(el('exportRouteDebugV0272'))el('exportRouteDebugV0272').onclick=downloadDebugV0272;
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
    if(mode==='from'){currentLocationId=id;persistCurrentLocation();guidedState.step=0;renderCurrentLocationHome();} else {guidedState.destId=id;guidedState.step=0;}
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

function expandedMapForV026(d,idx){return guidedMapForStepV027(d&&d.route&&d.route[idx]);}
function closeMap(){el('mapOverlay').classList.remove('show');el('mapOverlay').setAttribute('aria-hidden','true')}

function renderDecks(){el('deckCards').innerHTML=deckInfo.map(x=>`<button class="deck-card" data-deck="${esc(x.deck)}"><div class="deck-label">DECK ${esc(x.deck)}</div><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></button>`).join('')}
function renderLesson(){const l=lessons[lessonIndex];el('lessonCard').innerHTML=`<div class="confidence">CHALLENGE ${lessonIndex+1} OF ${lessons.length}</div><div class="lesson-q">${l.q}</div><div class="answers">${l.a.map((x,i)=>`<button class="answer" data-answer="${i}">${x}</button>`).join('')}</div><div id="lessonFeedback" class="lesson-feedback"></div>`;el('lessonCard').querySelectorAll('.answer').forEach(b=>b.addEventListener('click',()=>{const chosen=Number(b.dataset.answer),all=el('lessonCard').querySelectorAll('.answer');all.forEach(a=>a.disabled=true);b.classList.add(chosen===l.correct?'correct':'wrong');if(chosen!==l.correct)all[l.correct].classList.add('correct');el('lessonFeedback').innerHTML=(chosen===l.correct?'✅ Correct. ':'Not quite. ')+l.why+(lessonIndex<lessons.length-1?' <button id="nextLesson" class="answer next">Next challenge →</button>':' <button id="finishLesson" class="answer next">Back to navigator</button>');if(el('nextLesson'))el('nextLesson').onclick=()=>{lessonIndex++;renderLesson()};if(el('finishLesson'))el('finishLesson').onclick=()=>navigate('home')}))}
function showMustDo(){const extra=unavailableRecommendations.map(x=>`<div class="unavailable"><strong>${x.icon} ${x.name} · CHECK</strong><span>${esc(x.text)}</span></div>`).join('');renderSearch(destinations.filter(d=>d.mustdo),extra)}


// v0.20 Ship Walking Network Editor
const SHIPNET_KEY_V020='cruise-nav-ship-walknet-v020';
const STAIR_LINK_MIGRATION_V023='cruise-nav-stair-links-v023';
const SHIPNET_DECKS_V020={
  '5':{name:'Deck 5',panels:[{id:'forward',name:'Forward / Royal Theater',src:'./assets/deck5-forward.png',w:475,h:1193},{id:'aft',name:'Aft / Dining & Absolute Zero',src:'./assets/deck5-aft.png',w:475,h:1193}]},
  '6':{name:'Deck 6',panels:[{id:'forward',name:'Forward / Royal Promenade',src:'./assets/deck6-forward.png',w:475,h:1193},{id:'aft',name:'Aft / Promenade & Surfside access',src:'./assets/deck6-aft.png',w:475,h:1193}]},
  '7':{name:'Deck 7',panels:[{id:'main',name:'Deck 7',src:'./assets/deck7-forward.png',w:475,h:1193}]},
  '8':{name:'Deck 8',panels:[{id:'forward',name:'Forward / Central Park',src:'./assets/deck8-forward.png',w:475,h:1193},{id:'aft',name:'Aft / Central Park',src:'./assets/deck8-aft.png',w:475,h:1193}]},
  '15':{name:'Deck 15',panels:[{id:'forward',name:'Forward / AquaDome & pools',src:'./assets/deck15-forward.png',w:397,h:1228},{id:'aft',name:'Aft / Windjammer & Hideaway',src:'./assets/deck15-aft.png',w:397,h:858}]},
  '16':{name:'Deck 16',panels:[{id:'forward',name:'Forward / Swim & Tonic',src:'./assets/deck16-forward.png',w:518,h:1178},{id:'thrill',name:'Thrill Island / Basecamp',src:'./assets/deck16-thrill.png',w:441,h:821}]}
};
const SHIPNET_TYPES_V020={corridor:{label:'Corridor point'},junction:{label:'Junction'},elevator:{label:'Elevator'},stairs:{label:'Stairs'},cabin:{label:'Cabin'},venue:{label:'Venue'},landmark:{label:'Landmark'},panel_link:{label:'Panel link'}};
const SHIPNET_VERTICAL_V020={forward:'Forward elevator bank',mid:'Midship elevator bank',aft:'Aft elevator bank',other:'Other vertical link'};
const STAIR_LINKS_V023=[
  ['n_mtg8wi0z_i4qf','n_mtg8xs1h_mnhb','Forward port stairs, Deck 5 to Deck 6'],
  ['n_mtg8xs1h_mnhb','n_mtg8v6kk_uwf9','Forward port stairs, Deck 6 to Deck 7'],
  ['n_mtg8v6kk_uwf9','n_mtg8zapp_9pt7','Forward port stairs, Deck 7 to Deck 8'],
  ['n_mtg90jan_9hta','n_mtg8n3fo_660f','Forward port stairs, Deck 15 to Deck 16'],
  ['n_mtg8wtei_b5wq','n_mtg8xzsw_a5ni','Forward starboard stairs, Deck 5 to Deck 6'],
  ['n_mtg9109c_pe92','n_mtg8n4y7_zxd8','Forward starboard stairs, Deck 15 to Deck 16'],
  ['n_mtg8xd17_enr5','n_mtg8dx01_apwb','Royal Promenade stairs, Deck 5 to Deck 6'],
  ['n_mtg8efa0_xawl','n_mtg8iv4r_12js','Royal Promenade to Central Park stairs, Deck 6 to Deck 8']
];
const SHIPNET_SEED_V020={"version":2,"nodes":[{"id":"n_cabin7456","x":214,"y":397,"type":"cabin","label":"Cabin 7456","deck":"7","panel":"main"},{"id":"n_cross_port","x":119,"y":408,"type":"junction","label":"Cross corridor","deck":"7","panel":"main"},{"id":"n_port_corridor","x":119,"y":691,"type":"junction","label":"Port corridor","deck":"7","panel":"main"},{"id":"n_forward_lobby","x":229,"y":697,"type":"elevator","label":"Forward elevators","deck":"7","panel":"main","verticalGroup":"forward"}],"edges":[{"a":"n_cabin7456","b":"n_cross_port"},{"a":"n_cross_port","b":"n_port_corridor"},{"a":"n_port_corridor","b":"n_forward_lobby"}]};
let shipnetStateV020=null,shipnetDeckV020='7',shipnetPanelV020='main',shipnetModeV020='select';
let shipnetSelectedV020=null,shipnetPathLastV020=null,shipnetConnectFirstV020=null,shipnetTestPathV020=[];
let shipnetWeightedTestV028=null;
let shipnetUndoV021=[];
let shipnetTransportTypeV022='elevator';
let shipnetTransportGroupV022='forward';
let shipnetStairFirstV024=null;
let shipnetDestinationLabelV025='';
let shipnetDestinationTypeV025='venue';

function cloneV020(v){return JSON.parse(JSON.stringify(v))}
function pushUndoV021(){
  shipnetUndoV021.push(cloneV020(loadShipnetV020()));
  if(shipnetUndoV021.length>30)shipnetUndoV021.shift();
}
function undoShipnetV021(){
  if(!shipnetUndoV021.length)return;
  shipnetStateV020=shipnetUndoV021.pop();
  saveShipnetV020();
  shipnetSelectedV020=null;
  shipnetPathLastV020=null;
  shipnetConnectFirstV020=null;
  shipnetStairFirstV024=null;
  shipnetTestPathV020=[];
  renderShipNetworkV020();
}
function loadShipnetV020(){
  if(shipnetStateV020)return shipnetStateV020;
  try{
    const raw=localStorage.getItem(SHIPNET_KEY_V020);
    shipnetStateV020=raw?JSON.parse(raw):cloneV020(SHIPNET_SEED_V020);
    if(!shipnetStateV020.nodes||!shipnetStateV020.edges)throw new Error();
    let cleaned=false;
    shipnetStateV020.nodes.forEach(n=>{if(n.type!=='elevator'&&n.verticalGroup){delete n.verticalGroup;cleaned=true}});
    if(cleaned)localStorage.setItem(SHIPNET_KEY_V020,JSON.stringify(shipnetStateV020));
  }catch(e){shipnetStateV020=cloneV020(SHIPNET_SEED_V020)}
  return shipnetStateV020;
}
function saveShipnetV020(){localStorage.setItem(SHIPNET_KEY_V020,JSON.stringify(shipnetStateV020))}
const SHIPNET_BUNDLED_BACKUP_V0281='cruise-nav-ship-walknet-backup-v0281';
function bundledShipNetworkV0281(){return cloneV020(VERIFIED_SHIPNET_V026)}
function shipNetworkStatsV0281(data){
  const nodes=Array.isArray(data&&data.nodes)?data.nodes:[],edges=Array.isArray(data&&data.edges)?data.edges:[];
  const decks=[...new Set(nodes.map(n=>String(n.deck||'')).filter(Boolean))].sort((a,b)=>Number(a)-Number(b));
  return {nodes:nodes.length,edges:edges.length,decks};
}
function needsBundledNetworkV0281(){
  const local=loadShipnetV020(), bundled=bundledShipNetworkV0281();
  return !local || !Array.isArray(local.nodes) || local.nodes.length<bundled.nodes.length;
}
function backupLocalNetworkV0281(){
  try{
    const current=cloneV020(loadShipnetV020());
    localStorage.setItem(SHIPNET_BUNDLED_BACKUP_V0281,JSON.stringify({savedAt:new Date().toISOString(),network:current}));
    return true;
  }catch(e){return false}
}
function loadBundledNetworkV0281(){
  const bundled=bundledShipNetworkV0281();
  const local=loadShipnetV020();
  const backed=backupLocalNetworkV0281();
  shipnetStateV020=bundled;
  shipnetSelectedV020=null;
  shipnetPathLastV020=null;
  shipnetConnectFirstV020=null;
  shipnetStairFirstV024=null;
  shipnetTestPathV020=[];
  shipnetWeightedTestV028=null;
  saveShipnetV020();
  localStorage.setItem('cruise-nav-ship-walknet-source-v0281','bundled-verified');
  return {bundled:shipNetworkStatsV0281(bundled),previous:shipNetworkStatsV0281(local),backed};
}
function currentPanelV020(){return SHIPNET_DECKS_V020[shipnetDeckV020].panels.find(p=>p.id===shipnetPanelV020)}
function panelNodesV020(){return loadShipnetV020().nodes.filter(n=>n.deck===shipnetDeckV020&&n.panel===shipnetPanelV020)}
function nodeV020(id){return loadShipnetV020().nodes.find(n=>n.id===id)}
function edgeExistsV020(a,b){return loadShipnetV020().edges.some(e=>(e.a===a&&e.b===b)||(e.a===b&&e.b===a))}
function addEdgeV020(a,b,kind='walk'){if(!a||!b||a===b||edgeExistsV020(a,b))return;pushUndoV021();loadShipnetV020().edges.push({a,b,kind});saveShipnetV020()}
function addNodeV020(x,y,type='corridor'){
  const n={id:'n_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,6),deck:shipnetDeckV020,panel:shipnetPanelV020,x:Math.round(x),y:Math.round(y),type,label:''};
  pushUndoV021();loadShipnetV020().nodes.push(n);saveShipnetV020();return n;
}
function deleteNodeV020(id){pushUndoV021();const s=loadShipnetV020();s.nodes=s.nodes.filter(n=>n.id!==id);s.edges=s.edges.filter(e=>e.a!==id&&e.b!==id);shipnetSelectedV020=null;shipnetTestPathV020=[];saveShipnetV020()}
function clearCurrentDeckV021(){
  const s=loadShipnetV020(),deck=shipnetDeckV020;
  pushUndoV021();
  const ids=new Set(s.nodes.filter(n=>n.deck===deck).map(n=>n.id));
  s.nodes=s.nodes.filter(n=>n.deck!==deck);
  s.edges=s.edges.filter(e=>!ids.has(e.a)&&!ids.has(e.b));
  shipnetSelectedV020=null;
  shipnetPathLastV020=null;
  shipnetConnectFirstV020=null;
  shipnetTestPathV020=[];
  shipnetWeightedTestV028=null;
  saveShipnetV020();
}
function nearestEdgeV022(x,y,max=22){
  const nodes=Object.fromEntries(loadShipnetV020().nodes.map(n=>[n.id,n]));
  let best=null,bestD=max;
  loadShipnetV020().edges.filter(visibleEdgeV020).forEach(e=>{
    const a=nodes[e.a],b=nodes[e.b];if(!a||!b)return;
    const vx=b.x-a.x,vy=b.y-a.y,len2=vx*vx+vy*vy;if(!len2)return;
    let t=((x-a.x)*vx+(y-a.y)*vy)/len2;t=Math.max(0,Math.min(1,t));
    const px=a.x+t*vx,py=a.y+t*vy,d=Math.hypot(x-px,y-py);
    if(d<bestD){bestD=d;best={edge:e,x:px,y:py,t,d}}
  });
  return best;
}
function placeTransportV022(x,y){
  const near=nearestV020(x,y,24),hit=nearestEdgeV022(x,y,24);
  pushUndoV021();
  const state=loadShipnetV020();
  let n=null;
  if(near){
    n=near;
  }else if(hit){
    const e=hit.edge;
    n={id:'n_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,6),deck:shipnetDeckV020,panel:shipnetPanelV020,x:Math.round(hit.x),y:Math.round(hit.y),type:'corridor',label:''};
    state.nodes.push(n);
    state.edges=state.edges.filter(q=>q!==e);
    state.edges.push({a:e.a,b:n.id,kind:e.kind||'walk'},{a:n.id,b:e.b,kind:e.kind||'walk'});
  }else{
    shipnetUndoV021.pop();
    alert('Tap directly on, or very close to, an existing walking path.');
    return null;
  }
  n.type=shipnetTransportTypeV022;
  n.label=shipnetTransportTypeV022==='elevator'?(shipnetTransportGroupV022==='forward'?'Forward elevators':shipnetTransportGroupV022==='mid'?'Midship elevators':shipnetTransportGroupV022==='aft'?'Aft elevators':'Elevators'):'Stairs';
  if(n.type==='elevator')n.verticalGroup=shipnetTransportGroupV022;else delete n.verticalGroup;
  saveShipnetV020();
  return n;
}
function applyStairLinksV023(){
  const state=loadShipnetV020();
  const ids=new Set(state.nodes.map(n=>n.id));
  let changed=false,added=0;
  STAIR_LINKS_V023.forEach(([a,b,label])=>{
    if(!ids.has(a)||!ids.has(b))return;
    const exists=state.edges.some(e=>(e.a===a&&e.b===b)||(e.a===b&&e.b===a));
    if(!exists){
      state.edges.push({a,b,kind:'stairs',label});
      changed=true;added++;
    }
  });
  if(changed)saveShipnetV020();
  try{localStorage.setItem(STAIR_LINK_MIGRATION_V023,JSON.stringify({applied:true,added,version:'0.23.0'}))}catch(_){}
  return added;
}
function stairLinksForDeckV023(deck){
  const s=loadShipnetV020(),nodes=Object.fromEntries(s.nodes.map(n=>[n.id,n]));
  return s.edges.filter(e=>e.kind==='stairs'&&((nodes[e.a]&&nodes[e.a].deck===deck)||(nodes[e.b]&&nodes[e.b].deck===deck)));
}

function stairLinkEdgesV024(){
  return loadShipnetV020().edges.filter(e=>e.kind==='stairs');
}
function stairLinkCountV024(id){
  return stairLinkEdgesV024().filter(e=>e.a===id||e.b===id).length;
}
function connectStairsV024(a,b){
  if(!a||!b||a===b)return false;
  const na=nodeV020(a),nb=nodeV020(b);
  if(!na||!nb||na.type!=='stairs'||nb.type!=='stairs')return false;
  if(na.deck===nb.deck){
    alert('Choose a matching stair on a different deck.');
    return false;
  }
  if(edgeExistsV020(a,b)){
    alert('Those stairs are already connected.');
    return false;
  }
  pushUndoV021();
  loadShipnetV020().edges.push({
    a,b,kind:'stairs',
    label:`Stairs, Deck ${na.deck} to Deck ${nb.deck}`
  });
  saveShipnetV020();
  return true;
}
function stairStatusTextV024(n){
  if(n.type!=='stairs')return '';
  const c=stairLinkCountV024(n.id);
  return c?`Linked (${c})`:'Unlinked';
}

function isDestinationTypeV025(type){
  return ['venue','landmark','cabin'].includes(type);
}
function nearestWalkNodeV025(x,y,max=24){
  let best=null,d=max;
  panelNodesV020().forEach(n=>{
    if(isDestinationTypeV025(n.type))return;
    const q=Math.hypot(n.x-x,n.y-y);
    if(q<d){d=q;best=n}
  });
  return best;
}
function nearestWalkEdgeV025(x,y,max=90){
  const nodes=Object.fromEntries(loadShipnetV020().nodes.map(n=>[n.id,n]));
  let best=null,bestD=max;
  loadShipnetV020().edges.filter(e=>{
    if(!visibleEdgeV020(e))return false;
    if(e.kind==='stairs'||e.kind==='destination')return false;
    const a=nodes[e.a],b=nodes[e.b];
    return a&&b&&!isDestinationTypeV025(a.type)&&!isDestinationTypeV025(b.type);
  }).forEach(e=>{
    const a=nodes[e.a],b=nodes[e.b];
    const vx=b.x-a.x,vy=b.y-a.y,len2=vx*vx+vy*vy;
    if(!len2)return;
    let t=((x-a.x)*vx+(y-a.y)*vy)/len2;
    t=Math.max(0,Math.min(1,t));
    const px=a.x+t*vx,py=a.y+t*vy,d=Math.hypot(x-px,y-py);
    if(d<bestD){bestD=d;best={edge:e,x:px,y:py,t,d}}
  });
  return best;
}
function placeDestinationV025(x,y,label,type){
  label=(label||'').trim();
  if(!label){alert('Enter a destination name first.');return null}
  if(!isDestinationTypeV025(type))type='venue';

  const state=loadShipnetV020();
  const near=nearestWalkNodeV025(x,y,24);
  const hit=nearestWalkEdgeV025(x,y,90);
  if(!near&&!hit){
    alert('No verified walking path is close enough to that entrance. Add or correct the walking path first, then place the destination.');
    return null;
  }

  pushUndoV021();

  let anchor=near;
  if(!anchor&&hit){
    const e=hit.edge;
    anchor={
      id:'n_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,6),
      deck:shipnetDeckV020,panel:shipnetPanelV020,
      x:Math.round(hit.x),y:Math.round(hit.y),
      type:'junction',label:''
    };
    state.nodes.push(anchor);
    state.edges=state.edges.filter(q=>q!==e);
    state.edges.push(
      {a:e.a,b:anchor.id,kind:e.kind||'walk'},
      {a:anchor.id,b:e.b,kind:e.kind||'walk'}
    );
  }

  const dest={
    id:'n_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,6),
    deck:shipnetDeckV020,panel:shipnetPanelV020,
    x:Math.round(x),y:Math.round(y),
    type,label
  };
  state.nodes.push(dest);
  state.edges.push({a:anchor.id,b:dest.id,kind:'destination',label:`Entrance to ${label}`});
  saveShipnetV020();
  return dest;
}
function destinationStatsV025(){
  const nodes=loadShipnetV020().nodes.filter(n=>n.deck===shipnetDeckV020&&isDestinationTypeV025(n.type));
  return `${nodes.length} destination${nodes.length===1?'':'s'} mapped on Deck ${shipnetDeckV020}`;
}
function adjV020(){
  const s=loadShipnetV020(),a={};s.nodes.forEach(n=>a[n.id]=[]);
  s.edges.forEach(e=>{if(a[e.a]&&a[e.b]){a[e.a].push(e.b);a[e.b].push(e.a)}});
  const groups={};
  s.nodes.filter(n=>n.type==='elevator'&&n.verticalGroup).forEach(n=>(groups[n.verticalGroup]??=[]).push(n));
  Object.values(groups).forEach(g=>g.forEach((n,i)=>g.slice(i+1).forEach(m=>{if(n.deck!==m.deck){a[n.id].push(m.id);a[m.id].push(n.id)}})));
  return a;
}
function findPathV020(start,end){
  if(!start||!end)return[];const a=adjV020(),q=[start],prev={[start]:null};
  while(q.length){const u=q.shift();if(u===end)break;(a[u]||[]).forEach(v=>{if(!(v in prev)){prev[v]=u;q.push(v)}})}
  if(!(end in prev))return[];const p=[];for(let c=end;c;c=prev[c])p.push(c);return p.reverse();
}

/* v0.28.4 routing profiles
   Weighted routing now supports user-selectable preferences while keeping
   the production navigator on the existing engine. */
const ROUTE_PROFILES_V0284={
  balanced:{label:'Balanced',desc:'Best practical route using normal walking, stairs and elevators.',stairsPenalty:140,elevatorPenalty:180,stairsBlocked:false},
  elevator:{label:'Elevators Preferred',desc:'Strongly favors elevators when a reasonable elevator route exists.',stairsPenalty:1200,elevatorPenalty:90,stairsBlocked:false},
  accessible:{label:'No Stairs / Accessible',desc:'Excludes staircase edges; elevators are used for deck changes when available.',stairsPenalty:Infinity,elevatorPenalty:180,stairsBlocked:true}
};
let shipnetRouteProfileV0284=localStorage.getItem('cruise-nav-route-profile-v0284')||'balanced';
if(!ROUTE_PROFILES_V0284[shipnetRouteProfileV0284])shipnetRouteProfileV0284='balanced';
function routeProfileV0284(){return ROUTE_PROFILES_V0284[shipnetRouteProfileV0284]||ROUTE_PROFILES_V0284.balanced}
function routeEdgeCostV0284(e,a,b,profile){
  const kind=e.kind||'walk';
  const dx=(a.x||0)-(b.x||0),dy=(a.y||0)-(b.y||0);
  const distance=Math.hypot(dx,dy);
  if(kind==='stairs')return profile.stairsBlocked?Infinity:profile.stairsPenalty+distance;
  if(kind==='elevator')return profile.elevatorPenalty+Math.abs(Number(a.deck)-Number(b.deck))*8;
  if(kind==='panel_link'||a.panel!==b.panel)return 30;
  if(kind==='destination')return 2;
  return distance;
}
function weightedGraphV0284(state,profile){
  const nodes=state.nodes||[],edges=state.edges||[],by=Object.fromEntries(nodes.map(n=>[n.id,n])),adj={};
  nodes.forEach(n=>adj[n.id]=[]);
  edges.forEach(e=>{
    const a=by[e.a],b=by[e.b];if(!a||!b)return;
    const cost=routeEdgeCostV0284(e,a,b,profile);if(!Number.isFinite(cost))return;
    adj[e.a].push({id:e.b,kind:e.kind||'walk',cost});
    adj[e.b].push({id:e.a,kind:e.kind||'walk',cost});
  });
  const groups={};
  nodes.filter(n=>n.type==='elevator'&&n.verticalGroup).forEach(n=>(groups[n.verticalGroup]??=[]).push(n));
  Object.values(groups).forEach(group=>{
    for(let i=0;i<group.length;i++)for(let j=i+1;j<group.length;j++){
      const a=group[i],b=group[j];if(a.deck===b.deck)continue;
      const cost=profile.elevatorPenalty+Math.abs(Number(a.deck)-Number(b.deck))*8;
      adj[a.id].push({id:b.id,kind:'elevator',cost});
      adj[b.id].push({id:a.id,kind:'elevator',cost});
    }
  });
  return {adj,by};
}
function findWeightedPathV0284(start,end,state=loadShipnetV020(),profileKey=shipnetRouteProfileV0284){
  if(!start||!end)return null;
  const profile=ROUTE_PROFILES_V0284[profileKey]||ROUTE_PROFILES_V0284.balanced;
  const {adj,by}=weightedGraphV0284(state,profile);
  const dist={},prev={},edgeKind={},unvisited=new Set(Object.keys(adj));
  Object.keys(adj).forEach(id=>dist[id]=Infinity);
  dist[start]=0;prev[start]=null;
  while(unvisited.size){
    let u=null,best=Infinity;
    for(const id of unvisited){if(dist[id]<best){best=dist[id];u=id;}}
    if(u===null||best===Infinity)break;
    unvisited.delete(u);
    if(u===end)break;
    for(const e of (adj[u]||[])){
      if(!unvisited.has(e.id))continue;
      const nd=dist[u]+e.cost;
      if(nd<dist[e.id]){dist[e.id]=nd;prev[e.id]=u;edgeKind[e.id]=e.kind;}
    }
  }
  if(!(end in prev))return null;
  const ids=[],kinds=[];
  for(let cur=end;cur!==null;cur=prev[cur]){ids.push(cur);if(cur!==start)kinds.push(edgeKind[cur]||'walk');}
  ids.reverse();kinds.reverse();
  const distance=ids.slice(1).reduce((sum,id)=>{const a=by[prev[id]],b=by[id];return sum+(a&&b?Math.hypot((a.x||0)-(b.x||0),(a.y||0)-(b.y||0)):0)},0);
  return {ids,kinds,cost:dist[end],distance,profile:profileKey};
}
function compareRoutesV0284(bfsPath,weightedPath,profileKey=shipnetRouteProfileV0284){
  const profile=ROUTE_PROFILES_V0284[profileKey]||ROUTE_PROFILES_V0284.balanced;
  if(!weightedPath)return {status:'no-path',text:`${profile.label}: no weighted path was found.`};
  if(!bfsPath.length)return {status:'weighted-only',text:`${profile.label}: weighted router found ${weightedPath.ids.length} nodes where BFS found no path.`};
  const same=bfsPath.length===weightedPath.ids.length&&bfsPath.every((id,i)=>id===weightedPath.ids[i]);
  return same?{status:'same',text:`${profile.label}: both routers selected the same ${weightedPath.ids.length}-node path.`}:{status:'different',text:`${profile.label}: weighted router selected ${weightedPath.ids.length} nodes vs BFS ${bfsPath.length}.`};
}
function visibleEdgeV020(e){const a=nodeV020(e.a),b=nodeV020(e.b);return a&&b&&a.deck===shipnetDeckV020&&b.deck===shipnetDeckV020&&a.panel===shipnetPanelV020&&b.panel===shipnetPanelV020}
function svgV020(){
  const p=currentPanelV020(),s=loadShipnetV020(),nodes=panelNodesV020(),map=Object.fromEntries(s.nodes.map(n=>[n.id,n]));
  const testPairs=new Set();for(let i=0;i<shipnetTestPathV020.length-1;i++)testPairs.add([shipnetTestPathV020[i],shipnetTestPathV020[i+1]].sort().join('|'));
  const edges=s.edges.filter(visibleEdgeV020).map(e=>{const a=map[e.a],b=map[e.b],test=testPairs.has([e.a,e.b].sort().join('|'));return `<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" class="shipnet-edge ${e.kind==='destination'?'destination-spur':''} ${test?'test':''}"/>`}).join('');

  // v0.28.3: render the calculated test path as panel-local runs. This keeps
  // cross-deck stair/elevator edges out of the polyline while still making the
  // first node on the new deck visible as the route entry point.
  const routeRuns=[]; let run=[];
  shipnetTestPathV020.forEach(id=>{
    const n=map[id];
    if(n&&String(n.deck)===String(shipnetDeckV020)&&n.panel===shipnetPanelV020){
      run.push(n);
    } else if(run.length){
      routeRuns.push(run); run=[];
    }
  });
  if(run.length)routeRuns.push(run);
  const routeOverlay=routeRuns.filter(r=>r.length>=2).map(r=>`<polyline points="${r.map(n=>`${n.x},${n.y}`).join(' ')}" class="shipnet-test-polyline-v0283"/>`).join('');
  const routeEntryMarkers=routeRuns.length?routeRuns.filter(r=>r.length).map((r,i)=>{
    const n=r[0];
    const label=(shipnetTestPathV020.indexOf(n.id)>0 && ['stairs','elevator'].includes(map[shipnetTestPathV020[shipnetTestPathV020.indexOf(n.id)-1]]?.type) && String(map[shipnetTestPathV020[shipnetTestPathV020.indexOf(n.id)-1]].deck)!==String(n.deck))
      ? `<g class="shipnet-route-entry-v0283"><circle cx="${n.x}" cy="${n.y}" r="13"/><text x="${Math.min(n.x+18,p.w-160)}" y="${Math.max(18,n.y-14)}">ROUTE ENTERS DECK HERE</text></g>` : '';
    return label;
  }).join('') : '';

  const circles=nodes.map(n=>{const sel=n.id===shipnetSelectedV020,test=shipnetTestPathV020.includes(n.id);return `<g><circle cx="${n.x}" cy="${n.y}" r="${sel?10:test?9:7}" class="shipnet-node type-${n.type||'corridor'} ${sel?'selected':''} ${test?'test':''}"/>${(sel||['cabin','elevator','venue','landmark'].includes(n.type))&&n.label?`<g class="shipnet-label"><rect x="${Math.min(n.x+9,p.w-148)}" y="${Math.max(5,n.y-23)}" width="140" height="28" rx="7"/><text x="${Math.min(n.x+16,p.w-141)}" y="${Math.max(24,n.y-4)}">${esc(n.label)}</text></g>`:''}</g>`}).join('');
  return `<svg class="shipnet-svg-v020" viewBox="0 0 ${p.w} ${p.h}" preserveAspectRatio="none">${edges}${routeOverlay}${routeEntryMarkers}${circles}</svg>`;
}
function statsV020(){const s=loadShipnetV020(),deck=s.nodes.filter(n=>n.deck===shipnetDeckV020);return `${deck.length} deck nodes · ${s.nodes.length} ship nodes · ${s.edges.length} explicit connections`}
function routeEndpointNodesV028(){
  return loadShipnetV020().nodes
    .filter(n=>isDestinationTypeV025(n.type) && String(n.label||'').trim())
    .sort((a,b)=>{
      const da=Number(a.deck),db=Number(b.deck);
      if(da!==db)return da-db;
      return String(a.label).localeCompare(String(b.label));
    });
}
function nodeOptionV028(n){return `<option value="${n.id}">D${n.deck} · ${esc(n.label)}</option>`}
function renderNetworkEditorV019(){renderShipNetworkV020()}
function renderShipNetworkV020(){
  const host=el('networkContent');if(!host)return;loadShipnetV020();
  const localNet=loadShipnetV020(),bundledNet=bundledShipNetworkV0281();
  const localStats=shipNetworkStatsV0281(localNet),bundledStats=shipNetworkStatsV0281(bundledNet);
  const migrationNeeded=localStats.nodes<bundledStats.nodes;
  const migrationSource=localStorage.getItem('cruise-nav-ship-walknet-source-v0281')||'';
  const deck=SHIPNET_DECKS_V020[shipnetDeckV020],panel=currentPanelV020(),selected=nodeV020(shipnetSelectedV020),all=localNet.nodes,routeEndpoints=routeEndpointNodesV028();
  const migrationCard=migrationNeeded?`
    <section class="shipnet-panel" id="shipnetMigration0281" style="border:2px solid #c9dff2;background:#f8fbff">
      <h3>Verified Ship Network Available</h3>
      <p>Your local editor currently has <strong>${localStats.nodes} nodes / ${localStats.edges} connections</strong>. This build contains the larger verified network with <strong>${bundledStats.nodes} nodes / ${bundledStats.edges} connections</strong> across Decks ${bundledStats.decks.join(', ')}.</p>
      <p style="margin-top:8px"><strong>Nothing will be lost:</strong> your current local network will be backed up in this browser before the verified network is loaded.</p>
      <div class="shipnet-actions wrap">
        <button id="shipnetLoadBundled0281" class="primary-action">Load Verified Ship Network</button>
      </div>
    </section>`:`
    <section class="shipnet-panel" id="shipnetMigration0281" style="border:1px solid #bfe6cf;background:#f4fbf7">
      <h3>Verified Ship Network Loaded</h3>
      <p>This browser currently has <strong>${localStats.nodes} nodes / ${localStats.edges} connections</strong>. The editor is using the bundled verified network${migrationSource?' as its source':''}.</p>
    </section>`;
  host.innerHTML=`
  ${migrationCard}
  <div class="shipnet-workflow-v021">
    <strong>Recommended mapping order</strong>
    <span>1. Trace walking paths &nbsp; 2. Add elevators/stairs &nbsp; 3. Verify vertical travel &nbsp; 4. Place destination entrances</span>
  </div>
  <div class="shipnet-toolbar">
    <div class="shipnet-row">
      <label>Deck<select id="shipnetDeck">${Object.keys(SHIPNET_DECKS_V020).map(d=>`<option value="${d}" ${d===shipnetDeckV020?'selected':''}>Deck ${d}</option>`).join('')}</select></label>
      <label>Map panel<select id="shipnetPanel">${deck.panels.map(p=>`<option value="${p.id}" ${p.id===shipnetPanelV020?'selected':''}>${p.name}</option>`).join('')}</select></label>
    </div>
    <div class="shipnet-summary"><strong>${deck.name} · ${panel.name}</strong><span>${statsV020()}</span></div>
    <div class="shipnet-modes">${[['select','Select'],['path','Draw Path'],['transport','Place Stairs / Elevator'],['destination','Place Destination'],['stairslink','Connect Stairs'],['connect','Connect'],['move','Move']].map(([k,v])=>`<button type="button" data-shipmode="${k}" class="${shipnetModeV020===k?'active':''}" ${k==='move'&&!selected?'disabled':''}>${v}</button>`).join('')}</div>
    <p class="shipnet-help">${shipnetModeV020==='path'?'Tap along the center of every legal passenger walking area. Tap near an existing point to snap/connect instead of creating a duplicate. End the path before starting another disconnected walkway.':shipnetModeV020==='transport'?'Choose Elevator or Stairs below, then tap directly on an existing walking line. The editor inserts the transport point into the path automatically.':shipnetModeV020==='destination'?'Enter the destination name, choose its type, then tap the actual passenger entrance. The editor attaches that entrance to the nearest verified walking path without changing your destination location.':shipnetModeV020==='stairslink'?(shipnetStairFirstV024?'First stair selected. Switch to the matching deck and tap the matching stair.':'Tap the first stair. Then switch decks and tap the matching stair to create an explicit cross-deck connection.'):shipnetModeV020==='connect'?'Tap one existing point, switch panel/deck if needed, then tap the second point. This joins overlapping panels into one logical network.':shipnetModeV020==='move'?'Tap the corrected location of the selected point.':'Select a point to classify it. Elevator nodes can share a bank ID across decks.'}</p>
    ${shipnetModeV020==='transport'?`<div class="shipnet-transport-v022">
      <label>Place<select id="shipnetTransportType"><option value="elevator" ${shipnetTransportTypeV022==='elevator'?'selected':''}>Elevator</option><option value="stairs" ${shipnetTransportTypeV022==='stairs'?'selected':''}>Stairs</option></select></label>
      <label id="shipnetTransportGroupWrap" style="${shipnetTransportTypeV022==='elevator'?'':'display:none'}">Elevator bank<select id="shipnetTransportGroup">${Object.entries(SHIPNET_VERTICAL_V020).map(([k,v])=>`<option value="${k}" ${shipnetTransportGroupV022===k?'selected':''}>${v}</option>`).join('')}</select></label>
    </div>`:''}
    ${shipnetModeV020==='destination'?`<div class="shipnet-destination-v025">
      <label class="shipnet-destination-name">Destination name<input id="shipnetDestinationLabel" value="${esc(shipnetDestinationLabelV025)}" placeholder="e.g. Royal Theater"></label>
      <label>Type<select id="shipnetDestinationType">
        <option value="venue" ${shipnetDestinationTypeV025==='venue'?'selected':''}>Venue</option>
        <option value="landmark" ${shipnetDestinationTypeV025==='landmark'?'selected':''}>Landmark / neighborhood</option>
        <option value="cabin" ${shipnetDestinationTypeV025==='cabin'?'selected':''}>Cabin</option>
      </select></label>
      <div class="shipnet-destination-status">${destinationStatsV025()}</div>
    </div>`:''}
    ${shipnetModeV020==='stairslink'?`<div class="shipnet-stair-connect-v024">
      <strong>${shipnetStairFirstV024?'First stair selected':'No stair selected'}</strong>
      ${shipnetStairFirstV024?`<button id="shipnetCancelStairLink" class="secondary-action">Cancel Stair Pair</button>`:''}
    </div>`:''}
    <div class="shipnet-actions wrap">${shipnetModeV020==='path'?'<button id="shipnetEndPath" class="secondary-action">End Path</button>':''}<button id="shipnetUndo" class="secondary-action" ${shipnetUndoV021.length?'':'disabled'}>Undo</button></div>
  </div>
  <div class="shipnet-map-card">
    <div class="shipnet-map-head"><span>FORWARD / BOW</span><b>${deck.name}</b><span>AFT / STERN</span></div>
    <div id="shipnetMap" class="shipnet-map" style="aspect-ratio:${panel.w}/${panel.h}"><img src="${panel.src}" alt="${deck.name} ${panel.name} deck plan">${svgV020()}</div>
    <div id="shipnetCoord" class="shipnet-coord">Native panel coordinates: x 0-${panel.w}, y 0-${panel.h}</div>
  </div>
  <div class="shipnet-grid">
    <section class="shipnet-panel"><h3>Selected Point</h3>
      ${selected?`<label>Label<input id="shipnetLabel" value="${esc(selected.label||'')}" placeholder="Optional while tracing paths"></label>
      <label>Type<select id="shipnetType">${Object.entries(SHIPNET_TYPES_V020).map(([k,v])=>`<option value="${k}" ${selected.type===k?'selected':''}>${v.label}</option>`).join('')}</select></label>
      <label id="shipnetVerticalWrap" style="${selected.type==='elevator'?'':'display:none'}">Elevator / vertical bank<select id="shipnetVertical"><option value="">None</option>${Object.entries(SHIPNET_VERTICAL_V020).map(([k,v])=>`<option value="${k}" ${selected.verticalGroup===k?'selected':''}>${v}</option>`).join('')}</select></label>
      <div class="shipnet-meta">Deck ${selected.deck} · ${selected.panel} · x ${selected.x} · y ${selected.y}</div>
      <div class="shipnet-actions"><button id="shipnetSaveNode" class="primary-action">Save point</button><button id="shipnetDeleteNode" class="danger-action">Delete</button></div>`:'<p>Select an existing network point to label or classify it.</p>'}
    </section>
    <section class="shipnet-panel"><h3>Ship-wide Route Test</h3>
      <label>From<select id="shipnetFrom"><option value="">Choose current place…</option>${routeEndpoints.map(nodeOptionV028).join('')}</select></label>
      <label>To<select id="shipnetTo"><option value="">Choose destination…</option>${routeEndpoints.map(nodeOptionV028).join('')}</select></label>
      <label>Routing profile<select id="shipnetRouteProfile">${Object.entries(ROUTE_PROFILES_V0284).map(([k,v])=>`<option value="${k}" ${k===shipnetRouteProfileV0284?'selected':''}>${v.label}</option>`).join('')}</select></label>
      <div id="shipnetRouteProfileHelp" class="shipnet-profile-help">${esc(routeProfileV0284().desc)}</div>
      <button id="shipnetTest" class="primary-action">Compare BFS vs Weighted</button>
      <div class="shipnet-test">${shipnetWeightedTestV028?`<strong>${esc(shipnetWeightedTestV028.comparison.text)}</strong><br><span>BFS: ${shipnetWeightedTestV028.bfsLength} nodes · Weighted cost: ${shipnetWeightedTestV028.weightedCost.toFixed(1)} · Weighted: ${shipnetWeightedTestV028.weightedLength} nodes</span><br><small>Weighted path is highlighted on the map. Production navigation still uses the existing engine.</small>`:(shipnetTestPathV020.length?`${shipnetTestPathV020.length} nodes in route.`:'No route test selected.')}</div>
    </section>
  </div>
  <section class="shipnet-panel"><h3>Ship Network Data</h3><p>All decks save into one local ship-network database. Elevators connect automatically by elevator bank. Stair connections are explicit deck-to-deck links so routing cannot skip decks that a staircase does not serve.</p>
    <div class="shipnet-stair-status-v023"><strong>Stair links touching Deck ${shipnetDeckV020}:</strong> ${stairLinksForDeckV023(shipnetDeckV020).length}</div>
    <div class="shipnet-actions wrap"><button id="shipnetExportDeck" class="primary-action">Export Current Deck</button><button id="shipnetExportShip" class="primary-action">Export Entire Ship Network</button><label class="file-action">Import Network JSON<input id="shipnetImport" type="file" accept=".json,application/json"></label><button id="shipnetClearDeck" class="danger-action">Clear Current Deck</button><button id="shipnetReset" class="secondary-action">Reset Entire Editor</button></div>
  </section>`;
  bindShipnetV020();
}
function mapPointV020(e){const map=el('shipnetMap'),p=currentPanelV020(),r=map.getBoundingClientRect();return{x:Math.max(0,Math.min(p.w,(e.clientX-r.left)/r.width*p.w)),y:Math.max(0,Math.min(p.h,(e.clientY-r.top)/r.height*p.h))}}
function nearestV020(x,y,max=24){let best=null,d=max;panelNodesV020().forEach(n=>{const q=Math.hypot(n.x-x,n.y-y);if(q<d){d=q;best=n}});return best}
function exportJsonV020(data,name){const b=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}),u=URL.createObjectURL(b),a=document.createElement('a');a.href=u;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),1000)}
function bindShipnetV020(){
  if(el('shipnetLoadBundled0281')){
    el('shipnetLoadBundled0281').onclick=()=>{
      const current=shipNetworkStatsV0281(loadShipnetV020()),bundled=shipNetworkStatsV0281(bundledShipNetworkV0281());
      if(!confirm(`Replace the current editor network (${current.nodes} nodes / ${current.edges} connections) with the bundled verified ship network (${bundled.nodes} nodes / ${bundled.edges} connections)?\n\nA backup of the current network will be saved in this browser first.`))return;
      const result=loadBundledNetworkV0281();
      shipnetDeckV020='5';shipnetPanelV020='forward';
      alert(`Verified ship network loaded: ${result.bundled.nodes} nodes and ${result.bundled.edges} connections across Decks ${result.bundled.decks.join(', ')}.\n\nYour previous editor network was backed up before replacement.`);
      renderShipNetworkV020();
    };
  }
  el('shipnetDeck').onchange=e=>{shipnetDeckV020=e.target.value;shipnetPanelV020=SHIPNET_DECKS_V020[shipnetDeckV020].panels[0].id;shipnetPathLastV020=null;shipnetSelectedV020=null;renderShipNetworkV020()};
  el('shipnetPanel').onchange=e=>{shipnetPanelV020=e.target.value;shipnetPathLastV020=null;shipnetSelectedV020=null;renderShipNetworkV020()};
  document.querySelectorAll('[data-shipmode]').forEach(b=>b.onclick=()=>{shipnetModeV020=b.dataset.shipmode;if(shipnetModeV020!=='path')shipnetPathLastV020=null;if(shipnetModeV020!=='connect')shipnetConnectFirstV020=null;if(shipnetModeV020!=='stairslink')shipnetStairFirstV024=null;renderShipNetworkV020()});
  if(el('shipnetTransportType'))el('shipnetTransportType').onchange=e=>{shipnetTransportTypeV022=e.target.value;const w=el('shipnetTransportGroupWrap');if(w)w.style.display=shipnetTransportTypeV022==='elevator'?'':'none'};
  if(el('shipnetDestinationLabel'))el('shipnetDestinationLabel').oninput=e=>shipnetDestinationLabelV025=e.target.value;
  if(el('shipnetDestinationType'))el('shipnetDestinationType').onchange=e=>shipnetDestinationTypeV025=e.target.value;
  if(el('shipnetCancelStairLink'))el('shipnetCancelStairLink').onclick=()=>{shipnetStairFirstV024=null;shipnetSelectedV020=null;renderShipNetworkV020()};
  if(el('shipnetTransportGroup'))el('shipnetTransportGroup').onchange=e=>shipnetTransportGroupV022=e.target.value;
  if(el('shipnetEndPath'))el('shipnetEndPath').onclick=()=>{shipnetPathLastV020=null;shipnetModeV020='select';renderShipNetworkV020()};
  if(el('shipnetUndo'))el('shipnetUndo').onclick=undoShipnetV021;
  const map=el('shipnetMap');
  map.addEventListener('pointermove',e=>{const p=mapPointV020(e),panel=currentPanelV020();el('shipnetCoord').textContent=`Native panel coordinates: x ${Math.round(p.x)}, y ${Math.round(p.y)} · ${panel.name}`});
  map.addEventListener('click',e=>{
    const p=mapPointV020(e),near=nearestV020(p.x,p.y);
    if(shipnetModeV020==='destination'){
      const labelEl=el('shipnetDestinationLabel');
      const typeEl=el('shipnetDestinationType');
      const dest=placeDestinationV025(p.x,p.y,labelEl?labelEl.value:shipnetDestinationLabelV025,typeEl?typeEl.value:shipnetDestinationTypeV025);
      if(dest){
        shipnetSelectedV020=dest.id;
        shipnetDestinationLabelV025='';
        renderShipNetworkV020();
      }
      return
    }
    if(shipnetModeV020==='stairslink'){
      if(!near||near.type!=='stairs'){alert('Tap a stair point.');return}
      if(!shipnetStairFirstV024){
        shipnetStairFirstV024=near.id;
        shipnetSelectedV020=near.id;
        renderShipNetworkV020();
        return;
      }
      if(connectStairsV024(shipnetStairFirstV024,near.id)){
        shipnetStairFirstV024=null;
        shipnetSelectedV020=near.id;
        shipnetModeV020='select';
        renderShipNetworkV020();
      }
      return
    }
    if(shipnetModeV020==='transport'){
      const n=placeTransportV022(p.x,p.y);
      if(n){shipnetSelectedV020=n.id;shipnetModeV020='select';renderShipNetworkV020()}
      return
    }
    if(shipnetModeV020==='path'){
      if(near){
        if(shipnetPathLastV020&&shipnetPathLastV020!==near.id)addEdgeV020(shipnetPathLastV020,near.id);
        shipnetPathLastV020=near.id;
        shipnetSelectedV020=near.id;
      }else{
        const n=addNodeV020(p.x,p.y);
        if(shipnetPathLastV020)addEdgeV020(shipnetPathLastV020,n.id);
        shipnetPathLastV020=n.id;
        shipnetSelectedV020=n.id;
      }
      renderShipNetworkV020();return
    }
    if(shipnetModeV020==='move'&&shipnetSelectedV020){const n=nodeV020(shipnetSelectedV020);if(n){pushUndoV021();n.x=Math.round(p.x);n.y=Math.round(p.y);saveShipnetV020()}shipnetModeV020='select';renderShipNetworkV020();return}
    if(shipnetModeV020==='connect'){if(!near)return;if(!shipnetConnectFirstV020){shipnetConnectFirstV020=near.id;shipnetSelectedV020=near.id;renderShipNetworkV020()}else{addEdgeV020(shipnetConnectFirstV020,near.id,'bridge');shipnetConnectFirstV020=null;shipnetSelectedV020=near.id;shipnetModeV020='select';renderShipNetworkV020()}return}
    if(near){shipnetSelectedV020=near.id;renderShipNetworkV020()}
  });
  if(el('shipnetType'))el('shipnetType').onchange=()=>{const w=el('shipnetVerticalWrap');if(w)w.style.display=el('shipnetType').value==='elevator'?'':'none'};
  if(el('shipnetSaveNode'))el('shipnetSaveNode').onclick=()=>{
    const n=nodeV020(shipnetSelectedV020);if(!n)return;
    pushUndoV021();
    n.label=el('shipnetLabel').value.trim();
    n.type=el('shipnetType').value;
    if(n.type==='elevator'){
      const v=el('shipnetVertical');n.verticalGroup=v&&v.value?v.value:undefined;
    }else{
      delete n.verticalGroup;
    }
    saveShipnetV020();renderShipNetworkV020()
  };
  if(el('shipnetDeleteNode'))el('shipnetDeleteNode').onclick=()=>{if(confirm('Delete this network point and its connections?')){deleteNodeV020(shipnetSelectedV020);renderShipNetworkV020()}};
  if(el('shipnetRouteProfile')){
    el('shipnetRouteProfile').onchange=e=>{shipnetRouteProfileV0284=e.target.value;localStorage.setItem('cruise-nav-route-profile-v0284',shipnetRouteProfileV0284);const help=el('shipnetRouteProfileHelp');if(help)help.textContent=routeProfileV0284().desc;shipnetWeightedTestV028=null;shipnetTestPathV020=[];renderShipNetworkV020()};
  }
  el('shipnetTest').onclick=()=>{
    const from=el('shipnetFrom').value,to=el('shipnetTo').value,state=loadShipnetV020(),profile=el('shipnetRouteProfile')?el('shipnetRouteProfile').value:shipnetRouteProfileV0284;
    shipnetRouteProfileV0284=ROUTE_PROFILES_V0284[profile]?profile:'balanced';
    localStorage.setItem('cruise-nav-route-profile-v0284',shipnetRouteProfileV0284);
    if(!from||!to){shipnetWeightedTestV028=null;shipnetTestPathV020=[];renderShipNetworkV020();return;}
    const bfs=findPathV020(from,to),weighted=findWeightedPathV0284(from,to,state,shipnetRouteProfileV0284);
    shipnetTestPathV020=weighted?weighted.ids:bfs;
    shipnetWeightedTestV028={bfsLength:bfs.length,weightedLength:weighted?weighted.ids.length:0,weightedCost:weighted?weighted.cost:Infinity,comparison:compareRoutesV0284(bfs,weighted,shipnetRouteProfileV0284)};
    renderShipNetworkV020();
  };
  el('shipnetExportDeck').onclick=()=>{const s=loadShipnetV020(),ids=new Set(s.nodes.filter(n=>n.deck===shipnetDeckV020).map(n=>n.id));exportJsonV020({version:4,deck:shipnetDeckV020,nodes:s.nodes.filter(n=>ids.has(n.id)),edges:s.edges.filter(e=>ids.has(e.a)&&ids.has(e.b)),verticalEdges:s.edges.filter(e=>e.kind==='stairs'&&(ids.has(e.a)||ids.has(e.b)))},`cruise-navigator-deck${shipnetDeckV020}-walking-network.json`)};
  el('shipnetExportShip').onclick=()=>exportJsonV020(loadShipnetV020(),'cruise-navigator-ship-walking-network.json');
  el('shipnetImport').onchange=e=>{const f=e.target.files&&e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{const d=JSON.parse(r.result);if(!Array.isArray(d.nodes)||!Array.isArray(d.edges))throw Error();if(d.deck){
          const s=loadShipnetV020(),ids=new Set(s.nodes.filter(n=>n.deck===d.deck).map(n=>n.id));
          s.nodes=s.nodes.filter(n=>!ids.has(n.id)).concat(d.nodes);
          s.edges=s.edges.filter(e=>!ids.has(e.a)&&!ids.has(e.b)).concat(d.edges);
          const allIds=new Set(s.nodes.map(n=>n.id));
          (d.verticalEdges||[]).forEach(e=>{if(allIds.has(e.a)&&allIds.has(e.b)&&!s.edges.some(q=>(q.a===e.a&&q.b===e.b)||(q.a===e.b&&q.b===e.a)))s.edges.push(e)});
          shipnetStateV020=s
        }else shipnetStateV020=d;saveShipnetV020();applyStairLinksV023();renderShipNetworkV020()}catch(_){alert('Could not import that network JSON.')}};r.readAsText(f)};
  el('shipnetClearDeck').onclick=()=>{if(confirm(`Clear every mapped point and path from Deck ${shipnetDeckV020}? Other decks will not be changed.`)){clearCurrentDeckV021();renderShipNetworkV020()}};
  el('shipnetReset').onclick=()=>{if(confirm('Reset the entire ship-network editor to the verified Deck 7 seed? This affects all mapped decks.')){pushUndoV021();shipnetStateV020=cloneV020(SHIPNET_SEED_V020);saveShipnetV020();shipnetSelectedV020=null;shipnetTestPathV020=[];shipnetWeightedTestV028=null;renderShipNetworkV020()}};
}

try{applyStairLinksV023()}catch(err){console.error('Stair-link migration skipped:',err)}
debugLoadV0272();
renderCategories();renderSearch([]);renderDecks();renderLesson();renderCurrentLocationHome();
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

function updateHomeSearchDiagnosticV02813(){
  const box=el('searchDiagnosticV02813');
  if(!box)return;
  const q=(el('searchInput')?.value||'').toLowerCase().trim();
  if(!q){box.hidden=true;box.innerHTML='';return;}
  const norm=v=>String(v||'').toLowerCase();
  const dS=typeof destinations!=='undefined'&&destinations.some(d=>d.id==='sorrentos');
  const dP=typeof destinations!=='undefined'&&destinations.some(d=>d.id==='parkcafe');
  const lS=typeof locations!=='undefined'&&locations.some(d=>d.id==='sorrentos');
  const lP=typeof locations!=='undefined'&&locations.some(d=>d.id==='parkcafe');
  const matches=typeof destinations!=='undefined'?destinations.filter(d=>(norm(d.name)+' '+norm(d.area)+' '+norm(d.keywords)).includes(q)):[];
  const exCount=typeof exploreVenues!=='undefined'?exploreVenues.length:'unavailable';
  box.innerHTML=`<strong>DEV DIAGNOSTIC · HOME SEARCH</strong><div>Query: <b>${esc(q)}</b></div><div>destinations: <b>${typeof destinations!=='undefined'?destinations.length:'unavailable'}</b> · exploreVenues: <b>${exCount}</b> · locations: <b>${typeof locations!=='undefined'?locations.length:'unavailable'}</b></div><div>Sorrento's in destinations: <b>${dS?'YES':'NO'}</b> · in locations: <b>${lS?'YES':'NO'}</b></div><div>Park Café in destinations: <b>${dP?'YES':'NO'}</b> · in locations: <b>${lP?'YES':'NO'}</b></div><div>Search matches: <b>${matches.length}</b>${matches.length?` · ${matches.slice(0,8).map(d=>esc(d.name)).join(' | ')}`:''}</div>`;
  box.hidden=false;
}
function runHomeSearchV02818(input){
  const q=String(input?.value||'').toLowerCase().trim();
  if(!q){renderSearch([]);updateHomeSearchDiagnosticV02813();return;}
  renderSearch(destinations.filter(d=>(d.name+' '+d.area+' '+d.keywords).toLowerCase().includes(q)));
  updateHomeSearchDiagnosticV02813();
}
// Bind at the document level so the Home search keeps working even if the input
// element is ever replaced by another render pass. Capture also handles iPhone/Safari input reliably.
document.addEventListener('input',e=>{if(e.target&&e.target.id==='searchInput')runHomeSearchV02818(e.target);},true);
document.addEventListener('search',e=>{if(e.target&&e.target.id==='searchInput')runHomeSearchV02818(e.target);},true);
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

const BUILD_VERSION = '0.28.13-dev9';
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
renderCurrentLocationHome();
updateHeaderVersion();
ensureUpdateBanner();

el('closeMap').onclick=closeMap;
el('mapOverlay').addEventListener('click',e=>{if(e.target===el('mapOverlay'))closeMap()});
if('serviceWorker' in navigator){
  window.addEventListener('load', async ()=>{
    try {
      const reg = await navigator.serviceWorker.register('sw-v02817.js');
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

function syncLocationsFromDestinationsV02813(){
  const seen=new Set();
  const merged=[{id:'cabin7456',name:'Cabin 7456',deck:'7',area:'Forward / center',icon:'🏠',mapDeck:'7',mapNode:null,keywords:'cabin 7456 home'}];
  locations.forEach(x=>{ if(x.id!=='cabin7456'&&!seen.has(x.id)){ seen.add(x.id); merged.push(x); } });
  destinations.forEach(d=>{
    if(seen.has(d.id))return;
    seen.add(d.id);
    merged.push({id:d.id,name:d.name,deck:String(d.mapDeck||d.deck||''),area:d.area||'',icon:d.icon||'📍',mapDeck:String(d.mapDeck||d.deck||''),mapNode:d.mapNode||null,keywords:d.keywords||''});
  });
  locations.length=0;
  merged.forEach(x=>locations.push(x));
}

addExploreDestinations();
syncLocationsFromDestinationsV02813();
restoreCurrentLocation();
renderCurrentLocationHome();
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
