var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi();

// Get multiple albums
spotifyApi.getAlbums(['5U4W9E5WsYb2jUQWePT8Xm', '3KyVcddATClQKIdtaap4bV'])
  .then(function(data) {
    console.log('Albums information', data.body);
  }, function(err) {
    console.error(err);
