import YOUTUBE_API_KEY from '../../src/config/youtube.js';

var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      maxResults: options.max,
      key: options.key,
      q: options.query,
      type: 'video',
      part: 'snippet',
      videoEmbeddable: true
    },
    success: (data) => {
      callback(data.items);
    }
  });
};

export default searchYouTube;
