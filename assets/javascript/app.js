
  
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
var dbUserChoiceRef = database.ref("/user-choice");
var connecionRef = database.ref("/connections");
var connectedRef = database.ref(".info/connected");
var choiceMade = true;
var start = false;
var wins = 0;
var losses = 0;


// connectedRef.on("value", function(snap){
//     if (snap.val()){
//         var con = connectionRef.push(true);
//         console.log(con);
//         con.onDisconnect().remove();
//     }
// })






// dbUserChoiceRef.push({
//     "user-choice":usersChoice,
//     dateAdded: firebase.database.ServerValue.TIMESTAMP

// });

$("#start-game").on("click", function (){
   var still = $("#intro-gif").attr("still");
   var animated = $("#intro-gif").attr("src");

   if ($(this).val()){
    $("#intro-gif").attr("src",still);
    start = true;
   }

})






database.ref("/user-choice").on("value", function(snapshot) {
    console.log(snapshot.val());
})




