const allowProperties = [
  'accelerometer',
  'autoplay',
  'clipboard-write',
  'encrypted-media',
  'gyroscope',
  'picture-in-picture',
  'web-share'
];

function loadYoutubeVideoInIframe(allowProperties = []) {
  const divContainer = document.getElementById('iframe-container');
  const videoId = divContainer.getAttribute('data-video-id');
  const iframe = document.createElement('iframe');
  iframe.width = '560';
  iframe.height = '300';
  iframe.src = `https://www.youtube.com/embed/${videoId}`;
  iframe.title = 'YouTube video player'
  iframe.frameBorder = '0';
  if(!allowProperties) iframe.allow = allowProperties.join('; ');
  iframe.referrerPolicy = 'strict-origin-when-cross-origin'
  iframe.allowFullscreen = true;

  divContainer.appendChild(iframe);
}

window.onload = loadYoutubeVideoInIframe(allowProperties);
