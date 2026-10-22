# Scrolling speed for YouTube

A small browser extension that adds a playback speed indicator to the YouTube player controls. Scroll the mouse wheel over it to change the speed in 0.05 steps, without opening YouTube's settings menu.

![Speed indicator showing 1.25 x next to the player's right-side controls](docs/images/speed-indicator.png)

The screenshot shows the extension running on a local test page that mimics YouTube's control bar.

## Controls

The indicator shows the current speed (for example `1.25 x`) to the left of the player's right-side buttons.

- Scroll up over the indicator: speed +0.05
- Scroll down over the indicator: speed -0.05
- Click the indicator: reset to `1.00 x`

## Install (unpacked)

Clone or download this repository first.

### Firefox

1. Open `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on...** and select `manifest.json` from this folder.

Temporary add-ons are removed when Firefox closes.

### Chrome and other Chromium browsers

1. Open `chrome://extensions` and turn on **Developer mode**.
2. Click **Load unpacked** and select this folder.

The extension uses Manifest V2. Chrome has phased out Manifest V2, so recent Chrome versions may refuse to load it; Firefox and Chromium builds that still accept Manifest V2 work.

## Notes

- The content script only runs on `youtube.com/watch` pages, once, when the page loads. If you open a video by navigating inside YouTube and the indicator is missing, reload the page.
