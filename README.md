# Endless Hour & Minute Wheel

A simple web-based time picker featuring endless scrolling wheels for hours and minutes, with touch and click support and a click sound effect.

## Features

- **Endless wheels** for selecting hours (0–23) and minutes (0–59)
- **Touch gestures** and **arrow buttons** for smooth interaction
- **Animated transitions** and responsive design
- **Click sound effect** for feedback
- **Vanilla JS & CSS** (no dependencies)

## Usage

Open [`index.html`](index.html) in your browser.

## File Structure

- [`index.html`](index.html): Main HTML file
- [`style.css`](style.css): Styling for wheels and layout
- [`hour.js`](hour.js): Hour wheel logic
- [`minutes.js`](minutes.js): Minute wheel logic
- [`aux.js`](aux.js): Utility functions (e.g., [`getWrappedValue`](aux.js))
- [`sound.js`](sound.js): Click sound effect ([`playClickSound`](sound.js))
- [`touch.js`](touch.js): Touch gesture support

## Customization

- Change wheel styling in [`style.css`](style.css)
- Adjust wheel behavior in [`hour.js`](hour.js) and [`minutes.js`](minutes.js)

## License