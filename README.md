# Screen Capture Chrome extension

A Chrome extension granting access to the [Chrome Desktop Capture API](https://developer.chrome.com/extensions/desktopCapture).
## Installation

1. Clone this repository
2. Navigate to chrome://extensions in your Chrome Browser
3. Toggle Developer Mode in the top right corner
4. Click "Load Unpacked" and select this project's folder. Note the extension ID that is generated later. You'll need to use this in your calling code.


## Usage

This is meant to be used with [Practice](https://www.practice.xyz). The extension receives messages from a web app at localhost or `*.practice.xyz*` and responds by opening Chrome's desktop capture interface (or returning the version). When a selection is made, it then returns a [MediaStream](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream) object.

In your web app:
```javascript
// Check if the extension is installed
chrome.runtime.sendMessage(this.options.extensionId, { type: "version" }, (response) => {
  // Check if version is greater than some value with response.version.
});

// Get a MediaStream from your desktop
const CHROME_EXTENSION_ID=<your_app_id>;
const defaults = {
  type: 'desktopCapture',
  sources: ['window', 'screen', 'tab'] // Send an array with at least one of these sources
};
chrome.runtime.sendMessage(CHROME_EXTENSION_ID, defaults, response => {
  // Access your stream through response.streamId
});
```

## Debugging

Access the chrome extension debugger by navigating to chrome://extensions and then clicking on "background page" on this extension.
