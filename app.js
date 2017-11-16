var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: ' ',
  consumer_secret: ' ',
  access_token_key: ' ',
  access_token_secret: ' '
});



var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets) {
  if (!error) {
    console.log(tweets);
  }
});

var ary = [ 



'post1',

'post2',

'post3'



];
var i=0;
setInterval(function(){
    console.log(ary[i]);
client.post('statuses/update', {ary[i]})
  .then(function (tweet) {
    console.log(tweet);
  })
  .catch(function (error) {
    throw error;
  })

    i++;
},


36000
 
 ); 