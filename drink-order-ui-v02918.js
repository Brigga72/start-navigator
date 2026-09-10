/* v0.29.18 UI cleanup: hide redundant ordering guidance unless it adds information beyond the item name. */
(function(){
  function hasUsefulExtraGuidance(item){
    const text=String(item&&item.order||'').trim();
    if(!text)return false;
    const badge=String(item&&item.community||'');
    if(/BARTENDER REQUEST|ROYAL PRO TIP|STAR VENUE IDEA/i.test(badge))return true;
    return /(if available|whether|light on|floater|surprise|favorite spirit|sweetness level|house variation|variation|custom)/i.test(text);
  }
  window.drinkCard=function(d){
    const s=drinkStatus(d.id);
    return `<article class="drink-card ${s.dislike?'drink-muted':''}"><div class="drink-card-top"><span class="drink-emoji">${d.emoji}</span><div><div class="drink-badges"><span>${esc(d.community)}</span><span>${esc(d.style)}</span></div><h3>${esc(d.name)}</h3><p class="drink-taste">${esc(d.sweet)}</p></div></div><p class="drink-why">${esc(d.why)}</p>${hasUsefulExtraGuidance(d)?`<div class="drink-order-tip"><b>💬 ORDERING NOTE</b><span>${esc(d.order)}</span></div>`:''}<div class="drink-venue">📍 ${esc(d.venue)}${d.verifiedVenue?' · <b>Star / venue match</b>':''}</div><div class="drink-actions">${activeDrinkProfile==='both'?bothActions(d,s):individualActions(d,s)}</div></article>`;
  };
  if(typeof renderDrinks==='function')renderDrinks();
})();
