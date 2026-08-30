# Cruise Navigator v0.15.0

Personal cruise navigation companion for Royal Caribbean's Star of the Seas, optimized for iPhone 13 Pro.

## v0.12.0 Personal Cruise Profile

This release adds sailing-specific data confirmed from Royal Caribbean documents and order confirmations:

- September 13–20, 2026, 7 Night Eastern Caribbean & Perfect Day
- Cabin 7456 on Deck 7, My Time Dining
- Port Canaveral Cruise Terminal 1, scheduled 4:30 PM departure
- Day-by-day itinerary for CocoCay, San Juan, St. Maarten and sea days
- Deluxe Beverage Package for both guests
- Hideaway Beach Day Pass for both guests
- Swimming Pigs & Stingray Tour, Day 2 at 10:30 AM
- Back to the Future: The Musical, Day 3 at 8:30 PM
- Campo Rico ATV Adventure, Day 4 at 2:00 PM
- Torque, Day 4 at 10:00 PM
- Kayak and Snorkel Adventure, Day 5 at 8:30 AM

Confirmed reservations are seeded into My Schedule once when upgrading to v0.12.0. User-created schedule items are preserved. Items may still be edited or deleted locally after the initial seed.

## Navigation accuracy

v0.11.0's Detailed Navigation foundation remains intact. Exact turn-by-turn directions are not invented when deck-plan geometry has not yet been encoded. Route steps continue to distinguish VERIFIED, ORIENTATION and SIGNAGE confidence.

## Update architecture

The existing GitHub Pages update architecture is preserved. v0.12.0 only advances the versioned asset URLs and service-worker cache to `cruise-nav-v012`.


## v0.13.0
- Added What’s Happening using user-supplied July 5–12, 2026 Star of the Seas Cruise Compass reference data.
- Added filters for trivia, karaoke, games, parties, dance, family activities and more.
- Reference events are clearly labeled and never presented as confirmed September times.
- Added Take Me There and Add to My Schedule actions for reference activities.
- Added mapped venue records for Spotlight Karaoke, Schooner Bar, Dueling Pianos, Music Hall, Boleros, Thorn & Thistle, AO Theater and Sports Court.
- Fixed the runtime header branding so it remains Cruise Navigator instead of reverting to Star Navigator.


## v0.14.0
- Adds **I Need a Drink** to Home.
- Seeds Royal Caribbean cruiser favorites, with conservative venue labeling.
- Adds style filters and **Surprise Me**.
- Adds a persistent **Drink Passport** with Favorite, Tried, and Not for Me states.
- Adds Take Me There when a recommendation has an existing mapped venue.
- Keeps drink recommendations available offline.
- Preserves all existing schedule, navigation, CocoCay, and update behavior.


## v0.15.0

- Adds separate Daniel and Wife Drink Passports.
- Adds a Both mode that excludes anything either person marked Not for Me.
- Both mode shows each person's status without merging or overwriting ratings.
- Surprise Me now respects the active profile and shared preferences in Both mode.
- Existing v0.14 drink ratings automatically migrate into Daniel's profile on first load.
- Remembers the last selected drink profile on the device.
- Preserves all existing schedule, navigation, CocoCay, What's Happening, and cruise-profile storage keys.


## v0.16.0
- Adds the first source-traced full-deck Route Overview.
- Cabin 7456 to Basecamp now uses the supplied Deck 7 and Deck 16 plans.
- Shows a highlighted walking path, elevator transition, You Are Here, and destination marker.
- Preserves conservative routing for destinations that have not yet been traced.
- Adds deck-plan assets to the offline service-worker cache.

## v0.17.0
- Corrects the Cabin 7456 route geometry.
- Uses the user's explicitly annotated Deck 7 and Deck 16 routes as the authoritative first verified route.
- Deck 7 now routes from Cabin 7456 through the interior cabin corridor to the port-side corridor and forward elevator lobby.
- Deck 16 now follows the confirmed walkway past Swim & Tonic, The Lime and Coconut, Dry Slide, Crown's Edge, the second elevator bank, Adrenaline Peak, and Basecamp.
- Removes the inaccurate generated red-line overlays from the v0.16 route overview for this route.
- Preserves all existing app data and local-storage keys.

## v0.18.0
- Replaces screenshot-as-route rendering with a reusable navigation graph.
- Clean Deck 7 and Deck 16 plans are now the map backgrounds.
- Route lines, start markers, elevator markers, and destination markers are generated dynamically with SVG.
- Cabin 7456 to Basecamp is the first graph-backed route.
- Encodes reusable nodes for the Deck 7 cabin corridor, forward elevators, Swim & Tonic, Lime and Coconut, Dry Slide, Chill Island, Crown's Edge, the Deck 16 midship elevators, Adrenaline Peak, and Basecamp.
- Adds generic graph pathfinding and map-segment grouping so future destinations can reuse existing walkway segments.
- Guided steps now use the same graph-backed real deck maps for the verified route.
- User-marked screenshots are retained only as source verification, not as the displayed navigation route.
