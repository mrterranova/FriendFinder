//load data
var friends = require("../data/friends");

//routing
module.exports = function(app) {

//GET for JSON only
  app.get("/api/friends", function(req, res) {
    res.json(friends)
  });

//POST requests
  app.post("/api/friends", function(req, res) {
      let userScore = req.body.scores;
      let scoresArr = [];
      let bestMatch = 0;

      //go through the array of friends
      for (var i=0; i< friends.length; i++) {
        var scoreDiff = 0;
        for (var j=0; j<userScore.length; j++){
          scoreDiff += Math.abs(parseInt(friends[i].scores[j]) - parseInt(userScore[j]));
        }
        scoresArr.push(scoreDiff);
      }
      //find the friend that matches
      for (var i=0; i<scoresArr.length; i ++){
        if (scoresArr[i] == scoresArr[bestMatch]) {
            bestMatch = i;
        } else if (scoresArr[i] <= scoresArr[bestMatch]){
            bestMatch = i;
        }
      }
      let bestFriend = friends[bestMatch];
      res.json(bestFriend);

      //add name to the array of friends
      friends.push(req.body);
  });
  
};
