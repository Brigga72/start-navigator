/* Vitality Spa venue hotfix. Star of the Seas spa spans Decks 12 and 14; passenger entrance is on Deck 14. */
(function(){
  if(typeof destinations==='undefined'||!Array.isArray(destinations)) return;
  if(!destinations.some(d=>d.id==='vitalityspa')){
    destinations.push({
      id:'vitalityspa',
      name:'Vitality Spa',
      deck:'12 & 14',
      area:'Forward · Entrance on Deck 14',
      category:'services',
      icon:'🧖',
      keywords:'vitality spa couples salt scrub massage treatment thermal suite salon wellness',
      note:'Vitality Spa spans Decks 12 and 14. Passenger entrance is through Deck 14 near Vitality Cafe and To Dry For.',
      confidence:'VENUE + DECK 14 ENTRANCE VERIFIED; DECK 14 WALKING GEOMETRY NOT YET TRACED',
      mapDeck:'14',
      mapNode:'vitalityspa',
      route:[
        {kind:'walk',text:'Leave Cabin 7456 and follow the verified Deck 7 corridor to the forward elevator bank.'},
        {kind:'elevator',text:'Take the elevator to Deck 14.'},
        {kind:'orient',text:'On Deck 14, follow signs toward Vitality Spa, Vitality Cafe and To Dry For.'},
        {kind:'arrive',text:'Enter Vitality Spa on Deck 14. The treatment areas continue within the two-level spa complex.'}
      ]
    });
  }
  if(typeof renderCategories==='function') renderCategories();
})();
