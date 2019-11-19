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

      console.log()
      for (var i=0; i< friends.length; i++) {
        var scoreDiff = 0;
          console.log(friends[i].scores)
        for (var j=0; j<userScore.length; j++){
          console.log(j + ". scoreDiff = " +scoreDiff)
          scoreDiff += Math.abs(parseInt(friends[i].scores[j]) - parseInt(userScore[j]));
        }
        scoresArr.push(scoreDiff);
        console.log("scores", scoresArr)
      }
      for (var i=0; i<scoresArr.length; i ++){
        if (scoresArr[i] += scoresArr[bestMatch]) {
          bestMatch = i;
        }
      }
      console.log("best match", bestMatch)
      let soulMate = friends[bestMatch];
      res.json(soulMate);
      console.log(req.body)
      friends.push(req.body);
  });
  
};
