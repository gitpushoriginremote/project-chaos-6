# Project Chaos v0.1.0

## The Mission
You have been recruited to manage the entropy. This dashboard tracks real-time chaos events.

## Known Issues (The Gaps)
1. **Logic**: The 'Inject Chaos' button triggers the render function but the list doesn't seem to grow. Check `script.js` to see where the data is being lost.
2. **Visual**: The landing page footer is wider than the screen (`200vw`), causing a horizontal scrollbar. It should probably just fit the screen.
3. **Optimization**: The `renderEvents` function is messy and duplicates elements every time it's called. It needs a cleanup strategy.

## Tech Stack
- Pure HTML5
- CSS3 (with Glitch Aesthetics)
- Vanilla JS