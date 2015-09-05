chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('https://bitbucket.org/avinash_ravi/visitor-log/overview.html', {
    'innerBounds': {
      'width': 1200,
      'height': 400
    }   
  });
});