# Cruise Navigator v0.9.1

Personal iPhone-first cruise navigation companion for Royal Caribbean's Star of the Seas, centered on Cabin 7456.

## v0.9.1
- Explore is bundled into the main application script.
- Explore -> Deck -> Venue -> Details -> Take Me There.
- Personal Must-Do selections persist in local storage.
- Current starting location persists.
- Version/update detection added.
- Service worker uses a versioned cache and network-first navigation/version checks.
- Guided navigation, mini-maps, Forward/Aft ship compass, flexible From/To, and Take Me Home retained.

The map diagrams are simplified schematics based on deck references supplied during development and are not to scale. Follow ship signage and crew instructions onboard.


v0.8.1 fixes the Explore deck selector, adds a general deck location map to each Explore detail view, and keeps the venue details connected to Take Me There.


Update handling was rebuilt so a new service worker/cache is activated before reloading when the user taps UPDATE. Build version and version.json now match.
