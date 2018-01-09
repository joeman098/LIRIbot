var twitterKeys = require("./keys.js");
var spotifyKeys = require("./keys.js");
var fs = require("fs");
//

var request = require('request');
//
var action = process.argv[2];
var query = process.argv[3];

//

switch(action){
	case "my-tweets":
	twitt();
	break;

    case "spotify":
    spotify();
    break;

	// case "movie-this"
	// movie();
	// break;

	// case "do-what-it-says"
	// dowhat();
	// break;
}

function twitt(){
	twitterKeys.get("statuses/user_timeline",{user_id: 25073877, count: 20,tweet_mode:"extended" },function(error,tweets,response){
		if(error) throw error;
   // console.log(JSON.stringify(tweets, null, 2));
  		for(var i = 0; tweets.length > i ; i++){
  			console.log("tweet #"+i+": "+ tweets[i].full_text);
  			console.log("-------------------------")
  		}
	});
}
function spotify(){
	var songs =[]
	fs.readFile("random.txt", "utf8", function(error, data){

	});




  spotifyKeys.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  	console.log(data);
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
});
};