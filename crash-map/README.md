# Crash Map

**Version 0.25.2 · private beta from 3 November 2026**

Live app: https://snsydia.github.io/crash-map/

A mobile-first app for mountain bikers to log crashes and where on the body they got hurt. It shows which body parts take the most damage, where and how you crash, and which protective gear may be worth it. It works fully offline.

## Pages

- **Map**: 2D front and back body drawings, or a 3D body you can turn and zoom. Injuries show as a type-coloured glow, or (Heat) as symbols over a glow of how often and how badly each spot is hit.
- **Stats**: totals, most-hit body parts, where you crash by trail, how you crash, injury types, and a month-by-month chart.
- **Log**: every crash with its injuries, newest first. Open, edit or delete crashes here.

## Logging a crash

1. Pick an injury type: Abrasion, Cut, Deep tissue injury, Sprain/strain, Dislocation, Fracture, Concussion, or Other.
2. Set the severity from 1 (Scuff) to 5 (Severe).
3. Tap the body where you were hurt. Undo, or Erase, takes it back.

The crash's details sit beside the injuries (swipe on a phone): where you were riding, the trail (picked from the list for Revelstoke, Kicking Horse and Spider Mountain, or typed), what happened, the date and a note. **Finish and save** ends the crash; your next tap starts a new one.

## Filters

Filter by time range, depth (skin to bone), injury type, individual crashes, or trail.

## Guided tour and demo

- **Take an interactive tour** (welcome card or the gear menu): a hands-on walk through every feature with a sample rider.
- **Watch it instead** (welcome card or the gear menu): the same tour playing itself, in about a minute and a half; drag its progress bar to jump.
- **Load a Sample Rider** (welcome card or the gear menu): a season of sample crashes on real trails at Revelstoke Mountain Resort and Kicking Horse Mountain Resort.

Nothing done in either is saved; your own log comes back when you leave.

## Data and privacy

Your log is stored only in this browser (IndexedDB). There is no account, no server, no ads and no tracking, and the app makes no request to any other site. Data is not synced between devices, and clearing the browser's data erases it. Location is optional: one reading suggests the bike park you're at; only the park is remembered, never coordinates.

## Offline

A service worker (`sw.js`) keeps every file of the app on the device after the first visit, the 3D body and fonts included, so it opens and works with no signal. On a weak signal it opens the stored copy after 3 seconds. A new version is picked up on the next visit.

## Files

- `index.html`: the app page; `assets/`: its scripts and styles (file names carry a content hash)
- `sw.js`: the service worker (offline use)
- `body.glb`: the 3D body; `tex-v000.jpg` … `tex-v180.jpg`: its skin textures
- `img/`: 2D body drawings. Licence: `img/LICENSE-body-images.txt`
- `fonts/OFL.txt`: the licence of the Barlow fonts (the font files are in `assets/`)

Everything is self-contained: no CDN, no external fonts.

## Updating

Built from https://github.com/snsydia/crash-map (`npm run build` in `app/`). Replace this folder's files (keeping this README) with the contents of `app/dist/` and commit; GitHub Pages republishes in a minute or two.
