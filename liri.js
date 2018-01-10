var twitterKeys = require("./keys.js");
var spotifyKeys = require("./keys.js");
var fs = require("fs");
var inquirer = require("inquirer");
var Spotify = require('node-spotify-api');
var inputtwo
var request = require('request');
var master


//
function main(){
  var secondInput =  null ;
inquirer.prompt([
 {
      type: "list",
      message: "What do you want to do?",
      choices: ["my-tweets", "spotify-this-song", "movie-this","do-what-it-says", "exit"],
      name: "input"
    }
  ]).then(function logic(input){
    if(secondInput){
      master = inputtwo ;
      logic2();
    }
    else{
      master = input.input ;
      logic2();
    }
    function logic2(){
switch(master){
  case"do-what-it-says":
  fs.readFile("random.txt","utf8", function(error,data){
    var dataArr = data.split(",");
    inputtwo = dataArr[0];
    secondInput = dataArr[1];
    logic();
  });
  break;

  
	case "my-tweets":
	twitt();
	break;

    case "spotify-this-song":
     if(secondInput){
          spotify(secondInput);
          break;
        };
    inquirer.prompt([
      {
      type: "input",
      message: "what song?",
      name: "song"
      },
      ]).then(function(input){
        if(input.song){
     spotify(input.song);
        }
        else{
          spotify("The Sign Ace of Base")
        };
      });
      break;

	case "movie-this":
    inquirer.prompt([
      {
      type: "input",
      message: "What movie?",
      name: "movie"
      },
      ]).then(function(input){
        if(input.movie){
	       movie(input.movie);
        }
        else{
          movie("Mr. Nobody")
        }
      });
	   break;
  case "exit":
  break;
};

}
});

function twitt(){
	twitterKeys.get("statuses/user_timeline",{user_id: 25073877, count: 20,tweet_mode:"extended" },function(error,tweets,response){
		if(error) throw error;
   // console.log(JSON.stringify(tweets, null, 2));
        console.log("\n----------------------"+ "\n" +'\x1b[33m%s\x1b[0m',"TWEETS"); 
        console.log ("\n---------------------");
  		for(var i = 0; tweets.length > i ; i++){
        console.log("Tweet #"+(i+1) +" "+tweets[i].created_at);
  			console.log(tweets[i].full_text);
  			console.log("-------------------------")
  		}
        console.log("\n----------------------")
      main();
	});
};

function spotify(song){
  var song = song
	var spotifyKeys = new Spotify({
    id: "46ed2ace80484feea6b9f537c9ba52e8",
    secret: "6a850c75f09349c498c4b43828e51a79"
  });
	fs.readFile("random.txt", "utf8", function(error, data){

	});

  spotifyKeys.search({ type: 'track', query: song}, function(err, data) {
  	// console.log(data.tracks.items[0]);
    console.log("\n ----------------");
  	console.log(data.tracks.items[0].album.artists[0].name);
  	console.log(data.tracks.items[0].name);
  	console.log(data.tracks.items[0].external_urls.spotify);
  	console.log(data.tracks.items[0].album.name);
    console.log("-------------------\n");
      main();
  // if (err) {
  //   return console.log('Error occurred: ' + err);
  //   }
 
    });
};

function movie(movie){

  var omdb = {
    url : "http://www.omdbapi.com/?t="+movie+"&apikey=111bf222",  
}
request.get(omdb, (error,response,body) => {
  let json = JSON.parse(body);
  console.log(
    "\n----------------------- \n"+
    "Movie Title: "+json.Title + 
    "\n" + 
    "Rleased: "+json.Year +
    "\n"+
    "IMDB Rating: " +json.Ratings[0].Value +
    "\n" +
    "Rotten Tomatoes Rating: "+json.Ratings[1].Value +
    "\n" +
    "Country: "+json.Country +
    "\n" +
    "Language: "+json.Language +
     "\n" +
    "Plot: "+json.Plot +
      "\n" +
    "Actors:"+json.Actors +
    "\n---------------------- "
    );
  console.log("\n");
main();
});

};


//endmain
};
main();