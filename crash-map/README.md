# Crash Map

**Status: beta**

Live app: https://snsydia.github.io/crash-map/

A mobile-first app for mountain bikers to log crashes and where on the body they got hurt. It shows which body parts take the most damage and which protective gear may be worth it.

## Pages

- **Map**: 2D front and back body drawings, or a 3D body. Injuries show as a type-coloured glow, or as a heat map with symbols.
- **Stats**: totals, most-hit areas, how you crash, injury types, where you crash by trail, and injuries per month.
- **Log**: every crash with its injuries. Edit or delete entries here.

## Logging a crash

1. Pick an injury type: Abrasion, Cut, Deep tissue injury, Sprain/strain, Dislocation, Fracture, Concussion, or Other.
2. Set the severity from 1 to 5.
3. Tap the body where you were hurt.

Injuries are grouped into crashes. Each crash has a date, trail, what happened, and notes.

## Filters

Filter by time range, trail, depth (skin, bone, or brain), injury type, or individual crashes.

## Demo mode

Open demo mode from the settings (gear) menu. It loads sample crashes for a fictional rider on real trails at Revelstoke Mountain Resort and Kicking Horse Mountain Resort. Nothing is saved.

## Data

Data is stored only in your own browser (localStorage). There is no account and no server. Data is not synced between devices, and clearing browser data erases it.

## Files

- `index.html`: the app
- `body-mesh.json`: 3D body model
- `tex-v000.jpg`, `tex-v045.jpg`, `tex-v090.jpg`, `tex-v135.jpg`, `tex-v180.jpg`: 3D body skin textures
- `img/`: 2D body drawings. Licence: see `img/LICENSE-body-images.txt`.

three.js 0.160.0 and fonts load from public CDNs.

## Updating

Replace the files in this folder and commit. GitHub Pages republishes in a minute or two.
