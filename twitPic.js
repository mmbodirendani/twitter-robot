var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: ' ',
  consumer_secret: ' ',
  access_token_key: '2613781036-',
  access_token_secret: ' '
});



// Load your image
var data = require('fs').readFileSync('image.jpg');

// Make post request on media endpoint. Pass file data as media parameter
client.post('media/upload', {media: data}, function(error, media) {

  if (!error) {

    // If successful, a media object will be returned.
    console.log(media);

    // Lets tweet it
    var status = {
      status: 'I am a tweet',
      media_ids: media.media_id_string // Pass the media id string
    }

    client.post('statuses/update', function(error, tweet, response) {
      if (!error) {
        console.log(tweet);
      }
    });

  }
});