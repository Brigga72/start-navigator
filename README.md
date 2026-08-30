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

## v0.26.0
- Integrates the user's exported 163-node, 167-edge ship walking network into production navigation.
- Cabin 7456 routes now prefer the verified graph whenever the requested destination has a mapped entrance.
- Forward elevator banks are treated as vertical graph connections across mapped decks.
- Guided navigation renders the calculated verified path directly over the clean deck-plan panel.
- Mapped destinations receive VERIFIED ROUTE status.
- Known destinations without mapped entrance geometry remain available through the existing conservative fallback and are labeled ORIENTATION ROUTE or LOCATION ONLY.
- No exact corridor turns are invented for unmapped areas.
- Existing editor and local-storage network remain intact.

## v0.26.1
- Retires the legacy v0.18 Cabin 7456 to Basecamp overlay from guided navigation.
- Prevents a route polyline from spanning two different screenshot coordinate systems.
- Production route segments are now grouped by both deck and map panel.
- Fixes conflicting route-confidence labels by using the same route summary for the top card and route hero.
- The current ship export does not contain Deck 16 Thrill-panel nodes or a mapped Basecamp entrance.
- Cabin 7456 to Basecamp therefore follows verified graph geometry through the mapped Deck 16 Forward section, then changes to explicit orientation/signage guidance near Crown's Edge.
- No exact red line is drawn across the unmapped Crown's Edge to Basecamp section.
- Existing editor data, local-storage keys, maps, and verified ship network remain unchanged.

## v0.26.2
- Hotfixes Expand Map so it uses the same current guided-route step data as the normal guided view.
- Removes the remaining UI path back into the legacy v0.18 Basecamp overview renderer.
- Expanded orientation-only segments now show the same no-exact-line placeholder as the normal guided view.
- Prevents the obsolete Crown's Edge -> elevator lobby -> Adrenaline Peak -> Basecamp diagonal from reappearing in expanded view.
- No walking-network remapping or re-export is required.

## v0.27.0 - Navigation Cleanup

This release recenters Cruise Navigator on its primary goal: provide the clearest trustworthy passenger guidance supported by the mapped data, without inventing walking geometry.

### Navigation policy
- **Verified** steps use the user-mapped ship walking graph and may display an exact highlighted route on the clean deck plan.
- **Orientation** steps are used when the app knows the deck or general area but does not have continuous verified corridor geometry.
- **Signage** steps explicitly hand navigation over to Royal Caribbean's posted ship signs when the remaining path has not been mapped.
- Confidence is now evaluated per guided step. A trip may contain both verified and orientation/signage segments.
- The overall trip summary reports **VERIFIED ROUTE** only when every step is verified. Mixed routes are labeled **VERIFIED + ORIENTATION**.

### Map behavior
- Guided navigation shows an exact map only for steps backed by verified geometry.
- Unmapped portions display a clear orientation/signage message instead of a fabricated route line.
- The old Expand Map control is removed from guided navigation for now. A future full-screen map should be built directly on the production graph rather than the legacy route renderer.
- Remaining v0.18 Basecamp-specific UI routing is retired from normal guided navigation.

### Basecamp
- Cabin 7456 to Basecamp uses verified graph geometry through the mapped portions of Decks 7 and 16.
- Near Crown's Edge, where the current exported network no longer contains continuous verified geometry to Basecamp, navigation explicitly hands off to orientation/signage.
- No line is drawn through the unmapped Thrill Island section.

### Data and editor
- The v0.25 user-exported ship network remains the authoritative detailed-routing source embedded in production navigation.
- Existing editor functionality and local-storage keys are preserved.
- No remapping or re-export is required for this release.

## v0.27.1 - Verified Renderer Cleanup

This hotfix fixes the renderer issue exposed by the Cabin 7456 to Basecamp test.

### Root cause
`prodRouteV026()` was correctly building verified walking steps with graph metadata in an `extra` argument, but the shared `routeStep()` helper only accepted four arguments. The graph metadata was silently discarded. As a result, verified steps could not render the real deck-plan overlay and fell back to the older simplified ship schematic.

