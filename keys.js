console.log('this is loaded');
var Twitter = require('twitter');
var twitterKeys = new Twitter ({
  consumer_key: 'JjRCqwS3iY9kVrFmzfL9dqFpr',
  consumer_secret: 'WYPqcyX0QyZTo463kSAZYqNu1bDFmm6b53F0jCigtw0FIqgwaS',
  access_token_key: '846880567983570944-hnGl2xZcYQulyU5ckopTKZJkX0XCO1N',
  access_token_secret: 'WxsjmocqeM8hCkjq7iIKPd8WgXwwY9dItXFLZcsCXxWHA',
})

module.exports = twitterKeys;

// var Spotify = require('node-spotify-api');
// var spotifyKeys = new Spotify({
//   id: "46ed2ace80484feea6b9f537c9ba52e8",
//   secret: "6a850c75f09349c498c4b43828e51a79"
// });

// module.exports = spotifyKeys;