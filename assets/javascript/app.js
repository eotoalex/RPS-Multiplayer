function setUp () {
  
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDKnaI4gOuEncB8a-YaGFZNZmhVrmPxiMU",
    authDomain: "rps-multiplayer-412ad.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-412ad.firebaseio.com",
    projectId: "rps-multiplayer-412ad",
    storageBucket: "rps-multiplayer-412ad.appspot.com",
    messagingSenderId: "440933242683",
    appId: "1:440933242683:web:ce72b670085a8a6d51091e",
    measurementId: "G-M39HPF0RSW"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


//   Variables

var database = firebase.database();
var connectionRef = database.ref("/connections");
var connectedRef = database.ref(".info/connected");
var gameRef = database.ref("/game");

var wins = 0;
var losses = 0;




var player1 
var player2
let playersConnected = 0;
var connectionKeys = [];




//  for (var i = 0; i < playersConnected; i++){
// var players = p+toString[i];
// var keys = keys[i];
// 
// var playerObj = {
//    players:keys,
// } 

// 
// gameRef.set({
   // players:playerObj.keys
// })

  

// };

function logToSession (numplayers) {
sessionStorage.clear();

   for(var i = 1; i <= numplayers; i++){
      var player = "player" + i;

   var newEl = $("<p>");
   newEl.addClass("players");
   newEl.attr("value", player);
   var sS = $(".players").attr("value"); 

   $(".users-choice").on("click", function (){
      var move = $(this).attr("value");

      sessionStorage.setItem(
         player,move
       );
   })
   






   }

}

gameRef.on("value", getData);
function getData (data){
var x = data.val();
var keys = Object.keys("game");

gameRef.onDisconnect().remove();
}


// This will check how many players are connected.

connectedRef.on("value", function(snap){
    if (snap.val()){
        var con = connectionRef.push(true);
        con.onDisconnect().remove();

        $(".users-choice").on("click", function (){
         var playerMove = $(this).attr("value");
         
         
         logToSession (playersLoggedIn,playerMove);
      })
    
    }
});



// Listening for player connections and sorting user input in various database locations and allowing certain user permissions based on where they are in the database.

connectionRef.on("value", function (snapshot){
   playersLoggedIn = snapshot.numChildren();
   $("#logged-players").attr("value", playersLoggedIn);
   console.log(playersLoggedIn);
  

// Tester code to evaluate user responses.
function playersLogged (pllo,id1,id2){
  

   playersConnected = pllo;
  
   for (var i = 1; i < playersConnected; i++){
      var p ="player";
      var players = p+ i;
      console.log(players);
   

  

   if (playersConnected === 1){
$(".users-choice").on('click', function (){
   var choice = $(this).attr("value");
   var player1ID = id1;
   var player1Move = choice;
   $("#ready-player1").attr("move", choice)

   // Can post player stats before posting to the database.

   gameRef.push({
      player: players,
      ID:player1ID,
      p1Move:player1Move,
      result:""
   });
   
});
   }

   else if (playersConnected === 2){
      $(".users-choice").on('click', function (){
         var choice = $(this).attr("value");
         var player2ID = id2;
      var player2Move = choice;
      $("#ready-player2").attr("move", choice)

      gameRef.push({
         player2LogID:player2ID,
         p2Move:player2Move,
         result:""
      });
    
   });
   }

}
   // else{
   //    gameRef.push({
   //       player2LogID:"Watchers",
   //       p2Move:"Watchers",
   //       result:""
   //    });
   // }

   evaluateMoves ($("#ready-player1").attr("move"),$("#ready-player2").attr("move"))
   function evaluateMoves (p1Move,p2Move){

      
      if(p1Move === p2Move){
         console.log("DRAW");
         
         gameRef.push({
            result:"Draw"
         });

      }
      else if (p1Move === "rock" && p2Move === "scissors") {
         console.log("player wins.");

         gameRef.push({
            result:"win"
         });
         
         // gameRef.push({
         //    result:
         // });
      }
      else if (p1Move === "rock" && p2Move === "paper") {
         console.log("player1 loses");
         gameRef.push({
            result:"lose"
         });
      }
      else if(p1Move === "paper" && p2Move === "scissors"){
         console.log("player loses");
         gameRef.push({
            result:"lose"
         });

      }
      else if(p1Move === "paper" && p2Move === "rock"){
         console.log("player wins");
         gameRef.push({
            result:"win"
         });

      }
      else if(p1Move === "scissors" && p2Move === "rock"){
         console.log("player loses");
         gameRef.push({
            result:"lose"
         });

      }
      else if(p1Move === "scissors" && p2Move === "paper"){
         console.log("player wins");
         gameRef.push({
            result:"win"
         });

      }

   };
      
       
   
};



   

// Connection ref listening for new keys generated by new connections.
connectionRef.on("value", getData);
function getData (data){
var x = data.val();
var keys = Object.keys(x);


player1 = keys[0];
player2 = keys[1];











}
});




// When player presses start they become either player one or player two.

$("#start-game").on("click", function (){
   var still = $("#intro-gif").attr("still");
   var animated = $("#intro-gif").attr("src");

player1Selection.set({
   "pressed-start":true,

   dateAdded : firebase.database.ServerValue.TIMESTAMP

});

   if ($(this).val()){
    $("#intro-gif").attr("src",still);
    start = true;
   }

})


}

window.onload = function(){
 setUp();

};