### Fixes
- `routeStep()` now preserves production graph metadata such as node IDs, deck, and map panel.
- Verified walking steps now render through `prodMapPanelV026()` using the actual clean deck plan and the exact nodes from the embedded user-mapped network.
- Verified steps no longer fall back to the simplified ship schematic. If verified map metadata is unexpectedly missing, Navigator shows a safe warning placeholder instead of implying unsupported geometry.
- Elevator steps retain the dedicated deck-change card.
- The dark step hero now shows **VERIFIED**, **ORIENTATION**, or **SIGNAGE** for the current step only.
- The trip-level accuracy banner at the top remains separate and may show **VERIFIED + ORIENTATION** for a mixed route.
- The hero's deck number now comes from the current route step instead of an index-based guess.
- Accuracy-help text now documents the v0.27 rule: show exactly what is mapped and never draw an exact line through unverified geometry.

### Expected Basecamp test
1. Deck 7 verified step: real Deck 7 plan with the mapped Cabin 7456 to Forward elevators path.
2. Deck 7 to Deck 16: verified elevator transition card.
3. Deck 16 verified step: real Deck 16 Forward plan with the mapped path toward Crown's Edge.
4. Crown's Edge onward: Orientation, no exact route line.
5. Final approach: Signage, no exact route line.

No walking-network remapping or new export is required.

## v0.27.2 - Route Diagnostics

This release adds route diagnostics without intentionally changing routing behavior.

### Logged data
- Requested start and destination.
- Matched production start/end graph nodes, including deck, panel, coordinates, and labels.
- BFS start/end IDs.
- Exact BFS node sequence.
- Edge kinds used between each returned node.
- Every generated guided step.
- Deck and panel assigned to each guided step.
- Exact node IDs passed to each verified map renderer.
- Exact coordinates rendered for every verified map segment.
- Elevator transitions.
- Panel transitions.
- Orientation/signage handoff steps.
- Route completion summary.

### Debug controls
Guided navigation now includes a collapsible **Route Debug** panel with:
- **Copy Log**
- **Export Log JSON**
- On-screen log preview

The latest route log is also persisted under:
`cruise-nav-debug-log-v0272`

### Purpose
The diagnostics are intended to determine whether incorrect route lines come from:
1. the BFS route itself,
2. graph edges or transport adjacency,
3. step segmentation,
4. map-panel assignment, or
5. SVG rendering input.

No walking-network remapping or export is required to use the debug tools.

## v0.27.3 - Deck Plan Coordinate Registration Fix

Deck 7 diagnostics proved that the saved route coordinates align with the exact
production asset (`assets/deck7-forward.png`, 475 x 1193).

The visible displacement was caused by CSS, not by the Deck 7 graph:

- `.guided-map svg` imposed `max-height: 310px`.
- The underlying deck image retained its full 475:1193 aspect ratio.
- The absolute SVG route overlay was therefore vertically compressed into the
  top portion of the deck plan.

v0.27.3 overrides that rule specifically for production verified maps:

`.guided-map .prod-map-v026 svg { width:100%; height:100%; max-height:none; }`

Temporary numbered route-node markers are also rendered on verified route maps
to make coordinate verification obvious during testing.

For the current Deck 7 route:
1. Cabin 7456 doorway: (214,397)
2. Cross corridor: (119,408)
3. Port corridor: (119,691)
4. Stairs: (147,693)
5. Forward elevators: (229,697)


## v0.27.4 - Deck 16 Panel Registration

This diagnostics build keeps the v0.27.3 coordinate-registration fix and adds
explicit visual registration support for the two Deck 16 production panels.

### Step 3
The final verified Deck 16 Forward node (`n_mtg8nx9v_6rp3`, 203,1166) now gets
an explicit **VERIFIED PATH ENDS HERE** callout. This does not change the route.

### Step 4
Instead of a blank orientation placeholder, the real Deck 16 Thrill Island
panel is rendered. A temporary **Anchor A** is shown near Crown's Edge at
(104,72). This is deliberately marked as a candidate registration anchor, not
as a verified walking route.

The purpose is to visually align the Forward panel endpoint with the Thrill
panel overlap. Once the correspondence is confirmed, the app can replace the
current maximum-Y Basecamp fallback with an explicit panel-link pair and then
trace verified walking geometry to Basecamp.

No unverified line is drawn through Thrill Island in this release.
