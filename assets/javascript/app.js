
  
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
var usersChoice = "greatness"
var playerInd = database.ref("/playerController");
var player1Selection = database.ref("/user1-choice");
var player2Selection = database.ref("/user2-choice");
var connectionRef = database.ref("/connections");
var connectedRef = database.ref(".info/connected");
var choiceMade = true;
var start = false;
var wins = 0;
var losses = 0;
var timeStamp="";
var playersLoggedIn = "";

var gameObj = {
   numPlayers:"",
   player1choice:"",
   player2choice:""
}


// // Calling the sign in anonymously method.
// firebase.auth().signInAnonymously().catch(function(error) {
//    // Handle Errors here.
//    var errorCode = error.code;
//    var errorMessage = error.message;
//    // ...
//  });

//  firebase.auth().onAuthStateChanged(function(user) {
//    if (user) {
//      // User is signed in.
//      var isAnonymous = user.isAnonymous;
//      var uid = user.uid;
//      // ...
//    } else {
//      // User is signed out.
//      // ...
//    }
//    // ...
//  });




// This will check how many players are connected.

connectedRef.on("value", function(snap){
    if (snap.val()){
        var con = connectionRef.push(true);

      
        con.onDisconnect().remove();
      //   console.log(con);
    }
});








// Listening for player connections and sorting user input in various database location and allowing certain user permissions based on where they are in the database.

connectionRef.on("value", function (snapshot){
   playersLoggedIn = snapshot.numChildren();
   $("#logged-players").attr("value", playersLoggedIn);
   console.log( playersLoggedIn);
   
var player1ID = 
   database.ref("/connections").orderByKey().limitToFirst(1).once('value', function(snap) {
   var key = Object.keys(snap.val())[0] )};




   if (playersLoggedIn < 2){
     
      //   // Sets up player 1's user id based on their log in.

      //   database.ref("/connections").orderByKey().limitToFirst(1).once('value', function(snap) {
      //    var key = Object.keys(snap.val())[0];
      //    console.log(key);   )};
        

         $(".users-choice").on("click", function() {
      
            var userres = $(this).attr("id");
            var playerDir = database.ref("/connections/"+ key);
           
            console.log(userres);
            playerDir.set(userres);
      
         });
   

   }

   else if (playersLoggedIn < 3 && playersLoggedIn > 1){

      // // Sets up player 2's user id based on their log in time.
      // database.ref("/connections").orderByKey().limitToFirst(2).once('value', function(snap) {
      //    var key = Object.keys(snap.val())[0];
      //    console.log(key);   )};
         

      $(".users-choice").on("click", function() {
      
      var userres = $(this).attr("id");
      var playerDir = database.ref("/connections/" + key);
     
      console.log(userres);
      playerDir.set(userres);

   });

      
}

   else if (playersLoggedIn > 2){
      // These players will go into reserve/watchers file.
      console.log("The reserve/watchers");

   }

});


// console.log(gameObj);



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


// These listeners are checking to see what choices player1 and player2 log into the server.

database.ref("/user1-choice").on("child_added", function(snapshot) {

   var userTimeLogged = snapshot.val().dateAdded;
   // console.log("Login time: " ,userTimeLogged);
   // console.log("User: ", )
   //  console.log(snapshot.val().LqmtuLYliOrEq2i2dyF.dateAdded);
   //  console.log(snapshot.val().)
})

database.ref("/user2-choice").on("child_added", function(snapshot) {

   var userTimeLogged = snapshot.val().dateAdded;
   // console.log("Login time: " ,userTimeLogged);
   // console.log("User: ", )
   //  console.log(snapshot.val().LqmtuLYliOrEq2i2dyF.dateAdded);
   //  console.log(snapshot.val().)
})

