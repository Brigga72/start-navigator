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

## v0.19.0
- Adds an in-app Deck 7 Walking Network Editor.
- Uses the clean Deck 7 deck plan as the map background.
- Stores every point in the map's native 475 x 1193 coordinate system, independent of phone/desktop display size.
- Draw Path mode adds successive corridor-center points and automatically connects them.
- Select mode edits node labels/types.
- Move mode relocates a selected node with one map tap.
- Connect mode joins existing path segments.
- Supports Junction, Corridor, Elevator, Stairs, Cabin, Venue, and Landmark node types.
- Includes shortest-path testing across the currently mapped network.
- Automatically saves the editor network in local storage.
- Exports/imports the complete network as JSON for direct integration into Cruise Navigator.
- Seeds the editor with the currently verified Cabin 7456 to forward-elevator segment.

## v0.20.0
- Converts the Deck 7 editor into a ship-wide walking-network development tool.
- Supports Decks 5, 6, 7, 8, 15, and 16.
- Supports multiple map panels for long decks and overlapping source screenshots.
- Keeps coordinates native to each map panel so overlays remain aligned on any screen.
- Preserves the verified Cabin 7456 to Forward Elevators Deck 7 network as the seed.
- Adds shared elevator-bank IDs for automatic vertical graph links between decks.
- Connect mode can bridge nodes across different panels so separate screenshots form one logical deck network.
- Adds ship-wide route testing across walking connections and shared elevator banks.
- Adds Current Deck and Entire Ship Network JSON export.
- Adds deck-level or whole-network JSON import.
- This remains a development tool. Verified network data can later drive end-user navigation.

## v0.21.0
- Refines the ship network editor around a walking-path-first workflow.
- Adds Clear Current Deck, removing all nodes and edges on only the selected deck.
- Keeps Reset Entire Editor as the full-network reset.
- Adds Undo for recent editor changes.
- Draw Path now snaps to nearby existing nodes instead of creating duplicates.
- Increases node hit/snap radius for easier iPhone editing.
- Fixes verticalGroup data so only elevator nodes can retain an elevator-bank ID.
- Hides elevator-bank selection unless the selected point type is Elevator.
- Adds a recommended mapping order banner: walking paths, intersections, elevators/stairs, destinations last.

## v0.22.0
- Adds Place Stairs / Elevator mode to the ship walking-network editor.
- Tap on an existing walking path to insert a transportation node directly into that path.
- If tapped between two path nodes, the existing edge is split automatically so routing must pass through the new elevator/stair point.
- Elevator placement includes Forward, Midship, Aft, or Other bank classification.
- Stair nodes do not receive elevator-bank metadata.
- Existing v0.20 ship-network local storage is preserved.
- Cleans invalid verticalGroup values from non-elevator nodes when loading older editor data.
- Keeps walking geometry, transportation nodes, and later destination placement as separate mapping phases.
- Fixes the older graph-guided SVG overlay sizing rule in production navigation styles.

## v0.23.0
- Adds explicit cross-deck stair links using the user-marked stair nodes.
- Stair routing now connects only physically matched stair endpoints instead of using elevator-style all-deck grouping.
- Added matched links:
  - Forward port stairs: Deck 5↔6, 6↔7, 7↔8, 15↔16.
  - Forward starboard stairs: Deck 5↔6 and 15↔16.
  - Royal Promenade stair: Deck 5↔6.
  - Royal Promenade/Central Park stair: Deck 6↔8.
- Existing forward elevators continue to use the shared Forward elevator-bank vertical group.
- Deck exports are now version 3 and include `verticalEdges` for stair links touching that deck.
- Deck import accepts `verticalEdges` and restores them when both endpoints exist.
- Existing v0.20 ship-network local storage remains authoritative and is migrated in place.

## v0.23.1
- Hotfix for v0.23.0 startup failure that left the home screen visible but prevented all clicks.
- Restores the missing `STAIR_LINKS_V023` definition used by the stair-link migration.
- Adds a startup safety guard so a future stair-link migration error cannot stop the rest of the app from initializing.
- Preserves all existing walking-network local storage and v0.23 stair-link behavior.

## v0.24.0
- Adds a visible Connect Stairs editor mode.
- Tap a stair, switch decks, and tap the matching stair to create an explicit cross-deck `stairs` edge.
- Prevents stair pairing to another stair on the same deck.
- Prevents duplicate stair links.
- Linked and unlinked stair nodes now render with different visual treatment and status text.
- Adds a cancel action while a first stair is selected.
- Keeps elevator bank behavior unchanged.
- Existing v0.23 stair links remain in the graph and show as already linked.

## v0.25.0
- Adds a dedicated Place Destination mode to the ship walking-network editor.
- Enter a destination name, choose Venue, Landmark/Neighborhood, or Cabin, then tap the actual passenger entrance.
- Destination placement attaches to the nearest verified walking path automatically.
- When the attachment lands between two walking nodes, the editor inserts a junction and splits the original walking edge.
- The destination entrance remains at the exact point the mapper tapped and connects to the walking network with a separate `destination` spur.
- Destination spurs render differently from the verified walking network so the base path geometry remains visually distinct.
- Placement is rejected when no verified walking path is close enough, preventing accidental long connections through non-walkable space.
- Route Test can immediately use newly mapped destinations because destination spurs are part of the same graph.
- Existing walking paths, elevator/stair nodes, stair links, and local-storage key are preserved.
- Deck export schema is version 4 while remaining compatible with prior node/edge data.
