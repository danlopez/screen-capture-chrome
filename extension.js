chrome.runtime.onMessageExternal.addListener((message, sender, sendResponse) => {
  if (message.type === 'version') {
    sendResponse({
      type: 'version',
      version: '0.0.1'
    });
    return;
  }

  if (message.type == 'desktopCapture') {
    const sources = message.sources;
    const tab = sender.tab;
    chrome.desktopCapture.chooseDesktopMedia(sources, tab, (streamId) => {
      if (!streamId) {
        sendResponse({
          type: 'error',
          message: 'Failed to get stream ID'
        });
      } else {
        sendResponse({
          type: 'success',
          streamId: streamId
        });
      }
    });
  return true;
  }
  throw new Error('Invalid Message Type');
});
