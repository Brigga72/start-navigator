# Cruise Navigator v0.12.0

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
