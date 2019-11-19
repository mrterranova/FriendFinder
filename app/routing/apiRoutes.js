//load data
var friends = require("../data/friends");

//routing
module.exports = function(app) {

//GET for JSON only
  app.get("/api/friends", function(req, res) {
      res.json(friends[i])
  });

//POST requests
  app.post("/api/friends", function(req, res) {
      let userScore = req.body.scores;
      let allScores = [];
      var matched = 0;
      var difference = 0;

      //go through the array of friends
      for (var i=0; i< friends.length; i++) {
        for (var j=0; j<userScore.length; j++){
          difference += Math.abs(parseInt(friends[i].scores[j]) - parseInt(userScore[j]));
        }
        allScores.push(difference);
      }
      //find the friend that matches
      for (var i=0; i<allScores.length; i ++){
        if (allScores[i] == allScores[matched]) {
        matched = i;
        } else if (allScores[i] <= allScores[matched]){
            matched = i;
        }
      }
      let bestFriend = friends[matched];
      res.json(bestFriend);

      //add name to the array of friends
      friends.push(req.body);
  });
  
};
