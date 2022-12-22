//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyD-mLZ3VMNU0P3hP2R_ZWTMjn11KpholfU",
     authDomain: "kwitter-37fa7.firebaseapp.com",
     databaseURL: "https://kwitter-37fa7-default-rtdb.firebaseio.com",
     projectId: "kwitter-37fa7",
     storageBucket: "kwitter-37fa7.appspot.com",
     messagingSenderId: "129732278429",
     appId: "1:129732278429:web:2f236982ee2e9c2cb17c74"
   };
   
   // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      user_name=localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

      function addRoom()
{
  room_name=document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
   purpose:"Adding Room Name"
 });
   localStorage.setItem("room_name" , room_name);

   window.location="kwitter_page.html";


  

}

function getData() 
{
     firebase.database().ref("/").on('value', function(snapshot) {
       document.getElementById("output").innerHTML = "";
     snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
    console.log("Room Name-"+ Room_names);

    row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";

    document.getElementById("output").innerHTML += row;
     //End code
     });
   });
 }
getData(); 


function redirectToRoomName(name) 
{

  console.log(name);
   localStorage.setItem("room_name",name);
    window.location = "kwitter_page.html";
}




function logOut()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
